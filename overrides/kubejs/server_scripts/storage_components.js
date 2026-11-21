ServerEvents.recipes(event => {
    const transitional = 'kubejs:incomplete_storage_component'
    const blockCasing = 'refinedstorage:machine_casing'

    // =========================================================================
    // 1. SEQUENCED ASSEMBLY (Create - Podstawowe RS)
    // =========================================================================

    // --- KOMPONENT 1k ---
    event.recipes.create.sequenced_assembly(
        ['refinedstorage:1k_storage_part'], 
        'tfmg:silicon_ingot', 
        [
            event.recipes.create.pressing(transitional, transitional),
            event.recipes.create.deploying(transitional, [transitional, 'create:rose_quartz']),
            event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:quartz_enriched_iron']),
            event.recipes.create.deploying(transitional, [transitional, 'create:rose_quartz']),
            event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:quartz_enriched_copper']),
            event.recipes.create.deploying(transitional, [transitional, 'create:rose_quartz']),
            event.recipes.create.pressing(transitional, transitional)
        ]
    ).transitionalItem(transitional).loops(1).id('kubejs:assembly/1k_storage_part')

    // --- KOMPONENT 4k ---
    event.recipes.create.sequenced_assembly([
        'refinedstorage:4k_storage_part'
    ], 'refinedstorage:1k_storage_part', [
        event.recipes.create.pressing(transitional, transitional),
        event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:1k_storage_part']),
        event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:quartz_enriched_iron']),
        event.recipes.create.deploying(transitional, [transitional, 'create:andesite_alloy']),
        event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:quartz_enriched_copper']),
        event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:1k_storage_part']),
        event.recipes.create.pressing(transitional, transitional)
    ]).transitionalItem(transitional).loops(1).id('kubejs:assembly/4k_storage_part')

    // --- KOMPONENT 16k ---
    event.recipes.create.sequenced_assembly([
        'refinedstorage:16k_storage_part'
    ], 'refinedstorage:4k_storage_part', [
        event.recipes.create.pressing(transitional, transitional),
        event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:4k_storage_part']),
        event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:basic_processor']),
        event.recipes.create.deploying(transitional, [transitional, 'create:precision_mechanism']),
        event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:improved_processor']),
        event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:4k_storage_part']),
        event.recipes.create.pressing(transitional, transitional)
    ]).transitionalItem(transitional).loops(1).id('kubejs:assembly/16k_storage_part')

    // --- KOMPONENT 64k ---
    event.recipes.create.sequenced_assembly([
        'refinedstorage:64k_storage_part'
    ], 'refinedstorage:16k_storage_part', [
        event.recipes.create.pressing(transitional, transitional),
        event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:16k_storage_part']),
        event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:basic_processor']),
        event.recipes.create.deploying(transitional, [transitional, 'create:precision_mechanism']),
        event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:improved_processor']),
        event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:16k_storage_part']),
        event.recipes.create.pressing(transitional, transitional)
    ]).transitionalItem(transitional).loops(1).id('kubejs:assembly/64k_storage_part')

    // =========================================================================
    // 2. SEQUENCED ASSEMBLY (Create - Extra Storage)
    // =========================================================================

    // --- KOMPONENT 256k ---
    event.recipes.create.sequenced_assembly([
        'extrastorage:storagepart_256k'
    ], 'refinedstorage:64k_storage_part', [
        event.recipes.create.pressing(transitional, transitional),
        event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:64k_storage_part']),
        event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:advanced_processor']),
        event.recipes.create.deploying(transitional, [transitional, 'kubejs:tuned_crystal']),
        event.recipes.create.deploying(transitional, [transitional, 'extrastorage:neural_processor']),
        event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:64k_storage_part']),
        event.recipes.create.pressing(transitional, transitional)
    ]).transitionalItem(transitional).loops(1).id('kubejs:assembly/256k_storage_part')

    // --- KOMPONENT 1024k ---
    event.recipes.create.sequenced_assembly([
        'extrastorage:storagepart_1024k'
    ], 'extrastorage:storagepart_256k', [
        event.recipes.create.pressing(transitional, transitional),
        event.recipes.create.deploying(transitional, [transitional, 'extrastorage:storagepart_256k']),
        event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:advanced_processor']),
        event.recipes.create.deploying(transitional, [transitional, 'kubejs:tuned_crystal']),
        event.recipes.create.deploying(transitional, [transitional, 'refinedstorage:advanced_processor']),
        event.recipes.create.deploying(transitional, [transitional, 'extrastorage:storagepart_256k']),
        event.recipes.create.pressing(transitional, transitional)
    ]).transitionalItem(transitional).loops(1).id('kubejs:assembly/1024k_storage_part')

    // --- KOMPONENT 4096k ---
    event.recipes.create.sequenced_assembly([
        'extrastorage:storagepart_4096k'
    ], 'extrastorage:storagepart_1024k', [
        event.recipes.create.pressing(transitional, transitional),
        event.recipes.create.deploying(transitional, [transitional, 'extrastorage:storagepart_1024k']),
        event.recipes.create.deploying(transitional, [transitional, 'extrastorage:neural_processor']),
        event.recipes.create.deploying(transitional, [transitional, 'kubejs:calibrated_eye']),
        event.recipes.create.deploying(transitional, [transitional, 'extrastorage:neural_processor']),
        event.recipes.create.deploying(transitional, [transitional, 'extrastorage:storagepart_1024k']),
        event.recipes.create.pressing(transitional, transitional)
    ]).transitionalItem(transitional).loops(1).id('kubejs:assembly/4096k_storage_part')

    // --- KOMPONENT 16384k ---
    event.recipes.create.sequenced_assembly([
        'extrastorage:storagepart_16384k'
    ], 'extrastorage:storagepart_4096k', [
        event.recipes.create.pressing(transitional, transitional),
        event.recipes.create.deploying(transitional, [transitional, 'extrastorage:storagepart_4096k']),
        event.recipes.create.deploying(transitional, [transitional, 'extrastorage:neural_processor']),
        event.recipes.create.deploying(transitional, [transitional, 'kubejs:calibrated_eye']),
        event.recipes.create.deploying(transitional, [transitional, 'extrastorage:neural_processor']),
        event.recipes.create.deploying(transitional, [transitional, 'extrastorage:storagepart_4096k']),
        event.recipes.create.pressing(transitional, transitional)
    ]).transitionalItem(transitional).loops(1).id('kubejs:assembly/16384k_storage_part')

    // =========================================================================
    // 3. MONTAŻ I DEMONTAŻ (Stół Kowalski + Piła Create)
    // =========================================================================

    // Refined Storage (Dyski i Bloki w Stole Kowalskim + Demontaż na Pile)
    const rsTiers = ['1k', '4k', '16k', '64k']
    const rsTiers_fluid = [{part: '1k', bucket: '64b'}, {part: '4k', bucket: '256b'}, {part: '16k', bucket: '1024b'}, {part: '64k', bucket: '4096b'}]
    const rsTiers_energy = [{part: '1k', accumulator: '64k'}, {part: '4k', accumulator: '256k'}, {part: '16k', accumulator: '1024k'}, {part: '64k', accumulator: '8192k'}]

    rsTiers.forEach(tier => {
        // Montaż dysku
        event.smithing(
            `refinedstorage:${tier}_storage_disk`,
            'kubejs:digital_drawer',
            'refinedstorage:storage_housing',
            `refinedstorage:${tier}_storage_part`
        ).id(`kubejs:smithing/${tier}_storage_disk`)

        // Montaż bloku
        event.smithing(
            `refinedstorage:${tier}_storage_block`,
            'kubejs:digital_drawer',
            blockCasing,
            `refinedstorage:${tier}_storage_part`
        ).id(`kubejs:smithing/${tier}_storage_block`)

        // Demontaż dysku na pile
        event.recipes.create.cutting([
            `refinedstorage:${tier}_storage_part`,
            'refinedstorage:storage_housing'
        ], `refinedstorage:${tier}_storage_disk`).id(`kubejs:cutting/${tier}_storage_disk`)

        // Demontaż bloku na pile
        event.recipes.create.cutting([
            `refinedstorage:${tier}_storage_part`,
            blockCasing
        ], `refinedstorage:${tier}_storage_block`).id(`kubejs:cutting/${tier}_storage_block`)
    })

    rsTiers_fluid.forEach(tier => {

        // Montaż dysku
        event.smithing(
            `refinedstorage:${tier.bucket}_fluid_storage_disk`,
            'kubejs:digital_tank',
            'refinedstorage:storage_housing',
            `refinedstorage:${tier.part}_storage_part`
        ).id(`kubejs:smithing/${tier.bucket}_storage_fluid_disk`)

        // Montaż bloku
        event.smithing(
            `refinedstorage:${tier.bucket}_fluid_storage_block`,
            'kubejs:digital_tank',
            blockCasing,
            `refinedstorage:${tier.part}_storage_part`
        ).id(`kubejs:smithing/${tier.bucket}_storage_fluid_block`)

        // Demontaż dysku na pile
        event.recipes.create.cutting([
            `refinedstorage:${tier.part}_storage_part`,
            'refinedstorage:storage_housing'
        ], `refinedstorage:${tier.bucket}_fluid_storage_disk`).id(`kubejs:cutting/${tier.bucket}_storage_fluid_disk`)

        // Demontaż bloku na pile
        event.recipes.create.cutting([
            `refinedstorage:${tier.part}_storage_part`,
            blockCasing
        ], `refinedstorage:${tier.bucket}_fluid_storage_block`).id(`kubejs:cutting/${tier.bucket}_storage_fluid_block`)    
    })

    rsTiers_energy.forEach(tier => {

        // Montaż dysku
        event.smithing(
            `refinedtypes:${tier.accumulator}_energy_storage_disk`,
            'kubejs:digital_accumulator',
            'refinedstorage:storage_housing',
            `refinedstorage:${tier.part}_storage_part`
        ).id(`kubejs:smithing/${tier.accumulator}_storage_energy_disk2`)

        // Montaż bloku
        event.smithing(
            `refinedtypes:${tier.accumulator}_energy_storage_block`,
            'kubejs:digital_accumulator',
            blockCasing,
            `refinedstorage:${tier.part}_storage_part`
        ).id(`kubejs:smithing/${tier.accumulator}_storage_energy_block2`)

        // Demontaż dysku na pile
        event.recipes.create.cutting([
            `refinedstorage:${tier.part}_storage_part`,
            'refinedstorage:storage_housing'
        ], `refinedtypes:${tier.accumulator}_energy_storage_disk`).id(`kubejs:cutting/${tier.accumulator}_storage_energy_disk2`)

        // Demontaż bloku na pile
        event.recipes.create.cutting([
            `refinedstorage:${tier.part}_storage_part`,
            blockCasing
        ], `refinedtypes:${tier.accumulator}_energy_storage_block`).id(`kubejs:cutting/${tier.accumulator}_storage_energy_block2`)    
    })

    // Extra Storage (TYLKO Bloki w Stole Kowalskim + Demontaż na Pile, Brak Dysków)
    const esTiers = ['256k', '1024k', '4096k', '16384k']
    const esTiers_fluid = [{part: '256k', bucket: '16384b'}, {part: '1024k', bucket: '65536b'}, {part: '4096k', bucket: '262144b'}, {part: '16384k', bucket: '1048576b'}]
    const esTiers_energy = [{part: '256k', accumulator: '65536k'}, {part: '1024k', accumulator: '262144k'}, {part: '4096k', accumulator: '1048576k'}, {part: '16384k', accumulator: '8388608k'}]

    esTiers.forEach(tier => {
        // Montaż bloku
        event.smithing(
            `extrastorage:block_${tier}`,
            'kubejs:digital_drawer',
            blockCasing,
            `extrastorage:storagepart_${tier}`
        ).id(`kubejs:smithing_es/${tier}_storage_block`)

        // event.smithing(
        //     `extrastorage:block_${tier}_fluid`,
        //     'kubejs:digital_tank',
        //     blockCasing,
        //     `extrastorage:storagepart_${tier}`
        // ).id(`kubejs:smithing_es/${tier}_storage_fluid_block`)

        // Demontaż bloku na pile
        event.recipes.create.cutting([
            `extrastorage:storagepart_${tier}`,
            blockCasing
        ], `extrastorage:block_${tier}`).id(`kubejs:cutting_es/${tier}_storage_block`)

        // event.recipes.create.cutting([
        //     `extrastorage:storagepart_${tier}`,
        //     blockCasing
        // ], `extrastorage:block_${tier}_fluid`).id(`kubejs:cutting_es/${tier}_storage_fluid_block`)
    })

    esTiers_fluid.forEach(tier => {
        // Montaż bloku
        event.smithing(
            `extrastorage:block_${tier.bucket}_fluid`,
            'kubejs:digital_tank',
            blockCasing,
            `extrastorage:storagepart_${tier.part}`
        ).id(`kubejs:smithing_es/${tier.bucket}_storage_fluid_block`)

        // Demontaż bloku na pile
        event.recipes.create.cutting([
            `extrastorage:storagepart_${tier.part}`,
            blockCasing
        ], `extrastorage:block_${tier.bucket}_fluid`).id(`kubejs:cutting_es/${tier.bucket}_storage_fluid_block`)
    })

    esTiers_energy.forEach(tier => {
        // Montaż bloku
        event.smithing(
            `refinedtypes:${tier.accumulator}_energy_storage_block`,
            'kubejs:digital_accumulator',
            blockCasing,
            `extrastorage:storagepart_${tier.part}`
        ).id(`kubejs:smithing_es/${tier.accumulator}_storage_energy_block2`)

        // Demontaż bloku na pile
        event.recipes.create.cutting([
            `extrastorage:storagepart_${tier.part}`,
            blockCasing
        ], `refinedtypes:${tier.accumulator}_energy_storage_block`).id(`kubejs:cutting_es/${tier.accumulator}_storage_energy_block2`)
    })
})