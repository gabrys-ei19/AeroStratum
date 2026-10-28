ServerEvents.recipes(event => {

    // 1. BASIC PROCESSOR
    event.recipes.create.sequenced_assembly(
        ['refinedstorage:basic_processor'], 
        'createages:zinc_mechanism', 
        [
            event.recipes.create.pressing('kubejs:incomplete_printed_circuit', 'ftbmaterials:silicon_ingot'),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'create:polished_rose_quartz']),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'refinedstorage:processor_binding']),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'minecraft:iron_ingot']),
            event.recipes.create.pressing('kubejs:incomplete_printed_circuit', 'kubejs:incomplete_printed_circuit')
        ]
    ).transitionalItem('kubejs:incomplete_printed_circuit').loops(1).id('kubejs:assembly/basic_processor_v2')

    // 2. IMPROVED PROCESSOR
    event.recipes.create.sequenced_assembly(
        ['refinedstorage:improved_processor'], 
        'createages:zinc_mechanism', 
        [
            event.recipes.create.pressing('kubejs:incomplete_printed_circuit', 'ftbmaterials:silicon_ingot'),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'create:polished_rose_quartz']),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'refinedstorage:processor_binding']),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'minecraft:gold_ingot']),
            event.recipes.create.pressing('kubejs:incomplete_printed_circuit', 'kubejs:incomplete_printed_circuit')
        ]
    ).transitionalItem('kubejs:incomplete_printed_circuit').loops(1).id('kubejs:assembly/improved_processor_v2')

    // 3. ADVANCED PROCESSOR
    event.recipes.create.sequenced_assembly(
        ['refinedstorage:advanced_processor'], 
        'createages:zinc_mechanism', 
        [
            event.recipes.create.pressing('kubejs:incomplete_printed_circuit', 'ftbmaterials:silicon_ingot'),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'create:polished_rose_quartz']),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'refinedstorage:processor_binding']),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'minecraft:diamond']),
            event.recipes.create.pressing('kubejs:incomplete_printed_circuit', 'kubejs:incomplete_printed_circuit')
        ]
    ).transitionalItem('kubejs:incomplete_printed_circuit').loops(1).id('kubejs:assembly/advanced_processor_v2')

    // // 4. WITHERING PROCESSOR
    // event.recipes.create.sequenced_assembly(
    //     ['extradisks:withering_processor'], 
    //     'createages:zinc_mechanism', 
    //     [
    //         event.recipes.create.pressing('kubejs:incomplete_printed_circuit', 'ftbmaterials:silicon_ingot'),
    //         event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'create:polished_rose_quartz']),
    //         event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'refinedstorage:processor_binding']),
    //         event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'minecraft:nether_star']),
    //         event.recipes.create.pressing('kubejs:incomplete_printed_circuit', 'kubejs:incomplete_printed_circuit')
    //     ]
    // ).transitionalItem('kubejs:incomplete_printed_circuit').loops(1).id('kubejs:assembly/withering_processor_v2')

    // 5. NEURAL PROCESSOR
    event.recipes.create.sequenced_assembly(
        ['extrastorage:neural_processor'], 
        'createages:zinc_mechanism', 
        [
            event.recipes.create.pressing('kubejs:incomplete_printed_circuit', 'ftbmaterials:silicon_ingot'),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'create:polished_rose_quartz']),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'refinedstorage:processor_binding']),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'refinedstorage:destruction_core']),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'refinedstorage:construction_core']),
            event.recipes.create.pressing('kubejs:incomplete_printed_circuit', 'kubejs:incomplete_printed_circuit')
        ]
    ).transitionalItem('kubejs:incomplete_printed_circuit').loops(1).id('kubejs:assembly/neural_processor_v2')

    // 5. CONSTRUCTION CORE
    event.recipes.create.sequenced_assembly(
        ['refinedstorage:construction_core'], 
        'refinedstorage:basic_processor', 
        [
            event.recipes.create.deploying('refinedstorage:construction_core', ['refinedstorage:basic_processor', 'minecraft:glowstone_dust']),
            event.recipes.create.pressing('refinedstorage:construction_core', 'refinedstorage:construction_core'),
        ]
    ).transitionalItem('refinedstorage:construction_core').loops(2).id('kubejs:assembly/construction_core_v2'),

    // 5. DESTRUCTION CORE
    event.recipes.create.sequenced_assembly(
        ['refinedstorage:destruction_core'], 
        'refinedstorage:basic_processor', 
        [
            event.recipes.create.deploying('refinedstorage:destruction_core', ['refinedstorage:basic_processor', 'minecraft:quartz']),
            event.recipes.create.pressing('refinedstorage:destruction_core', 'refinedstorage:destruction_core'),
        ]
    ).transitionalItem('refinedstorage:destruction_core').loops(2).id('kubejs:assembly/destruction_core_v2')

    // 6. TUNED CRYSTAL
    event.recipes.create.sequenced_assembly(
        ['kubejs:tuned_crystal'],
        'minecraft:amethyst_shard',
        [
            event.recipes.create.filling('kubejs:incomplete_tuned_crystal', ['kubejs:incomplete_tuned_crystal', Fluid.of('productivemetalworks:molten_redstone', 450)]),
            event.recipes.create.deploying('kubejs:incomplete_tuned_crystal', ['kubejs:incomplete_tuned_crystal', 'create:precision_mechanism']),
            event.recipes.create.deploying('kubejs:incomplete_tuned_crystal', ['kubejs:incomplete_tuned_crystal', 'create:electron_tube']),
            event.recipes.create.pressing('kubejs:incomplete_tuned_crystal', 'kubejs:incomplete_tuned_crystal')
        ]
    ).transitionalItem('kubejs:incomplete_tuned_crystal').loops(2).id('kubejs:assembly/tuned_crystal_v2')

    // 7. CALIBRATED MECHANISM
    event.recipes.create.sequenced_assembly(
        ['kubejs:frequency_mechanism'],
        'create:sturdy_sheet',
        [
            event.recipes.create.deploying('kubejs:incomplete_frequency_mechanism', ['kubejs:incomplete_frequency_mechanism', 'create:precision_mechanism']),
            event.recipes.create.deploying('kubejs:incomplete_frequency_mechanism', ['kubejs:incomplete_frequency_mechanism', 'createages:zinc_mechanism']),
            event.recipes.create.pressing('kubejs:incomplete_frequency_mechanism', 'kubejs:incomplete_frequency_mechanism'),
            event.recipes.create.filling('kubejs:incomplete_frequency_mechanism', ['kubejs:incomplete_frequency_mechanism', Fluid.of('productivemetalworks:molten_electrum', 180)]),
            event.recipes.create.pressing('kubejs:incomplete_frequency_mechanism', 'kubejs:incomplete_frequency_mechanism'),
            event.recipes.create.deploying('kubejs:incomplete_frequency_mechanism', ['kubejs:incomplete_frequency_mechanism', 'kubejs:tuned_crystal'])
        ]
    ).transitionalItem('kubejs:incomplete_frequency_mechanism').loops(2).id('kubejs:assembly/frequency_mechanism_v2')

    // ==========================================
    // 1. GYROSCOPIC MECHANISM (Create Simulated)
    // ==========================================

    event.recipes.create.sequenced_assembly(
        ['simulated:gyroscopic_mechanism'],
        'create:iron_sheet',
        [
            event.recipes.create.deploying('simulated:gyroscopic_mechanism', ['simulated:gyroscopic_mechanism', 'create:cogwheel']),
            event.recipes.create.deploying('simulated:gyroscopic_mechanism', ['simulated:gyroscopic_mechanism', 'create:shaft']),
            event.recipes.create.deploying('simulated:gyroscopic_mechanism', ['simulated:gyroscopic_mechanism', 'create:brass_nugget'])
        ]
    ).transitionalItem('simulated:gyroscopic_mechanism').loops(5).id('kubejs:assembly/custom_gyroscopic_mechanism_v2'); // Nadajemy nasze własne unikalne ID!


    // ==========================================
    // 2. STEEL MECHANISM (TFMG)
    // ==========================================
   event.recipes.create.sequenced_assembly(
        ['tfmg:steel_mechanism'],
        'tfmg:heavy_plate',
        [
            event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:steel_cogwheel']),
            event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:nickel_sheet']),
            event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:large_steel_cogwheel']),
            event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:lead_sheet']),
            event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screw']),
            event.recipes.create.deploying('tfmg:unfinished_steel_mechanism', ['tfmg:unfinished_steel_mechanism', 'tfmg:screwdriver'])
        ]
    ).transitionalItem('tfmg:unfinished_steel_mechanism').loops(2).id('kubejs:assembly/custom_steel_mechanism_v2'); // Nasze własne ID dla nowej receptury
})