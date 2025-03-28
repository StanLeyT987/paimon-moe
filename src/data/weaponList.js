import { itemList } from './itemList';
import { weapons } from './weapons';

export const weaponList = {
  wolfs_gravestone: {
    name: "Wolf's Gravestone",
    id: 'wolfs_gravestone',
    rarity: 5,
    atk: 46,
    secondary: 'ATK',
    type: weapons.claymore,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 5 },
          { item: itemList.chaos_device, amount: 5 },
          { item: itemList.divining_scroll, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 5 },
          { item: itemList.chaos_device, amount: 18 },
          { item: itemList.divining_scroll, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 9 },
          { item: itemList.chaos_circuit, amount: 9 },
          { item: itemList.sealed_scroll, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 5 },
          { item: itemList.chaos_circuit, amount: 18 },
          { item: itemList.sealed_scroll, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 9 },
          { item: itemList.chaos_core, amount: 14 },
          { item: itemList.forbidden_curse_scroll, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_core, amount: 27 },
          { item: itemList.forbidden_curse_scroll, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  aquila_favonia: {
    name: 'Aquila Favonia',
    id: 'aquila_favonia',
    rarity: 5,
    atk: 48,
    secondary: 'Physical DMG Bonus',
    type: weapons.sword,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 5 },
          { item: itemList.heavy_horn, amount: 5 },
          { item: itemList.firm_arrowhead, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 5 },
          { item: itemList.heavy_horn, amount: 18 },
          { item: itemList.firm_arrowhead, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 9 },
          { item: itemList.black_bronze_horn, amount: 9 },
          { item: itemList.sharp_arrowhead, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 5 },
          { item: itemList.black_bronze_horn, amount: 18 },
          { item: itemList.sharp_arrowhead, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 9 },
          { item: itemList.black_crystal_horn, amount: 14 },
          { item: itemList.weathered_arrowhead, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 6 },
          { item: itemList.black_crystal_horn, amount: 27 },
          { item: itemList.weathered_arrowhead, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  lost_prayer_to_the_sacred_winds: {
    name: 'Lost Prayer to the Sacred Winds',
    id: 'lost_prayer_to_the_sacred_winds',
    rarity: 5,
    atk: 46,
    secondary: 'CRIT Rate',
    type: weapons.catalyst,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 5 },
          { item: itemList.chaos_device, amount: 5 },
          { item: itemList.slime_condensate, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 5 },
          { item: itemList.chaos_device, amount: 18 },
          { item: itemList.slime_condensate, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 9 },
          { item: itemList.chaos_circuit, amount: 9 },
          { item: itemList.slime_secretions, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 5 },
          { item: itemList.chaos_circuit, amount: 18 },
          { item: itemList.slime_secretions, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 9 },
          { item: itemList.chaos_core, amount: 14 },
          { item: itemList.slime_concentrate, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_core, amount: 27 },
          { item: itemList.slime_concentrate, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  skyward_harp: {
    name: 'Skyward Harp',
    id: 'skyward_harp',
    rarity: 5,
    atk: 48,
    secondary: 'CRIT Rate',
    type: weapons.bow,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 5 },
          { item: itemList.dead_ley_line_branch, amount: 5 },
          { item: itemList.firm_arrowhead, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 5 },
          { item: itemList.dead_ley_line_branch, amount: 18 },
          { item: itemList.firm_arrowhead, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 9 },
          { item: itemList.dead_ley_line_leaves, amount: 9 },
          { item: itemList.sharp_arrowhead, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 5 },
          { item: itemList.dead_ley_line_leaves, amount: 18 },
          { item: itemList.sharp_arrowhead, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 9 },
          { item: itemList.ley_line_sprouts, amount: 14 },
          { item: itemList.weathered_arrowhead, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 6 },
          { item: itemList.ley_line_sprouts, amount: 27 },
          { item: itemList.weathered_arrowhead, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  skyward_pride: {
    name: 'Skyward Pride',
    id: 'skyward_pride',
    rarity: 5,
    atk: 48,
    secondary: 'Energy Recharge',
    type: weapons.claymore,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 5 },
          { item: itemList.dead_ley_line_branch, amount: 5 },
          { item: itemList.slime_condensate, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 5 },
          { item: itemList.dead_ley_line_branch, amount: 18 },
          { item: itemList.slime_condensate, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 9 },
          { item: itemList.dead_ley_line_leaves, amount: 9 },
          { item: itemList.slime_secretions, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 5 },
          { item: itemList.dead_ley_line_leaves, amount: 18 },
          { item: itemList.slime_secretions, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 9 },
          { item: itemList.ley_line_sprouts, amount: 14 },
          { item: itemList.slime_concentrate, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 6 },
          { item: itemList.ley_line_sprouts, amount: 27 },
          { item: itemList.slime_concentrate, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  skyward_spine: {
    name: 'Skyward Spine',
    id: 'skyward_spine',
    rarity: 5,
    atk: 48,
    secondary: 'Energy Recharge',
    type: weapons.polearm,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 5 },
          { item: itemList.chaos_device, amount: 5 },
          { item: itemList.divining_scroll, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 5 },
          { item: itemList.chaos_device, amount: 18 },
          { item: itemList.divining_scroll, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 9 },
          { item: itemList.chaos_circuit, amount: 9 },
          { item: itemList.sealed_scroll, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 5 },
          { item: itemList.chaos_circuit, amount: 18 },
          { item: itemList.sealed_scroll, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 9 },
          { item: itemList.chaos_core, amount: 14 },
          { item: itemList.forbidden_curse_scroll, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_core, amount: 27 },
          { item: itemList.forbidden_curse_scroll, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  memory_of_dust: {
    name: 'Memory of Dust',
    id: 'memory_of_dust',
    rarity: 5,
    atk: 46,
    secondary: 'ATK',
    type: weapons.catalyst,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.grain_of_aerosiderite, amount: 5 },
          { item: itemList.fragile_bone_shard, amount: 5 },
          { item: itemList.damaged_mask, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 5 },
          { item: itemList.fragile_bone_shard, amount: 18 },
          { item: itemList.damaged_mask, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 9 },
          { item: itemList.sturdy_bone_shard, amount: 9 },
          { item: itemList.stained_mask, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 5 },
          { item: itemList.sturdy_bone_shard, amount: 18 },
          { item: itemList.stained_mask, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 9 },
          { item: itemList.fossilized_bone_shard, amount: 14 },
          { item: itemList.ominous_mask, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.chunk_of_aerosiderite, amount: 6 },
          { item: itemList.fossilized_bone_shard, amount: 27 },
          { item: itemList.ominous_mask, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  the_unforged: {
    name: 'The Unforged',
    id: 'the_unforged',
    rarity: 5,
    atk: 46,
    secondary: 'ATK',
    type: weapons.claymore,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.mist_veiled_lead_elixir, amount: 5 },
          { item: itemList.mist_grass_pollen, amount: 5 },
          { item: itemList.treasure_hoarder_insignia, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 5 },
          { item: itemList.mist_grass_pollen, amount: 18 },
          { item: itemList.treasure_hoarder_insignia, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 9 },
          { item: itemList.mist_grass, amount: 9 },
          { item: itemList.silver_raven_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 5 },
          { item: itemList.mist_grass, amount: 18 },
          { item: itemList.silver_raven_insignia, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 9 },
          { item: itemList.mist_grass_wick, amount: 14 },
          { item: itemList.golden_raven_insignia, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.mist_veiled_primo_elixir, amount: 6 },
          { item: itemList.mist_grass_wick, amount: 27 },
          { item: itemList.golden_raven_insignia, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  vortex_vanquisher: {
    name: 'Vortex Vanquisher',
    id: 'vortex_vanquisher',
    rarity: 5,
    atk: 46,
    secondary: 'ATK',
    type: weapons.polearm,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.grain_of_aerosiderite, amount: 5 },
          { item: itemList.fragile_bone_shard, amount: 5 },
          { item: itemList.treasure_hoarder_insignia, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 5 },
          { item: itemList.fragile_bone_shard, amount: 18 },
          { item: itemList.treasure_hoarder_insignia, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 9 },
          { item: itemList.sturdy_bone_shard, amount: 9 },
          { item: itemList.silver_raven_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 5 },
          { item: itemList.sturdy_bone_shard, amount: 18 },
          { item: itemList.silver_raven_insignia, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 9 },
          { item: itemList.fossilized_bone_shard, amount: 14 },
          { item: itemList.golden_raven_insignia, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.chunk_of_aerosiderite, amount: 6 },
          { item: itemList.fossilized_bone_shard, amount: 27 },
          { item: itemList.golden_raven_insignia, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  'primordial_jade_winged-spear': {
    name: 'Primordial Jade Winged-Spear',
    id: 'primordial_jade_winged-spear',
    rarity: 5,
    atk: 48,
    secondary: 'CRIT Rate',
    type: weapons.polearm,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.luminous_sands_from_guyun, amount: 5 },
          { item: itemList.hunters_sacrificial_knife, amount: 5 },
          { item: itemList.recruits_insignia, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 5 },
          { item: itemList.hunters_sacrificial_knife, amount: 18 },
          { item: itemList.recruits_insignia, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 9 },
          { item: itemList.agents_sacrificial_knife, amount: 9 },
          { item: itemList.sergeants_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 5 },
          { item: itemList.agents_sacrificial_knife, amount: 18 },
          { item: itemList.sergeants_insignia, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 9 },
          { item: itemList.inspectors_sacrificial_knife, amount: 14 },
          { item: itemList.lieutenants_insignia, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.divine_body_from_guyun, amount: 6 },
          { item: itemList.inspectors_sacrificial_knife, amount: 27 },
          { item: itemList.lieutenants_insignia, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  summit_shaper: {
    name: 'Summit Shaper',
    id: 'summit_shaper',
    rarity: 5,
    atk: 46,
    secondary: 'ATK',
    type: weapons.sword,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.luminous_sands_from_guyun, amount: 5 },
          { item: itemList.hunters_sacrificial_knife, amount: 5 },
          { item: itemList.treasure_hoarder_insignia, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 5 },
          { item: itemList.hunters_sacrificial_knife, amount: 18 },
          { item: itemList.treasure_hoarder_insignia, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 9 },
          { item: itemList.agents_sacrificial_knife, amount: 9 },
          { item: itemList.silver_raven_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 5 },
          { item: itemList.agents_sacrificial_knife, amount: 18 },
          { item: itemList.silver_raven_insignia, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 9 },
          { item: itemList.inspectors_sacrificial_knife, amount: 14 },
          { item: itemList.golden_raven_insignia, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.divine_body_from_guyun, amount: 6 },
          { item: itemList.inspectors_sacrificial_knife, amount: 27 },
          { item: itemList.golden_raven_insignia, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  skyward_blade: {
    name: 'Skyward Blade',
    id: 'skyward_blade',
    rarity: 5,
    atk: 46,
    secondary: 'Energy Recharge',
    type: weapons.sword,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 5 },
          { item: itemList.dead_ley_line_branch, amount: 5 },
          { item: itemList.slime_condensate, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 5 },
          { item: itemList.dead_ley_line_branch, amount: 18 },
          { item: itemList.slime_condensate, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 9 },
          { item: itemList.dead_ley_line_leaves, amount: 9 },
          { item: itemList.slime_secretions, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 5 },
          { item: itemList.dead_ley_line_leaves, amount: 18 },
          { item: itemList.slime_secretions, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 9 },
          { item: itemList.ley_line_sprouts, amount: 14 },
          { item: itemList.slime_concentrate, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 6 },
          { item: itemList.ley_line_sprouts, amount: 27 },
          { item: itemList.slime_concentrate, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  amos_bow: {
    name: "Amos' Bow",
    id: 'amos_bow',
    rarity: 5,
    atk: 46,
    secondary: 'ATK',
    type: weapons.bow,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 5 },
          { item: itemList.chaos_device, amount: 5 },
          { item: itemList.slime_condensate, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 5 },
          { item: itemList.chaos_device, amount: 18 },
          { item: itemList.slime_condensate, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 9 },
          { item: itemList.chaos_circuit, amount: 9 },
          { item: itemList.slime_secretions, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 5 },
          { item: itemList.chaos_circuit, amount: 18 },
          { item: itemList.slime_secretions, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 9 },
          { item: itemList.chaos_core, amount: 14 },
          { item: itemList.slime_concentrate, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_core, amount: 27 },
          { item: itemList.slime_concentrate, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  skyward_atlas: {
    name: 'Skyward Atlas',
    id: 'skyward_atlas',
    rarity: 5,
    atk: 48,
    secondary: 'ATK',
    type: weapons.catalyst,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 5 },
          { item: itemList.dead_ley_line_branch, amount: 5 },
          { item: itemList.firm_arrowhead, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 5 },
          { item: itemList.dead_ley_line_branch, amount: 18 },
          { item: itemList.firm_arrowhead, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 9 },
          { item: itemList.dead_ley_line_leaves, amount: 9 },
          { item: itemList.sharp_arrowhead, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 5 },
          { item: itemList.dead_ley_line_leaves, amount: 18 },
          { item: itemList.sharp_arrowhead, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 9 },
          { item: itemList.ley_line_sprouts, amount: 14 },
          { item: itemList.weathered_arrowhead, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 6 },
          { item: itemList.ley_line_sprouts, amount: 27 },
          { item: itemList.weathered_arrowhead, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  the_flute: {
    name: 'The Flute',
    id: 'the_flute',
    rarity: 4,
    atk: 42,
    secondary: 'ATK',
    type: weapons.sword,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 3 },
          { item: itemList.slime_condensate, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 12 },
          { item: itemList.slime_condensate, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 6 },
          { item: itemList.dead_ley_line_leaves, amount: 6 },
          { item: itemList.slime_secretions, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 3 },
          { item: itemList.dead_ley_line_leaves, amount: 12 },
          { item: itemList.slime_secretions, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 6 },
          { item: itemList.ley_line_sprouts, amount: 9 },
          { item: itemList.slime_concentrate, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 4 },
          { item: itemList.ley_line_sprouts, amount: 18 },
          { item: itemList.slime_concentrate, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  sacrificial_sword: {
    name: 'Sacrificial Sword',
    id: 'sacrificial_sword',
    rarity: 4,
    atk: 41,
    secondary: 'Energy Recharge',
    type: weapons.sword,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 3 },
          { item: itemList.divining_scroll, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 12 },
          { item: itemList.divining_scroll, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_circuit, amount: 6 },
          { item: itemList.sealed_scroll, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_circuit, amount: 12 },
          { item: itemList.sealed_scroll, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_core, amount: 9 },
          { item: itemList.forbidden_curse_scroll, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.chaos_core, amount: 18 },
          { item: itemList.forbidden_curse_scroll, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  royal_longsword: {
    name: 'Royal Longsword',
    id: 'royal_longsword',
    rarity: 4,
    atk: 42,
    secondary: 'ATK',
    type: weapons.sword,
    source: "paimon's bargains",
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 3 },
          { item: itemList.heavy_horn, amount: 3 },
          { item: itemList.firm_arrowhead, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 3 },
          { item: itemList.heavy_horn, amount: 12 },
          { item: itemList.firm_arrowhead, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 6 },
          { item: itemList.black_bronze_horn, amount: 6 },
          { item: itemList.sharp_arrowhead, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 3 },
          { item: itemList.black_bronze_horn, amount: 12 },
          { item: itemList.sharp_arrowhead, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 6 },
          { item: itemList.black_crystal_horn, amount: 9 },
          { item: itemList.weathered_arrowhead, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 4 },
          { item: itemList.black_crystal_horn, amount: 18 },
          { item: itemList.weathered_arrowhead, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  eye_of_perception: {
    name: 'Eye of Perception',
    id: 'eye_of_perception',
    rarity: 4,
    atk: 41,
    secondary: 'ATK',
    type: weapons.catalyst,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.mist_veiled_lead_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 3 },
          { item: itemList.damaged_mask, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 12 },
          { item: itemList.damaged_mask, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 6 },
          { item: itemList.mist_grass, amount: 6 },
          { item: itemList.stained_mask, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 3 },
          { item: itemList.mist_grass, amount: 12 },
          { item: itemList.stained_mask, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 6 },
          { item: itemList.mist_grass_wick, amount: 9 },
          { item: itemList.ominous_mask, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.mist_veiled_primo_elixir, amount: 4 },
          { item: itemList.mist_grass_wick, amount: 18 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  iron_sting: {
    name: 'Iron Sting',
    id: 'iron_sting',
    rarity: 4,
    atk: 42,
    secondary: 'Elemental Mastery',
    type: weapons.sword,
    source: 'forging',
    ascension: [
      {
        items: [
          { item: itemList.grain_of_aerosiderite, amount: 3 },
          { item: itemList.fragile_bone_shard, amount: 3 },
          { item: itemList.whopperflower_nectar, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 3 },
          { item: itemList.fragile_bone_shard, amount: 12 },
          { item: itemList.whopperflower_nectar, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 6 },
          { item: itemList.sturdy_bone_shard, amount: 6 },
          { item: itemList.shimmering_nectar, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 3 },
          { item: itemList.sturdy_bone_shard, amount: 12 },
          { item: itemList.shimmering_nectar, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 6 },
          { item: itemList.fossilized_bone_shard, amount: 9 },
          { item: itemList.energy_nectar, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.chunk_of_aerosiderite, amount: 4 },
          { item: itemList.fossilized_bone_shard, amount: 18 },
          { item: itemList.energy_nectar, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  prototype_rancour: {
    name: 'Prototype Rancour',
    id: 'prototype_rancour',
    rarity: 4,
    atk: 44,
    secondary: 'Physical DMG Bonus',
    type: weapons.sword,
    source: 'adventure rank 10 reward, forging',
    ascension: [
      {
        items: [
          { item: itemList.mist_veiled_lead_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 3 },
          { item: itemList.recruits_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 12 },
          { item: itemList.recruits_insignia, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 6 },
          { item: itemList.mist_grass, amount: 6 },
          { item: itemList.sergeants_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 3 },
          { item: itemList.mist_grass, amount: 12 },
          { item: itemList.sergeants_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 6 },
          { item: itemList.mist_grass_wick, amount: 9 },
          { item: itemList.lieutenants_insignia, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.mist_veiled_primo_elixir, amount: 4 },
          { item: itemList.mist_grass_wick, amount: 18 },
          { item: itemList.lieutenants_insignia, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  lions_roar: {
    name: "Lion's Roar",
    id: 'lions_roar',
    rarity: 4,
    atk: 42,
    secondary: 'ATK',
    type: weapons.sword,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.luminous_sands_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 3 },
          { item: itemList.treasure_hoarder_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 12 },
          { item: itemList.treasure_hoarder_insignia, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 6 },
          { item: itemList.agents_sacrificial_knife, amount: 6 },
          { item: itemList.silver_raven_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 3 },
          { item: itemList.agents_sacrificial_knife, amount: 12 },
          { item: itemList.silver_raven_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 6 },
          { item: itemList.inspectors_sacrificial_knife, amount: 9 },
          { item: itemList.golden_raven_insignia, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.divine_body_from_guyun, amount: 4 },
          { item: itemList.inspectors_sacrificial_knife, amount: 18 },
          { item: itemList.golden_raven_insignia, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  serpent_spine: {
    name: 'Serpent Spine',
    id: 'serpent_spine',
    rarity: 4,
    atk: 42,
    secondary: 'CRIT Rate',
    type: weapons.claymore,
    source: 'battle pass',
    ascension: [
      {
        items: [
          { item: itemList.grain_of_aerosiderite, amount: 3 },
          { item: itemList.fragile_bone_shard, amount: 3 },
          { item: itemList.whopperflower_nectar, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 3 },
          { item: itemList.fragile_bone_shard, amount: 12 },
          { item: itemList.whopperflower_nectar, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 6 },
          { item: itemList.sturdy_bone_shard, amount: 6 },
          { item: itemList.shimmering_nectar, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 3 },
          { item: itemList.sturdy_bone_shard, amount: 12 },
          { item: itemList.shimmering_nectar, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 6 },
          { item: itemList.fossilized_bone_shard, amount: 9 },
          { item: itemList.energy_nectar, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.chunk_of_aerosiderite, amount: 4 },
          { item: itemList.fossilized_bone_shard, amount: 18 },
          { item: itemList.energy_nectar, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  prototype_crescent: {
    name: 'Prototype Crescent',
    id: 'prototype_crescent',
    rarity: 4,
    atk: 42,
    secondary: 'ATK',
    type: weapons.bow,
    source: 'forging',
    ascension: [
      {
        items: [
          { item: itemList.mist_veiled_lead_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 3 },
          { item: itemList.treasure_hoarder_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 12 },
          { item: itemList.treasure_hoarder_insignia, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 6 },
          { item: itemList.mist_grass, amount: 6 },
          { item: itemList.silver_raven_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 3 },
          { item: itemList.mist_grass, amount: 12 },
          { item: itemList.silver_raven_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 6 },
          { item: itemList.mist_grass_wick, amount: 9 },
          { item: itemList.golden_raven_insignia, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.mist_veiled_primo_elixir, amount: 4 },
          { item: itemList.mist_grass_wick, amount: 18 },
          { item: itemList.golden_raven_insignia, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  blackcliff_longsword: {
    name: 'Blackcliff Longsword',
    id: 'blackcliff_longsword',
    rarity: 4,
    atk: 44,
    secondary: 'CRIT DMG',
    type: weapons.sword,
    source: "paimon's bargains",
    ascension: [
      {
        items: [
          { item: itemList.luminous_sands_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 3 },
          { item: itemList.firm_arrowhead, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 12 },
          { item: itemList.firm_arrowhead, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 6 },
          { item: itemList.agents_sacrificial_knife, amount: 6 },
          { item: itemList.sharp_arrowhead, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 3 },
          { item: itemList.agents_sacrificial_knife, amount: 12 },
          { item: itemList.sharp_arrowhead, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 6 },
          { item: itemList.inspectors_sacrificial_knife, amount: 9 },
          { item: itemList.weathered_arrowhead, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.divine_body_from_guyun, amount: 4 },
          { item: itemList.inspectors_sacrificial_knife, amount: 18 },
          { item: itemList.weathered_arrowhead, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  dragons_bane: {
    name: "Dragon's Bane",
    id: 'dragons_bane',
    rarity: 4,
    atk: 41,
    secondary: 'Elemental Mastery',
    type: weapons.polearm,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.mist_veiled_lead_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 3 },
          { item: itemList.divining_scroll, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 12 },
          { item: itemList.divining_scroll, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 6 },
          { item: itemList.mist_grass, amount: 6 },
          { item: itemList.sealed_scroll, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 3 },
          { item: itemList.mist_grass, amount: 12 },
          { item: itemList.sealed_scroll, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 6 },
          { item: itemList.mist_grass_wick, amount: 9 },
          { item: itemList.forbidden_curse_scroll, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.mist_veiled_primo_elixir, amount: 4 },
          { item: itemList.mist_grass_wick, amount: 18 },
          { item: itemList.forbidden_curse_scroll, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  blackcliff_pole: {
    name: 'Blackcliff Pole',
    id: 'blackcliff_pole',
    rarity: 4,
    atk: 42,
    secondary: 'CRIT DMG',
    type: weapons.polearm,
    source: "paimon's bargains",
    ascension: [
      {
        items: [
          { item: itemList.mist_veiled_lead_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 3 },
          { item: itemList.recruits_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 12 },
          { item: itemList.recruits_insignia, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 6 },
          { item: itemList.mist_grass, amount: 6 },
          { item: itemList.sergeants_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 3 },
          { item: itemList.mist_grass, amount: 12 },
          { item: itemList.sergeants_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 6 },
          { item: itemList.mist_grass_wick, amount: 9 },
          { item: itemList.lieutenants_insignia, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.mist_veiled_primo_elixir, amount: 4 },
          { item: itemList.mist_grass_wick, amount: 18 },
          { item: itemList.lieutenants_insignia, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  the_black_sword: {
    name: 'The Black Sword',
    id: 'the_black_sword',
    rarity: 4,
    atk: 42,
    secondary: 'CRIT Rate',
    type: weapons.sword,
    source: 'battle pass',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 3 },
          { item: itemList.slime_condensate, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 12 },
          { item: itemList.slime_condensate, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 6 },
          { item: itemList.dead_ley_line_leaves, amount: 6 },
          { item: itemList.slime_secretions, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 3 },
          { item: itemList.dead_ley_line_leaves, amount: 12 },
          { item: itemList.slime_secretions, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 6 },
          { item: itemList.ley_line_sprouts, amount: 9 },
          { item: itemList.slime_concentrate, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 4 },
          { item: itemList.ley_line_sprouts, amount: 18 },
          { item: itemList.slime_concentrate, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  crescent_pike: {
    name: 'Crescent Pike',
    id: 'crescent_pike',
    rarity: 4,
    atk: 44,
    secondary: 'Physical DMG Bonus',
    type: weapons.polearm,
    source: 'forging',
    ascension: [
      {
        items: [
          { item: itemList.luminous_sands_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 3 },
          { item: itemList.treasure_hoarder_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 12 },
          { item: itemList.treasure_hoarder_insignia, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 6 },
          { item: itemList.agents_sacrificial_knife, amount: 6 },
          { item: itemList.silver_raven_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 3 },
          { item: itemList.agents_sacrificial_knife, amount: 12 },
          { item: itemList.silver_raven_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 6 },
          { item: itemList.inspectors_sacrificial_knife, amount: 9 },
          { item: itemList.golden_raven_insignia, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.divine_body_from_guyun, amount: 4 },
          { item: itemList.inspectors_sacrificial_knife, amount: 18 },
          { item: itemList.golden_raven_insignia, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  the_viridescent_hunt: {
    name: 'The Viridescent Hunt',
    id: 'the_viridescent_hunt',
    rarity: 4,
    atk: 42,
    secondary: 'CRIT Rate',
    type: weapons.bow,
    source: 'battle pass',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 3 },
          { item: itemList.heavy_horn, amount: 3 },
          { item: itemList.firm_arrowhead, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 3 },
          { item: itemList.heavy_horn, amount: 12 },
          { item: itemList.firm_arrowhead, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 6 },
          { item: itemList.black_bronze_horn, amount: 6 },
          { item: itemList.sharp_arrowhead, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 3 },
          { item: itemList.black_bronze_horn, amount: 12 },
          { item: itemList.sharp_arrowhead, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 6 },
          { item: itemList.black_crystal_horn, amount: 9 },
          { item: itemList.weathered_arrowhead, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 4 },
          { item: itemList.black_crystal_horn, amount: 18 },
          { item: itemList.weathered_arrowhead, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  favonius_lance: {
    name: 'Favonius Lance',
    id: 'favonius_lance',
    rarity: 4,
    atk: 44,
    secondary: 'Energy Recharge',
    type: weapons.polearm,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 3 },
          { item: itemList.slime_condensate, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 12 },
          { item: itemList.slime_condensate, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_circuit, amount: 6 },
          { item: itemList.slime_secretions, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_circuit, amount: 12 },
          { item: itemList.slime_secretions, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_core, amount: 9 },
          { item: itemList.slime_concentrate, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.chaos_core, amount: 18 },
          { item: itemList.slime_concentrate, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  'snow-tombed_starsilver': {
    name: 'Snow-Tombed Starsilver',
    id: 'snow-tombed_starsilver',
    rarity: 4,
    atk: 44,
    secondary: 'Physical DMG Bonus',
    type: weapons.claymore,
    source: 'forging',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 3 },
          { item: itemList.heavy_horn, amount: 3 },
          { item: itemList.slime_condensate, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 3 },
          { item: itemList.heavy_horn, amount: 12 },
          { item: itemList.slime_condensate, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 6 },
          { item: itemList.black_bronze_horn, amount: 6 },
          { item: itemList.slime_secretions, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 3 },
          { item: itemList.black_bronze_horn, amount: 12 },
          { item: itemList.slime_secretions, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 6 },
          { item: itemList.black_crystal_horn, amount: 9 },
          { item: itemList.slime_concentrate, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 4 },
          { item: itemList.black_crystal_horn, amount: 18 },
          { item: itemList.slime_concentrate, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  festering_desire: {
    name: 'Festering Desire',
    id: 'festering_desire',
    rarity: 4,
    atk: 42,
    secondary: 'Energy Recharge',
    type: weapons.sword,
    source: 'complete festering desire (quest)',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.heavy_horn, amount: 3 },
          { item: itemList.recruits_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.heavy_horn, amount: 12 },
          { item: itemList.recruits_insignia, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.black_bronze_horn, amount: 6 },
          { item: itemList.sergeants_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.black_bronze_horn, amount: 12 },
          { item: itemList.sergeants_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.black_crystal_horn, amount: 9 },
          { item: itemList.lieutenants_insignia, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.black_crystal_horn, amount: 18 },
          { item: itemList.lieutenants_insignia, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  frostbearer: {
    name: 'Frostbearer',
    id: 'frostbearer',
    rarity: 4,
    atk: 42,
    secondary: 'ATK',
    type: weapons.catalyst,
    source: 'forging',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 3 },
          { item: itemList.whopperflower_nectar, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 12 },
          { item: itemList.whopperflower_nectar, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_circuit, amount: 6 },
          { item: itemList.shimmering_nectar, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_circuit, amount: 12 },
          { item: itemList.shimmering_nectar, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_core, amount: 9 },
          { item: itemList.energy_nectar, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.chaos_core, amount: 18 },
          { item: itemList.energy_nectar, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  royal_spear: {
    name: 'Royal Spear',
    id: 'royal_spear',
    rarity: 4,
    atk: 44,
    secondary: 'ATK',
    type: weapons.polearm,
    source: "paimon's bargains",
    ascension: [
      {
        items: [
          { item: itemList.mist_veiled_lead_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 3 },
          { item: itemList.recruits_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 12 },
          { item: itemList.recruits_insignia, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 6 },
          { item: itemList.mist_grass, amount: 6 },
          { item: itemList.sergeants_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 3 },
          { item: itemList.mist_grass, amount: 12 },
          { item: itemList.sergeants_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 6 },
          { item: itemList.mist_grass_wick, amount: 9 },
          { item: itemList.lieutenants_insignia, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.mist_veiled_primo_elixir, amount: 4 },
          { item: itemList.mist_grass_wick, amount: 18 },
          { item: itemList.lieutenants_insignia, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  sacrificial_greatsword: {
    name: 'Sacrificial Greatsword',
    id: 'sacrificial_greatsword',
    rarity: 4,
    atk: 44,
    secondary: 'Energy Recharge',
    type: weapons.claymore,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 3 },
          { item: itemList.firm_arrowhead, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 12 },
          { item: itemList.firm_arrowhead, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 6 },
          { item: itemList.dead_ley_line_leaves, amount: 6 },
          { item: itemList.sharp_arrowhead, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 3 },
          { item: itemList.dead_ley_line_leaves, amount: 12 },
          { item: itemList.sharp_arrowhead, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 6 },
          { item: itemList.ley_line_sprouts, amount: 9 },
          { item: itemList.weathered_arrowhead, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 4 },
          { item: itemList.ley_line_sprouts, amount: 18 },
          { item: itemList.weathered_arrowhead, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  sword_of_descension: {
    name: 'Sword of Descension',
    id: 'sword_of_descension',
    rarity: 4,
    atk: 39,
    secondary: 'ATK',
    type: weapons.sword,
    source: 'event exclusive',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 3 },
          { item: itemList.treasure_hoarder_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 12 },
          { item: itemList.treasure_hoarder_insignia, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 6 },
          { item: itemList.dead_ley_line_leaves, amount: 6 },
          { item: itemList.silver_raven_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 3 },
          { item: itemList.dead_ley_line_leaves, amount: 12 },
          { item: itemList.silver_raven_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 6 },
          { item: itemList.ley_line_sprouts, amount: 9 },
          { item: itemList.golden_raven_insignia, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 4 },
          { item: itemList.ley_line_sprouts, amount: 18 },
          { item: itemList.golden_raven_insignia, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  the_alley_flash: {
    name: 'The Alley Flash',
    id: 'the_alley_flash',
    rarity: 4,
    atk: 44,
    secondary: 'CRIT Rate',
    type: weapons.sword,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 3 },
          { item: itemList.heavy_horn, amount: 3 },
          { item: itemList.divining_scroll, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 3 },
          { item: itemList.heavy_horn, amount: 12 },
          { item: itemList.divining_scroll, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 6 },
          { item: itemList.black_bronze_horn, amount: 6 },
          { item: itemList.sealed_scroll, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 3 },
          { item: itemList.black_bronze_horn, amount: 12 },
          { item: itemList.sealed_scroll, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 6 },
          { item: itemList.black_crystal_horn, amount: 9 },
          { item: itemList.forbidden_curse_scroll, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 4 },
          { item: itemList.black_crystal_horn, amount: 18 },
          { item: itemList.forbidden_curse_scroll, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  deathmatch: {
    name: 'Deathmatch',
    id: 'deathmatch',
    rarity: 4,
    atk: 41,
    secondary: 'CRIT Rate',
    type: weapons.polearm,
    source: 'battle pass',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 3 },
          { item: itemList.whopperflower_nectar, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 12 },
          { item: itemList.whopperflower_nectar, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 6 },
          { item: itemList.dead_ley_line_leaves, amount: 6 },
          { item: itemList.shimmering_nectar, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 3 },
          { item: itemList.dead_ley_line_leaves, amount: 12 },
          { item: itemList.shimmering_nectar, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 6 },
          { item: itemList.ley_line_sprouts, amount: 9 },
          { item: itemList.energy_nectar, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 4 },
          { item: itemList.ley_line_sprouts, amount: 18 },
          { item: itemList.energy_nectar, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  favonius_sword: {
    name: 'Favonius Sword',
    id: 'favonius_sword',
    rarity: 4,
    atk: 41,
    secondary: 'Energy Recharge',
    type: weapons.sword,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 3 },
          { item: itemList.heavy_horn, amount: 3 },
          { item: itemList.firm_arrowhead, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 3 },
          { item: itemList.heavy_horn, amount: 12 },
          { item: itemList.firm_arrowhead, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 6 },
          { item: itemList.black_bronze_horn, amount: 6 },
          { item: itemList.sharp_arrowhead, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 3 },
          { item: itemList.black_bronze_horn, amount: 12 },
          { item: itemList.sharp_arrowhead, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 6 },
          { item: itemList.black_crystal_horn, amount: 9 },
          { item: itemList.weathered_arrowhead, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 4 },
          { item: itemList.black_crystal_horn, amount: 18 },
          { item: itemList.weathered_arrowhead, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  alley_hunter: {
    name: 'Alley Hunter',
    id: 'alley_hunter',
    rarity: 4,
    atk: 41,
    secondary: 'CRIT Rate',
    type: weapons.bow,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 3 },
          { item: itemList.slime_condensate, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 12 },
          { item: itemList.slime_condensate, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_circuit, amount: 6 },
          { item: itemList.slime_secretions, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_circuit, amount: 12 },
          { item: itemList.slime_secretions, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_core, amount: 9 },
          { item: itemList.slime_concentrate, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.chaos_core, amount: 18 },
          { item: itemList.slime_concentrate, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  lithic_spear: {
    name: 'Lithic Spear',
    id: 'lithic_spear',
    rarity: 4,
    atk: 44,
    secondary: 'ATK',
    type: weapons.polearm,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.grain_of_aerosiderite, amount: 3 },
          { item: itemList.fragile_bone_shard, amount: 3 },
          { item: itemList.firm_arrowhead, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 3 },
          { item: itemList.fragile_bone_shard, amount: 12 },
          { item: itemList.firm_arrowhead, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 6 },
          { item: itemList.sturdy_bone_shard, amount: 6 },
          { item: itemList.sharp_arrowhead, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 3 },
          { item: itemList.sturdy_bone_shard, amount: 12 },
          { item: itemList.sharp_arrowhead, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 6 },
          { item: itemList.fossilized_bone_shard, amount: 9 },
          { item: itemList.weathered_arrowhead, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.chunk_of_aerosiderite, amount: 4 },
          { item: itemList.fossilized_bone_shard, amount: 18 },
          { item: itemList.weathered_arrowhead, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  wine_and_song: {
    name: 'Wine and Song',
    id: 'wine_and_song',
    rarity: 4,
    atk: 42,
    secondary: 'Energy Recharge',
    type: weapons.catalyst,
    source: 'currently unobtainable',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 3 },
          { item: itemList.treasure_hoarder_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 12 },
          { item: itemList.treasure_hoarder_insignia, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 6 },
          { item: itemList.dead_ley_line_leaves, amount: 6 },
          { item: itemList.silver_raven_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 3 },
          { item: itemList.dead_ley_line_leaves, amount: 12 },
          { item: itemList.silver_raven_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 6 },
          { item: itemList.ley_line_sprouts, amount: 9 },
          { item: itemList.golden_raven_insignia, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 4 },
          { item: itemList.ley_line_sprouts, amount: 18 },
          { item: itemList.golden_raven_insignia, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  blackcliff_warbow: {
    name: 'Blackcliff Warbow',
    id: 'blackcliff_warbow',
    rarity: 4,
    atk: 44,
    secondary: 'CRIT DMG',
    type: weapons.bow,
    source: "paimon's bargains",
    ascension: [
      {
        items: [
          { item: itemList.luminous_sands_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 3 },
          { item: itemList.whopperflower_nectar, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 12 },
          { item: itemList.whopperflower_nectar, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 6 },
          { item: itemList.agents_sacrificial_knife, amount: 6 },
          { item: itemList.shimmering_nectar, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 3 },
          { item: itemList.agents_sacrificial_knife, amount: 12 },
          { item: itemList.shimmering_nectar, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 6 },
          { item: itemList.inspectors_sacrificial_knife, amount: 9 },
          { item: itemList.energy_nectar, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.divine_body_from_guyun, amount: 4 },
          { item: itemList.inspectors_sacrificial_knife, amount: 18 },
          { item: itemList.energy_nectar, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  blackcliff_slasher: {
    name: 'Blackcliff Slasher',
    id: 'blackcliff_slasher',
    rarity: 4,
    atk: 42,
    secondary: 'CRIT DMG',
    type: weapons.claymore,
    source: "paimon's bargains",
    ascension: [
      {
        items: [
          { item: itemList.mist_veiled_lead_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 3 },
          { item: itemList.recruits_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 12 },
          { item: itemList.recruits_insignia, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 6 },
          { item: itemList.mist_grass, amount: 6 },
          { item: itemList.sergeants_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 3 },
          { item: itemList.mist_grass, amount: 12 },
          { item: itemList.sergeants_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 6 },
          { item: itemList.mist_grass_wick, amount: 9 },
          { item: itemList.lieutenants_insignia, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.mist_veiled_primo_elixir, amount: 4 },
          { item: itemList.mist_grass_wick, amount: 18 },
          { item: itemList.lieutenants_insignia, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  lithic_blade: {
    name: 'Lithic Blade',
    id: 'lithic_blade',
    rarity: 4,
    atk: 42,
    secondary: 'ATK',
    type: weapons.claymore,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.luminous_sands_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 3 },
          { item: itemList.firm_arrowhead, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 12 },
          { item: itemList.firm_arrowhead, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 6 },
          { item: itemList.agents_sacrificial_knife, amount: 6 },
          { item: itemList.sharp_arrowhead, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 3 },
          { item: itemList.agents_sacrificial_knife, amount: 12 },
          { item: itemList.sharp_arrowhead, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 6 },
          { item: itemList.inspectors_sacrificial_knife, amount: 9 },
          { item: itemList.weathered_arrowhead, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.divine_body_from_guyun, amount: 4 },
          { item: itemList.inspectors_sacrificial_knife, amount: 18 },
          { item: itemList.weathered_arrowhead, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  prototype_starglitter: {
    name: 'Prototype Starglitter',
    id: 'prototype_starglitter',
    rarity: 4,
    atk: 42,
    secondary: 'Energy Recharge',
    type: weapons.polearm,
    source: 'forging',
    ascension: [
      {
        items: [
          { item: itemList.grain_of_aerosiderite, amount: 3 },
          { item: itemList.fragile_bone_shard, amount: 3 },
          { item: itemList.damaged_mask, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 3 },
          { item: itemList.fragile_bone_shard, amount: 12 },
          { item: itemList.damaged_mask, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 6 },
          { item: itemList.sturdy_bone_shard, amount: 6 },
          { item: itemList.stained_mask, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 3 },
          { item: itemList.sturdy_bone_shard, amount: 12 },
          { item: itemList.stained_mask, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 6 },
          { item: itemList.fossilized_bone_shard, amount: 9 },
          { item: itemList.ominous_mask, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.chunk_of_aerosiderite, amount: 4 },
          { item: itemList.fossilized_bone_shard, amount: 18 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  whiteblind: {
    name: 'Whiteblind',
    id: 'whiteblind',
    rarity: 4,
    atk: 42,
    secondary: 'DEF',
    type: weapons.claymore,
    source: 'forging',
    ascension: [
      {
        items: [
          { item: itemList.luminous_sands_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 3 },
          { item: itemList.treasure_hoarder_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 12 },
          { item: itemList.treasure_hoarder_insignia, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 6 },
          { item: itemList.agents_sacrificial_knife, amount: 6 },
          { item: itemList.silver_raven_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 3 },
          { item: itemList.agents_sacrificial_knife, amount: 12 },
          { item: itemList.silver_raven_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 6 },
          { item: itemList.inspectors_sacrificial_knife, amount: 9 },
          { item: itemList.golden_raven_insignia, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.divine_body_from_guyun, amount: 4 },
          { item: itemList.inspectors_sacrificial_knife, amount: 18 },
          { item: itemList.golden_raven_insignia, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  the_widsith: {
    name: 'The Widsith',
    id: 'the_widsith',
    rarity: 4,
    atk: 42,
    secondary: 'CRIT DMG',
    type: weapons.catalyst,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 3 },
          { item: itemList.damaged_mask, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 12 },
          { item: itemList.damaged_mask, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 6 },
          { item: itemList.dead_ley_line_leaves, amount: 6 },
          { item: itemList.stained_mask, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 3 },
          { item: itemList.dead_ley_line_leaves, amount: 12 },
          { item: itemList.stained_mask, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 6 },
          { item: itemList.ley_line_sprouts, amount: 9 },
          { item: itemList.ominous_mask, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 4 },
          { item: itemList.ley_line_sprouts, amount: 18 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  compound_bow: {
    name: 'Compound Bow',
    id: 'compound_bow',
    rarity: 4,
    atk: 41,
    secondary: 'Physical DMG Bonus',
    type: weapons.bow,
    source: 'forging',
    ascension: [
      {
        items: [
          { item: itemList.grain_of_aerosiderite, amount: 3 },
          { item: itemList.fragile_bone_shard, amount: 3 },
          { item: itemList.recruits_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 3 },
          { item: itemList.fragile_bone_shard, amount: 12 },
          { item: itemList.recruits_insignia, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 6 },
          { item: itemList.sturdy_bone_shard, amount: 6 },
          { item: itemList.sergeants_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 3 },
          { item: itemList.sturdy_bone_shard, amount: 12 },
          { item: itemList.sergeants_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 6 },
          { item: itemList.fossilized_bone_shard, amount: 9 },
          { item: itemList.lieutenants_insignia, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.chunk_of_aerosiderite, amount: 4 },
          { item: itemList.fossilized_bone_shard, amount: 18 },
          { item: itemList.lieutenants_insignia, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  favonius_warbow: {
    name: 'Favonius Warbow',
    id: 'favonius_warbow',
    rarity: 4,
    atk: 41,
    secondary: 'Energy Recharge',
    type: weapons.bow,
    source: 'wish, mondstadt archon quest reward',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 3 },
          { item: itemList.whopperflower_nectar, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 12 },
          { item: itemList.whopperflower_nectar, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_circuit, amount: 6 },
          { item: itemList.shimmering_nectar, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_circuit, amount: 12 },
          { item: itemList.shimmering_nectar, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_core, amount: 9 },
          { item: itemList.energy_nectar, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.chaos_core, amount: 18 },
          { item: itemList.energy_nectar, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  royal_bow: {
    name: 'Royal Bow',
    id: 'royal_bow',
    rarity: 4,
    atk: 42,
    secondary: 'ATK',
    type: weapons.bow,
    source: "paimon's bargains",
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 3 },
          { item: itemList.slime_condensate, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 12 },
          { item: itemList.slime_condensate, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_circuit, amount: 6 },
          { item: itemList.slime_secretions, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_circuit, amount: 12 },
          { item: itemList.slime_secretions, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_core, amount: 9 },
          { item: itemList.slime_concentrate, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.chaos_core, amount: 18 },
          { item: itemList.slime_concentrate, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  rust: {
    name: 'Rust',
    id: 'rust',
    rarity: 4,
    atk: 42,
    secondary: 'ATK',
    type: weapons.bow,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.luminous_sands_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 3 },
          { item: itemList.damaged_mask, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 12 },
          { item: itemList.damaged_mask, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 6 },
          { item: itemList.agents_sacrificial_knife, amount: 6 },
          { item: itemList.stained_mask, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 3 },
          { item: itemList.agents_sacrificial_knife, amount: 12 },
          { item: itemList.stained_mask, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 6 },
          { item: itemList.inspectors_sacrificial_knife, amount: 9 },
          { item: itemList.ominous_mask, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.divine_body_from_guyun, amount: 4 },
          { item: itemList.inspectors_sacrificial_knife, amount: 18 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  the_stringless: {
    name: 'The Stringless',
    id: 'the_stringless',
    rarity: 4,
    atk: 42,
    secondary: 'Elemental Mastery',
    type: weapons.bow,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 3 },
          { item: itemList.heavy_horn, amount: 3 },
          { item: itemList.firm_arrowhead, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 3 },
          { item: itemList.heavy_horn, amount: 12 },
          { item: itemList.firm_arrowhead, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 6 },
          { item: itemList.black_bronze_horn, amount: 6 },
          { item: itemList.sharp_arrowhead, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 3 },
          { item: itemList.black_bronze_horn, amount: 12 },
          { item: itemList.sharp_arrowhead, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 6 },
          { item: itemList.black_crystal_horn, amount: 9 },
          { item: itemList.weathered_arrowhead, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 4 },
          { item: itemList.black_crystal_horn, amount: 18 },
          { item: itemList.weathered_arrowhead, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  sacrificial_bow: {
    name: 'Sacrificial Bow',
    id: 'sacrificial_bow',
    rarity: 4,
    atk: 44,
    secondary: 'Energy Recharge',
    type: weapons.bow,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 3 },
          { item: itemList.slime_condensate, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 12 },
          { item: itemList.slime_condensate, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 6 },
          { item: itemList.dead_ley_line_leaves, amount: 6 },
          { item: itemList.slime_secretions, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 3 },
          { item: itemList.dead_ley_line_leaves, amount: 12 },
          { item: itemList.slime_secretions, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 6 },
          { item: itemList.ley_line_sprouts, amount: 9 },
          { item: itemList.slime_concentrate, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 4 },
          { item: itemList.ley_line_sprouts, amount: 18 },
          { item: itemList.slime_concentrate, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  blackcliff_agate: {
    name: 'Blackcliff Agate',
    id: 'blackcliff_agate',
    rarity: 4,
    atk: 42,
    secondary: 'CRIT DMG',
    type: weapons.catalyst,
    source: "paimon's bargains",
    ascension: [
      {
        items: [
          { item: itemList.luminous_sands_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 3 },
          { item: itemList.divining_scroll, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 12 },
          { item: itemList.divining_scroll, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 6 },
          { item: itemList.agents_sacrificial_knife, amount: 6 },
          { item: itemList.sealed_scroll, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 3 },
          { item: itemList.agents_sacrificial_knife, amount: 12 },
          { item: itemList.sealed_scroll, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 6 },
          { item: itemList.inspectors_sacrificial_knife, amount: 9 },
          { item: itemList.forbidden_curse_scroll, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.divine_body_from_guyun, amount: 4 },
          { item: itemList.inspectors_sacrificial_knife, amount: 18 },
          { item: itemList.forbidden_curse_scroll, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  favonius_codex: {
    name: 'Favonius Codex',
    id: 'favonius_codex',
    rarity: 4,
    atk: 42,
    secondary: 'Energy Recharge',
    type: weapons.catalyst,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 3 },
          { item: itemList.heavy_horn, amount: 3 },
          { item: itemList.divining_scroll, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 3 },
          { item: itemList.heavy_horn, amount: 12 },
          { item: itemList.divining_scroll, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 6 },
          { item: itemList.black_bronze_horn, amount: 6 },
          { item: itemList.sealed_scroll, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 3 },
          { item: itemList.black_bronze_horn, amount: 12 },
          { item: itemList.sealed_scroll, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 6 },
          { item: itemList.black_crystal_horn, amount: 9 },
          { item: itemList.forbidden_curse_scroll, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 4 },
          { item: itemList.black_crystal_horn, amount: 18 },
          { item: itemList.forbidden_curse_scroll, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  mappa_mare: {
    name: 'Mappa Mare',
    id: 'mappa_mare',
    rarity: 4,
    atk: 44,
    secondary: 'Elemental Mastery',
    type: weapons.catalyst,
    source: 'forging',
    ascension: [
      {
        items: [
          { item: itemList.grain_of_aerosiderite, amount: 3 },
          { item: itemList.fragile_bone_shard, amount: 3 },
          { item: itemList.slime_condensate, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 3 },
          { item: itemList.fragile_bone_shard, amount: 12 },
          { item: itemList.slime_condensate, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 6 },
          { item: itemList.sturdy_bone_shard, amount: 6 },
          { item: itemList.slime_secretions, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 3 },
          { item: itemList.sturdy_bone_shard, amount: 12 },
          { item: itemList.slime_secretions, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 6 },
          { item: itemList.fossilized_bone_shard, amount: 9 },
          { item: itemList.slime_concentrate, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.chunk_of_aerosiderite, amount: 4 },
          { item: itemList.fossilized_bone_shard, amount: 18 },
          { item: itemList.slime_concentrate, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  prototype_amber: {
    name: 'Prototype Amber',
    id: 'prototype_amber',
    rarity: 4,
    atk: 42,
    secondary: 'HP',
    type: weapons.catalyst,
    source: 'forging',
    ascension: [
      {
        items: [
          { item: itemList.mist_veiled_lead_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 3 },
          { item: itemList.firm_arrowhead, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 12 },
          { item: itemList.firm_arrowhead, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 6 },
          { item: itemList.mist_grass, amount: 6 },
          { item: itemList.sharp_arrowhead, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 3 },
          { item: itemList.mist_grass, amount: 12 },
          { item: itemList.sharp_arrowhead, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 6 },
          { item: itemList.mist_grass_wick, amount: 9 },
          { item: itemList.weathered_arrowhead, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.mist_veiled_primo_elixir, amount: 4 },
          { item: itemList.mist_grass_wick, amount: 18 },
          { item: itemList.weathered_arrowhead, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  royal_grimoire: {
    name: 'Royal Grimoire',
    id: 'royal_grimoire',
    rarity: 4,
    atk: 44,
    secondary: 'ATK',
    type: weapons.catalyst,
    source: "paimon's bargains",
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 3 },
          { item: itemList.heavy_horn, amount: 3 },
          { item: itemList.recruits_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 3 },
          { item: itemList.heavy_horn, amount: 12 },
          { item: itemList.recruits_insignia, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 6 },
          { item: itemList.black_bronze_horn, amount: 6 },
          { item: itemList.sergeants_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 3 },
          { item: itemList.black_bronze_horn, amount: 12 },
          { item: itemList.sergeants_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 6 },
          { item: itemList.black_crystal_horn, amount: 9 },
          { item: itemList.lieutenants_insignia, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 4 },
          { item: itemList.black_crystal_horn, amount: 18 },
          { item: itemList.lieutenants_insignia, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  sacrificial_fragments: {
    name: 'Sacrificial Fragments',
    id: 'sacrificial_fragments',
    rarity: 4,
    atk: 41,
    secondary: 'Elemental Mastery',
    type: weapons.catalyst,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 3 },
          { item: itemList.treasure_hoarder_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 12 },
          { item: itemList.treasure_hoarder_insignia, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_circuit, amount: 6 },
          { item: itemList.silver_raven_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_circuit, amount: 12 },
          { item: itemList.silver_raven_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_core, amount: 9 },
          { item: itemList.golden_raven_insignia, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.chaos_core, amount: 18 },
          { item: itemList.golden_raven_insignia, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  solar_pearl: {
    name: 'Solar Pearl',
    id: 'solar_pearl',
    rarity: 4,
    atk: 42,
    secondary: 'CRIT Rate',
    type: weapons.catalyst,
    source: 'battle pass',
    ascension: [
      {
        items: [
          { item: itemList.luminous_sands_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 3 },
          { item: itemList.whopperflower_nectar, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 3 },
          { item: itemList.hunters_sacrificial_knife, amount: 12 },
          { item: itemList.whopperflower_nectar, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 6 },
          { item: itemList.agents_sacrificial_knife, amount: 6 },
          { item: itemList.shimmering_nectar, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 3 },
          { item: itemList.agents_sacrificial_knife, amount: 12 },
          { item: itemList.shimmering_nectar, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 6 },
          { item: itemList.inspectors_sacrificial_knife, amount: 9 },
          { item: itemList.energy_nectar, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.divine_body_from_guyun, amount: 4 },
          { item: itemList.inspectors_sacrificial_knife, amount: 18 },
          { item: itemList.energy_nectar, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  dragonspine_spear: {
    name: 'Dragonspine Spear',
    id: 'dragonspine_spear',
    rarity: 4,
    atk: 41,
    secondary: 'Physical DMG Bonus',
    type: weapons.polearm,
    source: 'forging',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 3 },
          { item: itemList.recruits_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 12 },
          { item: itemList.recruits_insignia, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 6 },
          { item: itemList.mist_grass, amount: 6 },
          { item: itemList.sergeants_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 3 },
          { item: itemList.mist_grass, amount: 12 },
          { item: itemList.sergeants_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 6 },
          { item: itemList.mist_grass_wick, amount: 9 },
          { item: itemList.lieutenants_insignia, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 4 },
          { item: itemList.mist_grass_wick, amount: 18 },
          { item: itemList.lieutenants_insignia, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  favonius_greatsword: {
    name: 'Favonius Greatsword',
    id: 'favonius_greatsword',
    rarity: 4,
    atk: 41,
    secondary: 'Energy Recharge',
    type: weapons.claymore,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 3 },
          { item: itemList.recruits_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 12 },
          { item: itemList.recruits_insignia, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_circuit, amount: 6 },
          { item: itemList.sergeants_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_circuit, amount: 12 },
          { item: itemList.sergeants_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_core, amount: 9 },
          { item: itemList.lieutenants_insignia, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.chaos_core, amount: 18 },
          { item: itemList.lieutenants_insignia, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  the_bell: {
    name: 'The Bell',
    id: 'the_bell',
    rarity: 4,
    atk: 42,
    secondary: 'HP',
    type: weapons.claymore,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 3 },
          { item: itemList.heavy_horn, amount: 3 },
          { item: itemList.whopperflower_nectar, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 3 },
          { item: itemList.heavy_horn, amount: 12 },
          { item: itemList.whopperflower_nectar, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 6 },
          { item: itemList.black_bronze_horn, amount: 6 },
          { item: itemList.shimmering_nectar, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 3 },
          { item: itemList.black_bronze_horn, amount: 12 },
          { item: itemList.shimmering_nectar, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 6 },
          { item: itemList.black_crystal_horn, amount: 9 },
          { item: itemList.energy_nectar, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 4 },
          { item: itemList.black_crystal_horn, amount: 18 },
          { item: itemList.energy_nectar, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  royal_greatsword: {
    name: 'Royal Greatsword',
    id: 'royal_greatsword',
    rarity: 4,
    atk: 44,
    secondary: 'ATK',
    type: weapons.claymore,
    source: "paimon's bargains",
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 3 },
          { item: itemList.slime_condensate, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_device, amount: 12 },
          { item: itemList.slime_condensate, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_circuit, amount: 6 },
          { item: itemList.slime_secretions, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_circuit, amount: 12 },
          { item: itemList.slime_secretions, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_core, amount: 9 },
          { item: itemList.slime_concentrate, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.chaos_core, amount: 18 },
          { item: itemList.slime_concentrate, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  rainslasher: {
    name: 'Rainslasher',
    id: 'rainslasher',
    rarity: 4,
    atk: 42,
    secondary: 'Elemental Mastery',
    type: weapons.claymore,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.mist_veiled_lead_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 3 },
          { item: itemList.divining_scroll, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 3 },
          { item: itemList.mist_grass_pollen, amount: 12 },
          { item: itemList.divining_scroll, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 6 },
          { item: itemList.mist_grass, amount: 6 },
          { item: itemList.sealed_scroll, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 3 },
          { item: itemList.mist_grass, amount: 12 },
          { item: itemList.sealed_scroll, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 6 },
          { item: itemList.mist_grass_wick, amount: 9 },
          { item: itemList.forbidden_curse_scroll, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.mist_veiled_primo_elixir, amount: 4 },
          { item: itemList.mist_grass_wick, amount: 18 },
          { item: itemList.forbidden_curse_scroll, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  prototype_archaic: {
    name: 'Prototype Archaic',
    id: 'prototype_archaic',
    rarity: 4,
    atk: 44,
    secondary: 'ATK',
    type: weapons.claymore,
    source: 'forging',
    ascension: [
      {
        items: [
          { item: itemList.grain_of_aerosiderite, amount: 3 },
          { item: itemList.fragile_bone_shard, amount: 3 },
          { item: itemList.damaged_mask, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 3 },
          { item: itemList.fragile_bone_shard, amount: 12 },
          { item: itemList.damaged_mask, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 6 },
          { item: itemList.sturdy_bone_shard, amount: 6 },
          { item: itemList.stained_mask, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 3 },
          { item: itemList.sturdy_bone_shard, amount: 12 },
          { item: itemList.stained_mask, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 6 },
          { item: itemList.fossilized_bone_shard, amount: 9 },
          { item: itemList.ominous_mask, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.chunk_of_aerosiderite, amount: 4 },
          { item: itemList.fossilized_bone_shard, amount: 18 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  ferrous_shadow: {
    name: 'Ferrous Shadow',
    id: 'ferrous_shadow',
    rarity: 3,
    atk: 39,
    secondary: 'HP',
    type: weapons.claymore,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 2 },
          { item: itemList.heavy_horn, amount: 2 },
          { item: itemList.whopperflower_nectar, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 2 },
          { item: itemList.heavy_horn, amount: 8 },
          { item: itemList.whopperflower_nectar, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 4 },
          { item: itemList.black_bronze_horn, amount: 4 },
          { item: itemList.shimmering_nectar, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 2 },
          { item: itemList.black_bronze_horn, amount: 8 },
          { item: itemList.shimmering_nectar, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 4 },
          { item: itemList.black_crystal_horn, amount: 6 },
          { item: itemList.energy_nectar, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 3 },
          { item: itemList.black_crystal_horn, amount: 12 },
          { item: itemList.energy_nectar, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  debate_club: {
    name: 'Debate Club',
    id: 'debate_club',
    rarity: 3,
    atk: 39,
    secondary: 'ATK',
    type: weapons.claymore,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.mist_veiled_lead_elixir, amount: 2 },
          { item: itemList.mist_grass_pollen, amount: 2 },
          { item: itemList.damaged_mask, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 2 },
          { item: itemList.mist_grass_pollen, amount: 8 },
          { item: itemList.damaged_mask, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 4 },
          { item: itemList.mist_grass, amount: 4 },
          { item: itemList.stained_mask, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 2 },
          { item: itemList.mist_grass, amount: 8 },
          { item: itemList.stained_mask, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 4 },
          { item: itemList.mist_grass_wick, amount: 6 },
          { item: itemList.ominous_mask, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.mist_veiled_primo_elixir, amount: 3 },
          { item: itemList.mist_grass_wick, amount: 12 },
          { item: itemList.ominous_mask, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  dark_iron_sword: {
    name: 'Dark Iron Sword',
    id: 'dark_iron_sword',
    rarity: 3,
    atk: 39,
    secondary: 'Elemental Mastery',
    type: weapons.sword,
    source: 'from chen the sharp',
    ascension: [
      {
        items: [
          { item: itemList.luminous_sands_from_guyun, amount: 2 },
          { item: itemList.hunters_sacrificial_knife, amount: 2 },
          { item: itemList.damaged_mask, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 2 },
          { item: itemList.hunters_sacrificial_knife, amount: 8 },
          { item: itemList.damaged_mask, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 4 },
          { item: itemList.agents_sacrificial_knife, amount: 4 },
          { item: itemList.stained_mask, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 2 },
          { item: itemList.agents_sacrificial_knife, amount: 8 },
          { item: itemList.stained_mask, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 4 },
          { item: itemList.inspectors_sacrificial_knife, amount: 6 },
          { item: itemList.ominous_mask, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.divine_body_from_guyun, amount: 3 },
          { item: itemList.inspectors_sacrificial_knife, amount: 12 },
          { item: itemList.ominous_mask, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  cool_steel: {
    name: 'Cool Steel',
    id: 'cool_steel',
    rarity: 3,
    atk: 39,
    secondary: 'ATK',
    type: weapons.sword,
    source: 'wish, chests',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 2 },
          { item: itemList.heavy_horn, amount: 2 },
          { item: itemList.firm_arrowhead, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 2 },
          { item: itemList.heavy_horn, amount: 8 },
          { item: itemList.firm_arrowhead, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 4 },
          { item: itemList.black_bronze_horn, amount: 4 },
          { item: itemList.sharp_arrowhead, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 2 },
          { item: itemList.black_bronze_horn, amount: 8 },
          { item: itemList.sharp_arrowhead, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 4 },
          { item: itemList.black_crystal_horn, amount: 6 },
          { item: itemList.weathered_arrowhead, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 3 },
          { item: itemList.black_crystal_horn, amount: 12 },
          { item: itemList.weathered_arrowhead, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  otherworldly_story: {
    name: 'Otherworldly Story',
    id: 'otherworldly_story',
    rarity: 3,
    atk: 39,
    secondary: 'Energy Recharge',
    type: weapons.catalyst,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 2 },
          { item: itemList.chaos_device, amount: 2 },
          { item: itemList.damaged_mask, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 2 },
          { item: itemList.chaos_device, amount: 8 },
          { item: itemList.damaged_mask, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.chaos_circuit, amount: 4 },
          { item: itemList.stained_mask, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 2 },
          { item: itemList.chaos_circuit, amount: 8 },
          { item: itemList.stained_mask, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.chaos_core, amount: 6 },
          { item: itemList.ominous_mask, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_core, amount: 12 },
          { item: itemList.ominous_mask, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  halberd: {
    name: 'Halberd',
    id: 'halberd',
    rarity: 3,
    atk: 40,
    secondary: 'ATK',
    type: weapons.polearm,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.mist_veiled_lead_elixir, amount: 2 },
          { item: itemList.mist_grass_pollen, amount: 2 },
          { item: itemList.whopperflower_nectar, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 2 },
          { item: itemList.mist_grass_pollen, amount: 8 },
          { item: itemList.whopperflower_nectar, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 4 },
          { item: itemList.mist_grass, amount: 4 },
          { item: itemList.shimmering_nectar, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 2 },
          { item: itemList.mist_grass, amount: 8 },
          { item: itemList.shimmering_nectar, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 4 },
          { item: itemList.mist_grass_wick, amount: 6 },
          { item: itemList.energy_nectar, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.mist_veiled_primo_elixir, amount: 3 },
          { item: itemList.mist_grass_wick, amount: 12 },
          { item: itemList.energy_nectar, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  slingshot: {
    name: 'Slingshot',
    id: 'slingshot',
    rarity: 3,
    atk: 38,
    secondary: 'CRIT Rate',
    type: weapons.bow,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.luminous_sands_from_guyun, amount: 2 },
          { item: itemList.hunters_sacrificial_knife, amount: 2 },
          { item: itemList.damaged_mask, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 2 },
          { item: itemList.hunters_sacrificial_knife, amount: 8 },
          { item: itemList.damaged_mask, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 4 },
          { item: itemList.agents_sacrificial_knife, amount: 4 },
          { item: itemList.stained_mask, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 2 },
          { item: itemList.agents_sacrificial_knife, amount: 8 },
          { item: itemList.stained_mask, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 4 },
          { item: itemList.inspectors_sacrificial_knife, amount: 6 },
          { item: itemList.ominous_mask, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.divine_body_from_guyun, amount: 3 },
          { item: itemList.inspectors_sacrificial_knife, amount: 12 },
          { item: itemList.ominous_mask, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  // quartz: {
  //   name: 'Quartz',
  //   id: 'quartz',
  //   rarity: 3,
  //   atk: 40,
  //   secondary: 'Elemental Mastery',
  //   type: weapons.claymore,
  //   source: 'chests',
  //   ascension: [
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 5000,
  //     },
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 10000,
  //     },
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 15000,
  //     },
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 20000,
  //     },
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 25000,
  //     },
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 30000,
  //     },
  //   ],
  // },
  sharpshooters_oath: {
    name: "Sharpshooter's Oath",
    id: 'sharpshooters_oath',
    rarity: 3,
    atk: 39,
    secondary: 'CRIT DMG',
    type: weapons.bow,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 2 },
          { item: itemList.dead_ley_line_branch, amount: 2 },
          { item: itemList.slime_condensate, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 2 },
          { item: itemList.dead_ley_line_branch, amount: 8 },
          { item: itemList.slime_condensate, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 4 },
          { item: itemList.dead_ley_line_leaves, amount: 4 },
          { item: itemList.slime_secretions, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 2 },
          { item: itemList.dead_ley_line_leaves, amount: 8 },
          { item: itemList.slime_secretions, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 4 },
          { item: itemList.ley_line_sprouts, amount: 6 },
          { item: itemList.slime_concentrate, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 3 },
          { item: itemList.ley_line_sprouts, amount: 12 },
          { item: itemList.slime_concentrate, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  raven_bow: {
    name: 'Raven Bow',
    id: 'raven_bow',
    rarity: 3,
    atk: 40,
    secondary: 'Elemental Mastery',
    type: weapons.bow,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 2 },
          { item: itemList.heavy_horn, amount: 2 },
          { item: itemList.firm_arrowhead, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 2 },
          { item: itemList.heavy_horn, amount: 8 },
          { item: itemList.firm_arrowhead, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 4 },
          { item: itemList.black_bronze_horn, amount: 4 },
          { item: itemList.sharp_arrowhead, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 2 },
          { item: itemList.black_bronze_horn, amount: 8 },
          { item: itemList.sharp_arrowhead, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 4 },
          { item: itemList.black_crystal_horn, amount: 6 },
          { item: itemList.weathered_arrowhead, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 3 },
          { item: itemList.black_crystal_horn, amount: 12 },
          { item: itemList.weathered_arrowhead, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  // ebony_bow: {
  //   name: 'Ebony Bow',
  //   id: 'ebony_bow',
  //   rarity: 3,
  //   atk: 40,
  //   secondary: 'ATK',
  //   type: weapons.bow,
  //   source: 'chests',
  //   ascension: [
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 5000,
  //     },
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 10000,
  //     },
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 15000,
  //     },
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 20000,
  //     },
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 25000,
  //     },
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 30000,
  //     },
  //   ],
  // },
  black_tassel: {
    name: 'Black Tassel',
    id: 'black_tassel',
    rarity: 3,
    atk: 38,
    secondary: 'HP',
    type: weapons.polearm,
    source: 'wish, from orban',
    ascension: [
      {
        items: [
          { item: itemList.grain_of_aerosiderite, amount: 2 },
          { item: itemList.fragile_bone_shard, amount: 2 },
          { item: itemList.firm_arrowhead, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 2 },
          { item: itemList.fragile_bone_shard, amount: 8 },
          { item: itemList.firm_arrowhead, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 4 },
          { item: itemList.sturdy_bone_shard, amount: 4 },
          { item: itemList.sharp_arrowhead, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 2 },
          { item: itemList.sturdy_bone_shard, amount: 8 },
          { item: itemList.sharp_arrowhead, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 4 },
          { item: itemList.fossilized_bone_shard, amount: 6 },
          { item: itemList.weathered_arrowhead, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.chunk_of_aerosiderite, amount: 3 },
          { item: itemList.fossilized_bone_shard, amount: 12 },
          { item: itemList.weathered_arrowhead, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  skyrider_greatsword: {
    name: 'Skyrider Greatsword',
    id: 'skyrider_greatsword',
    rarity: 3,
    atk: 39,
    secondary: 'Physical DMG Bonus',
    type: weapons.claymore,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.grain_of_aerosiderite, amount: 2 },
          { item: itemList.fragile_bone_shard, amount: 2 },
          { item: itemList.treasure_hoarder_insignia, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 2 },
          { item: itemList.fragile_bone_shard, amount: 8 },
          { item: itemList.treasure_hoarder_insignia, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 4 },
          { item: itemList.sturdy_bone_shard, amount: 4 },
          { item: itemList.silver_raven_insignia, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 2 },
          { item: itemList.sturdy_bone_shard, amount: 8 },
          { item: itemList.silver_raven_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 4 },
          { item: itemList.fossilized_bone_shard, amount: 6 },
          { item: itemList.golden_raven_insignia, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.chunk_of_aerosiderite, amount: 3 },
          { item: itemList.fossilized_bone_shard, amount: 12 },
          { item: itemList.golden_raven_insignia, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  harbinger_of_dawn: {
    name: 'Harbinger of Dawn',
    id: 'harbinger_of_dawn',
    rarity: 3,
    atk: 39,
    secondary: 'CRIT DMG',
    type: weapons.sword,
    source: "wish, kaeya's gain",
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 2 },
          { item: itemList.dead_ley_line_branch, amount: 2 },
          { item: itemList.slime_condensate, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 2 },
          { item: itemList.dead_ley_line_branch, amount: 8 },
          { item: itemList.slime_condensate, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 4 },
          { item: itemList.dead_ley_line_leaves, amount: 4 },
          { item: itemList.slime_secretions, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 2 },
          { item: itemList.dead_ley_line_leaves, amount: 8 },
          { item: itemList.slime_secretions, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 4 },
          { item: itemList.ley_line_sprouts, amount: 6 },
          { item: itemList.slime_concentrate, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 3 },
          { item: itemList.ley_line_sprouts, amount: 12 },
          { item: itemList.slime_concentrate, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  // amber_catalyst: {
  //   name: 'Amber Catalyst',
  //   id: 'amber_catalyst',
  //   rarity: 3,
  //   atk: 40,
  //   secondary: 'Elemental Mastery',
  //   type: weapons.catalyst,
  //   source: 'chests',
  //   ascension: [
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 5000,
  //     },
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 10000,
  //     },
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 15000,
  //     },
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 20000,
  //     },
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 25000,
  //     },
  //     {
  //       items: [
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //         { item: itemList.unknown, amount: 0 },
  //       ],
  //       mora: 30000,
  //     },
  //   ],
  // },
  recurve_bow: {
    name: 'Recurve Bow',
    id: 'recurve_bow',
    rarity: 3,
    atk: 38,
    secondary: 'HP',
    type: weapons.bow,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 2 },
          { item: itemList.chaos_device, amount: 2 },
          { item: itemList.divining_scroll, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 2 },
          { item: itemList.chaos_device, amount: 8 },
          { item: itemList.divining_scroll, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.chaos_circuit, amount: 4 },
          { item: itemList.sealed_scroll, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 2 },
          { item: itemList.chaos_circuit, amount: 8 },
          { item: itemList.sealed_scroll, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.chaos_core, amount: 6 },
          { item: itemList.forbidden_curse_scroll, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_core, amount: 12 },
          { item: itemList.forbidden_curse_scroll, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  bloodtainted_greatsword: {
    name: 'Bloodtainted Greatsword',
    id: 'bloodtainted_greatsword',
    rarity: 3,
    atk: 38,
    secondary: 'Elemental Mastery',
    type: weapons.claymore,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 2 },
          { item: itemList.dead_ley_line_branch, amount: 2 },
          { item: itemList.firm_arrowhead, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 2 },
          { item: itemList.dead_ley_line_branch, amount: 8 },
          { item: itemList.firm_arrowhead, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 4 },
          { item: itemList.dead_ley_line_leaves, amount: 4 },
          { item: itemList.sharp_arrowhead, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 2 },
          { item: itemList.dead_ley_line_leaves, amount: 8 },
          { item: itemList.sharp_arrowhead, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 4 },
          { item: itemList.ley_line_sprouts, amount: 6 },
          { item: itemList.weathered_arrowhead, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 3 },
          { item: itemList.ley_line_sprouts, amount: 12 },
          { item: itemList.weathered_arrowhead, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  white_iron_greatsword: {
    name: 'White Iron Greatsword',
    id: 'white_iron_greatsword',
    rarity: 3,
    atk: 39,
    secondary: 'DEF',
    type: weapons.claymore,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 2 },
          { item: itemList.chaos_device, amount: 2 },
          { item: itemList.slime_condensate, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 2 },
          { item: itemList.chaos_device, amount: 8 },
          { item: itemList.slime_condensate, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.chaos_circuit, amount: 4 },
          { item: itemList.slime_secretions, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 2 },
          { item: itemList.chaos_circuit, amount: 8 },
          { item: itemList.slime_secretions, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.chaos_core, amount: 6 },
          { item: itemList.slime_concentrate, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_core, amount: 12 },
          { item: itemList.slime_concentrate, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  white_tassel: {
    name: 'White Tassel',
    id: 'white_tassel',
    rarity: 3,
    atk: 39,
    secondary: 'CRIT Rate',
    type: weapons.polearm,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.luminous_sands_from_guyun, amount: 2 },
          { item: itemList.hunters_sacrificial_knife, amount: 2 },
          { item: itemList.recruits_insignia, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 2 },
          { item: itemList.hunters_sacrificial_knife, amount: 8 },
          { item: itemList.recruits_insignia, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 4 },
          { item: itemList.agents_sacrificial_knife, amount: 4 },
          { item: itemList.sergeants_insignia, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 2 },
          { item: itemList.agents_sacrificial_knife, amount: 8 },
          { item: itemList.sergeants_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 4 },
          { item: itemList.inspectors_sacrificial_knife, amount: 6 },
          { item: itemList.lieutenants_insignia, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.divine_body_from_guyun, amount: 3 },
          { item: itemList.inspectors_sacrificial_knife, amount: 12 },
          { item: itemList.lieutenants_insignia, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  skyrider_sword: {
    name: 'Skyrider Sword',
    id: 'skyrider_sword',
    rarity: 3,
    atk: 38,
    secondary: 'Energy Recharge',
    type: weapons.sword,
    source: "wish, from pan guan'er",
    ascension: [
      {
        items: [
          { item: itemList.grain_of_aerosiderite, amount: 2 },
          { item: itemList.fragile_bone_shard, amount: 2 },
          { item: itemList.recruits_insignia, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 2 },
          { item: itemList.fragile_bone_shard, amount: 8 },
          { item: itemList.recruits_insignia, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 4 },
          { item: itemList.sturdy_bone_shard, amount: 4 },
          { item: itemList.sergeants_insignia, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 2 },
          { item: itemList.sturdy_bone_shard, amount: 8 },
          { item: itemList.sergeants_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 4 },
          { item: itemList.fossilized_bone_shard, amount: 6 },
          { item: itemList.lieutenants_insignia, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.chunk_of_aerosiderite, amount: 3 },
          { item: itemList.fossilized_bone_shard, amount: 12 },
          { item: itemList.lieutenants_insignia, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  messenger: {
    name: 'Messenger',
    id: 'messenger',
    rarity: 3,
    atk: 40,
    secondary: 'CRIT DMG',
    type: weapons.bow,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.mist_veiled_lead_elixir, amount: 2 },
          { item: itemList.mist_grass_pollen, amount: 2 },
          { item: itemList.treasure_hoarder_insignia, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 2 },
          { item: itemList.mist_grass_pollen, amount: 8 },
          { item: itemList.treasure_hoarder_insignia, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 4 },
          { item: itemList.mist_grass, amount: 4 },
          { item: itemList.silver_raven_insignia, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 2 },
          { item: itemList.mist_grass, amount: 8 },
          { item: itemList.silver_raven_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 4 },
          { item: itemList.mist_grass_wick, amount: 6 },
          { item: itemList.golden_raven_insignia, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.mist_veiled_primo_elixir, amount: 3 },
          { item: itemList.mist_grass_wick, amount: 12 },
          { item: itemList.golden_raven_insignia, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  emerald_orb: {
    name: 'Emerald Orb',
    id: 'emerald_orb',
    rarity: 3,
    atk: 40,
    secondary: 'Elemental Mastery',
    type: weapons.catalyst,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.luminous_sands_from_guyun, amount: 2 },
          { item: itemList.hunters_sacrificial_knife, amount: 2 },
          { item: itemList.treasure_hoarder_insignia, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 2 },
          { item: itemList.hunters_sacrificial_knife, amount: 8 },
          { item: itemList.treasure_hoarder_insignia, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.lustrous_stone_from_guyun, amount: 4 },
          { item: itemList.agents_sacrificial_knife, amount: 4 },
          { item: itemList.silver_raven_insignia, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 2 },
          { item: itemList.agents_sacrificial_knife, amount: 8 },
          { item: itemList.silver_raven_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.relic_from_guyun, amount: 4 },
          { item: itemList.inspectors_sacrificial_knife, amount: 6 },
          { item: itemList.golden_raven_insignia, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.divine_body_from_guyun, amount: 3 },
          { item: itemList.inspectors_sacrificial_knife, amount: 12 },
          { item: itemList.golden_raven_insignia, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  travelers_handy_sword: {
    name: "Traveler's Handy Sword",
    id: 'travelers_handy_sword',
    rarity: 3,
    atk: 40,
    secondary: 'DEF',
    type: weapons.sword,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 2 },
          { item: itemList.chaos_device, amount: 2 },
          { item: itemList.divining_scroll, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 2 },
          { item: itemList.chaos_device, amount: 8 },
          { item: itemList.divining_scroll, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.chaos_circuit, amount: 4 },
          { item: itemList.sealed_scroll, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 2 },
          { item: itemList.chaos_circuit, amount: 8 },
          { item: itemList.sealed_scroll, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.chaos_core, amount: 6 },
          { item: itemList.forbidden_curse_scroll, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_core, amount: 12 },
          { item: itemList.forbidden_curse_scroll, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  twin_nephrite: {
    name: 'Twin Nephrite',
    id: 'twin_nephrite',
    rarity: 3,
    atk: 40,
    secondary: 'CRIT Rate',
    type: weapons.catalyst,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.mist_veiled_lead_elixir, amount: 2 },
          { item: itemList.mist_grass_pollen, amount: 2 },
          { item: itemList.recruits_insignia, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 2 },
          { item: itemList.mist_grass_pollen, amount: 8 },
          { item: itemList.recruits_insignia, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 4 },
          { item: itemList.mist_grass, amount: 4 },
          { item: itemList.sergeants_insignia, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 2 },
          { item: itemList.mist_grass, amount: 8 },
          { item: itemList.sergeants_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 4 },
          { item: itemList.mist_grass_wick, amount: 6 },
          { item: itemList.lieutenants_insignia, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.mist_veiled_primo_elixir, amount: 3 },
          { item: itemList.mist_grass_wick, amount: 12 },
          { item: itemList.lieutenants_insignia, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  fillet_blade: {
    name: 'Fillet Blade',
    id: 'fillet_blade',
    rarity: 3,
    atk: 39,
    secondary: 'ATK',
    type: weapons.sword,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.mist_veiled_lead_elixir, amount: 2 },
          { item: itemList.mist_grass_pollen, amount: 2 },
          { item: itemList.treasure_hoarder_insignia, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 2 },
          { item: itemList.mist_grass_pollen, amount: 8 },
          { item: itemList.treasure_hoarder_insignia, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 4 },
          { item: itemList.mist_grass, amount: 4 },
          { item: itemList.silver_raven_insignia, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 2 },
          { item: itemList.mist_grass, amount: 8 },
          { item: itemList.silver_raven_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 4 },
          { item: itemList.mist_grass_wick, amount: 6 },
          { item: itemList.golden_raven_insignia, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.mist_veiled_primo_elixir, amount: 3 },
          { item: itemList.mist_grass_wick, amount: 12 },
          { item: itemList.golden_raven_insignia, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  thrilling_tales_of_dragon_slayers: {
    name: 'Thrilling Tales of Dragon Slayers',
    id: 'thrilling_tales_of_dragon_slayers',
    rarity: 3,
    atk: 39,
    secondary: 'HP',
    type: weapons.catalyst,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 2 },
          { item: itemList.dead_ley_line_branch, amount: 2 },
          { item: itemList.divining_scroll, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 2 },
          { item: itemList.dead_ley_line_branch, amount: 8 },
          { item: itemList.divining_scroll, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 4 },
          { item: itemList.dead_ley_line_leaves, amount: 4 },
          { item: itemList.sealed_scroll, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 2 },
          { item: itemList.dead_ley_line_leaves, amount: 8 },
          { item: itemList.sealed_scroll, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 4 },
          { item: itemList.ley_line_sprouts, amount: 6 },
          { item: itemList.forbidden_curse_scroll, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 3 },
          { item: itemList.ley_line_sprouts, amount: 12 },
          { item: itemList.forbidden_curse_scroll, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  magic_guide: {
    name: 'Magic Guide',
    id: 'magic_guide',
    rarity: 3,
    atk: 38,
    secondary: 'Elemental Mastery',
    type: weapons.catalyst,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 2 },
          { item: itemList.heavy_horn, amount: 2 },
          { item: itemList.slime_condensate, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 2 },
          { item: itemList.heavy_horn, amount: 8 },
          { item: itemList.slime_condensate, amount: 5 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 4 },
          { item: itemList.black_bronze_horn, amount: 4 },
          { item: itemList.slime_secretions, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 2 },
          { item: itemList.black_bronze_horn, amount: 8 },
          { item: itemList.slime_secretions, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 4 },
          { item: itemList.black_crystal_horn, amount: 6 },
          { item: itemList.slime_concentrate, amount: 4 },
        ],
        mora: 25000,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 3 },
          { item: itemList.black_crystal_horn, amount: 12 },
          { item: itemList.slime_concentrate, amount: 8 },
        ],
        mora: 30000,
      },
    ],
  },
  seasoned_hunters_bow: {
    name: "Seasoned Hunter's Bow",
    id: 'seasoned_hunters_bow',
    rarity: 2,
    atk: 33,
    secondary: 'None',
    type: weapons.bow,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 1 },
          { item: itemList.dead_ley_line_branch, amount: 1 },
          { item: itemList.treasure_hoarder_insignia, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 1 },
          { item: itemList.dead_ley_line_branch, amount: 5 },
          { item: itemList.treasure_hoarder_insignia, amount: 4 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 3 },
          { item: itemList.dead_ley_line_leaves, amount: 3 },
          { item: itemList.silver_raven_insignia, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 1 },
          { item: itemList.dead_ley_line_leaves, amount: 5 },
          { item: itemList.silver_raven_insignia, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 0 },
          { item: itemList.ley_line_sprouts, amount: 0 },
          { item: itemList.golden_raven_insignia, amount: 0 },
        ],
        mora: 0,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 0 },
          { item: itemList.ley_line_sprouts, amount: 0 },
          { item: itemList.golden_raven_insignia, amount: 0 },
        ],
        mora: 0,
      },
    ],
  },
  silver_sword: {
    name: 'Silver Sword',
    id: 'silver_sword',
    rarity: 2,
    atk: 33,
    secondary: 'None',
    type: weapons.sword,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 1 },
          { item: itemList.heavy_horn, amount: 1 },
          { item: itemList.firm_arrowhead, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 1 },
          { item: itemList.heavy_horn, amount: 5 },
          { item: itemList.firm_arrowhead, amount: 4 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 3 },
          { item: itemList.black_bronze_horn, amount: 3 },
          { item: itemList.sharp_arrowhead, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 1 },
          { item: itemList.black_bronze_horn, amount: 5 },
          { item: itemList.sharp_arrowhead, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 0 },
          { item: itemList.black_crystal_horn, amount: 0 },
          { item: itemList.weathered_arrowhead, amount: 0 },
        ],
        mora: 0,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 0 },
          { item: itemList.black_crystal_horn, amount: 0 },
          { item: itemList.weathered_arrowhead, amount: 0 },
        ],
        mora: 0,
      },
    ],
  },
  pocket_grimoire: {
    name: 'Pocket Grimoire',
    id: 'pocket_grimoire',
    rarity: 2,
    atk: 33,
    secondary: 'None',
    type: weapons.catalyst,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 1 },
          { item: itemList.heavy_horn, amount: 1 },
          { item: itemList.damaged_mask, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 1 },
          { item: itemList.heavy_horn, amount: 5 },
          { item: itemList.damaged_mask, amount: 4 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 3 },
          { item: itemList.black_bronze_horn, amount: 3 },
          { item: itemList.stained_mask, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 1 },
          { item: itemList.black_bronze_horn, amount: 5 },
          { item: itemList.stained_mask, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 0 },
          { item: itemList.black_crystal_horn, amount: 0 },
          { item: itemList.ominous_mask, amount: 0 },
        ],
        mora: 0,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 0 },
          { item: itemList.black_crystal_horn, amount: 0 },
          { item: itemList.ominous_mask, amount: 0 },
        ],
        mora: 0,
      },
    ],
  },
  old_mercs_pal: {
    name: "Old Merc's Pal",
    id: 'old_mercs_pal',
    rarity: 2,
    atk: 33,
    secondary: 'None',
    type: weapons.claymore,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 1 },
          { item: itemList.dead_ley_line_branch, amount: 1 },
          { item: itemList.slime_condensate, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 1 },
          { item: itemList.dead_ley_line_branch, amount: 5 },
          { item: itemList.slime_condensate, amount: 4 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 3 },
          { item: itemList.dead_ley_line_leaves, amount: 3 },
          { item: itemList.slime_secretions, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 1 },
          { item: itemList.dead_ley_line_leaves, amount: 5 },
          { item: itemList.slime_secretions, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 0 },
          { item: itemList.ley_line_sprouts, amount: 0 },
          { item: itemList.slime_concentrate, amount: 0 },
        ],
        mora: 0,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 0 },
          { item: itemList.ley_line_sprouts, amount: 0 },
          { item: itemList.slime_concentrate, amount: 0 },
        ],
        mora: 0,
      },
    ],
  },
  iron_point: {
    name: 'Iron Point',
    id: 'iron_point',
    rarity: 2,
    atk: 33,
    secondary: 'None',
    type: weapons.polearm,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 1 },
          { item: itemList.chaos_device, amount: 1 },
          { item: itemList.divining_scroll, amount: 1 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 1 },
          { item: itemList.chaos_device, amount: 5 },
          { item: itemList.divining_scroll, amount: 4 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.chaos_circuit, amount: 3 },
          { item: itemList.sealed_scroll, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 1 },
          { item: itemList.chaos_circuit, amount: 5 },
          { item: itemList.sealed_scroll, amount: 4 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 0 },
          { item: itemList.chaos_core, amount: 0 },
          { item: itemList.forbidden_curse_scroll, amount: 0 },
        ],
        mora: 0,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 0 },
          { item: itemList.chaos_core, amount: 0 },
          { item: itemList.forbidden_curse_scroll, amount: 0 },
        ],
        mora: 0,
      },
    ],
  },
  beginners_protector: {
    name: "Beginner's Protector",
    id: 'beginners_protector',
    rarity: 1,
    atk: 23,
    secondary: 'None',
    type: weapons.polearm,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 1 },
          { item: itemList.chaos_device, amount: 1 },
          { item: itemList.divining_scroll, amount: 1 },
        ],
        mora: 0,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 1 },
          { item: itemList.chaos_device, amount: 4 },
          { item: itemList.divining_scroll, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 2 },
          { item: itemList.chaos_circuit, amount: 2 },
          { item: itemList.sealed_scroll, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 1 },
          { item: itemList.chaos_circuit, amount: 4 },
          { item: itemList.sealed_scroll, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 0 },
          { item: itemList.chaos_core, amount: 0 },
          { item: itemList.forbidden_curse_scroll, amount: 0 },
        ],
        mora: 0,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 0 },
          { item: itemList.chaos_core, amount: 0 },
          { item: itemList.forbidden_curse_scroll, amount: 0 },
        ],
        mora: 0,
      },
    ],
  },
  apprentices_notes: {
    name: "Apprentice's Notes",
    id: 'apprentices_notes',
    rarity: 1,
    atk: 23,
    secondary: 'None',
    type: weapons.catalyst,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 1 },
          { item: itemList.heavy_horn, amount: 1 },
          { item: itemList.damaged_mask, amount: 1 },
        ],
        mora: 0,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 1 },
          { item: itemList.heavy_horn, amount: 4 },
          { item: itemList.damaged_mask, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 2 },
          { item: itemList.black_bronze_horn, amount: 2 },
          { item: itemList.stained_mask, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 1 },
          { item: itemList.black_bronze_horn, amount: 4 },
          { item: itemList.stained_mask, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 0 },
          { item: itemList.black_crystal_horn, amount: 0 },
          { item: itemList.ominous_mask, amount: 0 },
        ],
        mora: 0,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 0 },
          { item: itemList.black_crystal_horn, amount: 0 },
          { item: itemList.ominous_mask, amount: 0 },
        ],
        mora: 0,
      },
    ],
  },
  dull_blade: {
    name: 'Dull Blade',
    id: 'dull_blade',
    rarity: 1,
    atk: 23,
    secondary: 'None',
    type: weapons.sword,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 1 },
          { item: itemList.heavy_horn, amount: 1 },
          { item: itemList.firm_arrowhead, amount: 1 },
        ],
        mora: 0,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 1 },
          { item: itemList.heavy_horn, amount: 4 },
          { item: itemList.firm_arrowhead, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 2 },
          { item: itemList.black_bronze_horn, amount: 2 },
          { item: itemList.sharp_arrowhead, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 1 },
          { item: itemList.black_bronze_horn, amount: 4 },
          { item: itemList.sharp_arrowhead, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 0 },
          { item: itemList.black_crystal_horn, amount: 0 },
          { item: itemList.weathered_arrowhead, amount: 0 },
        ],
        mora: 0,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 0 },
          { item: itemList.black_crystal_horn, amount: 0 },
          { item: itemList.weathered_arrowhead, amount: 0 },
        ],
        mora: 0,
      },
    ],
  },
  waster_greatsword: {
    name: 'Waster Greatsword',
    id: 'waster_greatsword',
    rarity: 1,
    atk: 23,
    secondary: 'None',
    type: weapons.claymore,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 1 },
          { item: itemList.dead_ley_line_branch, amount: 1 },
          { item: itemList.slime_condensate, amount: 1 },
        ],
        mora: 0,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 1 },
          { item: itemList.dead_ley_line_branch, amount: 4 },
          { item: itemList.slime_condensate, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 2 },
          { item: itemList.dead_ley_line_leaves, amount: 2 },
          { item: itemList.slime_secretions, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 1 },
          { item: itemList.dead_ley_line_leaves, amount: 4 },
          { item: itemList.slime_secretions, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 0 },
          { item: itemList.ley_line_sprouts, amount: 0 },
          { item: itemList.slime_concentrate, amount: 0 },
        ],
        mora: 0,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 0 },
          { item: itemList.ley_line_sprouts, amount: 0 },
          { item: itemList.slime_concentrate, amount: 0 },
        ],
        mora: 0,
      },
    ],
  },
  hunters_bow: {
    name: "Hunter's Bow",
    id: 'hunters_bow',
    rarity: 1,
    atk: 23,
    secondary: 'None',
    type: weapons.bow,
    source: 'chests',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 1 },
          { item: itemList.dead_ley_line_branch, amount: 1 },
          { item: itemList.treasure_hoarder_insignia, amount: 1 },
        ],
        mora: 0,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 1 },
          { item: itemList.dead_ley_line_branch, amount: 4 },
          { item: itemList.treasure_hoarder_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 2 },
          { item: itemList.dead_ley_line_leaves, amount: 2 },
          { item: itemList.silver_raven_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 1 },
          { item: itemList.dead_ley_line_leaves, amount: 4 },
          { item: itemList.silver_raven_insignia, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 0 },
          { item: itemList.ley_line_sprouts, amount: 0 },
          { item: itemList.golden_raven_insignia, amount: 0 },
        ],
        mora: 0,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 0 },
          { item: itemList.ley_line_sprouts, amount: 0 },
          { item: itemList.golden_raven_insignia, amount: 0 },
        ],
        mora: 0,
      },
    ],
  },
  primordial_jade_cutter: {
    name: 'Primordial Jade Cutter',
    id: 'primordial_jade_cutter',
    rarity: 5,
    atk: 44,
    secondary: 'ATK',
    type: weapons.sword,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.mist_veiled_lead_elixir, amount: 5 },
          { item: itemList.mist_grass_pollen, amount: 5 },
          { item: itemList.treasure_hoarder_insignia, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 5 },
          { item: itemList.mist_grass_pollen, amount: 18 },
          { item: itemList.treasure_hoarder_insignia, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.mist_veiled_mercury_elixir, amount: 9 },
          { item: itemList.mist_grass, amount: 9 },
          { item: itemList.silver_raven_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 5 },
          { item: itemList.mist_grass, amount: 18 },
          { item: itemList.silver_raven_insignia, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.mist_veiled_gold_elixir, amount: 9 },
          { item: itemList.mist_grass_wick, amount: 14 },
          { item: itemList.golden_raven_insignia, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.mist_veiled_primo_elixir, amount: 6 },
          { item: itemList.mist_grass_wick, amount: 27 },
          { item: itemList.golden_raven_insignia, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  staff_of_homa: {
    name: 'Staff of Homa',
    id: 'staff_of_homa',
    rarity: 5,
    type: weapons.polearm,
    source: 'wish',
    atk: 46,
    secondary: 'CRIT DMG',
    ascension: [
      {
        items: [
          { item: itemList.grain_of_aerosiderite, amount: 5 },
          { item: itemList.dead_ley_line_branch, amount: 5 },
          { item: itemList.slime_condensate, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 5 },
          { item: itemList.dead_ley_line_branch, amount: 18 },
          { item: itemList.slime_condensate, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.piece_of_aerosiderite, amount: 9 },
          { item: itemList.dead_ley_line_leaves, amount: 9 },
          { item: itemList.slime_secretions, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 5 },
          { item: itemList.dead_ley_line_leaves, amount: 18 },
          { item: itemList.slime_secretions, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.bit_of_aerosiderite, amount: 9 },
          { item: itemList.ley_line_sprouts, amount: 14 },
          { item: itemList.slime_concentrate, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.chunk_of_aerosiderite, amount: 6 },
          { item: itemList.ley_line_sprouts, amount: 27 },
          { item: itemList.slime_concentrate, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  elegy_for_the_end: {
    name: 'Elegy for the End',
    id: 'elegy_for_the_end',
    rarity: 5,
    type: weapons.bow,
    source: 'wish',
    atk: 46,
    secondary: 'Energy Recharge',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 3 },
          { item: itemList.heavy_horn, amount: 3 },
          { item: itemList.recruits_insignia, amount: 2 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 3 },
          { item: itemList.heavy_horn, amount: 12 },
          { item: itemList.recruits_insignia, amount: 8 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 6 },
          { item: itemList.black_bronze_horn, amount: 6 },
          { item: itemList.sergeants_insignia, amount: 6 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 3 },
          { item: itemList.black_bronze_horn, amount: 12 },
          { item: itemList.sergeants_insignia, amount: 9 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 6 },
          { item: itemList.black_crystal_horn, amount: 9 },
          { item: itemList.lieutenants_insignia, amount: 6 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 4 },
          { item: itemList.black_crystal_horn, amount: 18 },
          { item: itemList.lieutenants_insignia, amount: 12 },
        ],
        mora: 65000,
      },
    ],
  },
  windblume_ode: {
    name: 'Windblume Ode',
    id: 'windblume_ode',
    rarity: 4,
    atk: 42,
    secondary: 'Elemental Mastery',
    type: weapons.bow,
    source: 'Invitation of Windblume Event',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 3 },
          { item: itemList.whopperflower_nectar, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 12 },
          { item: itemList.whopperflower_nectar, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.dead_ley_line_leaves, amount: 6 },
          { item: itemList.shimmering_nectar, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 3 },
          { item: itemList.dead_ley_line_leaves, amount: 12 },
          { item: itemList.shimmering_nectar, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.ley_line_sprouts, amount: 9 },
          { item: itemList.energy_nectar, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 4 },
          { item: itemList.ley_line_sprouts, amount: 18 },
          { item: itemList.energy_nectar, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  song_of_broken_pines: {
    name: 'Song of Broken Pines',
    id: 'song_of_broken_pines',
    rarity: 5,
    atk: 46,
    secondary: 'Physical DMG Bonus',
    type: weapons.claymore,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 5 },
          { item: itemList.heavy_horn, amount: 5 },
          { item: itemList.damaged_mask, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 5 },
          { item: itemList.heavy_horn, amount: 18 },
          { item: itemList.damaged_mask, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 9 },
          { item: itemList.black_bronze_horn, amount: 9 },
          { item: itemList.stained_mask, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 5 },
          { item: itemList.black_bronze_horn, amount: 18 },
          { item: itemList.stained_mask, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 9 },
          { item: itemList.black_crystal_horn, amount: 14 },
          { item: itemList.ominous_mask, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 6 },
          { item: itemList.black_crystal_horn, amount: 27 },
          { item: itemList.ominous_mask, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  mitternachts_waltz: {
    name: 'Mitternachts Waltz',
    id: 'mitternachts_waltz',
    rarity: 4,
    atk: 42,
    secondary: 'Phys DMG%',
    type: weapons.bow,
    source: 'Wish',
    ascension: [
      {
        items: [
          { item: itemList.tile_of_decarabians_tower, amount: 3 },
          { item: itemList.heavy_horn, amount: 3 },
          { item: itemList.treasure_hoarder_insignia, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 3 },
          { item: itemList.heavy_horn, amount: 12 },
          { item: itemList.treasure_hoarder_insignia, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.debris_of_decarabians_city, amount: 6 },
          { item: itemList.black_bronze_horn, amount: 6 },
          { item: itemList.silver_raven_insignia, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 3 },
          { item: itemList.black_bronze_horn, amount: 12 },
          { item: itemList.silver_raven_insignia, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.fragment_of_decarabians_epic, amount: 6 },
          { item: itemList.black_crystal_horn, amount: 9 },
          { item: itemList.golden_raven_insignia, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.scattered_piece_of_decarabians_dream, amount: 4 },
          { item: itemList.black_crystal_horn, amount: 18 },
          { item: itemList.golden_raven_insignia, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  dodoco_tales: {
    name: 'Dodoco Tales',
    id: 'dodoco_tales',
    rarity: 4,
    atk: 42,
    secondary: 'Phys DMG%',
    type: weapons.catalyst,
    source: 'Midsummer Island Adventure Event',
    ascension: [
      {
        items: [
          { item: itemList.boreal_wolfs_milk_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 3 },
          { item: itemList.damaged_mask, amount: 2 },
        ],
        mora: 5000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 3 },
          { item: itemList.dead_ley_line_branch, amount: 12 },
          { item: itemList.damaged_mask, amount: 8 },
        ],
        mora: 15000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_cracked_tooth, amount: 6 },
          { item: itemList.dead_ley_line_leaves, amount: 6 },
          { item: itemList.stained_mask, amount: 6 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 3 },
          { item: itemList.dead_ley_line_leaves, amount: 12 },
          { item: itemList.stained_mask, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_broken_fang, amount: 6 },
          { item: itemList.ley_line_sprouts, amount: 9 },
          { item: itemList.ominous_mask, amount: 6 },
        ],
        mora: 35000,
      },
      {
        items: [
          { item: itemList.boreal_wolfs_nostalgia, amount: 4 },
          { item: itemList.ley_line_sprouts, amount: 18 },
          { item: itemList.ominous_mask, amount: 12 },
        ],
        mora: 45000,
      },
    ],
  },
  'freedom-sworn': {
    name: 'Freedom-Sworn',
    id: 'freedom-sworn',
    rarity: 5,
    atk: 46,
    secondary: 'Elemental Mastery',
    type: weapons.sword,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.fetters_of_the_dandelion_gladiator, amount: 5 },
          { item: itemList.chaos_device, amount: 5 },
          { item: itemList.divining_scroll, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 5 },
          { item: itemList.chaos_device, amount: 18 },
          { item: itemList.divining_scroll, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.chains_of_the_dandelion_gladiator, amount: 9 },
          { item: itemList.chaos_circuit, amount: 9 },
          { item: itemList.sealed_scroll, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 5 },
          { item: itemList.chaos_circuit, amount: 18 },
          { item: itemList.sealed_scroll, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.shackles_of_the_dandelion_gladiator, amount: 9 },
          { item: itemList.chaos_core, amount: 14 },
          { item: itemList.forbidden_curse_scroll, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.dream_of_the_dandelion_gladiator, amount: 6 },
          { item: itemList.chaos_core, amount: 27 },
          { item: itemList.forbidden_curse_scroll, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
  mistsplitter_reforged: {
    name: 'Mistsplitter Reforged',
    id: 'mistsplitter_reforged',
    rarity: 5,
    atk: 48,
    secondary: 'CRIT DMG',
    type: weapons.sword,
    source: 'wish',
    ascension: [
      {
        items: [
          { item: itemList.coral_branch_of_a_distant_sea, amount: 5 },
          { item: itemList.chaos_gear, amount: 5 },
          { item: itemList.old_handguard, amount: 3 },
        ],
        mora: 10000,
      },
      {
        items: [
          { item: itemList.jeweled_branch_of_a_distant_sea, amount: 5 },
          { item: itemList.chaos_gear, amount: 18 },
          { item: itemList.old_handguard, amount: 12 },
        ],
        mora: 20000,
      },
      {
        items: [
          { item: itemList.jeweled_branch_of_a_distant_sea, amount: 9 },
          { item: itemList.chaos_axis, amount: 9 },
          { item: itemList.kageuchi_handguard, amount: 9 },
        ],
        mora: 30000,
      },
      {
        items: [
          { item: itemList.jade_branch_of_a_distant_sea, amount: 5 },
          { item: itemList.chaos_axis, amount: 18 },
          { item: itemList.kageuchi_handguard, amount: 14 },
        ],
        mora: 45000,
      },
      {
        items: [
          { item: itemList.jade_branch_of_a_distant_sea, amount: 9 },
          { item: itemList.chaos_oculus, amount: 14 },
          { item: itemList.famed_handguard, amount: 9 },
        ],
        mora: 55000,
      },
      {
        items: [
          { item: itemList.golden_branch_of_a_distant_sea, amount: 6 },
          { item: itemList.chaos_oculus, amount: 27 },
          { item: itemList.famed_handguard, amount: 18 },
        ],
        mora: 65000,
      },
    ],
  },
};
