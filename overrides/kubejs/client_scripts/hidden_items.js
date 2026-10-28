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
        'refinedstorage:4096b_fluid_storage_part',
        'refinedtypes:64k_energy_storage_part',
        'refinedtypes:256k_energy_storage_part',
        'refinedtypes:1024k_energy_storage_part',
        'refinedtypes:8192k_energy_storage_part',
        'refinedtypes:65536k_energy_storage_part',
        'refinedtypes:262144k_energy_storage_part',
        'refinedtypes:1048576k_energy_storage_part',
        'refinedtypes:8388608k_energy_storage_part',
        'refinedtypes:infinite_energy_storage_part',
        'refinedtypes:65536k_energy_storage_disk',
        'refinedtypes:262144k_energy_storage_disk',
        'refinedtypes:1048576k_energy_storage_disk',
        'refinedtypes:8388608k_energy_storage_disk',
        'createaddition:digital_adapter',
        'extrastorage:disk_256k',
        'extrastorage:disk_1024k',
        'extrastorage:disk_4096k',
        'extrastorage:disk_16384k',
        'extrastorage:disk_16384b_fluid',
        'extrastorage:disk_65536b_fluid',
        'extrastorage:disk_262144b_fluid',
        'extrastorage:disk_1048576b_fluid',
    ]

    hidden.forEach(id => {
        // Sprawdza czy przedmiot istnieje w 1.21.1 zanim wywoła event.remove
        if (Item.exists(id)) {
            event.remove(Item.of(id))
        }
    })
})