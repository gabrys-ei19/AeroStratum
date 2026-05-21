# 🏗️ AEROSTRATUM - Integrated Engineering | Analiza & Konfiguracja

## 📋 Spis Treści
1. [Co zostało zrobione](#co-zostało-zrobione)
2. [Jak działają skrypty](#jak-działają-skrypty)
3. [Struktura konfiguracji](#struktura-konfiguracji)
4. [Co jeszcze potrzebujesz](#co-jeszcze-potrzebujesz)
5. [Kroki konfiguracji](#kroki-konfiguracji)

---

## ✅ Co zostało zrobione

### 1. **System Progresji ERA-Based**
Utworzono progresję 4-eropową opartą na **maszynach bramkujących**:

| ERA | Nazwa | Maszyna Bramka | Główne Cele |
|-----|-------|----------------|------------|
| **I** | 🪵 Rdzeń Andezytu | `andesite_machine` | Podstawowa automatyzacja, magazynowanie, monety |
| **II** | ⚙️ Ciężki Przemysł | `brass_machine` | Petrochemia, grindery, moc kinematyczna |
| **III** | ⚛️ Technologia Atomowa | `nuclear_reactor` | Energia atomowa, bezprzewodowość |
| **IV** | 🚁 Lotnictwo | `special_flight_core` | Sterowce, endgame exploration |

### 2. **Gating Receptur (Blokowanie tanich receptur)**

```
Przykład ERA I:
┌─────────────────────────────────────────┐
│ Refined Storage Controller              │
├─────────────────────────────────────────┤
│ Przed: Crafting Table (tanio)           │
│ Po:    Mechanical Crafting (drogo!)     │
├─────────────────────────────────────────┤
│ Wymagane komponenty:                    │
│ - Andesite Alloy (5 szt)                │
│ - Cogwheel (2 szt)                      │
│ - Andesite Machine (1 szt) ← BRAMKA     │
│ - Quartz (2 szt)                        │
│ - Copper Coin (1 szt)                   │
└─────────────────────────────────────────┘
```

### 3. **Zaproponowane Recepty**

#### **ERA I: Rdzeń Andezytu**
- ✅ Refined Storage Controller (gated)
- ✅ Storage Drawers (drewniane) - wymagają andesite alloy
- ✅ Lightman's Currency - proste prasy
- ✅ Sophisticated Backpacks - базовые
- ✅ Comforts Hammocks - proste śpiwory

#### **ERA II: Ciężki Przemysł** (TODO - wymaga planu)
- Create: The Factory Must Grow - Refinery access
- Silent Gear - Blueprints (metalowe, nie papierowe)
- Mob Grinding Utils - Grindery kinematyczne
- Industrial Foregoing gating

#### **ERA III: Technologia Atomowa** (TODO)
- Create: Nuclear Reactors
- Refined Storage Wireless (wymaga uranu)
- RSInfinity Booster - nieskończony zasięg

#### **ERA IV: Lotnictwo** (TODO)
- Immersive Aircraft - customowe maszyny latające
- Valkyrien Skies integration

---

## 🔧 Jak działają skrypty

### **1. KubeJS - Struktura Serwerowa**

```
kubejs/server_scripts/
├── recipes_common.js      ← Wspólne recepty + tagi
├── recipes_era1.js        ← ERA I - Bramka Andezytu
├── recipes_era2.js        ← ERA II - Ciężki Przemysł
├── recipes_era3.js        ← ERA III - Atomowa Moc
└── recipes_era4.js        ← ERA IV - Lotnictwo
```

**Schemat działania:**

```javascript
ServerEvents.recipes(event => {
    // 1. USUWANIE - Remove vanilla recipe
    event.remove({ output: 'MOD:item' })
    
    // 2. DODAWANIE - Add gated recipe
    event.recipes.create.mechanical_crafting(
        'OUTPUT_ITEM',
        ['ABC', 'DEF', 'GHI'],  // 3x3 pattern
        {
            A: 'component1',
            B: 'component2',
            // itd...
        }
    )
})

ServerEvents.tags('item', event => {
    // Grupowanie itemów dla łatwości
    event.add('kubejs:era_1_requirements', [...])
})
```

### **2. Typy receptur Create**

| Typ | Opis | Zastosowanie |
|-----|------|--------------|
| `mechanical_crafting` | 2x2, 3x3 szablony | Główne gating |
| `pressing` | Prasa | Monety, blachy |
| `cutting` | Piła | Drewno, kamień |
| `sequenced_assembly` | Wieloetapowy | Zaawansowane |
| `deploying` | Wdrażanie | Składanie |

### **3. Jak funguje Complete Progression.js**

```javascript
// File główny: complete_progression.js
// Zawiera WSZYSTKIE recepty 4 er

ServerEvents.recipes(event => {
    // ERA I
    event.remove({ ... })
    event.recipes.create.mechanical_crafting(...)
    
    // ERA II
    event.recipes.create.pressing(...)
    
    // ERA III
    event.recipes.create.sequenced_assembly(...)
    
    // ERA IV
    event.recipes.create.mechanical_crafting(...)
})
```

**Ładowanie:**
- KubeJS automatycznie wczytuje wszystkie pliki z `server_scripts/`
- Mogą być w dowolnej kolejności (tagi zarządzane osobno)
- Duplikaty = ostatni vygrywa

---

## 📁 Struktura konfiguracji

### **Krityczne pliki do AeroStratum**

```
overrides/config/
├── 🎯 create-common.toml          (✓ Istnieje, ale pusty)
├── 🎯 create-server.toml          (✗ BRAK - potrzebny!)
├── 🔧 refinedstorage-common.toml  (✗ BRAK - potrzebny!)
├── 🔧 silentgear-common.toml      (✗ BRAK - potrzebny!)
├── 🔧 sophisticated*.toml         (✗ Wiele brakuje)
├── 🔧 ftbquests/               (✗ BRAK - system zadań!)
│   └── quests.snbt             ← Definicje zadań/zaawansowań
└── 🔧 kubejs/
    ├── server_scripts/
    │   ├── recipes_common.js      (✓ Istnieje)
    │   ├── recipes_era1.js        (✓ Istnieje)
    │   ├── recipes_era2.js        (✗ Niekompletny!)
    │   ├── recipes_era3.js        (✗ Niekompletny!)
    │   └── recipes_era4.js        (✗ Niekompletny!)
    └── startup_scripts/
        └── globals.js             (✗ BRAK - zmienne globalne)
```

### **Co w każdym pliku config**

#### `create-server.toml` - Konfiguracja mechaniki Create
```toml
[recipes]
    bulkPressing = false        # Tłoczenie jeden item na raz
    bulkCutting = false         # Cięcie jeden item na raz
    allowBrewingInMixer = true  # Mieszalnik na mikstury
    allowShapelessInMixer = true
    allowStonecuttingOnSaw = true
    maxFireworkIngredientsInCrafter = 9

[contraptions]
    # Konfiguracja mechanicznych konstrukcji
    # (brak zmiany = domyślne)

[worldgen]
    disableWorldGen = false     # Rudy - Create dodaje własne
```

#### `refinedstorage-common.toml` - Magazyn dyskowy
```toml
[controller]
    energyCapacity = 10000      # Pojemność zasilania
    # Ustawić wyżej = więcej mocy dostępnej

[grid]
    energyUsage = 10            # Koszt siatki
    sortingType = "QUANTITY"    # Sortowanie po ilości

[craftingGrid]
    energyUsage = 14

[diskDrive]
    energyUsage = 10            # Dyski HD
```

---

## ❌ Co jeszcze potrzebujesz

### **1. Brakujące pliki KubeJS** 
```
✗ recipes_era2.js - MUSZĄ zawierać:
  - Refined Storage Wireless (wymóg mosiądzu)
  - Silent Gear - Smithing Table (wymóg stali z TFMG)
  - Mob Grinding Utils - Saw (wymóg stali)
  - Industrial Foregoing gating

✗ recipes_era3.js - MUSZĄ zawierać:
  - Refined Storage Wireless Transmitter
  - Create: Nuclear - Reactor Core
  - RSInfinity Booster (wymóg uranu!)

✗ recipes_era4.js - MUSZĄ zawierać:
  - Valkyrien Skies integration
  - Immersive Aircraft - Custom flight cores
```

### **2. Brakujące config pliki**
```
✗ create-server.toml
✗ refinedstorage-common.toml
✗ silentgear-common.toml
✗ create_tfmg-common.toml
✗ sophisticatedbackpacks-server.toml
✗ ftbquests/ - System zadań!
```

### **3. System zadań/zaawansowań** (KRYTYCZNE!)
```
FTB Quests pozwala:
- Definiować liniową progresję ERA
- Nagrodę za ukończenie: itemy, przepisy, unlocki
- Interfejs w grze: /ftbquests

Alternatywa: Advancement JSON'y
```

### **4. Stół kowalski Silent Gear**
```
Aktualnie: Crafting Table
Docelowo:  Smithing Table (patrz: silent gear config)

Config: silentgear-common.toml
[crafting]
    smithingTableSmithingEnabled = true
```

---

## 🚀 Kroki konfiguracji

### **KROK 1️⃣ - Kopiuj pliki z "Chosen's Integrated"**

```bash
# Zamiast ręcznego kopiowania:
cp "Chosen's Create Integrated - 1.4.3/overrides/config/create-server.toml" \
   "AeroStratum - Integrated Engineering/overrides/config/"

# Pliki do skopiowania:
- create-server.toml
- refinedstorage-common.toml
- silentgear-common.toml
- create_tfmg-common.toml
- sophisticated*.toml
```

### **KROK 2️⃣ - Uzupełnij brakujące recepty ERA II-IV**

Należy usupełnić w `recipes_era2.js`, `recipes_era3.js`, `recipes_era4.js`:

```javascript
// recipes_era2.js SZABLON
ServerEvents.recipes(event => {
    console.log('[AeroStratum] ⚙️  Ładowanie receptur ERA II...')
    
    // === SILENT GEAR: Smithing Table ===
    event.remove({ output: 'silentgear:gear_smithing_table' })
    
    event.shaped('silentgear:gear_smithing_table', [
        'SPS',
        'MCM',
        'BBB'
    ], {
        S: 'create_tfmg:steel_ingot',        // Stal = ERA II
        P: 'create:precision_mechanism',
        C: 'minecraft:crafting_table',
        M: 'create:brass_casing',
        B: 'create:brass_ingot'
    })
    
    // === MOB GRINDING UTILS: Saw ===
    event.remove({ output: 'mob_grinding_utils:saw' })
    
    event.shaped('mob_grinding_utils:saw', [
        'SGS',
        'RMR',
        'SGS'
    ], {
        S: 'create_tfmg:steel_ingot',
        G: 'create:cogwheel',
        R: 'minecraft:redstone',
        M: 'create:precision_mechanism'
    })
    
    console.log('[AeroStratum] ✅ ERA II receptury załadowane!')
})
```

### **KROK 3️⃣ - System zadań (FTB Quests)**

Utwórz:
```
kubejs/ftbquests/quests.snbt
```

Zawartość:
```snbt
{
    id: "aerostratum_main_quests"
    title: "AeroStratum - Integrated Engineering"
    icon: "create:crafting_table"
    
    # ERA I Quests
    {
        title: "Andesite Foundation"
        subtitle: "Build your first Create machine"
        reward: "kubejs:andesite_machine"
    }
    
    # ERA II Quests
    {
        title: "Industrial Power"
        subtitle: "Create your first reactor"
        reward: "create_nuclear:reactor_core"
    }
    
    # itd...
}
```

### **KROK 4️⃣ - Upewnij się, że zainstalowane są wszystkie mody**

```
Wymagane mody dla pełnej funkcjonalności:
✓ Create
✓ Create: The Factory Must Grow
✓ Create: Nuclear Reactors
✓ Refined Storage 2
✓ Silent Gear
✓ Mob Grinding Utils
✓ RSInfinity Booster
✓ FTB Quests
✓ Sophisticated Backpacks
✓ Lightman's Currency
✓ Storage Drawers
✓ Comforts
✓ Champions
✓ Create: Deep Dark
✓ Create: Dragons Plus
✓ Immersive Aircraft
✓ Valkyrien Skies (opcjonalnie)
```

### **KROK 5️⃣ - Włącz logowanie**

Aby debugować:
```javascript
// W każdym pliku recipes_*.js
console.log('[AeroStratum] ✅ Recepty załadowane!')
// Pojawi się w: logs/latest.log
```

---

## 📊 Porównanie: Chosen's vs AeroStratum

| Aspekt | Chosen's Integrated | AeroStratum (planowana) |
|--------|-------------------|----------------------|
| **ERY** | 3 (+ endgame) | 4 structured |
| **Struktura** | Scentralizowana w complete_progression.js | Modułowa: recipes_era*.js |
| **Konfigy** | 100+ plików | Minimalna (fokus na receptach) |
| **Główna bramka** | Andesite Machine | Andesite Machine |
| **Era II** | Brass + TFMG | Brass + TFMG + Silent Gear |
| **Era III** | Nuclear + Wireless | Nuclear + Wireless |
| **Era IV** | Endgame questing | Aircraft + Valkyrien Skies |

---

## 🎯 Rekomendacje

### ✅ CO ZROBIĆ TERAZ:
1. Skopiuj konfiguracje z Chosen's Integrated
2. Uzupełnij `recipes_era2.js`, `era3.js`, `era4.js`
3. Utwórz system zadań (FTB Quests lub advancements)
4. Test w grze i debug logów

### ⚠️ CO UNIKAĆ:
- Duplikowanie receptur pomiędzy plikami (ostatni wins, ale chaos!)
- Taniego gating (musi być kosztowne, aby pracowało!)
- Zbyt szybkiego spacingu między ERami (graczem powinni być zmuszeni, by grać tydzień na ERA)

### 🚀 CO ROZSZERZYĆ:
- Questing system z nagrodami za milestone'i
- Custom loot tables dla mob grinderów
- Integracja z Divine Journey (jeśli masz)
- Custom advancements w Minecraft

---

## 📚 Referencje

- **KubeJS Docs**: [kubejs.com](https://kubejs.com)
- **Create Mod**: [create.fandom.com](https://create.fandom.com)
- **FTB Quests**: [docs.feedthebeast.com](https://docs.feedthebeast.com)

---

**Data utworzenia**: 21 Maja 2026
**Status**: AKTYWNY - Czeka na implementacje ERA II-IV
**Następny krok**: Implementacja recipes_era2.js
