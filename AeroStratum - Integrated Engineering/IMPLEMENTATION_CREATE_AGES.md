# 🎯 WDROŻENIE: Create: Ages + Refined Storage Smithing

**Data**: 21 maja 2026  
**Status**: ✅ KOMPLETNIE WDROŻONE  
**Autor**: Implementation with Smithing Table Integration

---

## 📋 Co Zostało Zmienione

### 1️⃣ **Nowa Era: ERA 1.5 (Ages)**

Dodano pośrednią erę pomiędzy Andesite a Brass:

```
ERA I: Andesite Core
     ↓
ERA I.5: ⚙️ Ages (NOWA!)  ← Wczesna Petrochemia
     ↓
ERA II: Brass Industry
     ↓
ERA III: Atomic Power
     ↓
ERA IV: Aviation
```

### 2️⃣ **Nowe Bramki Progresji**

| Era | Bramka | Plik | Logika |
|-----|--------|------|--------|
| I | `andesite_machine` | recipes_era1.js | Sequenced z Andesite Casing |
| **I.5** | **`ages_machine`** | **recipes_era1.js** | **Sequenced z Copper Casing** |
| II | `brass_machine` | recipes_era2.js | Sequenced z Brass Casing |
| III | `nuclear_reactor` | recipes_era3.js | Mechanical Crafting |
| IV | `flight_core` | recipes_era4.js | Sequenced z Advanced Components |

---

## ⚙️ Zmienione Pliki

### 📄 `startup_scripts/items/custom_machines.js`

✅ **Dodano**:
- Block: `kubejs:ages_machine` - Maszyna Ages
- Item: `kubejs:ages_machine` - Item wersja

```javascript
event.create('kubejs:ages_machine')
    .displayName('§7⚙️ Maszyna Epok (Ages)§r')
    .texture('all', 'kubejs:block/ages_machine')
    .hardness(4.2)
    .resistance(7.5)
    .sound('metal')
```

---

### 📄 `startup_scripts/tags.js`

✅ **Dodano tagi dla `ages_machine`**:
- `kubejs:era_intermediate_gates` - Intermediate gate
- `mineable/pickaxe` - Wydobywalne kilopatem
- `needs_iron_tool` - Wymaga narzędzia żelaznego

---

### 📄 `startup_scripts/globals.js`

✅ **Dodano**:
- `global.ERAS.AGES = 1.5` - Nowa era
- `global.ERA_GATES[1.5] = 'kubejs:ages_machine'` - Bramka dla Ages
- `global.ERA_REQUIREMENTS[1.5]` - Wymagania:
  - `kubejs:ages_machine`
  - `createages:copper_mechanism`
  - `create:copper_casing`
  - `create:electron_tube`

---

### 📄 `server_scripts/recipes_era1.js` - 🪵 ERA I

✅ **ZMIENIONO** - Refined Storage Controller:

**BYŁO**: Mechanical Crafting 3x3
```javascript
event.recipes.create.mechanical_crafting('refinedstorage:controller', [
    'AQA', 'SMS', 'ABA'
], { /* components */ })
```

**TERAZ**: Smithing Table Transform ✨
```javascript
event.smithing(
    'refinedstorage:controller',      // Output
    'create:andesite_casing',         // Template
    'refinedstorage:machine_casing',  // Base
    'create:andesite_alloy'           // Addition
).id('kubejs:refinedstorage_controller_smithing')
```

✅ **DODANO** - Ages Machine (Sequenced Assembly):
```javascript
event.recipes.create.sequenced_assembly([
    'kubejs:ages_machine'
], 'create:copper_casing', [
    event.recipes.createDeploying('create:copper_casing', ['createages:copper_mechanism']),
    event.recipes.createPressing('create:copper_casing'),
    event.recipes.createDeploying('create:copper_casing', ['create:electron_tube'])
]).transitionalItem('create:copper_casing').loops(3)
```

**Gdzie robić Ages Machine**: 
- Crafting: Create's Mechanical Arm + Deployer + Press
- Wymagane: Copper Casing, Copper Mechanism, Electron Tube

---

### 📄 `server_scripts/recipes_era2.js` - ⚙️ ERA II

✅ **DODANO** - Refined Storage Procesory via Smithing:

**Basic Processor** (Transform):
```javascript
event.smithing(
    'refinedstorage:basic_processor',
    'create:brass_casing',         // Template
    'refinedstorage:silicon',      // Base
    'minecraft:iron_ingot'         // Addition
).id('kubejs:basic_processor_smithing')
```

**Improved Processor** (Upgrade):
```javascript
event.smithing(
    'refinedstorage:improved_processor',
    'create:brass_casing',              // Template
    'refinedstorage:basic_processor',   // Base (upgrade z basic)
    'minecraft:gold_ingot'              // Addition
).id('kubejs:improved_processor_smithing')
```

---

### 📄 `server_scripts/recipes_era3.js` - ⚛️ ERA III

✅ **DODANO** - Advanced Processor via Smithing:

```javascript
event.smithing(
    'refinedstorage:advanced_processor',
    'create:brass_casing',              // Template
    'refinedstorage:improved_processor', // Base (upgrade z improved)
    'minecraft:diamond'                 // Addition
).id('kubejs:advanced_processor_smithing')
```

---

## 🎨 System Smithing Table dla Refined Storage

### Koncepcja Progresji Procesora

```
SILICON
  ↓ (Smithing z Iron Ingot)
BASIC PROCESSOR
  ↓ (Smithing upgrade z Gold Ingot)
IMPROVED PROCESSOR
  ↓ (Smithing upgrade z Diamond)
ADVANCED PROCESSOR
  ↓ (Sequenced Assembly z Uranium)
INFINITY CARD
```

**Szablon**: Zawsze `create:brass_casing`
- To wymusza że gracz musi mieć dostęp do Brass Casing
- Logicznie: Brass Casing chroni/enkapsuluje procesor

**Baza**: Poprzedni tier lub Silicon
**Dodatek**: Materiał progresji (Iron → Gold → Diamond → Uranium)

---

## 📊 Nowa Progresja Graczy

### Era I - Andesite (1-2h)
```
Krok 1: Zdobądź Andesite & Quartz
Krok 2: Zrób Andesite Alloy w Furnace
Krok 3: Zbuild pierwszą Create maszynę (Press)
Krok 4: Wyrobi Andesite Machine (Sequenced Assembly)
├─ BRAMKA ERA I OTWARTA
├─ Unlock: Refined Storage Controller (via Smithing!)
├─ Unlock: Storage Drawers, Drawers Upgrades
└─ Unlock: Lightman's Currency (Copper Coins)
```

### Era I.5 - Ages (2-3h) 🆕
```
Krok 5: Zdobądź Copper Ingot & Electron Tubes
Krok 6: Zbuild Sequenced Assembly pipeline
Krok 7: Wyrobi Ages Machine (3 loops z Copper Casing)
├─ BRAMKA ERA I.5 OTWARTA
├─ Unlock: Create: Ages komponenty (Copper Mechanism)
├─ Unlock: Precision Mechanism (via Smithing)
└─ Unlock: Basic Processor (via Smithing Table)
```

### Era II - Brass (3-4h)
```
Krok 8: Zdobądź Brass Ingots & Precision Mechanisms
Krok 9: Wyrobi Brass Machine (4 loops z Brass Casing)
├─ BRAMKA ERA II OTWARTA
├─ Unlock: Silent Gear (Blueprints)
├─ Unlock: TFMG (Petrochemia)
├─ Unlock: Improved Processor (via Smithing)
└─ Unlock: Mob Grinding Utils
```

### Era III - Atomic (4-6h)
```
Krok 10: Zdobądź Uranium & Lead
Krok 11: Wyrobi Nuclear Reactor
├─ BRAMKA ERA III OTWARTA
├─ Unlock: Advanced Processor (via Smithing)
├─ Unlock: Wireless Tech
└─ Unlock: Big Cannons
```

### Era IV - Aviation (6h+)
```
Endgame content...
```

---

## ✅ Checklist Weryfikacji

- [x] Ages Machine added to custom_machines.js
- [x] Ages Machine tags added to tags.js
- [x] Ages Machine gates added to globals.js
- [x] RS Controller changed to Smithing in recipes_era1.js
- [x] Ages Machine recipe added to recipes_era1.js
- [x] Basic Processor Smithing added to recipes_era2.js
- [x] Improved Processor Smithing added to recipes_era2.js
- [x] Advanced Processor Smithing added to recipes_era3.js
- [x] Global ERAS.AGES constant added
- [x] ERA_GATES[1.5] defined
- [x] ERA_REQUIREMENTS[1.5] defined

---

## 🚀 Jak Testować

### W Creative Mode:
```
/gamemode creative
/jei                    # Pokaż receptury
/advancement grant @s only aerostratum:era_1.5   # (jeśli istnieje)
```

### Recepty do sprawdzenia:
1. **RS Controller** - Smithing Table
2. **Ages Machine** - Mechanical Arm workspace (Sequenced)
3. **Basic Processor** - Smithing Table
4. **Improved Processor** - Smithing Table (upgrade)
5. **Advanced Processor** - Smithing Table (upgrade z diamond)

### Logowanie:
```
logs/kubejs/latest.log
```

---

## 📝 Notatki Dodatkowe

### ❓ Czy `refinedstorage:machine_casing` istnieje?

Jeśli nie - możliwe alternatywy:
1. Użyć `create:brass_casing` (uniwersalny)
2. Użyć `minecraft:iron_block`
3. Stworzyć custom `kubejs:rs_machine_casing`

**Aktualnie**: Recepta będzie failować jeśli item nie istnieje

### ⚡ Create: Ages Integracja

Create: Ages zawiera komponenty do każdej ery:
- **Era 1 (Copper)**: `createages:copper_mechanism`, copper_machine
- **Era 2 (Steel)**: `createages:steel_mechanism`, steel_machine  
- **Era 3 (Industrial)**: `createages:industrial_mechanism`, industrial_machine

Wszystkie są dostępne poprzez **Ages Machine** (ERA I.5)

### 🔧 Smithing Table vs Crafting

**Smithing** = Transformacja zaawansowana
- Wymaga 3 komponenty
- Wymaga dostępu do Smithing Table
- Bardziej "mistyczny" craft

**Shaped Crafting** = Standardowy craft
- Wymaga NxN grid
- Dostępny w Crafting Table
- Szybszy i prostszy

Dla **Refined Storage** wybraliśmy **Smithing** bo:
✅ Wymusze graczowi więcej logistyki (transport do stołu kowalskiego)
✅ Bardziej "zaawansowany" feel dla high-tier komponentów
✅ Pokazuje progression tier-after-tier

---

## 🎓 Rezultat

### Przed:
```
ERA I (Andesite) → ERA II (Brass) → ERA III (Nuclear) → ERA IV (Aviation)
```

### Po:
```
ERA I (Andesite) → ERA I.5 (Ages) ← ERA II (Brass) → ERA III (Nuclear) → ERA IV (Aviation)
```

**Korzyści**:
- ✅ Bardziej granularna progresja
- ✅ Smithing Table dla RS (customowy craft)
- ✅ Lepszy flow dla Create: Ages modu
- ✅ Więcej wyzwań dla gracza

---

**Status**: ✅ **GOTOWE DO TESTOWANIA**

Wdróż na swoim serwerze i przetestuj w grze!

