// client_scripts/hidden_items.js

RecipeViewerEvents.removeEntries('item', event => {
    const hidden = [
        'create:shadow_steel_casing', 
        'create:refined_radiance_casing',
        'create:refined_radiance',
        'create:shadow_steel',
        'refinedstorage:portable_grid',
        'refinedstorage:creative_portable_grid',
        'refinedstorage:silicon',
        'refinedstorage:raw_basic_processor',
        'refinedstorage:raw_improved_processor',
        'refinedstorage:raw_advanced_processor',
        'refinedstorage:64b_fluid_storage_part',
        'refinedstorage:256b_fluid_storage_part',
        'refinedstorage:1024b_fluid_storage_part',
        'refinedstorage:4096b_fluid_storage_part'
    ]

    hidden.forEach(id => {
        // Sprawdza czy przedmiot istnieje w 1.21.1 zanim wywoła event.remove
        if (Item.exists(id)) {
            event.remove(Item.of(id))
        }
    })
})