// =============================================================================
// ⚙️ ERA II: MOSIĄDZ, PETROCHEMIA I MOB GRINDING
// =============================================================================
// Ciężki Przemysł i Bezwzględna Wydajność
// Gracz wkracza w prawdziwy wiek przemysłowy, poznaje pierwsze filtry i inteligentne ramiona

ServerEvents.recipes(event => {

    console.log('[AeroStratum] ⚙️  Ładowanie receptur ERA II...')

    // ====== SILENT GEAR: Blueprint Paper & Gear Smithing Table ======


    // ====== REFINED STORAGE: Procesory (Smithing Table) ======
    // Basic Processor - via Smithing
    event.remove({ output: 'refinedstorage:basic_processor' })
    
    event.smithing(
        'refinedstorage:basic_processor',
        'create:brass_casing',                 // Template
        'refinedstorage:silicon',              // Base - Silicon
        'minecraft:iron_ingot'                 // Addition
    ).id('kubejs:basic_processor_smithing')

    // Improved Processor - via Smithing
    event.remove({ output: 'refinedstorage:improved_processor' })
    
    event.smithing(
        'refinedstorage:improved_processor',
        'create:brass_casing',                 // Template
        'refinedstorage:basic_processor',      // Base - Upgrade z Basic
        'minecraft:gold_ingot'                 // Addition
    ).id('kubejs:improved_processor_smithing')

    // ====== SILENT GEAR: Blueprint Paper & Gear Smithing Table ======
    // Papier do blueprintów - bramka do zaawansowanego craftu
    event.remove({ output: 'silentgear:blueprint_paper' })
    event.remove({ output: 'silentgear:gear_smithing_table' })

    // Blueprint Paper wymaga teraz prasowania z mosiądzem
    event.recipes.create.pressing('silentgear:blueprint_paper', [
        'minecraft:paper',
        'create:brass_sheet',
        'lightmanscurrency:coin_copper'
    ])

    // Gear Smithing Table wymaga obudowy z TFMG stali
    event.shaped('silentgear:gear_smithing_table', [
        'SPS',
        'MCM',
        'BBB'
    ], {
        S: 'create_tfmg:steel_ingot',
        P: 'create:precision_mechanism',
        M: 'kubejs:brass_machine',  // BRAMKA ERA II
        C: 'minecraft:crafting_table',
        B: 'create:brass_casing'
    })

    // Sequenced Assembly dla Mosiężnej Maszyny
    event.recipes.create.sequenced_assembly([
        'kubejs:brass_machine'
    ], 'create:brass_casing', [
        event.recipes.createDeploying('create:brass_casing', ['create:precision_mechanism']),
        event.recipes.createPressing('create:brass_casing'),
        event.recipes.createDeploying('create:brass_casing', ['create:electron_tube'])
    ]).transitionalItem('create:brass_casing').loops(4)


    // ====== MOB GRINDING UTILS ======
    // Maszyna do mielenia mobów - wymaga stali z TFMG
    event.remove({ output: 'mob_grinding_utils:saw' })
    
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


    // ====== CREATE: THE FACTORY MUST GROW (TFMG) ======
    // Rafineria (Distillation Controller) - centrum Era II

    // Regulator destylacji wymaga zaawansowanej konfiguracji
    event.remove({ output: 'create_tfmg:distillation_controller' })
    
    event.recipes.create.mechanical_crafting('create_tfmg:distillation_controller', [
        ' PCP ',
        'PBSBP',
        'BS SS',
        'PBSBP',
        ' PCP '
    ], {
        P: 'create:precision_mechanism',
        C: 'create:brass_casing',
        B: 'create_tfmg:brass_ingot',
        S: 'create_tfmg:steel_ingot'
    })


    // ====== SOPHISTICATED STORAGE ======
    // Zaawansowane pojemniki wymagają teraz mosiądzu
    event.remove({ output: 'sophisticatedstorage:oak_barrel' })
    
    event.shaped('sophisticatedstorage:oak_barrel', [
        'WBW',
        'B B',
        'WBW'
    ], {
        W: 'minecraft:oak_log',
        B: 'create:brass_casing'
    })

    event.remove({ output: 'sophisticatedstorage:oak_cabinet' })
    
    event.shaped('sophisticatedstorage:oak_cabinet', [
        'BBB',
        'BCB',
        'BBB'
    ], {
        B: 'create:brass_casing',
        C: 'minecraft:chest'
    })


    // ====== LIGHTMAN'S CURRENCY: Wyższych Nominałów ======
    // Monety srebrne i złote z presowania
    event.remove({ output: 'lightmanscurrency:coin_silver' })
    event.recipes.create.pressing(
        'lightmanscurrency:coin_silver',
        'minecraft:silver_ingot'
    )

    event.remove({ output: 'lightmanscurrency:coin_gold' })
    event.recipes.create.pressing(
        'lightmanscurrency:coin_gold',
        'minecraft:gold_ingot'
    )


    // ====== CREATE MECHANICAL COMPONENTS ======
    // Części mechaniczne są teraz ograniczone do TFMG stali
    event.remove({ output: 'create_tfmg:cutting_tool' })
    
    event.shaped('create_tfmg:cutting_tool', [
        ' S ',
        'SIS',
        ' S '
    ], {
        S: 'create_tfmg:steel_ingot',
        I: 'minecraft:iron_ingot'
    })


    // ====== CHAMPIONS: Rangi Mobów ======
    // Zmuszamy gracza do czyszczenia areny, aby zdobyć rzadkie loot
    event.remove({ output: 'champions:champion_loot' })


    console.log('[AeroStratum] ✅ ERA II receptury załadowane!')

})
