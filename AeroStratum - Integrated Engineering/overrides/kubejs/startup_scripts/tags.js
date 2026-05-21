// =============================================================================
// 🏷️  BLOCK TAGS - Kategoryzacja bloków dla graczy
// =============================================================================

StartupEvents.registry('block', event => {

    console.log('[AeroStratum] 🏷️  Rejestrowanie tagów bloków...')

    // MASZYNY ERA
    event.get('kubejs:andesite_machine').tagBoth('kubejs:era_1_gates')
    event.get('kubejs:copper_machine').tagBoth('kubejs:era_intermediate_gates')
    event.get('kubejs:ages_machine').tagBoth('kubejs:era_intermediate_gates')
    event.get('kubejs:brass_machine').tagBoth('kubejs:era_2_gates')
    event.get('kubejs:nuclear_machine').tagBoth('kubejs:era_3_gates')

    // MINEABLE TAGS
    event.get('kubejs:andesite_machine').tagBoth('mineable/pickaxe')
    event.get('kubejs:copper_machine').tagBoth('mineable/pickaxe')
    event.get('kubejs:ages_machine').tagBoth('mineable/pickaxe')
    event.get('kubejs:brass_machine').tagBoth('mineable/pickaxe')
    event.get('kubejs:nuclear_machine').tagBoth('mineable/pickaxe')

    // TOOL TAGS
    event.get('kubejs:andesite_machine').tagBoth('needs_stone_tool')
    event.get('kubejs:copper_machine').tagBoth('needs_iron_tool')
    event.get('kubejs:ages_machine').tagBoth('needs_iron_tool')
    event.get('kubejs:brass_machine').tagBoth('needs_iron_tool')
    event.get('kubejs:nuclear_machine').tagBoth('needs_diamond_tool')

    console.log('[AeroStratum] ✅ Tagi bloków zaregistrowane!')

})


// =============================================================================
// ITEM TAGS - Kategoryzacja itemów
// =============================================================================

StartupEvents.registry('item', event => {

    console.log('[AeroStratum] 🏷️  Rejestrowanie tagów itemów...')

    // Itemowe wersje maszyn
    event.get('kubejs:andesite_machine').tagBoth('kubejs:era_1_gates')
    event.get('kubejs:copper_machine').tagBoth('kubejs:era_intermediate_gates')
    event.get('kubejs:ages_machine').tagBoth('kubejs:era_intermediate_gates')
    event.get('kubejs:brass_machine').tagBoth('kubejs:era_2_gates')
    event.get('kubejs:nuclear_machine').tagBoth('kubejs:era_3_gates')

    console.log('[AeroStratum] ✅ Tagi itemów zaregistrowane!')

})
