ServerEvents.recipes(event => {

    // 1. BASIC PROCESSOR
    event.recipes.create.sequenced_assembly(
        ['refinedstorage:basic_processor'], 
        'ftbmaterials:silicon_ingot', 
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
        'ftbmaterials:silicon_ingot', 
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
        'ftbmaterials:silicon_ingot', 
        [
            event.recipes.create.pressing('kubejs:incomplete_printed_circuit', 'ftbmaterials:silicon_ingot'),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'create:polished_rose_quartz']),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'refinedstorage:processor_binding']),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'minecraft:diamond']),
            event.recipes.create.pressing('kubejs:incomplete_printed_circuit', 'kubejs:incomplete_printed_circuit')
        ]
    ).transitionalItem('kubejs:incomplete_printed_circuit').loops(1).id('kubejs:assembly/advanced_processor_v2')

    // 4. WITHERING PROCESSOR
    event.recipes.create.sequenced_assembly(
        ['extradisks:withering_processor'], 
        'ftbmaterials:silicon_ingot', 
        [
            event.recipes.create.pressing('kubejs:incomplete_printed_circuit', 'ftbmaterials:silicon_ingot'),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'create:polished_rose_quartz']),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'refinedstorage:processor_binding']),
            event.recipes.create.deploying('kubejs:incomplete_printed_circuit', ['kubejs:incomplete_printed_circuit', 'minecraft:nether_star']),
            event.recipes.create.pressing('kubejs:incomplete_printed_circuit', 'kubejs:incomplete_printed_circuit')
        ]
    ).transitionalItem('kubejs:incomplete_printed_circuit').loops(1).id('kubejs:assembly/withering_processor_v2')

    // 5. NEURAL PROCESSOR
    event.recipes.create.sequenced_assembly(
        ['extrastorage:neural_processor'], 
        'ftbmaterials:silicon_ingot', 
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
    ).transitionalItem('refinedstorage:construction_core').loops(2).id('kubejs:assembly/construction_core_v2')

    // 5. DESTRUCTION CORE
    event.recipes.create.sequenced_assembly(
        ['refinedstorage:destruction_core'], 
        'refinedstorage:basic_processor', 
        [
            event.recipes.create.deploying('refinedstorage:destruction_core', ['refinedstorage:basic_processor', 'minecraft:quartz']),
            event.recipes.create.pressing('refinedstorage:destruction_core', 'refinedstorage:destruction_core'),
        ]
    ).transitionalItem('refinedstorage:destruction_core').loops(2).id('kubejs:assembly/destruction_core_v2')
})