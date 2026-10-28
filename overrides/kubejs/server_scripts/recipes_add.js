// Shaped Recipe Handler - ChosenArchitect

/**
 * @param {Internal.RecipeEventJS} event
 * @param {string|Item} output
 * @param {Array<string|null|undefined>} ingredientsArray
 */
const robustShaped = (event, output, ingredientsArray) => {
    const totalIngredients = ingredientsArray.length;
    
    if (totalIngredients !== 4 && totalIngredients !== 9) {
        console.error(`[RobustShaped] Recipe for ${output} failed: Input array must be 4 or 9 elements. Found ${totalIngredients}.`);
        return;
    }

    const width = (totalIngredients === 9) ? 3 : 2;
    const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    
    const letterToItem = {};
    const itemToLetter = {};
    let nextLetterIndex = 0;
    
    let cleanedIngredient;
    let itemString;
    let char;

    ingredientsArray.forEach(inputItem => {
        cleanedIngredient = (inputItem || '').trim();
        
        if (cleanedIngredient.length > 0 && !(cleanedIngredient in itemToLetter)) {
            const letter = allLetters[nextLetterIndex++];
            itemToLetter[cleanedIngredient] = letter;
            letterToItem[letter] = cleanedIngredient;
        }
    });

    const pattern = [];
    let currentPatternRow = '';
    
    for (let i = 0; i < totalIngredients; i++) {
        itemString = (ingredientsArray[i] || '').trim(); 
        
        if (itemString.length === 0) {
            char = ' '; 
        } else {
            char = itemToLetter[itemString]; 
        }

        currentPatternRow += char;
        
        if ((i + 1) % width === 0) {
            pattern.push(currentPatternRow);
            currentPatternRow = '';
        }
    }

    event.shaped(output, pattern, letterToItem);
    console.log(`[RobustShaped] Created SHAPED (${width}x${width}) recipe for ${output}`);
};


// --- RECIPE REGISTRIES ---
const shapedRecipes = [
    // 3x3 Recipe
    {
        output: 'createages:zinc_hand',
        input: [
            ' ', 'create:andesite_alloy', ' ', 
            'createaddition:zinc_sheet', 'createages:andesite_mechanism', 'createaddition:zinc_sheet', 
            'createaddition:zinc_sheet', 'create:andesite_alloy', 'createaddition:zinc_sheet'
        ]
    },

    {
        output: 'create:fluid_tank',
        input: [
            ' ', 'create:copper_sheet', ' ', 
            ' ', 'minecraft:barrel', ' ', 
            ' ', 'create:copper_sheet', ' '
        ]
    },

    // {
    //     output: 'createages:copper_machine',
    //     input: [
    //         ' ', 'createages:copper_mechanism', ' ', 
    //         'createages:copper_mechanism', 'create:copper_casing', 'createages:copper_mechanism', 
    //         ' ', 'createages:copper_mechanism', ' '
    //     ]
    // },

    {
        output: 'kubejs:andesite_redstone_machine',
        input: [
            ' ', 'minecraft:redstone', ' ',
            'minecraft:redstone', 'createages:andesite_machine', 'minecraft:redstone',
            ' ', 'minecraft:redstone', ' '
        ]
    },

    {
        output: 'kubejs:brass_redstone_machine',
        input: [
            ' ', 'minecraft:redstone', ' ',
            'minecraft:redstone', 'createages:brass_machine', 'minecraft:redstone',
            ' ', 'minecraft:redstone', ' '
        ]
    },

   //// 2x2 Recipe
   //{
   //    output: '5x minecraft:flint',
   //    input: [
   //        'minecraft:stick', 'minecraft:stone',
   //        'minecraft:flint', ' ' // Empty slot in the bottom right
   //    ]
   //},
   //// 2x2 Recipe 2: Wooden Crate (Padded 1x2 to 2x2)
   //{
   //    output: '2x minecraft:chest',
   //    input: [
   //        'minecraft:oak_log', 'minecraft:oak_log',
   //        ' ', ' '
   //    ]
   //}
];

const shapelessRecipes = [
    // Shapeless Recipe
    {
        output: 'create:hand_crank',
        input: [
            'createages:andesite_mechanism',
            'create:andesite_alloy'
        ]
    },
    {
        output: '8x create:belt_connector',
        input: [
            'createages:cured_rubber',
            'createages:cured_rubber',
            'createages:cured_rubber',
            'createages:cured_rubber',
        ]
    },
    {
        output: 'refinedstorage:security_card',
        input: [
            'minecraft:redstone',
            'minecraft:paper',
            'refinedstorage:quartz_enriched_iron',
            'refinedstorage:quartz_enriched_iron',
            'minecraft:paper',
            'refinedstorage:quartz_enriched_copper',
        ]
    }
];

const mixingRecipes_h = [
    //Mixing Recipes
    {
        output: '4x refinedstorage:quartz_enriched_copper',
        input: [
            'minecraft:quartz',
            'minecraft:copper_ingot',
            'minecraft:copper_ingot',
            'minecraft:copper_ingot'

        ]
    },
        {
        output: '4x refinedstorage:quartz_enriched_iron',
        input: [
            'minecraft:quartz',
            'minecraft:iron_ingot',
            'minecraft:iron_ingot',
            'minecraft:iron_ingot'

        ]
    },
];

const mixingRecipes = [
    //Mixing Recipes
    
];

ServerEvents.recipes(event => {

    // Smithing Table Recipes
    // Smithing recipes use the format: event.smithing(output, template, base, addition)
    // For 1.20+ 'Smithing Transform' recipes, you must specify the template item.
    // The format is: event.smithing(output, template, base_item, addition_item)

    event.smithing(
        'create:steam_engine',
        'create:copper_casing',
        'createages:copper_machine',
        'create:golden_sheet'
    ).id('kubejs:copper_machine_to_steam_engine')

    event.smithing(
        'create:basin',
        'create:copper_casing',
        'createages:andesite_machine',
        'minecraft:bucket'
    ).id('kubejs:andesite_machine_to_basin')

    event.smithing(
        '4x refinedstorage:machine_casing',
        'minecraft:stone',
        'createages:andesite_machine',
        'refinedstorage:quartz_enriched_iron'
    ).id('kubejs:andesite_machine_to_rs_machine_casing')

    event.smithing(
        'refinedstorage:controller',
        'refinedstorage:machine_casing',
        'kubejs:andesite_redstone_machine',
        'refinedstorage:advanced_processor'
    ).id('kubejs:andesite_machine_to_rs_controller')

    event.smithing(
        'refinedstorage:disk_drive',
        'refinedstorage:machine_casing',
        'kubejs:andesite_redstone_machine',
        'refinedstorage:improved_processor'
    ).id('kubejs:andesite_machine_to_rs_disk_drive')

    event.smithing(
        'refinedstorage:autocrafter',
        'refinedstorage:machine_casing',
        'kubejs:brass_redstone_machine',
        'create:mechanical_crafter'
    ).id('kubejs:machine_casing_to_rs_autocrafter')

    event.smithing(
        'refinedstorage:grid',
        'refinedstorage:machine_casing',
        'kubejs:andesite_redstone_machine',
        'refinedstorage:basic_processor'
    ).id('kubejs:andesite_machine_to_rs_grid')

    event.smithing(
        'refinedstorage:security_manager',
        'refinedstorage:machine_casing',
        'kubejs:andesite_redstone_machine',
        'refinedstorage:security_card'
    ).id('kubejs:andesite_machine_to_rs_security_manager')

    event.smithing(
        'refinedstorage:crafting_grid',
        'refinedstorage:grid',
        'kubejs:brass_redstone_machine',
        'minecraft:crafting_table'
    ).id('kubejs:grid_to_rs_crafting_grid')

    event.smithing(
        'refinedstorage:autocrafter_manager',
        'refinedstorage:grid',
        'kubejs:brass_redstone_machine',
        'create:mechanical_crafter'
    ).id('kubejs:brass_machine_to_rs_autocrafter_manager')

    event.smithing(
        'kubejs:digital_drawer',
        'createages:zinc_machine',
        'createages:zinc_mechanism',
        'minecraft:chest'
    ).id('kubejs:zinc_mechanism_to_rs_digital_drawer')

    event.smithing(
        'refinedstorage:interface',
        'kubejs:digital_drawer',
        'refinedstorage:machine_casing',
        'kubejs:digital_tank'
    ).id('kubejs:machine_casing_to_rs_interface')

    event.smithing(
        'refinedstorage:importer',
        'refinedstorage:cable',
        'create:mechanical_pump',
        'refinedstorage:machine_casing'
    ).id('kubejs:machine_casing_to_rs_importer')

    event.smithing(
        'refinedstorage:exporter',
        'refinedstorage:cable',
        'refinedstorage:machine_casing',
        'create:mechanical_pump'
    ).id('kubejs:machine_casing_to_rs_exporter')

    event.smithing(
        'refinedstorage:constructor',
        'refinedstorage:cable',
        'refinedstorage:machine_casing',
        'refinedstorage:construction_core'
    ).id('kubejs:machine_casing_to_rs_constructor')

    event.smithing(
        'refinedstorage:detector',
        'refinedstorage:machine_casing',
        'create:smart_observer',
        'create:electron_tube'
    ).id('kubejs:machine_casing_to_rs_detector')

    event.smithing(
        'refinedstorage:pattern_grid',
        'refinedstorage:grid',
        'kubejs:brass_redstone_machine',
        'refinedstorage:pattern'
    ).id('kubejs:grid_to_rs_pattern_grid')

    event.smithing(
        'refinedstorage:destructor',
        'refinedstorage:cable',
        'refinedstorage:machine_casing',
        'refinedstorage:destruction_core'
    ).id('kubejs:machine_casing_to_rs_destructor')

    event.smithing(
        'refinedstorage:wireless_transmitter',
        'refinedstorage:cable',
        'kubejs:tuned_crystal',
        'create:electron_tube'
    ).id('kubejs:machine_casing_to_rs_wireless_transmitter')

    event.smithing(
        'kubejs:digital_tank',
        'createages:zinc_machine',
        'createages:zinc_mechanism',
        'create:fluid_tank'
    ).id('kubejs:zinc_mechanism_to_rs_digital_tank')

    event.smithing(
        'refinedstorage:crafting_monitor',
        'refinedstorage:grid',
        'kubejs:brass_redstone_machine',
        'minecraft:crafting_table'
    ).id('kubejs:brass_machine_to_rs_crafting_monitor')

    // Stonecutting Recipes

    // It takes the output item and the input item (source block/item)
    const stonecut = (output, input) => {
         event.stonecutting(output, input)
    }

    stonecut('3x create:stockpile_switch', 'createages:brass_machine');
    stonecut('refinedstorage:autocrafting_monitor', 'refinedstorage:autocrafter_manager');
    stonecut('refinedstorage:autocrafter_manager', 'refinedstorage:autocrafting_monitor');
    stonecut('5x create:clutch', 'kubejs:andesite_redstone_machine');
    stonecut('3x create:adjustable_chain_gearshift', 'kubejs:andesite_redstone_machine');
    stonecut('2x create:directional_gearshift', 'kubejs:andesite_redstone_machine');
    stonecut('2x create:directional_gearshift', 'kubejs:andesite_redstone_machine');
    stonecut('2x create:portable_storage_interface', 'kubejs:andesite_redstone_machine');
    stonecut('4x create:overstress_clutch', 'kubejs:andesite_redstone_machine');
    stonecut('8x create:redstone_contact', 'kubejs:andesite_redstone_machine');
    stonecut('4x create:gearshift', 'kubejs:andesite_redstone_machine');
    stonecut('4x create:sequenced_gearshift', 'kubejs:brass_redstone_machine');
    stonecut('3x create:content_observer', 'kubejs:brass_redstone_machine');
    stonecut('3x create:stockpile_switch', 'kubejs:brass_redstone_machine');
    stonecut('2x create:smart_chute', 'kubejs:brass_redstone_machine');
    stonecut('1x refinedstorage:cable', 'ftbmaterials:silicon_ingot');
    stonecut('4x refinedstorage:pattern', 'refinedstorage:machine_casing');
});


// MAIN RECIPE EVENT
ServerEvents.recipes(event => {

    shapedRecipes.forEach(recipe => {
        robustShaped(event, recipe.output, recipe.input);
    });

    shapelessRecipes.forEach(recipe => {
        event.shapeless(recipe.output, recipe.input);
    });

    mixingRecipes_h.forEach(recipe => {
        event.recipes.create.mixing(recipe.output, recipe.input).heated();
    });

});

// Smelting

ServerEvents.recipes(event => {
    // [Input Raw Block, Output Storage Block]
    const materials = [
        ['create:raw_zinc_block', 'create:zinc_block'],
    ];

    materials.forEach(([input, output]) => {
        event.smelting(output, input).xp(6.3).cookingTime(1800);
        event.blasting(output, input).xp(6.3).cookingTime(900);
    });
});

// ServerEvents.recipes(event => {
//   const colors = [
//     'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
//     'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
//   ]
// });