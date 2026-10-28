ServerEvents.recipes(event => {
    event.replaceInput(
        { mod: 'refinedstorage' },
        'minecraft:redstone',
        'create:polished_rose_quartz'
    );

    event.replaceInput(
        { mod: 'createages' },
        'createages:andesite_template',
        'create:andesite_casing'
    );

    event.replaceInput(
        { mod: 'createages' },
        'createages:copper_template',
        'create:copper_casing'
    );

    event.replaceInput(
        { mod: 'createages' },
        'createages:brass_template',
        'create:brass_casing'
    );

});

ServerEvents.recipes(event => {
    const colors = [
        'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
        'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
    ];
});
