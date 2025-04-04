<script>
  import { t } from 'svelte-i18n';

  import { mdiCog, mdiDatabaseImport, mdiHelpCircle } from '@mdi/js';
  import { getContext, onMount } from 'svelte';

  import Button from '../../components/Button.svelte';
  import Icon from '../../components/Icon.svelte';
  import ImportModal from '../../components/WishImportModal.svelte';
  import { fromRemote, readSave, updateSave } from '../../stores/saveManager';

  import Summary from './_summary.svelte';
  import Counter from './_counter.svelte';
  import FirstTimePopup from './_firstTime.svelte';
  import MonthlyGraph from './_monthlyGraph.svelte';
  import HowToModal from './_helpModal.svelte';
  import SettingModal from './_settingModal.svelte';

  const { open: openModal, close: closeModal } = getContext('simple-modal');

  let monthlyData = {};

  let counter1;
  let counter2;
  let counter3;
  let counter4;
  let summary;

  const path = 'wish-counter-setting';

  let settings = {
    firstTime: false,
    manualInput: false,
  };

  $: if ($fromRemote) {
    console.log('update from google drive');
    readLocalData();
  }

  onMount(async () => {
    await readLocalData();
  });

  async function readLocalData() {
    console.log('wish read setting');
    const data = await readSave(path);
    if (data !== null) {
      settings = data;
    } else {
      settings = {
        firstTime: true,
        manualInput: false,
      };
    }
  }

  async function setManualInput(val) {
    if (settings.manualInput === val) return;

    settings = {
      ...settings,
      manualInput: val,
    };

    await updateSave(path, settings);
  }

  async function processFirstTimePopup(val, manualVal) {
    settings = {
      ...settings,
      firstTime: val,
      manualInput: manualVal,
    };

    await updateSave(path, settings);
  }

  function openHowTo() {
    openModal(
      HowToModal,
      {},
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '800px' },
      },
    );
  }

  function openSetting() {
    openModal(
      SettingModal,
      {
        setManualInput,
        settings,
        closeImportModal,
      },
      {
        closeButton: false,
        styleWindow: { background: '#25294A', width: '800px' },
      },
    );
  }

  function openImport() {
    openModal(
      ImportModal,
      {
        closeModal: closeImportModal,
        processFirstTimePopup,
      },
      {
        closeButton: false,
        closeOnOuterClick: false,
        styleWindow: { background: '#25294A', width: '800px' },
      },
    );
  }

  function closeImportModal() {
    closeModal();
    counter1.readLocalData();
    counter2.readLocalData();
    counter3.readLocalData();
    counter4.readLocalData();
  }

</script>

<svelte:head>
  <title>Wish Counter - Paimon.moe</title>
  <meta
    name="description"
    content="Genshin Impact Wish Counter to track your pity counter and track when you get the character or weapon. You can also automatically import the logs and backup it from PC, Android, iOS, PlayStation then save it more than 6 months."
  />
  <meta
    property="og:description"
    content="Genshin Impact Wish Counter to track your pity counter and track when you get the character or weapon. You can also automatically import the logs and backup it from PC, Android, iOS, PlayStation then save it more than 6 months."
  />
</svelte:head>
<div class="pt-20 lg:ml-64 lg:pt-8 px-4 md:px-8">
  <div class="flex flex-col md:flex-row mb-4 items-center">
    <h1 class="font-display font-black text-5xl text-white text-center md:text-left md:mr-4">{$t('wish.title')}</h1>
    <Button className="mr-2 hidden md:block" on:click={openImport}>
      <Icon size={0.8} path={mdiDatabaseImport} />
      {$t('wish.autoImport')}
    </Button>
    {#if settings.manualInput}
      <Button on:click={openHowTo} className="mr-2 hidden md:block">
        <Icon size={0.8} path={mdiHelpCircle} />
        {$t('wish.helps')}
      </Button>
    {/if}
    <Button on:click={openSetting} className="hidden md:block">
      <Icon size={0.8} path={mdiCog} />
      {$t('wish.settings')}
    </Button>
    <div class="md:hidden flex flex-wrap justify-center">
      <Button className="m-1" on:click={openImport}>
        <Icon size={0.8} path={mdiDatabaseImport} />
        {$t('wish.autoImport')}
      </Button>
      {#if settings.manualInput}
        <Button className="m-1" on:click={openHowTo}>
          <Icon size={0.8} path={mdiHelpCircle} />
          {$t('wish.helps')}
        </Button>
      {/if}
      <Button className="m-1" on:click={openSetting}>
        <Icon size={0.8} path={mdiCog} />
        {$t('wish.settings')}
      </Button>
    </div>
  </div>
  {#if settings.firstTime}
    <FirstTimePopup {processFirstTimePopup} />
  {/if}
  <div class="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-screen-xl">
    <Counter bind:this={counter1} manualInput={settings.manualInput} id="character-event" name="Character Event" />
    <Counter
      bind:this={counter2}
      manualInput={settings.manualInput}
      id="weapon-event"
      name="Weapon Event"
      legendaryPity={80}
    />
    <Counter bind:this={counter3} manualInput={settings.manualInput} id="standard" name="Standard" />
    <div class="flex flex-col w-full">
      <Counter bind:this={counter4} manualInput={settings.manualInput} id="beginners" name="Beginners' Wish" />
      <MonthlyGraph bind:data={monthlyData} />
    </div>
    <Summary bind:this={summary} bind:monthlyData />
  </div>
</div>
