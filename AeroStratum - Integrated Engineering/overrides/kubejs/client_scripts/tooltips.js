// =============================================================================
// 🎮 CLIENT SCRIPTS: TOOLTIPS & UI ENHANCEMENTS
// =============================================================================
// Informacje dla gracza - podpowiedzi przy itemach pokazujące do której ery należą

ItemEvents.tooltipEvent(event => {

    console.log('[AeroStratum] 🎮 Ładowanie tooltipsów...')

    // ====== ERA I: RDZEŃ ANDEZYTU ======
    
    event.add('create:andesite_alloy', [
        '§6Era I: Rdzeń Andezytu§r',
        'Pierwszy materiał do automatyzacji'
    ])

    event.add('kubejs:andesite_machine', [
        '§6🎯 BRAMKA ERA I§r',
        'Wymagana do otwarcia dostępu do Refined Storage',
        'Skonstruuj ją poprzez Sequenced Assembly!',
        '',
        '§7Wymaga: Create Andesite Casing, Alloy, Cogwheel'
    ])

    event.add('lightmanscurrency:coin_copper', [
        '§6Era I: Waluta§r',
        'Podstawowa moneta gospodarki'
    ])


    // ====== ERA II: MOSIĄDZ I PETROCHEMIA ======

    event.add('kubejs:brass_machine', [
        '§e🎯 BRAMKA ERA II§r',
        'Wymagana do zaawansowanej automatyzacji',
        '',
        '§7Wymaga: Create Brass Casing, Precision Mechanism, Steel Ingot'
    ])

    event.add('create:precision_mechanism', [
        '§eEra II: Precyzyjna Mechanika§r',
        'Zaawansowany komponent z Create'
    ])

    event.add('create_tfmg:steel_ingot', [
        '§eEra II: Stal Przemysłowa§r',
        'Wymaga rafinerii z TFMG'
    ])

    event.add('silentgear:blueprint_paper', [
        '§eEra II: Projekt do Kopii§r',
        'Rzadki materiał dla craftu zaawansowanych narzędzi'
    ])


    // ====== ERA III: ATOM, DIESEL I LOTNICTWO ======

    event.add('create_nuclear:uranium_ingot', [
        '§c⚛️  Era III: Uran Wzbogacony§r',
        'Niebezpieczny materiał radioaktywny',
        '',
        '§c⚠️  TOKSYCZNY - Używaj ostrożnie!'
    ])

    event.add('rsinfinitybooster:infinity_card', [
        '§c🎯 BRAMKA ERA III§r',
        'Bezprzewodowy dostęp do RS',
        '',
        '§7Wymaga: Uran, Ołów, Precision Mechanism'
    ])

    event.add('create_tfmg:diesel_engine', [
        '§cEra III: Silnik Dieslowy§r',
        'Zasilanie dla mobilnych maszyn'
    ])


    // ====== ERA IV: ENDGAME ======

    event.add('apotheosis:gem', [
        '§5🎯 BRAMKA ERA IV§r',
        'Boskie Klejnoty - tylko z głębokich podziemi',
        '',
        '§5⚡ ŹRÓDŁO OSTATECZNEJ MOCY'
    ])

    event.add('minecraft:warden_skull', [
        '§5Era IV: Czaszka Strażnika§r',
        'Drop z Wardena - Deep Dark boss',
        '',
        '§c☠️  Legendarny Trofeum'
    ])


    // ====== MASZYNY WSPÓLNE ======

    event.add([
        'create:mechanical_crafter',
        'create:mechanical_press',
        'create:mechanical_arm',
        'create:chute',
        'create:deployer'
    ], [
        '§9⚙️  Create: Komponent Automatyzacji§r'
    ])


    // ====== SUROWCE ENERGETYCZNE ======

    event.add([
        'create:water_wheel',
        'create:windmill'
    ], [
        '§a🔋 ERA I: Źródło Energii§r'
    ])

    event.add('create_tfmg:diesel_engine', [
        '§a🔋 ERA III: Źródło Energii§r'
    ])

    event.add('create_nuclear:reactor_core', [
        '§c🔋 ERA III/IV: Źródło Energii§r',
        '§c⚠️  ATOMOWA MOC'
    ])


    // ====== LOGISTYKA ======

    event.add([
        'refinedstorage:controller',
        'refinedstorage:storage_disk',
        'refinedstorage:wireless_transmitter'
    ], [
        '§bRefined Storage: Sieć Cyfrowa§r'
    ])

    event.add([
        'sophisticatedstorage:oak_barrel',
        'sophisticatedstorage:oak_cabinet'
    ], [
        '§6Sophisticated Storage: Zaawansowany Magazyn§r'
    ])

    event.add('storage_drawers:oak_full_drawers_1', [
        '§8Storage Drawers: Szufladowy Magazyn§r'
    ])


    // ====== MODOWE LOGOTYPY ======

    event.add('create:sturdy_sheet', '§9Create: Materiał§r')
    event.add('silent_gear_tool', '§5Silent Gear: Narzędzie§r')
    event.add('mob_grinding_utils:saw', '§4Mob Grinder: Narzędzie Combat§r')

    console.log('[AeroStratum] ✅ Tooltipsy załadowane!')

})


// =============================================================================
// JEI INTEGRATION (Just Enough Items)
// =============================================================================

JeiEvents.hideItems(event => {

    console.log('[AeroStratum] 👁️  Ukrywanie itemów w JEI...')

    // Możemy ukryć przedmioty które nie są dostępne graczowi
    // event.hide('minecraft:barrier')
    // event.hide('minecraft:structure_void')

    console.log('[AeroStratum] ✅ Ukrycia załadowane!')

})
