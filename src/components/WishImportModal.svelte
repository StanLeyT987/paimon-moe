<script>
  import { t } from 'svelte-i18n';

  import { mdiChevronDown, mdiClose, mdiDownload, mdiHelpCircle, mdiInformation, mdiLoading, mdiStar } from '@mdi/js';
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import dayjs from 'dayjs';
  import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
  dayjs.extend(isSameOrBefore);

  import { pushToast } from '../stores/toast';
  import Button from './Button.svelte';
  import Icon from './Icon.svelte';
  import Input from './Input.svelte';
  import Textarea from './Textarea.svelte';
  import Checkbox from './Checkbox.svelte';
  import { weaponList } from '../data/weaponList';
  import { characters } from '../data/characters';
  import { readSave, updateSave } from '../stores/saveManager';
  import { getAccountPrefix } from '../stores/account';
  import { submitWishTally } from '../functions/wishTally';
  import Select from './Select.svelte';
  import { server } from '../stores/server';

  export let processFirstTimePopup;
  export let closeModal;

  const fetchController = new AbortController();
  const fetchSignal = fetchController.signal;

  let numberFormat = Intl.NumberFormat();

  let showFaq = false;
  let selectedType = 'pc';

  let generatedTextInput = '';
  let genshinLink = '';

  let wishTallyInfoExpanded = false;
  let wishTallyChecked = true;

  let types = {
    100: {
      name: "Beginners' Wish",
      id: 'beginners',
    },
    200: {
      name: 'Standard',
      id: 'standard',
    },
    301: {
      name: 'Character Event',
      id: 'character-event',
    },
    302: {
      name: 'Weapon Event',
      id: 'weapon-event',
    },
  };

  let newOnly = true;

  let wishes = {};

  let url;

  let processingLog = false;
  let fetchingWishes = false;
  let finishedProcessingLog = false;
  let calculatingPity = false;

  let cancelled = false;

  let region = '';
  let currentBanner = '';
  let currentPage = 1;

  function cancel() {
    fetchController.abort();
    cancelled = true;

    setTimeout(() => {
      closeModal();
    }, 2000);
  }

  function getDeviceType() {
    switch (selectedType) {
      case 'pc':
        return 'pc';
      case 'android':
      case 'ios':
        return 'mobile';
      case 'ps':
        return 'ps';
    }
  }

  async function startImport() {
    if (selectedType === 'pclocal') {
      await importFromGeneratedText();
    } else {
      await processLogs();
    }
  }

  async function processLogs() {
    processingLog = true;

    try {
      if (selectedType === 'android') {
        const urlString = genshinLink.match(/https:\/\/.*\//g);
        url = new URL(urlString);
      } else {
        url = new URL(genshinLink);
      }
    } catch (err) {
      pushToast($t('wish.import.invalidLink'), 'error');
    }

    try {
      for (const [wishNumber, type] of Object.entries(types)) {
        await getLog(wishNumber, type);
        if (cancelled) return;
        await sleep(2000);
      }
      finishedProcessingLog = true;
    } catch (err) {
      console.log(err);

      wishes = {};
      processingLog = false;
      fetchingWishes = false;
      finishedProcessingLog = false;
      calculatingPity = false;

      region = '';
      currentBanner = '';
      currentPage = 1;
    }
  }

  async function getLog(wishNumber, type) {
    fetchingWishes = true;

    console.log(wishNumber, type);
    url.searchParams.set('auth_appid', 'webview_gacha');
    url.searchParams.set('init_type', '301');
    url.searchParams.set('gacha_id', 'b8fd0d8a6c940c7a16a486367de5f6d2232f53');
    url.searchParams.set('lang', 'en');
    url.searchParams.set('device_type', getDeviceType());
    if (region !== '') url.searchParams.set('region', region);
    url.searchParams.set('gacha_type', wishNumber);
    url.searchParams.set('size', 20);
    url.searchParams.append('lang', 'en-us');
    url.hash = '';
    url.host = 'hk4e-api-os.mihoyo.com';
    url.pathname = 'event/gacha_info/api/getGachaLog';

    currentBanner = type.name;

    const weapons = Object.values(weaponList);
    const chars = Object.values(characters);

    const newestPullTime = await getNewestPullTime(type);
    // console.log(newestPullTime);
    let page = 1;
    let result = [];
    let lastTime = 0;
    let lastId = 0;
    do {
      if (cancelled) return;

      url.searchParams.set('page', page);
      url.searchParams.set('end_id', lastId);

      currentPage = page;

      try {
        const res = await fetchRetry(
          `${__paimon.env.API_HOST}/corsproxy`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              url: url.toString(),
            }),
            signal: fetchSignal,
          },
          2,
        );

        if (cancelled) return;

        if (!res.ok) {
          processingLog = false;
          pushToast($t('wish.import.errorApi'), 'error');
          throw 'error code';
        }

        const dat = await res.json();

        if (dat.retcode !== 0) {
          processingLog = false;

          if (dat.message === 'authkey timeout') {
            pushToast('Link expired, please try again!', 'error');
            throw 'error code';
          }

          pushToast($t('wish.import.errorApi'), 'error');
          throw 'error code';
        }

        region = dat.data.region;
        result = dat.data.list;
      } catch (err) {
        processingLog = false;
        pushToast($t('wish.import.timeout'), 'error');
        throw 'network error';
      }

      try {
        for (let row of result) {
          const code = row.gacha_type;
          const time = row.time;
          const name = row.name;
          const type = row.item_type.replace(/ /g, '');

          if (dayjs(time).isSameOrBefore(newestPullTime)) {
            return;
          }

          lastTime = dayjs(time);

          let id;
          if (type === 'Weapon') {
            id = weapons.find((e) => e.name === name).id;
          } else if (type === 'Character') {
            id = chars.find((e) => e.name === name).id;
          }

          if (wishes[code] === undefined) {
            wishes[code] = [];
          }

          wishes[code] = [
            ...wishes[code],
            {
              type: type.toLowerCase(),
              id,
              time,
              pity: 0,
            },
          ];
        }

        page = page + 1;
        lastId = result.length > 0 ? result[result.length - 1].id : 0;
        await sleep(1000);
        // console.log(wishes);
      } catch (err) {
        processingLog = false;
        pushToast($t('wish.import.invalidData'), 'error');
        console.error(err);
        throw 'invalid data';
      }
    } while (result.length > 0 && lastTime.isAfter(newestPullTime));
  }

  async function getNewestPullTime(type) {
    if (!newOnly) {
      // return very long time so it equally all wishes
      return dayjs().year(2000);
    }

    const prefix = getAccountPrefix();
    const path = `wish-counter-${type.id}`;
    const localData = await readSave(`${prefix}${path}`);

    let localWishes = [];
    if (localData !== null) {
      const counterData = localData;
      localWishes = counterData.pulls || [];

      if (localWishes.length > 0) {
        const lastPull = localWishes[localWishes.length - 1];
        return dayjs(lastPull.time);
      }
    }

    return dayjs().year(2000);
  }

  async function fetchRetry(url, options, n) {
    let error;
    for (let i = 0; i < n; i++) {
      if (cancelled) return;

      try {
        return await fetch(url, options);
      } catch (err) {
        error = err;
      }
    }
    throw error;
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function toggleWishTallyInfo() {
    wishTallyInfoExpanded = !wishTallyInfoExpanded;
  }

  function toggleFaqs(show) {
    showFaq = show;
  }

  function changeSelectedType(type) {
    selectedType = type;
  }

  function detectPlatform() {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/android/i.test(userAgent)) {
      selectedType = 'android';
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      selectedType = 'ios';
    }
  }

  async function importFromGeneratedText() {
    if (!generatedTextInput.startsWith('paimonmoe,importer,version,1,0')) {
      pushToast('Invalid data, please use the latest importer app', 'error');
      return;
    }

    processingLog = true;

    const rows = generatedTextInput.substring(30).split('\n');

    const weapons = Object.values(weaponList);
    const chars = Object.values(characters);

    try {
      for (let row of rows) {
        if (row === '') continue;

        const cell = row.split(',');
        const code = Number(cell[0]);
        const time = cell[1];
        const name = cell[2];
        const type = cell[3].replace(/ /g, '');

        const newestPullTime = await getNewestPullTime(types[code]);
        if (dayjs(time).isSameOrBefore(newestPullTime)) {
          continue;
        }

        let id;
        if (type === 'Weapon') {
          id = weapons.find((e) => e.name === name).id;
        } else if (type === 'Character') {
          id = chars.find((e) => e.name === name).id;
        }

        if (wishes[code] === undefined) {
          wishes[code] = [];
        }

        wishes[code] = [
          ...wishes[code],
          {
            type: type.toLowerCase(),
            id,
            time,
            pity: 0,
          },
        ];
      }
    } catch (err) {
      processingLog = false;
      pushToast('Invalid data, please use the latest importer app', 'error');
      return;
    }

    finishedProcessingLog = true;
    console.log(wishes);
  }

  async function saveData() {
    calculatingPity = true;
    for (let [code, type] of Object.entries(types)) {
      await processWishes(code, type);
    }
    calculatingPity = false;

    pushToast($t('wish.import.success'));

    if (wishTallyChecked) {
      submitWishTally();
    }

    const prefix = getAccountPrefix();
    await updateSave(`${prefix}collectables-updated`, true);
    closeModal();
  }

  async function processWishes(code, type) {
    processFirstTimePopup(false, false);

    if (wishes[code] === undefined) return;
    console.log('processing', type.name);

    const prefix = getAccountPrefix();
    const path = `wish-counter-${type.id}`;
    const localData = await readSave(`${prefix}${path}`);

    let localWishes = [];
    if (localData !== null) {
      const counterData = localData;
      localWishes = counterData.pulls || [];
    }

    const importedWishes = wishes[code].slice().reverse();
    const oldestWish = importedWishes[0];

    localWishes = localWishes.slice().filter((e) => dayjs(e.time).isBefore(dayjs(oldestWish.time)));

    const combined = [...localWishes, ...importedWishes];

    let rare = 0;
    let legendary = 0;
    for (let i = 0; i < combined.length; i++) {
      rare++;
      legendary++;

      let rarity;
      if (combined[i].type === 'character') {
        rarity = characters[combined[i].id].rarity;
      } else if (combined[i].type === 'weapon') {
        rarity = weaponList[combined[i].id].rarity;
      }

      if (rarity === 5) {
        combined[i].pity = legendary;
        legendary = 0;
        // rare = 0;
      } else if (rarity === 4) {
        combined[i].pity = rare;
        rare = 0;
      } else {
        combined[i].pity = 1;
      }
    }

    const data = {
      total: combined.length,
      legendary,
      rare,
      pulls: combined,
    };

    await updateSave(`${prefix}${path}`, data);
  }

  const servers = [
    { label: 'Asia/TW/HK/MO', value: 'Asia' },
    { label: 'America', value: 'America' },
    { label: 'Europe', value: 'Europe' },
  ];

  function updateServer() {
    if (selectedServer === null) return;
    server.set(selectedServer.value);
  }

  let selectedServer = null;
  $: selectedServer, updateServer();

  onMount(() => {
    detectPlatform();
    selectedServer = servers.find((e) => e.value === $server);
  });
</script>

{#if processingLog}
  <h1 class="font-display text-white text-xl mb-2">{$t('wish.import.title')}</h1>
  <div class="bg-background rounded-xl px-4 py-2 text-white mt-2">
    {#if finishedProcessingLog}
      <table class="min-w-full md:min-w-0">
        {#each Object.entries(types) as [code, type]}
          <tr>
            <td class="border-b border-gray-700 py-1">
              <span class="text-white mr-2">{type.name} Banner</span>
            </td>
            <td class="border-b border-gray-700 py-1">
              {#if wishes[code] !== undefined}
                <span class="text-white mr-2 whitespace-no-wrap">
                  <Icon size={0.5} path={mdiClose} />
                  {numberFormat.format(wishes[code].length)}
                </span>
              {:else}
                <span class="text-white">{$t('wish.import.nonew')}</span>
              {/if}
            </td>
          </tr>
        {/each}
      </table>
      <div class="mt-4 mb-2 rounded-xl px-2 py-2 md:px-4 md:py-2 bg-black bg-opacity-25 text-gray-400">
        <div class="pl-1 flex flex-col md:flex-row items-center">
          <Checkbox bind:checked={wishTallyChecked}>
            <p class="ml-1">{$t('wish.import.wishTallyCheck')}</p>
          </Checkbox>
          <div
            class="w-full py-1 md:py-0 md:w-12 md:px-3 flex items-center justify-center cursor-pointer"
            on:click={toggleWishTallyInfo}
          >
            <Icon path={mdiChevronDown} />
          </div>
        </div>
        {#if wishTallyInfoExpanded}
          <div class="pt-1" transition:slide>
            <p class="mb-1">{$t('wish.import.wishTally')}</p>
            <p>
              {$t('wish.import.wishTallyCollected.0')} 5<Icon size={0.8} path={mdiStar} className="mb-1" />
              {$t('wish.import.wishTallyCollected.1')} 4<Icon size={0.8} path={mdiStar} className="mb-1" />
              {$t('wish.import.wishTallyCollected.2')}
            </p>
          </div>
        {/if}
      </div>
      <div class="mt-4 md:mt-2 text-gray-400 flex flex-col md:flex-row md:items-center">
        <p class="ml-4 md:ml-0">{$t('wish.import.server')}</p>
        <Select className="w-48" bind:selected={selectedServer} options={servers} placeholder={$t('settings.server')} />
      </div>
      <p class="mt-1">{$t('wish.import.importNotice1')}</p>
      <p class="mb-1">{$t('wish.import.importNotice2')}</p>
      <p class="text-red-300 mb-1">{$t('wish.import.importNotice3')}</p>
      <p class="font-semibold">{$t('wish.import.saveData')}</p>
    {:else if calculatingPity}
      <Icon path={mdiLoading} spin color="white" />
      {$t('wish.import.reCalculating')}
    {:else if fetchingWishes}
      <div class="flex">
        <Icon path={mdiLoading} spin color="white" />
        <div class="ml-2">
          <p>{$t('wish.import.processing')} {currentBanner} {$t('wish.import.banner')}</p>
          <p>{$t('wish.import.page')} {currentPage}</p>
        </div>
      </div>
      <table class="min-w-full md:min-w-0 mt-2">
        {#each Object.entries(types) as [code, type]}
          {#if wishes[code] !== undefined}
            <tr>
              <td class="border-b border-gray-700 py-1">
                <span class="text-white mr-2 whitespace-no-wrap">{type.name} Banner</span>
              </td>
              <td class="border-b border-gray-700 py-1">
                <span class="text-white mr-2 whitespace-no-wrap">
                  <Icon size={0.5} path={mdiClose} />
                  {numberFormat.format(wishes[code].length)}
                </span>
              </td>
            </tr>
          {/if}
        {/each}
      </table>
    {:else}
      <Icon path={mdiLoading} spin color="white" />
      {$t('wish.import.parsing')}
    {/if}
  </div>
  <div class="flex justify-end mt-4">
    {#if finishedProcessingLog && !calculatingPity}
      <Button on:click={saveData} color="green" className="mr-4">{$t('wish.import.save')}</Button>
    {/if}
    <Button on:click={cancel} disabled={calculatingPity || cancelled}
      >{cancelled ? $t('wish.import.cancelling') : $t('wish.import.cancel')}</Button
    >
  </div>
  <div class="pb-16 md:pb-0" />
{:else}
  <div>
    {#if showFaq}
      <h1 class="font-display text-white text-xl mb-2">{$t('wish.import.faqs.title')}</h1>

      <div class="font-body">
        <p class="text-white font-semibold">{$t('wish.import.faqs.q1')}</p>
        <p class="text-gray-400">{$t('wish.import.faqs.a1')}</p>
        <p class="text-white font-semibold mt-4">{$t('wish.import.faqs.q2')}</p>
        <p class="text-gray-400">{$t('wish.import.faqs.a2')}</p>
        <p class="text-white font-semibold mt-4">{$t('wish.import.faqs.q3')}</p>
        <p class="text-gray-400">
          {$t('wish.import.faqs.a3.0')}
          <a class="text-primary hover:underline" target="_blank" href="https://github.com/MadeBaruna/paimon-moe"
            >Github</a
          >{$t('wish.import.faqs.a3.1')}
        </p>
        <p class="text-white font-semibold mt-4">{$t('wish.import.faqs.q4')}</p>
        <p class="text-gray-400">
          {$t('wish.import.faqs.a4.0')}
          <a
            class="text-primary hover:underline"
            href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
            target="_blank"
          >
            CORS</a
          >{$t('wish.import.faqs.a4.1')}
          <a class="text-primary hover:underline" href="https://github.com/MadeBaruna/paimon-moe-api" target="_blank"
            >{$t('wish.import.faqs.a4.2')}</a
          >
        </p>
        <p class="text-white font-semibold mt-4">{$t('wish.import.faqs.q5')}</p>
        <p class="text-gray-400">
          {$t('wish.import.faqs.a5.0')}
          <a class="text-primary hover:underline" href="/privacy-policy" target="_blank"
            >{$t('wish.import.faqs.a5.1')}</a
          >
          {$t('wish.import.faqs.a5.2')}
          {$t('wish.import.faqs.a5.3')}
        </p>
        <p class="text-white font-semibold mt-4">{$t('wish.import.faqs.q6')}</p>
        <p class="text-gray-400">{$t('wish.import.faqs.a6')}</p>
        <p class="text-white font-semibold mt-4">{$t('wish.import.faqs.q7')}</p>
        <p class="text-gray-400">{$t('wish.import.faqs.a7')}</p>
      </div>
    {:else}
      <div class="flex flex-col md:flex-row items-start md:items-center">
        <h1 class="font-display text-white text-xl mb-2 mr-2">{$t('wish.import.title')}</h1>
        <Button size="sm" on:click={() => toggleFaqs(true)}>
          <Icon path={mdiHelpCircle} color="white" />
          {$t('wish.import.faqsButton')}
        </Button>
      </div>
      <div class="flex mt-4 flex-wrap">
        <button on:click={() => changeSelectedType('pc')} class={`pill ${selectedType === 'pc' ? 'active' : ''}`}>
          PC
        </button>
        <button
          on:click={() => changeSelectedType('android')}
          class={`pill ${selectedType === 'android' ? 'active' : ''}`}
        >
          Android
        </button>
        <button on:click={() => changeSelectedType('ios')} class={`pill ${selectedType === 'ios' ? 'active' : ''}`}>
          iOS
        </button>
        <button on:click={() => changeSelectedType('ps')} class={`pill ${selectedType === 'ps' ? 'active' : ''}`}>
          PS
        </button>
        <button
          on:click={() => changeSelectedType('pclocal')}
          class={`pill ${selectedType === 'pclocal' ? 'active' : ''}`}
        >
          PC Local
        </button>
      </div>
      {#if selectedType === 'pc'}
        <div class="bg-background rounded-xl px-4 py-2 text-white mb-4 mt-2">
          <a href="https://www.youtube.com/watch?v=gsyp6SENJb4" target="_blank" class="text-primary hover:underline">
            {$t('wish.import.guide.video')}
          </a>
          <ol class="list-decimal ml-4">
            <li class="my-2">{$t('wish.import.guide.pc.0')}</li>
            <li class="my-2">{$t('wish.import.guide.pc.1')}</li>
            <li class="my-2">{$t('wish.import.guide.pc.2')}</li>
            <li class="my-2">{$t('wish.import.guide.pc.3')}</li>
          </ol>
        </div>
        <Input bind:value={genshinLink} placeholder={$t('wish.import.guide.pc.4')} />
      {:else if selectedType === 'pclocal'}
        <div class="bg-background rounded-xl px-4 py-2 text-white mb-4 mt-2">
          {$t('wish.import.guide.pclocal.0')}
          <span class="text-red-300">{$t('wish.import.guide.pclocal.10')}</span>
          <ol class="list-decimal ml-4">
            <li class="my-2">{$t('wish.import.guide.pclocal.1')}</li>
            <li class="my-2">{$t('wish.import.guide.pclocal.2')}</li>
            <pre
              class="bg-black bg-opacity-50 whitespace-pre-wrap break-all p-2 rounded-xl text-xs">{$t('wish.import.guide.pclocal.3')}</pre>
            <p>
              {$t('wish.import.guide.pclocal.4')}
              <a class="text-blue-400 hover:underline" href={$t('wish.import.guide.pclocal.6')} target="_blank">
                {$t('wish.import.guide.pclocal.5')}
              </a>
            </p>
            <li class="my-2">{$t('wish.import.guide.pclocal.7')}</li>
            <li class="my-2">{$t('wish.import.guide.pclocal.8')}</li>
          </ol>
        </div>
        <Textarea bind:value={generatedTextInput} placeholder={$t('wish.import.guide.pclocal.9')} />
      {:else if selectedType === 'android'}
        <div class="bg-background rounded-xl px-4 py-2 text-white mb-4 mt-2">
          <a href="https://youtu.be/pe_aROJ8Av8" target="_blank" class="text-primary hover:underline">
            {$t('wish.import.guide.video')}
          </a>
          <ol class="list-decimal ml-4">
            <li class="my-2">{$t('wish.import.guide.android.0')}</li>
            <li class="my-2">{$t('wish.import.guide.android.1')}</li>
            <li class="my-2">{$t('wish.import.guide.android.2')}</li>
            <li class="my-2">{$t('wish.import.guide.android.3')}</li>
            <li class="my-2">{$t('wish.import.guide.android.4')}</li>
            <li class="my-2">{$t('wish.import.guide.android.5')}</li>
            <li class="my-2">{$t('wish.import.guide.android.6')}</li>
            <li class="my-2">{$t('wish.import.guide.android.7')}</li>
            <li class="my-2">{$t('wish.import.guide.android.8')}</li>
          </ol>
        </div>
        <Input bind:value={genshinLink} placeholder={$t('wish.import.guide.android.9')} />
      {:else if selectedType === 'ios'}
        <div class="bg-background rounded-xl px-4 py-2 text-white mb-4 mt-2">
          <ol class="list-decimal ml-4">
            <li class="my-2">{$t('wish.import.guide.ios.0')}</li>
            <li class="my-2">{$t('wish.import.guide.ios.1')}</li>
            <li class="my-2">{$t('wish.import.guide.ios.2')}</li>
            <li class="my-2">{$t('wish.import.guide.ios.3')}</li>
            <li class="my-2">{$t('wish.import.guide.ios.4')}</li>
            <li class="my-2">{$t('wish.import.guide.ios.5')}</li>
            <li class="my-2">{$t('wish.import.guide.ios.6')}</li>
          </ol>
        </div>
        <Input bind:value={genshinLink} placeholder={$t('wish.import.guide.ios.7')} />
      {:else if selectedType === 'ps'}
        <div class="bg-background rounded-xl px-4 py-2 text-white mb-4 mt-2">
          {$t('wish.import.guide.ps.0')}
          <ol class="list-decimal ml-4">
            <li class="my-2">{$t('wish.import.guide.ps.1')}</li>
            <li class="my-2">{$t('wish.import.guide.ps.2')}</li>
            <li class="my-2">{$t('wish.import.guide.ps.3')}</li>
            <li class="my-2">{$t('wish.import.guide.ps.4')}</li>
          </ol>
        </div>
        <Input bind:value={genshinLink} placeholder={$t('wish.import.guide.ps.5')} />
      {/if}
    {/if}

    <div class="flex flex-col md:flex-row mt-4 md:justify-end items-center">
      <!-- {#if !showFaq}
        <div class="flex-1 flex mb-4 md:mb-0 md:ml-4">
          <Checkbox disabled={false} bind:checked={newOnly}>
            <span class="text-white select-none">{$t('wish.import.importNewWishOnly')}</span>
          </Checkbox>
          <span class="tooltip ml-2">
            <Icon path={mdiInformation} color="white" />
            <span class="tooltip-content">{$t('wish.import.importNewWishUncheck')}</span>
          </span>
        </div>
      {/if} -->
      <div>
        {#if !showFaq}
          <Button on:click={startImport} color="green" className="mr-4">{$t('wish.import.import')}</Button>
        {/if}
        <Button on:click={showFaq ? () => toggleFaqs(false) : () => closeModal()}>{$t('wish.import.close')}</Button>
      </div>
    </div>
  </div>
  <div class="pb-16 md:pb-0" />
{/if}

<style>
  .pill {
    @apply rounded-2xl;
    @apply border-2;
    @apply border-white;
    @apply border-opacity-25;
    @apply text-white;
    @apply px-4;
    @apply py-1;
    @apply mr-2;
    @apply mb-2;
    @apply outline-none;
    @apply transition;
    @apply duration-100;

    &:hover {
      @apply border-primary;
    }

    &.active {
      @apply bg-primary;
      @apply border-primary;
      @apply text-background;
    }
  }

  /* .tooltip {
    @apply relative;

    .tooltip-content {
      top: -100px;
      right: -14px;
      width: 250px;
      @apply absolute;
      @apply hidden;
      @apply bg-gray-400;
      @apply text-background;
      @apply rounded-xl;
      @apply p-2;

      @screen md {
        top: -70px;
        right: -120px;
        width: 320px;
      }
    }

    &:hover .tooltip-content {
      @apply block;
    }
  } */
</style>
