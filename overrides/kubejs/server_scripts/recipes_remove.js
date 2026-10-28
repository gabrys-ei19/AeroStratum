//------------------------------------------------------------------------------------------------------------------------------------------------
// PA2 Extras - Remove Recipes
//------------------------------------------------------------------------------------------------------------------------------------------------
// Author: RicTheCoder
// Contributors: ShiftTheDev, ChosenArchitect
//
// Removes recipes based on different factors, it also fixes problems with automatic recipe generation from Create by changing the IDs of some
// recipes and suffixing them with '_manual_only'
//------------------------------------------------------------------------------------------------------------------------------------------------

// Remove by Output
// - Add the item id of the output item of the recipe and all recipes with that output will be removed
const byOutput = [
	'createdeco:zinc_sheet',
	'create_aquatic_ambitions:prismarine_alloy',
	'refinedstorage:raw_basic_processor', 
	'refinedstorage:basic_processor', 
	'refinedstorage:raw_improved_processor',
	'refinedstorage:improved_processor',
	'refinedstorage:raw_advanced_processor',
	'refinedstorage:advanced_processor',
	'refinedstorage:construction_core', 
	'refinedstorage:destruction_core',
	'refinedstorage:machine_casing',
	'sophisticatedbackpacks:feeding_upgrade',
	'sophisticatedbackpacks:advanced_feeding_upgrade',
	'easy_villagers:iron_farm',
	'rsinfinitybooster:infinity_card',
	'rsinfinitybooster:dimension_card',
	'createages:zinc_hand',
	'createages:computing_mechanism',
	'createages:wooden_mechanism',
	'createages:andesite_template',
	'createages:brass_template',
	'createages:copper_template',
	'create_connected:item_silo',
	'create:directional_gearshift',
	'create:overstress_clutch',
	'create:redstone_contact',
	'create:clutch',
	'create:gearshift',
	'create:adjustable_chain_gearshift',
	'create:content_observer',
	'create:stockpile_switch',
	'create:smart_chute',
	'create:sequenced_gearshift',
	'create:stockpile_switch',
	'create:portable_storage_interface',
	'refinedstorage:controller',
	'refinedstorage:cable',
	'refinedstorage:importer',
	'refinedstorage:exporter',
	'refinedstorage:external_storage',
	'refinedstorage:constructor',
	'refinedstorage:destructor',
	'refinedstorage:wireless_transmitter',
	'refinedstorage:disk_drive',
	'refinedstorage:grid',
	'refinedstorage:security_card',
	'refinedstorage:interface',
	'rsrequestify:requester',
	'rsrequestify:crafting_emitter',
	// 'extradisks:advanced_machine_casing',
	'refinedstorage:detector',
	/refinedstorage:.*grid.*/,
	/refinedstorage_quartz_arsenal:.*grid.*/,
	/refinedstorage:.*storage_block.*/,
	/extrastorage:.*block.*/,
	/extrastorage:.*storagepart.*/,
	/extrastorage:.*disk.*/,
	/refinedtypes:.*block.*/,
	/refinedstorage:.*storage_part.*/,
	/refinedstorage:.*storage_disk.*/,
	// 'refinedstorage:storage_housing',
	/refinedstorage:raw_.*_processor.*/,
	// /extradisks:.*processor.*/,
	/extrastorage:.*processor.*/,
	'refinedstorage:autocrafting_monitor',
	'refinedstorage:autocrafter_manager',
	'refinedstorage:autocrafter',
	'refinedstorage:disk_interface',
	'refinedstorage:relay',
	'refinedstorage:security_manager',
	/refinedstorage:network_.*/,
	/refinedtypes:.*_storage_disk/,
	/refinedtypes:.*_storage_part/,
	'refinedstorage:silicon',
	'refinedstorage:storage_monitor',
	'create:belt_connector',
	'create:basin',
	'refinedstorage:quartz_enriched_iron',
	'refinedstorage:quartz_enriched_copper',
	'refinedstorage:wireless_autocrafting_monitor',
	'uniwersalgrid:wireless_universal_grid',
	'tfmg:steel_mechanism',
	'simulated:gyroscopic_mechanism',
];

// Remove by ID
// - Add the recipe id for the recipe to remove
const byId = [
	"create:haunting/lapis_recycling",
	"create:crushing/tuff",
	"createaddition:crushing/tuff_recycling",
	"create:crushing/tuff_recycling",
	"create_mechanical_spawner:mixing/spawn_fluid_random_legacy",
	"create_mechanical_spawner:spawn_fluid_enchantment_industry_experience",
	"createages:copper_age/crafting/kinetics/steam_engine",
	"createages:copper_age/smithing/fluid_tank",
	"createcasing:crafting/mixer/brass",
	"createcasing:crafting/mixer/copper",
	"createcasing:crafting/mixer/railway",
	"createcasing:crafting/mixer/creative",
	"createcasing:crafting/mixer/industrial_iron",
	"createcasing:crafting/mixer/weathered_iron",
	"createcasing:crafting/mixer/refined_radiance",
	"createcasing:crafting/mixer/shadow_steel",
	"createcasing:crafting/press/brass",
	"createcasing:crafting/press/copper",
	"createcasing:crafting/press/railway",
	"createcasing:crafting/press/creative",
	"createcasing:crafting/press/industrial_iron",
	"createcasing:crafting/press/weathered_iron",
	"createcasing:crafting/press/refined_radiance",
	"createcasing:crafting/press/shadow_steel",
	"createcasing:crafting/chain_conveyors/brass",
	"createcasing:crafting/chain_conveyors/copper",
	"createcasing:crafting/chain_conveyors/railway",
	"createcasing:crafting/chain_conveyors/creative",
	"createcasing:crafting/chain_conveyors/industrial_iron",
	"createcasing:crafting/chain_conveyors/weathered_iron",
	"createcasing:crafting/chain_conveyors/refined_radiance",
	"createcasing:crafting/chain_conveyors/shadow_steel",
	"minecraft:lodestone",
	"create:crafting/tree_fertilizer",
	"sophisticatedstorage:chest",
	"sophisticatedstorage:barrel",
];

// Advance Remove
// - Provide multiple options to target the removal
// - Removes the base version and adds it as '_manual_only' in order to fix Create issues (set 'manual' property to true)
// - To use regex when targeting ids (for dynamic recipes), use '$' in the start of the id
const advRemoval = [
	// This is a fix for a crash when opening the 'Automated Shaped Crafting' for the Ender Storage recipes	
	// Fixes the Alkahestry Tome with Create
	// { input: "reliquary:alkahestry_tome", manual: true }
];

//---[CODE]---------------------------------------------------------------------------------------------------------------------------------------

// The remove event
ServerEvents.recipes(event => {
	// Run the normal removes
    byOutput.forEach(item => event.remove({ output: item }));
    byId.forEach(item => event.remove({ id: item }));
	
	// Run the advance removes
	advRemoval.forEach(condition => {
		let manual = condition.manual;
		let test = condition.test;
		
		if (manual)
		{
			delete(condition.manual);
			
			let recipes = event.findRecipes(condition);
			recipes.forEach(recipe => {
				if (recipe.getId().endsWith("_manual_only"))
					return;
				
				recipe.id(recipe.getId() + "_manual_only");
			});
		}
		else		
			event.remove(condition);
	});
});

ServerEvents.recipes(event => {

  const generalEquipment = /createcasing:.*(deployer|press|mixer|chain_conveyor|portable_storage_interface|encased_fan)/

  const mechanicalTools = /createcasing:.*mechanical_(plough|harvester|roller|saw|drill)/

  event.remove({ output: generalEquipment })
  event.remove({ output: mechanicalTools })

});