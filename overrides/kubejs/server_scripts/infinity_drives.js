ServerEvents.recipes(event => {
    // 1. Usunięcie domyślnej, taniej receptury na Empty Infinity Drive
    event.remove({ output: 'infinitystorage:empty_infinity_drive' })

    // Remove the default filled drive recipes
    event.remove({ output: 'infinitystorage:infinity_cobblestone_drive' })
    event.remove({ output: 'infinitystorage:infinity_storage_drive' })
    event.remove({ output: 'infinitystorage:infinity_water_drive' })
    event.remove({ output: 'infinitystorage:infinity_lava_drive' })

    // =========================================================================
    // 2. SEQUENCED ASSEMBLY: Produkcja obudowy (Empty Infinity Drive)
    // =========================================================================
    let transHousing = 'infinitystorage:empty_infinity_drive' // Pamiętaj zarejestrować to w startup_scripts!

    event.recipes.create.sequenced_assembly(
        ['infinitystorage:empty_infinity_drive'],
        'refinedstorage:storage_housing', // Baza wjeżdżająca na taśmę
        [
            event.recipes.create.deploying(transHousing, [transHousing, 'kubejs:digital_drawer']),
            event.recipes.create.deploying(transHousing, [transHousing, 'kubejs:digital_tank']),
            event.recipes.create.deploying(transHousing, [transHousing, 'refinedstorage:advanced_processor']),
            event.recipes.create.deploying(transHousing, [transHousing, 'extrastorage:neural_processor']),
            event.recipes.create.deploying(transHousing, [transHousing, 'create:brass_sheet']),
            event.recipes.create.pressing(transHousing, transHousing)
        ]
    )
    .transitionalItem(transHousing)
    .loops(2)
    .id('kubejs:assembly/empty_infinity_drive')

    // =========================================================================
    // 3. STÓŁ KOWALSKI: Integracja skompresowanych bloków (6x) z rdzeniami er
    // Szablon: mechanizm ery | Baza: empty_infinity_drive | Dodatek: blok 6x
    // =========================================================================
    let emptyDrive = 'infinitystorage:empty_infinity_drive'

    event.smithing('infinitystorage:infinity_storage_drive', 'create:precision_mechanism', 'refinedstorage:disk_drive', 'extrastorage:neural_processor').id('kubejs:smithing/infinity_storage_drive')

    // ERA 2 (Szablon: Precision Mechanism)
    event.smithing('kubejs:infinity_dirt_drive', 'create:precision_mechanism', emptyDrive, 'createcompression:compressed_dirt_7x').id('kubejs:smithing/infinity_dirt')
    event.smithing('infinitystorage:infinity_cobblestone_drive', 'create:precision_mechanism', emptyDrive, 'createcompression:compressed_cobblestone_7x').id('kubejs:smithing/infinity_cobblestone')
    event.smithing('kubejs:infinity_sand_drive', 'create:precision_mechanism', emptyDrive, 'createcompression:compressed_sand_7x').id('kubejs:smithing/infinity_sand')

    // ERA 3 (Szablon: Frequency Mechanism)
    event.smithing('kubejs:infinity_netherrack_drive', 'kubejs:frequency_mechanism', emptyDrive, 'createcompression:compressed_netherrack_7x').id('kubejs:smithing/infinity_netherrack')
    // Uwaga: Użyj ID łupku dokładnie tak, jak zarejestrowałeś (jeśli było z kropką kube.js, wpisz z kropką, ale zalecam poprawić na kubejs:)
    event.smithing('kubejs:infinity_deepslate_drive', 'kubejs:frequency_mechanism', emptyDrive, 'createcompression:compressed_deepslate_7x').id('kubejs:smithing/infinity_deepslate')
    event.smithing('kubejs:infinity_basalt_drive', 'kubejs:frequency_mechanism', emptyDrive, 'createcompression:compressed_basalt_7x').id('kubejs:smithing/infinity_basalt')

    // ERA 4 (Szablon: Calibrated Eye)
    event.smithing('kubejs:infinity_endstone_drive', 'kubejs:calibrated_eye', emptyDrive, 'createcompression:compressed_end_stone_7x').id('kubejs:smithing/infinity_endstone')

    event.recipes.create.sequenced_assembly(
        ['infinitystorage:infinity_lava_drive'],
        'infinitystorage:empty_infinity_drive', // Baza wjeżdżająca na taśmę
        [
            event.recipes.create.deploying(transHousing, [transHousing, 'create:precision_mechanism']),
            event.recipes.create.filling(transHousing, [transHousing, Fluid.of('minecraft:lava', 4000)]),
            event.recipes.create.pressing(transHousing, transHousing),
            event.recipes.create.filling(transHousing, [transHousing, Fluid.of('minecraft:lava', 4000)]),
            event.recipes.create.pressing(transHousing, transHousing)
        ]
    ).transitionalItem(transHousing).loops(4).id('kubejs:assembly/infinity_lava_drive')

    event.recipes.create.sequenced_assembly(
        ['infinitystorage:infinity_water_drive'],
        'infinitystorage:empty_infinity_drive', // Baza wjeżdżająca na taśmę
        [
            event.recipes.create.deploying(transHousing, [transHousing, 'kubejs:frequency_mechanism']),
            event.recipes.create.filling(transHousing, [transHousing, Fluid.of('minecraft:water', 4000)]),
            event.recipes.create.pressing(transHousing, transHousing),
            event.recipes.create.filling(transHousing, [transHousing, Fluid.of('minecraft:water', 4000)]),
            event.recipes.create.pressing(transHousing, transHousing)
        ]
    ).transitionalItem(transHousing).loops(4).id('kubejs:assembly/infinity_water_drive')

    event.recipes.create.sequenced_assembly(
        ['kubejs:infinity_dragon_breath_drive'],
        'infinitystorage:empty_infinity_drive', // Baza wjeżdżająca na taśmę
        [
            event.recipes.create.deploying(transHousing, [transHousing, 'kubejs:calibrated_eye']),
            event.recipes.create.filling(transHousing, [transHousing, Fluid.of('create_dragons_plus:dragon_breath', 4000)]),
            event.recipes.create.pressing(transHousing, transHousing),
            event.recipes.create.filling(transHousing, [transHousing, Fluid.of('create_dragons_plus:dragon_breath', 4000)]),
            event.recipes.create.pressing(transHousing, transHousing)
        ]
    ).transitionalItem(transHousing).loops(4).id('kubejs:assembly/infinity_dragon_breath_drive')
})