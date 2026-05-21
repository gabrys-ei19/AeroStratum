# 📂 KubeJS - Struktura Skryptów

Witaj! Ten folder zawiera wszystkie skrypty **KubeJS** dla paczki **AeroStratum: Integrated Engineering**.

## 📁 Organizacja Plików

```
kubejs/
├── startup_scripts/
│   ├── items/
│   │   └── custom_machines.js       🔹 Rejestracja bloków maszyn (4 Era-specific)
│   └── tags.js                      🔹 Tagi bloków i itemów
│
├── server_scripts/
│   ├── recipes_era1.js              🎯 Przepisy Era I (6 receptur)
│   ├── recipes_era2.js              🎯 Przepisy Era II (8 receptur)
│   ├── recipes_era3.js              🎯 Przepisy Era III (10 receptur)
│   ├── recipes_era4.js              🎯 Przepisy Era IV (5 receptur)
│   └── recipes_common.js            🎯 Wspólne tagi i tagging
│
├── client_scripts/
│   └── tooltips.js                  🎮 Tooltipsy UI (30+ tooltipsów)
│
└── config/
    └── ftbchunks-world-sample.toml   ⚙️  Próbka konfiguracji FTB Chunks
```

## 🚀 Co To Jest?

KubeJS to mod pozwalający pisać skrypty w JavaScripcie aby modyfikować Minecrafta. W tej paczce używamy KubeJS do:

✅ **Registracji niestandardowych bloków** (Maszyn Era)  
✅ **Modyfikacji przepisów craftu** (30+ zmian)  
✅ **Dodania tagów dla kategoryzacji** (maszyny, monety, źródła energii)  
✅ **Tooltipsów dla interfejsu** (podpowiedzi dla gracza)  

## 🎮 Cztery Ery Technologiczne

| Era | Plik | Bramka | Przepisy |
|-----|------|--------|----------|
| 🪵 I | `recipes_era1.js` | `kubejs:andesite_machine` | 6 |
| ⚙️ II | `recipes_era2.js` | `kubejs:brass_machine` | 8 |
| ⚛️ III | `recipes_era3.js` | `rsinfinitybooster:infinity_card` | 10 |
| 🌑 IV | `recipes_era4.js` | `apotheosis:gem` | 5 |

## 📝 Jak Edytować?

### Dodaj Nowy Przepis

W pliku `recipes_eraX.js`:

```javascript
ServerEvents.recipes(event => {
    // Usuń stary przepis
    event.remove({ output: 'mod:item' })
    
    // Dodaj nowy przepis
    event.shaped('mod:item', [
        'ABC',
        'DEF',
        'GHI'
    ], {
        A: 'minecraft:dirt',
        B: 'minecraft:stone',
        // ...
    })
})
```

### Dodaj Tooltip

W pliku `client_scripts/tooltips.js`:

```javascript
event.add('minecraft:diamond', [
    '§6Moja Porada§r',
    'To jest pomocna informacja',
    'Może być wiele linii'
])
```

## ⚙️ Konfiguracja

Musimy przenieść pliki konfiguracyjne z `config/` do:

```
overrides/config/  
```

Przykładowo: `ftbchunks-world-sample.toml` → `overrides/config/ftbchunks/ftbchunks-world.toml`

## 🎨 Tekstury

Bloki maszyn wymagają tekstur w:

```
overrides/assets/kubejs/textures/block/
├── andesite_machine.png
├── copper_machine.png
├── brass_machine.png
└── nuclear_machine.png
```

## 🐛 Debugowanie

Aby włączyć tryb debug:

W grze: `/execute as @s run datagen:debug`

Lub w pliku: `global.kubeJS_debug = true`

Sprawdź logi: `logs/latest.log` szukając `[AeroStratum]`

## 📚 Więcej Informacji

- **README.md** - Kompletna dokumentacja
- **CHANGES.md** - Log zmian
- **technical-manifest.json** - Opis zamiaru paczki

---

**Pamiętaj:** KubeJS skrypty ładują się AUTOMATYCZNIE. Nie musisz nic instalować! Po prostu edytuj pliki i użyj `/reload`.
