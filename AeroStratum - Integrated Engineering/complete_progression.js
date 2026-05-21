ServerEvents.recipes(event => {

    // =========================================================================
    // 🪵 ERA I: RDZEŃ ANDEZYTU (Wczesna mechanika i surowa cyfryzacja)
    // =========================================================================
    
    // 1. Refined Storage (RS) - Blokada taniego Kontrolera
    event.remove({ output: 'refinedstorage:controller' })
    event.recipes.create.mechanical_crafting('refinedstorage:controller', [
        'AQA',
        'SMS',
        'ABA'
    ], {
        A: 'create:andesite_alloy',
        Q: 'minecraft:quartz',
        S: 'create:cogwheel',
        M: 'create:andesite_mashine',           // Pierwszy "hard-gate"
        B: 'lightmanscurrency:coin_copper'
    })

    // 2. Storage Drawers - Szuflady wymagają teraz andezytu (koniec z darmowym drewnianym magazynem)
    event.remove({ output: 'storage_drawers:oak_full_drawers_1' })
    event.shaped('storage_drawers:oak_full_drawers_1', [
        'WNW',
        'WCW',
        'WNW'
    ], {
        W: 'minecraft:oak_planks',
        N: 'create:andesite_alloy',
        C: 'minecraft:chest'
    })


    // =========================================================================
    // ⚙️ ERA II: MOSIĄDZ, PETROCHEMIA I MOB GRINDING (Ciężki Przemysł)
    // =========================================================================
    
    // 3. Silent Gear - Papier do blueprintów zablokowany za Mosiężną Prasą
    event.remove({ output: 'silentgear:gear_smithing_table' })
    event.remove({ output: 'silentgear:blueprint_paper' })

    event.recipes.create.pressing('silentgear:blueprint_paper', [
        'minecraft:paper',
        'create:brass_sheet',
        'lightmanscurrency:coin_copper'
    ])

    // 4. Create: The Factory Must Grow (TFMG) - Rafineria (Distillation Controller)
    // Blokujemy łatwy dostęp do ropy - stół kowalski Silent Gear wymaga komponentów z rafinerii
    event.shaped('silentgear:gear_smithing_table', [
        'SPS',
        'MCM',
        'BBB'
    ], {
        S: 'create_tfmg:steel_ingot',          // Wymaga stali z TFMG!
        P: 'create:precision_mechanism',
        C: 'minecraft:crafting_table',
        B: 'create:brass_casing'
    })

    // 5. Integration: Mob Grinding Utils zablokowane za Stalą z TFMG
    // Moby utylizujemy mechanicznie, nie magicznie!
    event.remove({ output: 'mob_grinding_utils:saw' }) // Tarka do mobów
    event.shaped('mob_grinding_utils:saw', [
        'SGS',
        'RMR',
        'SGS'
    ], {
        S: 'create_tfmg:steel_ingot',
        G: 'create:cogwheel',
        R: 'minecraft:redstone',
        M: 'create:precision_mechanism'
    })


    // =========================================================================
    // ⚛️ ERA III: ATOM, DIESEL I LOTNICTWO (Globalny Endgame i Bezprzewodowość)
    // =========================================================================
    
    // 6. Refined Storage - Bezprzewodowość wymaga zaawansowanej technologii
    event.remove({ output: 'refinedstorage:wireless_transmitter' })
    event.recipes.create.mechanical_crafting('refinedstorage:wireless_transmitter', [
        ' U ',
        'NMN',
        ' B '
    ], {
        U: 'create_nuclear:uranium_ingot',      // Wymóg czystego Uranu z reaktora!
        N: 'create_nuclear:lead_ingot',          // Ołów jako osłona przed promieniowaniem
        M: 'create:precision_mechanism',
        B: 'create:brass_casing'
    })

    // 7. RSInfinityBooster - Karta Nieskończonego Zasięgu dla Sterowców (Aeronautics)
    // Aby sterowiec w Deep Dark miał dostęp do bazy, musisz "przepalić" zasoby z reaktora
    event.remove({ output: 'rsinfinitybooster:infinity_card' })
    event.recipes.create.sequenced_assembly([
        'rsinfinitybooster:infinity_card'
    ], 'refinedstorage:advanced_processor', [
        event.recipes.createDeploying('refinedstorage:advanced_processor', ['create_nuclear:uranium_ingot']),
        event.recipes.createPressing('refinedstorage:advanced_processor'),
        event.recipes.createDeploying('refinedstorage:advanced_processor', ['lightmanscurrency:coin_gold']) // Złota moneta jako koszt licencji
    ]).transitionalItem('refinedstorage:advanced_processor').loops(4)

    // 8. Create Aeronautics / Big Cannons - Ciężka amunicja wymaga paliwa z Diesla
    // (Opcjonalnie: upewniamy się, że silniki lotnicze wymagają wysokiej jakości stali)
    event.remove({ output: 'createbigcannons:built_up_barrel' })
    event.recipes.create.mechanical_crafting('createbigcannons:built_up_barrel', [
        'SSS',
        'S S',
        'SSS'
    ], {
        S: 'create_tfmg:steel_block' // Tylko rafinowana stal przemysłowa
    })
})