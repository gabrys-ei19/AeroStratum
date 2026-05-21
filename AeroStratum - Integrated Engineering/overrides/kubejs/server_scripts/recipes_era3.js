// =============================================================================
// ⚛️ ERA III: ATOM, DIESEL I FLOTA POWIETRZNA
// =============================================================================
// Globalny Endgame i Bezprzewodowość
// Gracz buduje reaktory jądrowe, rafinerie diesla i ogromne statki powietrzne

ServerEvents.recipes(event => {

    console.log('[AeroStratum] ⚛️  Ładowanie receptur ERA III...')

    // ====== REFINED STORAGE: Advanced Processor (Smithing) ======
    event.remove({ output: 'refinedstorage:advanced_processor' })
    
    event.smithing(
        'refinedstorage:advanced_processor',
        'create:brass_casing',                 // Template
        'refinedstorage:improved_processor',   // Base - Upgrade z Improved
        'minecraft:diamond'                    // Addition
    ).id('kubejs:advanced_processor_smithing')

    // ====== REFINED STORAGE: Wireless Transmission ======
    // Bezprzewodowość wymaga urantu i ołowiu
    event.remove({ output: 'refinedstorage:wireless_transmitter' })
    
    event.recipes.create.mechanical_crafting('refinedstorage:wireless_transmitter', [
        ' U ',
        'NMN',
        ' C '
    ], {
        U: 'create_nuclear:uranium_ingot',
        N: 'create_nuclear:lead_ingot',
        M: 'create:precision_mechanism',
        C: 'create:brass_casing'
    })

    event.remove({ output: 'refinedstorage:wireless_receiver' })
    
    event.recipes.create.mechanical_crafting('refinedstorage:wireless_receiver', [
        ' U ',
        'NMN',
        ' C '
    ], {
        U: 'create_nuclear:uranium_ingot',
        N: 'create_nuclear:lead_ingot',
        M: 'create:precision_mechanism',
        C: 'create:brass_casing'
    })


    // ====== RS INFINITY BOOSTER: Infinity Card ======
    // Karta Nieskończonego Zasięgu - wymaga zaawansowanego procesora i uranu
    event.remove({ output: 'rsinfinitybooster:infinity_card' })
    
    event.recipes.create.sequenced_assembly([
        'rsinfinitybooster:infinity_card'
    ], 'refinedstorage:advanced_processor', [
        event.recipes.createDeploying('refinedstorage:advanced_processor', ['create_nuclear:uranium_ingot']),
        event.recipes.createPressing('refinedstorage:advanced_processor'),
        event.recipes.createDeploying('refinedstorage:advanced_processor', ['lightmanscurrency:coin_gold']),
        event.recipes.createPressing('refinedstorage:advanced_processor')
    ]).transitionalItem('refinedstorage:advanced_processor').loops(4)


    // ====== CREATE NUCLEAR: Reaktor Jądrowy ======
    // Reaktor wymaga zaawansowanej infrastruktury
    event.remove({ output: 'create_nuclear:reactor_core' })
    
    event.recipes.create.mechanical_crafting('create_nuclear:reactor_core', [
        'LSL',
        'SCS',
        'LSL'
    ], {
        L: 'create_nuclear:lead_block',
        S: 'create_tfmg:steel_block',
        C: 'create:brass_casing'
    })


    // ====== CREATE: THE FACTORY MUST GROW (TFMG): Diesel Engine ======
    // Silnik dieslowy - logistyka transportu poziomego
    event.remove({ output: 'create_tfmg:diesel_engine' })
    
    event.shaped('create_tfmg:diesel_engine', [
        'SBS',
        'BEB',
        'SBS'
    ], {
        S: 'create_tfmg:steel_block',
        B: 'create:brass_casing',
        E: 'create_tfmg:engine_frame'
    })


    // ====== CREATE BIG CANNONS: Armaty ======
    // Ciężka amunicja wymaga stalowych bloków i precyzji
    event.remove({ output: 'createbigcannons:built_up_barrel' })
    
    event.recipes.create.mechanical_crafting('createbigcannons:built_up_barrel', [
        'SSS',
        'S S',
        'SSS'
    ], {
        S: 'create_tfmg:steel_block'
    })

    event.remove({ output: 'createbigcannons:cannon_base' })
    
    event.recipes.create.mechanical_crafting('createbigcannons:cannon_base', [
        'SCS',
        'CBC',
        'SCS'
    ], {
        S: 'create_tfmg:steel_block',
        C: 'create:brass_casing',
        B: 'create_tfmg:brass_block'
    })


    // ====== NUMISMATICS: Wysokowartościowe Monety ======
    // Monety platynowe - wymuszamy zaawansowaną produkcję
    event.remove({ output: 'numismatics:credit_card' })
    
    event.recipes.create.mechanical_crafting('numismatics:credit_card', [
        ' GM ',
        'GDG',
        ' GM '
    ], {
        G: 'lightmanscurrency:coin_gold',
        M: 'create:precision_mechanism',
        D: 'minecraft:diamond'
    })


    // ====== SILENT GEAR: Mityczne Ulepszenia ======
    // Bluepriny dla najwyższych tieru - wymuszają wielkie projekty
    event.remove({ output: 'silentgear:tyranium_gear' })
    
    event.recipes.create.sequenced_assembly([
        'silentgear:tyranium_gear'
    ], 'silentgear:bort_gear', [
        event.recipes.createDeploying('silentgear:bort_gear', ['create_nuclear:uranium_ingot']),
        event.recipes.createPressing('silentgear:bort_gear'),
        event.recipes.createDeploying('silentgear:bort_gear', ['create:precision_mechanism'])
    ]).transitionalItem('silentgear:bort_gear').loops(3)


    // ====== CHUNKS LOADING: FTB Chunks Optimization ======
    // Force-loading wymaga zaawansowanej technologii
    event.remove({ output: 'ftbchunks:chunk_loader' })
    
    event.recipes.create.mechanical_crafting('ftbchunks:chunk_loader', [
        'GMT',
        'MCM',
        'GMT'
    ], {
        G: 'lightmanscurrency:coin_gold',
        M: 'create:precision_mechanism',
        T: 'create_nuclear:lead_ingot',
        C: 'create:brass_casing'
    })


    console.log('[AeroStratum] ✅ ERA III receptury załadowane!')

})
