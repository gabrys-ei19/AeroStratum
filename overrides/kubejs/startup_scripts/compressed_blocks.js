StartupEvents.registry('block', event => {
  const materials = [
    { id: 'dirt', texture: 'minecraft:block/dirt', sound: 'grass' }, // Zmieniono z 'dirt' na 'grass'
    { id: 'cobblestone', texture: 'minecraft:block/cobblestone', sound: 'stone' },
    { id: 'sand', texture: 'minecraft:block/sand', sound: 'sand' },
    { id: 'netherrack', texture: 'minecraft:block/netherrack', sound: 'netherrack' },
    { id: 'endstone', texture: 'minecraft:block/end_stone', sound: 'stone' },
    { id: 'deepslate', texture: 'minecraft:block/deepslate', sound: 'deepslate' }
  ]

  // Paleta 6 stopni przyciemnienia (od najjaśniejszego do bardzo ciemnego)
  const darkTints = ['#D8D8D8', '#B0B0B0', '#888888', '#606060', '#404040', '#202020']

  materials.forEach(mat => {
    for (let i = 1; i <= 6; i++) {
      let matName = mat.id.charAt(0).toUpperCase() + mat.id.slice(1)
      if (mat.id === 'endstone') matName = 'Endstone'

      event.create(`compressed_${mat.id}_${i}`)
           .displayName(`${i}x Compressed ${matName}`)
           .texture(mat.texture)
           .color(0, darkTints[i - 1])
           .soundType(mat.sound)
           .hardness(2.0 * i)
           .resistance(6.0 * i)
           .requiresTool(i > 2)
    }
  })
})