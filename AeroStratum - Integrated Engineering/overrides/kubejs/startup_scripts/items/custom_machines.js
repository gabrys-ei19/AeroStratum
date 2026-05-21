// =============================================================================
// 🎮 CUSTOM MACHINES - Maszyny Era-specyficzne
// =============================================================================
// Definiujemy niestandardowe bloki dla każdej epoki, które służą jako "bramki"
// postępu i symbole przejścia między epokamy technologicznych.

StartupEvents.registry('block', event => {
    
    // =========================================================================
    // ERA I: RDZEŃ ANDEZYTU
    // =========================================================================
    // Andezytowa maszyna to pierwszy symbol opanowania kinetyki i surowej cyfryzacji
    
    event.create('kubejs:andesite_machine')
        .displayName('§6Andezytowa Maszyna§r')
        .texture('all', 'kubejs:block/andesite_machine')
        .textureAll('kubejs:block/andesite_machine_top') // Mogą być różne tekstury dla stron
        .hardness(3.5)
        .resistance(6.0)
        .slipperiness(0.6)
        .sound('metal')
        .tagBoth('mineable/pickaxe')
        .tagBoth('needs_stone_tool')


    // =========================================================================
    // ERA INTERMEDIATE: LOGISTYKA PŁYNÓW
    // =========================================================================
    // Miedziana maszyna symbolizuje panowanie nad płynami i gazami
    
    event.create('kubejs:copper_machine')
        .displayName('§b Miedziana Maszyna§r')
        .texture('all', 'kubejs:block/copper_machine')
        .hardness(4.0)
        .resistance(7.0)
        .slipperiness(0.6)
        .sound('metal')
        .tagBoth('mineable/pickaxe')
        .tagBoth('needs_iron_tool')


    // =========================================================================
    // ERA II INTERMEDIATE: WCZESNA PETROCHEMIA (Ages Engine)
    // =========================================================================
    // Maszyna Ages - dostęp do Early TFMG i petrochemii
    
    event.create('kubejs:ages_machine')
        .displayName('§7⚙️ Maszyna Epok (Ages)§r')
        .texture('all', 'kubejs:block/ages_machine')
        .hardness(4.2)
        .resistance(7.5)
        .slipperiness(0.6)
        .sound('metal')
        .tagBoth('mineable/pickaxe')
        .tagBoth('needs_iron_tool')


    // =========================================================================
    // ERA II: MOSIĄDZ I PETROCHEMIA
    // =========================================================================
    // Mosiężna maszyna to przełom - pełny dostęp do technologii przemysłowej
    
    event.create('kubejs:brass_machine')
        .displayName('§e⚙️ Mosiężna Maszyna§r')
        .texture('all', 'kubejs:block/brass_machine')
        .hardness(4.5)
        .resistance(8.0)
        .slipperiness(0.6)
        .sound('metal')
        .tagBoth('mineable/pickaxe')
        .tagBoth('needs_iron_tool')


    // =========================================================================
    // ERA III: ATOM I DIESEL (opcjonalnie, jeśli będziesz rozszerzać)
    // =========================================================================
    // Energetyczna maszyna reprezentuje dostęp do energii atomowej
    
    event.create('kubejs:nuclear_machine')
        .displayName('§c☢️ Maszyna Jądrowa§r')
        .texture('all', 'kubejs:block/nuclear_machine')
        .hardness(5.0)
        .resistance(10.0)
        .slipperiness(0.6)
        .sound('metal')
        .tagBoth('mineable/pickaxe')
        .tagBoth('needs_diamond_tool')
})


// =============================================================================
// REJESTRACJA ITEMÓW NIESTANDARDOWYCH
// =============================================================================

StartupEvents.registry('item', event => {
    
    // Bloki-mashine jako itemów
    event.create('kubejs:andesite_machine')
        .displayName('Andezytowa Maszyna')
        .texture('kubejs:item/andesite_machine')

    event.create('kubejs:copper_machine')
        .displayName('Miedziaka Maszyna')
        .texture('kubejs:item/copper_machine')

    event.create('kubejs:ages_machine')
        .displayName('Maszyna Epok')
        .texture('kubejs:item/ages_machine')

    event.create('kubejs:brass_machine')
        .displayName('Mosiężna Maszyna')
        .texture('kubejs:item/brass_machine')

    event.create('kubejs:nuclear_machine')
        .displayName('Maszyna Jądrowa')
        .texture('kubejs:item/nuclear_machine')
})


// =============================================================================
// TAGGING - Kategoryzacja bloków
// =============================================================================

StartupEvents.registry('block', event => {
    event.get('kubejs:andesite_machine').tagBoth('kubejs:era_1_gates')
    event.get('kubejs:copper_machine').tagBoth('kubejs:era_intermediate_gates')
    event.get('kubejs:brass_machine').tagBoth('kubejs:era_2_gates')
    event.get('kubejs:nuclear_machine').tagBoth('kubejs:era_3_gates')
})
