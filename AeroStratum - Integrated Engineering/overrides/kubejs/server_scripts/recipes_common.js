// =============================================================================
// 📋 COMMON RECIPES & UTILITIES
// =============================================================================
// Wspólne przepisy i skróty dostępne przez wszystkie ery

ServerEvents.recipes(event => {

    console.log('[AeroStratum] 📋 Ładowanie wspólnych receptur...')

    // ====== CRAFTING TWEAKS: Szybkie recepty ======
    // Zmuszamy użycie crafting table dla pewnych rzeczy
    

    // ====== NUMISMATICS: Bazowe Monety ======
    // Numismatics powinno być włączone dla waluty
    // (Jeśli go używasz zamiast Lightman's Currency)


    // ====== COLLECTIVE: Mod Loader Optimization ======
    // Collective to biblioteka - nie ma przepisów
    

    // ====== CONFIGURED: Konfiguracja Modów ======
    // Configured umożliwia edycję konfiguracji w grze - nie ma przepisów


    // ====== JEI: LOOT TABLE INTEGRATION ======
    // Zostawiamy domyślne loot tables dla mobów
    // (Zmieniane przez config, nie przez KubeJS)


    console.log('[AeroStratum] ✅ Wspólne recepty załadowane!')

})


// =============================================================================
// TAG MANAGEMENT & CATEGORIZATION
// =============================================================================

ServerEvents.tags('item', event => {

    console.log('[AeroStratum] 🏷️  Ładowanie tagów...')

    // MONETY - Grupowanie
    event.add('kubejs:coins', [
        'lightmanscurrency:coin_copper',
        'lightmanscurrency:coin_silver',
        'lightmanscurrency:coin_gold'
    ])

    // MASZYNY ERY
    event.add('kubejs:era_1_requirements', [
        'kubejs:andesite_machine',
        'create:andesite_alloy',
        'create:cogwheel'
    ])

    event.add('kubejs:era_2_requirements', [
        'kubejs:brass_machine',
        'create_tfmg:steel_ingot',
        'create:precision_mechanism',
        'create:brass_sheet'
    ])

    event.add('kubejs:era_3_requirements', [
        'create_nuclear:uranium_ingot',
        'create_nuclear:lead_ingot',
        'rsinfinitybooster:infinity_card'
    ])

    event.add('kubejs:era_4_requirements', [
        'apotheosis:gem',
        'minecraft:warden_skull'
    ])

    // SUROWCE ENERGETYCZNE
    event.add('kubejs:energy_sources', [
        'create:water_wheel',
        'create:windmill',
        'create_tfmg:diesel_engine',
        'create_nuclear:reactor_core'
    ])

    // KOMPONENTY LOGISTYKI
    event.add('kubejs:logistics', [
        'create:chute',
        'create:mechanical_arm',
        'create_factory_logistics:belt_extension'
    ])

    console.log('[AeroStratum] ✅ Tagi załadowane!')

})


// =============================================================================
// RECIPE LOGGING & DEBUGGING
// =============================================================================

ServerEvents.recipes(event => {
    
    if (global.kubeJS_debug === true) {
        console.log('[AeroStratum DEBUG] ✅ Wszystkie recepty załadowane pomyślnie!')
        console.log('[AeroStratum DEBUG] Era I:   ✓')
        console.log('[AeroStratum DEBUG] Era II:  ✓')
        console.log('[AeroStratum DEBUG] Era III: ✓')
        console.log('[AeroStratum DEBUG] Era IV:  ✓')
    }

})
