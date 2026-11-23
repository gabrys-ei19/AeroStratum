// kubejs/startup_scripts/custom_infinity_drives.js

StartupEvents.registry('item', event => {
    // Przedmiot przejściowy do Sequenced Assembly dla Empty Infinity Drive
    // event.create('incomplete_infinity_housing')
    //     .displayName('Incomplete Infinity Drive Housing')
    //     .maxStackSize(1)

    const drives = [
        { id: 'dirt',       target: 'minecraft:dirt' },
        { id: 'sand',       target: 'minecraft:sand' },
        { id: 'deepslate',  target: 'minecraft:deepslate' },
        { id: 'netherrack', target: 'minecraft:netherrack' },
        { id: 'basalt',     target: 'minecraft:basalt' },
        { id: 'endstone',   target: 'minecraft:end_stone' }
    ]

    drives.forEach(d => {
        event.create(`infinity_${d.id}_drive`, 'infinity_drive')
            .infinityStack(d.target)
    })

    event.create('infinity_dragon_breath_drive', 'infinity_drive')
        .infinityFluidStack('create_dragons_plus:dragon_breath')
})