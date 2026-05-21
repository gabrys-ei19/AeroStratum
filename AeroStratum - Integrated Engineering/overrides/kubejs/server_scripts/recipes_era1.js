// =============================================================================
// 🪵 ERA I: RDZEŃ ANDEZYTU
// =============================================================================
// Wczesna mechanika i surowa cyfryzacja
// Gracz odkrywa siłę kinetyki i uczę się podstaw automatyzacji

ServerEvents.recipes(event => {

    console.log('[AeroStratum] 🪵 Ładowanie receptur ERA I...')

    // ====== REFINED STORAGE: Kontroler ======
    // Pierwsze duże wyzwanie - Kontroler RS wymaga teraz zaawansowanego rzemiosła
    // SMITHING TABLE RECIPE - jako zaawansowana transformacja
    event.remove({ output: 'refinedstorage:controller' })
    
    event.smithing(
        'refinedstorage:controller',
        'refinedstorage:machine_casing',       // Template - RS Machine Casing
        'create:andesite_machine',              // Base - wymaga andezytu, symbol ERA I
        'create:andesite_alloy'                // Addition
    ).id('kubejs:refinedstorage_controller_smithing')

    // Alternatywna shape recipe jeśli Smithing nie zadziała
    // event.recipes.create.mechanical_crafting('refinedstorage:controller', [
    //     'AQA',
    //     'SMS',
    //     'ABA'
    // ], {
    //     A: 'create:andesite_alloy',
    //     Q: 'minecraft:quartz',
    //     S: 'create:cogwheel',
    //     M: 'kubejs:andesite_machine',  // BRAMKA ERA I
    //     B: 'lightmanscurrency:coin_copper'
    // })

    // Wymuszamy, aby gracz najpierw wydobył andesite i zbudował podstawową produkcję
    event.recipes.create.sequenced_assembly([
        'kubejs:andesite_machine'
    ], 'create:andesite_casing', [
        event.recipes.createDeploying('create:andesite_casing', ['create:andesite_alloy']),
        event.recipes.createPressing('create:andesite_casing'),
        event.recipes.createDeploying('create:andesite_casing', ['create:cogwheel'])
    ]).transitionalItem('create:andesite_casing').loops(3)


    // ====== CREATE: AGES MACHINE - Wczesna Petrochemia ======
    // Ages Machine otwiera dostęp do wczesnych komponentów Petrochemii
    event.remove({ output: 'kubejs:ages_machine' })
    
    event.recipes.create.sequenced_assembly([
        'kubejs:ages_machine'
    ], 'create:copper_casing', [
        event.recipes.createDeploying('create:copper_casing', ['createages:copper_mechanism']),
        event.recipes.createPressing('create:copper_casing'),
        event.recipes.createDeploying('create:copper_casing', ['create:electron_tube'])
    ]).transitionalItem('create:copper_casing').loops(3)


    // ====== STORAGE DRAWERS ======
    // Szuflady - pierwsze wyzwanie magazynowania
    // Drewniane szuflady są teraz zbyt drogie - wymuszamy zbiór zasobów
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

    event.remove({ output: 'storage_drawers:oak_half_drawers_1' })
    event.shaped('storage_drawers:oak_half_drawers_1', [
        'WNW',
        'WCW'
    ], {
        W: 'minecraft:oak_planks',
        N: 'create:andesite_alloy',
        C: 'minecraft:chest'
    })


    // ====== LIGHTMAN'S CURRENCY ======
    // Monety są kluczowe dla ekonomii - ułatwiamy ich produkcję
    event.remove({ output: 'lightmanscurrency:coin_copper' })
    
    event.recipes.create.pressing(
        'lightmanscurrency:coin_copper',
        'minecraft:copper_ingot'
    )


    // ====== SOPHISTICATED BACKPACKS - Erste Limitierungen ======
    // Backpacki wymagają teraz zaawansowanego materiału
    event.remove({ output: 'sophisticatedbackpacks:backpack' })
    
    event.shaped('sophisticatedbackpacks:backpack', [
        'LCL',
        'WCW',
        'LWL'
    ], {
        L: 'minecraft:leather',
        C: 'minecraft:chest',
        W: 'minecraft:oak_log'
    })


    // ====== COMFORTS - Łóżka i hamaki ======
    // Wczesne spanie - komfort przemiany
    event.remove({ output: 'comforts:hammock' })
    
    event.shaped('comforts:hammock', [
        'SSS',
        'W W',
        ' L '
    ], {
        S: 'minecraft:string',
        W: 'minecraft:oak_log',
        L: 'minecraft:leather'
    })


    // ====== CHAMPIONS MOD - Arena Challenges ======
    // Zmuszamy gracza do walki, aby zdobyć bogate zasoby
    // (Receptury dla itemów z drop'ów mobów mogą być blokowane)


    console.log('[AeroStratum] ✅ ERA I receptury załadowane!')

})
