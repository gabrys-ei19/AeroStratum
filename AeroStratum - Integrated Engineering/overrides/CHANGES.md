# 📋 Zmiany i Dodania - AeroStratum: Integrated Engineering

## ✅ Ukończone

### 📁 Struktura Folderów
- [x] Utworzono `startup_scripts/items/` - dla rejestracji bloków
- [x] Utworzono `startup_scripts/tags.js` - dla tagów
- [x] Utworzono `server_scripts/` - podzielone na Era
- [x] Utworzono `client_scripts/` - dla UI
- [x] Utworzono `config/` - dla konfiguracji modów

### 🚀 Startup Scripts
- [x] `startup_scripts/items/custom_machines.js`
  - Rejestracja bloku `kubejs:andesite_machine` (Era I)
  - Rejestracja bloku `kubejs:copper_machine` (Era Intermediate)
  - Rejestracja bloku `kubejs:brass_machine` (Era II)
  - Rejestracja bloku `kubejs:nuclear_machine` (Era III)
  - Definiowanie tvrdości, textury i tagów

- [x] `startup_scripts/tags.js`
  - Tagi bloków dla kategoryzacji Era
  - Tagi itemów dla kategoryzacji Era
  - Tagi mineable (pickaxe)
  - Tagi tool requirements (stone, iron, diamond)

### ⚙️ Server Scripts - Przepisy

#### Era I: Rdzeń Andezytu
- [x] `server_scripts/recipes_era1.js`
  - Refined Storage Controller (Mechanical Crafting)
  - Storage Drawers (wymagają Andesite Alloy)
  - Lightman's Currency coins
  - Sophisticated Backpacks
  - Comforts mod
  - Andesite Machine sequenced assembly

#### Era II: Mosiądz i Petrochemia
- [x] `server_scripts/recipes_era2.js`
  - Silent Gear: Blueprint Paper (Pressing)
  - Silent Gear: Gear Smithing Table
  - Mob Grinding Utils: Saw
  - TFMG: Distillation Controller
  - Sophisticated Storage: Barrels & Cabinets
  - Lightman's Currency: Silver & Gold
  - Brass Machine sequenced assembly

#### Era III: Atom, Diesel i Lotnictwo
- [x] `server_scripts/recipes_era3.js`
  - Refined Storage: Wireless Transmitter
  - RS Infinity Booster: Infinity Card (sequenced)
  - Create Nuclear: Reactor Core
  - TFMG: Diesel Engine
  - Create Big Cannons: Barrels & Bases
  - Numismatics: Credit Cards
  - FTB Chunks: Chunk Loader

#### Era IV: Endgame
- [x] `server_scripts/recipes_era4.js`
  - Apotheosis: Divine Gems (Deep Dark only)
  - Silent Gear: Ultimate Crafters
  - RS Infinity Booster: Infinite Card
  - Blokowanie zasobów dla wczesnych Er

### 📋 Common Scripts
- [x] `server_scripts/recipes_common.js`
  - Tag management
  - Item grouping (coins, machines, energy sources, logistics)
  - Debug logging

### 🎮 Client Scripts
- [x] `client_scripts/tooltips.js`
  - Tooltipsy dla itemów z każdej Era
  - Informacje o bramkach Era
  - Toksyczne materiały (uran)
  - JEI integration

### 📚 Dokumentacja
- [x] `README.md` - Kompletna dokumentacja struktury
- [x] `config/README.md` - Instrukcja dla plików konfiguracyjnych
- [x] `CHANGES.md` - Ten plik

### ⚙️ Konfiguracje Modów
- [x] `config/ftbchunks-world-sample.toml` - Próbka konfiguracji FTB Chunks

---

## 🔄 Migracja z Istniejących Plików

### Zmienione Pliki
- `complete_progression.js` - Może być usunięty (zamiast tego używamy modułowych Era scriptów)
- `server_scripts/progression_era1_2.js` - Może być usunięty (zamiast tego recipes_era1.js i recipes_era2.js)

---

## 📊 Statystyka

### Utworzone Pliki
- **8 nowych plików KubeJS**
- **3 nowe foldery**
- **2 pliki dokumentacji**
- **1 przykładowy plik konfiguracyjny**

### Przepisy Zmienione/Dodane
- **Era I:** ~6 receptur
- **Era II:** ~8 receptur
- **Era III:** ~10 receptur
- **Era IV:** ~5 receptur
- **Common:** Tagi i tagowanie
- **Total:** ~30+ receptur i modyfikacji

### Bloki Niestandardowe
- 4 nowe bloki maszyn (z textury i tagami)

---

## 🎯 Następne Kroki (Opcjonalnie)

### [ ] Do Zrobienia
- [ ] Stworzyć texture files dla bloków (`assets/kubejs/textures/block/`)
- [ ] Stworzyć texture files dla itemów (`assets/kubejs/textures/item/`)
- [ ] Dodać Quest dla FTB Quests (progression)
- [ ] Skonfigurować Apotheosis dla Deep Dark drops
- [ ] Skonfigurować Cataclysm boss loot
- [ ] Stworzyć JEI recipe descriptions
- [ ] Testować wszystkie receptury w grze
- [ ] Optymalizować czasy craftu
- [ ] Dodać more modów konfiguracji

---

## 🔍 Pliki Referencyjne

Inspiracja z paczki "Chosen's Create Integrated":
- `Chosen's Create Integrated - 1.4.3/overrides/kubejs/` - Struktura KubeJS
- `technical-manifest.json` - Opis zamiaru paczki
- `modlist.html` - Lista modów

---

## 📝 Notatki

1. **Tekstury** - Bloki rejestracyjne wskazują na tekstury w `kubejs:block/` - musisz je stworzyć
2. **Sequenced Assemblies** - Era I Machine wymaga 3 pętli, Era II wymaga 4
3. **Tagi** - Wszystkie bloki maszyn posiadają odpowiednie tagi dla categoryzacji
4. **Tooltips** - Klienci widzą informacje o Erze w grze

---

**Data aktualizacji:** 21 maja 2026

**Użytkownik:** s.gabrys

**Projekt:** AeroStratum: Integrated Engineering
