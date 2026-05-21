# ⚡ QUICK START - AeroStratum Integrated Engineering

## 🎮 Dla Gracza (Szybki Start)

### Co to jest AeroStratum?

**AeroStratum** to modpack skupiający się na progresji **Create Mod** poprzez 4 ery:

| ERA | Nazwa | Bramka | Cel |
|-----|-------|--------|-----|
| 🪵 | Rdzeń Andezytu | Andesite Machine | Podstawowa automatyzacja |
| ⚙️ | Ciężki Przemysł | Brass Machine | Petrochemia & Grindery |
| ⚛️ | Atomowa Moc | Nuclear Reactor | Energia nuklearna |
| 🚁 | Lotnictwo | Flight Core | Sterowce & Endgame |

### Jak Grać?

```
1. Zbierz Andesite + Quartz z kamieni
2. Zrób Andesite Alloy w Furnace
3. Zbuduj pierwszą maszynę Create (Mechanical Press)
4. Wyrobi Andesite Machine (bramka ERA I)
   → Teraz masz dostęp do reszty receptur!
5. Zbieraj zasoby i buduj fabryki
6. Osiągaj mileposts każdej ery
7. Zbieraj się w Deep Dark na ERA IV
```

### Kluczowe Komendy

```
/ftbquests          # Pokaż aktywne zadania
/jei                # Pokaż wszystkie recepty
/advancement grant @s only aerostratum:era_X
```

---

## 👨‍💻 Dla Admina (Co Zrobić Teraz)

### ✅ Checklist Instalacji (5 min)

```bash
1. Pobierz AeroStratum modpack
2. Otwórz folder overrides/config/
3. Sprawdź czy są pliki:
   ✓ create-server.toml
   ✓ refinedstorage-common.toml
   ✓ silentgear-common.toml
4. Sprawdź kubejs/server_scripts/:
   ✓ recipes_era1.js
   ✓ recipes_era2.js
   ✓ recipes_era3.js
   ✓ recipes_era4.js
5. Uruchom grę, wejdź na świat
6. Sprawdź /ftbquests
7. Testuj recepty w creative mode
```

### 🎯 Gdzie Są Klucze Receptur?

```
WSZYSTKIE RECEPTY:
└── overrides/kubejs/server_scripts/
    ├── recipes_common.js        ← Wspólne + Tagi
    ├── recipes_era1.js          ← Controlled Storage, Coins
    ├── recipes_era2.js          ← TFMG, Silent Gear, Mobs
    ├── recipes_era3.js          ← Nuclear, Wireless
    └── recipes_era4.js          ← Deep Dark, Apotheosis, Endgame

KONFIGURACJE MODÓW:
└── overrides/config/
    ├── create-server.toml
    ├── refinedstorage-common.toml
    ├── silentgear-common.toml
    ├── create_tfmg-common.toml
    └── ... (pozostałe mody)
```

### 🔧 Jak Zmienić Recepturę?

```javascript
// Edytuj plik recipes_eraX.js

// 1. USUNĄĆ DOMYŚLNĄ:
event.remove({ output: 'mod:item_name' })

// 2. DODAĆ NOWĄ:
event.shaped('output_item', [
    'ABC',
    'DEF',
    'GHI'
], {
    A: 'component1',
    B: 'component2',
    // ...
})

// 3. SAVE & RELOAD GRZE
// Ctrl+R w grze = reload skryptów
```

### 📊 Gdzie Szukać Błędów?

```
logs/latest.log
     ↓
[CRITICAL] AeroStratum receptury nie załadowały!
[ERROR] Unknown item 'mod:typo_name'
[WARN] Recipe conflict detected

Fix: Sprawdzić item ID, save, reload.
```

---

## 📚 Struktura Receptur (Dla Developerów)

### System Bramek (Gating)

```javascript
// ERA I - Zamknięty Refined Storage dostęp
event.remove({ output: 'refinedstorage:controller' })  // Usuń tanią wersję
event.recipes.create.mechanical_crafting(
    'refinedstorage:controller',
    ['AQA', 'SMS', 'ABA'],
    {
        A: 'create:andesite_alloy',
        Q: 'minecraft:quartz',
        S: 'create:cogwheel',
        M: 'kubejs:andesite_machine',  // ← BRAMKA! Musi być zrobiona
        B: 'lightmanscurrency:coin_copper'
    }
)

// To ZMUSZA gracza do zbudowania Andesite Machine
// zanim będzie mógł zrobić Refined Storage Controller
```

### Rodzaje Receptur Create

| Typ | Kod | Zastosowanie |
|-----|-----|--------------|
| **Shaped** | `event.shaped()` | 2x2, 3x3 szablony |
| **Mechanical Crafting** | `event.recipes.create.mechanical_crafting()` | Duże 3x3 |
| **Pressing** | `event.recipes.create.pressing()` | Prasa |
| **Cutting** | `event.recipes.create.cutting()` | Piła |
| **Sequenced** | `event.recipes.create.sequenced_assembly()` | Wieloetapowy |
| **Mixing** | `event.recipes.create.mixing()` | Mieszalnik |

---

## 🎓 Tutorials Dla Graczy

### Tutorial ERA I: "Pierwszy Raz"

```
CELL 1: Zbierz Andesite
  → Wydobyj 10x Andesite ze skał
  → REWARD: 10x Andesite

CELL 2: Zrób Andesite Alloy
  → Połóż: Andesite + Copper w Furnace
  → Czekaj 10 sekund
  → REWARD: Andesite Alloy x2

CELL 3: Zbuduj Waterwheel
  → Postaw Waterwheel nad wodą
  → Połącz Shaft do Mechanical Press
  → REWARD: Copper Coin x10

CELL 4: Zrób Cogwheel
  → Użyj Mechanical Press + Andesite Alloy
  → REWARD: Cogwheel x5

CELL 5: Zrób Andesite Machine (BRAMKA ERA I!)
  → Postaw Mechanical Crafting
  → Załóż recepturę
  → REWARD: Andesite Machine + Access to ERA II
```

### Tutorial ERA II: "Petrokchemia"

```
CELL 1: Zdobądź Brass
  → Wydobyj Copper + Zinc
  → Złóż w Mechanical Mixer
  → REWARD: Brass Ingot x5

CELL 2: Zbuduj Brass Machine
  → (Sequenced Assembly)
  → REWARD: Brass Machine + Access to TFMG

CELL 3: Zbuduj Refinery (TFMG)
  → Postaw Distillation Controller
  → Połącz Furnace → Tubes → Casing
  → REWARD: Oil x1000

CELL 4: Zbuduj Diesel Engine
  → Craft Diesel z Refined Oil
  → Użyj w Mechanical Transmission
  → REWARD: High Power Output
```

---

## 🛠️ Developer Commands

```bash
# Reload KubeJS skrypty (w grze):
Ctrl + R

# Otworzyć JEI (pokaż wszystkie recepty):
Ctrl + O

# Creative Mode:
/gamemode creative @s

# Dać Item:
/give @s create:andesite_alloy 64

# Teleport:
/tp @s 0 100 0

# Advancement:
/advancement grant @s only aerostratum:era_1_complete
```

---

## 📞 Gdzie Szukać Pomocy

- **KubeJS Docs**: https://kubejs.com
- **Create Mod Docs**: https://create.fandom.com
- **Modpack Discord**: [Daj link do serwera]
- **GitHub Issues**: [Jeśli masz repo]

---

## ❓ FAQ

**P: Recepty nie działają!**
A: Sprawdzić logs/latest.log, czy mody są zainstalowane

**P: Gracz nie widzi nowej receptury!**
A: `Ctrl+R` w grze aby reload skryppy

**P: Jak zmienić koszt receptury?**
A: Edytuj recipes_eraX.js → dodaj/usuń komponenty

**P: Mogę dodać swoje recepty?**
A: Tak! Dodaj nowy plik: `recipes_custom.js`

**P: Gdzie są loot'y ze struktur?**
A: `overrides/datapacks/` (jeśli są konfigurowane)

---

## 🎉 Gratulacje!

**Twój modpack jest gotów do grania!**

Następny krok:
1. Zaproś graczy
2. Zbieraj feedback
3. Dostosuj balans
4. Enjoy! 🎮

---

Ostatnia aktualizacja: 21 Maja 2026
Wersja: 1.0-BETA
Status: READY FOR TESTING ✅
