// =============================================================================
// AEROSTRATUM - Global Configuration
// =============================================================================
// Zmienne globalne dostępne we wszystkich skryptach KubeJS

// Flag system do śledzenia postępu gracza
global.playerProgress = {}

// Ery progresji
global.ERAS = {
    ANDESITE: 1,      // ERA I
    AGES: 1.5,        // ERA I.5 - Wczesna Petrochemia
    BRASS: 2,         // ERA II
    NUCLEAR: 3,       // ERA III
    AIRCRAFT: 4       // ERA IV
}

// Bramki dostępu do er
global.ERA_GATES = {
    [global.ERAS.ANDESITE]: 'kubejs:andesite_machine',
    [global.ERAS.AGES]: 'kubejs:ages_machine',
    [global.ERAS.BRASS]: 'kubejs:brass_machine',
    [global.ERAS.NUCLEAR]: 'create_nuclear:reactor_core',
    [global.ERAS.AIRCRAFT]: 'kubejs:flight_core'
}

// Tagi itemów dla ER
global.ERA_REQUIREMENTS = {
    [global.ERAS.ANDESITE]: [
        'kubejs:andesite_machine',
        'create:andesite_alloy',
        'create:cogwheel'
    ],
    [global.ERAS.AGES]: [
        'kubejs:ages_machine',
        'createages:copper_mechanism',
        'create:copper_casing',
        'create:electron_tube'
    ],
    [global.ERAS.BRASS]: [
        'kubejs:brass_machine',
        'create_tfmg:steel_ingot',
        'create:precision_mechanism',
        'create:brass_sheet'
    ],
    [global.ERAS.NUCLEAR]: [
        'create_nuclear:uranium_ingot',
        'create_nuclear:lead_ingot',
        'rsinfinitybooster:infinity_card'
    ],
    [global.ERAS.AIRCRAFT]: [
        'apotheosis:gem',
        'minecraft:warden_skull',
        'silentgear:tyranium_gear'
    ]
}

// Energia i zasoby
global.ENERGY_SOURCES = [
    'create:water_wheel',
    'create:windmill',
    'create_tfmg:diesel_engine',
    'create_nuclear:reactor_core'
]

// Komponenty logistyki
global.LOGISTICS = [
    'create:chute',
    'create:mechanical_arm',
    'create_factory_logistics:belt_extension'
]

// Monety
global.COINS = [
    'lightmanscurrency:coin_copper',
    'lightmanscurrency:coin_silver',
    'lightmanscurrency:coin_gold'
]

console.log('[AeroStratum] 🎯 Globalne zmienne załadowane')
