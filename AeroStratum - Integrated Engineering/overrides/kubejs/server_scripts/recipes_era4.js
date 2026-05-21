// =============================================================================
// 🌑 ERA IV: ENDGAME - EKSPEDYCJA W GŁĄB CIEMNOŚCI
// =============================================================================
// Najwyższy poziom zaawansowania
// Świat zewnętrzny został w pełni zautomatyzowany. Najpotężniejsze zasoby
// są ukryte głęboko pod ziemią (Deep Dark, Alex's Caves) i w posiadaniu bossów.

ServerEvents.recipes(event => {

    console.log('[AeroStratum] 🌑 Ładowanie receptur ERA IV...')

    // ====== APOTHEOSIS: Divine Gems & Mythic Gear ======
    // Skarby znajdują się wyłącznie w Deep Dark i podziemiach
    
    // Blokujemy domyślne dropy z normalnych skalek
    // (Apotheosis powinno być skonfigurowane aby droppować tylko w strukturach)
    event.remove({ output: 'apotheosis:gemstone_ore' })
    event.remove({ output: 'apotheosis:gem' })

    // Divine Gems wymagają zaawansowanego rzemiosła i są unikatowe
    event.recipes.create.sequenced_assembly([
        'apotheosis:gem'
    ], 'minecraft:diamond', [
        event.recipes.createDeploying('minecraft:diamond', ['create_nuclear:uranium_ingot']),
        event.recipes.createPressing('minecraft:diamond'),
        event.recipes.createDeploying('minecraft:diamond', ['minecraft:glowstone_dust'])
    ]).transitionalItem('minecraft:diamond').loops(3)


    // ====== SILENT GEAR: Ultimate Crafters ======
    // Narzędzia ostateczne
    
    event.remove({ output: 'silentgear:sword' })  // Możemy usunąć domyślny przepis
    
    event.recipes.create.sequenced_assembly([
        'silentgear:sword'
    ], 'silentgear:bort_sword', [
        event.recipes.createDeploying('silentgear:bort_sword', ['apotheosis:gem']),
        event.recipes.createPressing('silentgear:bort_sword'),
        event.recipes.createDeploying('silentgear:bort_sword', ['create_nuclear:uranium_ingot'])
    ]).transitionalItem('silentgear:bort_sword').loops(4)


    // ====== CATACLYSM: Boss Loot ======
    // Boskie przedmioty pochodzą tylko z przegranych bossów
    
    // Warden Loot - warunkowane победą nad Wardenem
    // (W grze Warden pojawia się w Deep Dark - boss naturalny)
    
    // Wyrm Jądro - tylko z przegrania Wyrma z Cataclysm
    // (Musimy upewnić się, że nie ma alternatywnych receptur)
    

    // ====== REFINED STORAGE: Nieskończony Zasięg ======
    // Transmiter o nieskończonym zasięgu dla ostatecznej automatyzacji
    
    event.remove({ output: 'rsinfinitybooster:infinite_card' })
    
    event.recipes.create.sequenced_assembly([
        'rsinfinitybooster:infinite_card'
    ], 'rsinfinitybooster:infinity_card', [
        event.recipes.createDeploying('rsinfinitybooster:infinity_card', ['apotheosis:gem']),
        event.recipes.createPressing('rsinfinitybooster:infinity_card'),
        event.recipes.createDeploying('rsinfinitybooster:infinity_card', ['create_nuclear:uranium_ingot']),
        event.recipes.createPressing('rsinfinitybooster:infinity_card')
    ]).transitionalItem('rsinfinitybooster:infinity_card').loops(5)


    // ====== CHAMPIONS: Legendarny Loot ======
    // Czempioni droppują unikalne przedmioty
    // (Zmuszamy walki z champion mobami dla zasobów)


    // ====== ALEX'S CAVES: Unikalne Materiały ======
    // Podziemne zasoby dostępne tylko w głębokich jaskiniach
    
    // Teraposite tylko z Alex's Caves
    event.remove({ output: 'alexscaves:teraposite_shard' })


    // ====== LOOTR: Chest Looting ======
    // Skarby w skrzyniach są indywidualne dla każdego gracza
    // (Lootr zapewnia, że każdy gracz ma szansę na loot)


    // ====== ADVANCED QUESTING ======
    // Tworzymy zaawansowane recepty które są "zablokowane" dla graczu
    // którzy nie ukończyli poprzednich Era
    
    event.remove({ output: 'kubejs:forbidden_item' })  // Placeholder
    

    console.log('[AeroStratum] ✅ ERA IV receptury załadowane!')

})


// =============================================================================
// BLOKOWANIE ZASOBÓW DLA WCZESNYCH ER
// =============================================================================
// Zmuszamy gracza do postępu poprzez uniemożliwienie dostępu do zasobów
// z zaawansowanych tieru dopóki nie osiągnie odpowiedniego poziomu

ServerEvents.recipes(event => {

    console.log('[AeroStratum] 🔒 Stosowanie ograniczeń Era...')

    // Blokujemy dostęp do diamentu z normalnego wydobycia (jeśli gracz ma enable)
    // Zamiast tego wymuszamy czerpanie z bossów lub deep dark

    // Blokujemy dostęp do obsidianu (można go czerpać wyłącznie z nether)
    event.remove({ output: 'minecraft:obsidian' })
    

    console.log('[AeroStratum] ✅ Ograniczenia załadowane!')

})
