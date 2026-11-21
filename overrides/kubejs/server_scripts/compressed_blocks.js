// --- SKRYPT RECEPTUR (server_scripts) ---
ServerEvents.recipes(event => {
  const materials = [
    { id: 'dirt', vanilla: 'minecraft:dirt' },
    { id: 'cobblestone', vanilla: 'minecraft:cobblestone' },
    { id: 'sand', vanilla: 'minecraft:sand' },
    { id: 'netherrack', vanilla: 'minecraft:netherrack' },
    { id: 'endstone', vanilla: 'minecraft:end_stone' },
    { id: 'deepslate', vanilla: 'minecraft:deepslate' }
  ]

  materials.forEach(mat => {
    // --- POZIOM 1 ---
    let c1 = `kubejs:compressed_${mat.id}_1`
    
    // 1. Kompresja: 9x Vanilla w Basinie z Prasą Mechaniczną -> 1x Compressed 1
    event.recipes.create.compacting(c1, Item.of(mat.vanilla, 9))
    
    // 2. Dekompresja Ręczna: 1x Compressed 1 w siatce 1x1 -> 9x Vanilla
    event.shapeless(Item.of(mat.vanilla, 9), [c1])
    
    // 3. Dekompresja Automatyczna: 1x Compressed 1 w Millstone -> 9x Vanilla
    event.recipes.create.milling(Item.of(mat.vanilla, 9), c1)

    // --- POZIOMY 2 DO 6 ---
    for (let i = 2; i <= 6; i++) {
      let prevBlock = `kubejs:compressed_${mat.id}_${i - 1}`
      let currentBlock = `kubejs:compressed_${mat.id}_${i}`

      // Kompresja w Basinie
      event.recipes.create.compacting(currentBlock, Item.of(prevBlock, 9))

      // Dekompresja ręczna w podręcznym craftingu
      event.shapeless(Item.of(prevBlock, 9), [currentBlock])

      // Dekompresja automatyczna w Millstone
      event.recipes.create.milling(Item.of(prevBlock, 9), currentBlock)
    }
  })
})