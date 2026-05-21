# 🌌 AeroStratum: Integrated Engineering - KubeJS Scripts

Witaj w sercu programowania Twojej paczki modów! Ten folder zawiera wszystkie niestandardowe skrypty KubeJS, które definiują progresję graczy poprzez **cztery epoki technologiczne**.

## 📂 Struktura Folderów

```
KubeJS/
├── startup_scripts/           # 🚀 Ładowane na starcie serwera
│   ├── items/
│   │   └── custom_machines.js # Rejestracja bloków maszyn (Andesite, Copper, Brass, Nuclear)
│   └── tags.js                # Tagi bloków i itemów dla kategoryzacji
│
├── server_scripts/            # ⚙️  Logika serwerowa - przepisy i mechanika
│   ├── recipes_era1.js        # 🪵 Era I: Rdzeń Andezytu
│   ├── recipes_era2.js        # ⚙️  Era II: Mosiądz i Petrochemia
│   ├── recipes_era3.js        # ⚛️  Era III: Atom, Diesel i Lotnictwo
│   ├── recipes_era4.js        # 🌑 Era IV: Endgame
│   └── recipes_common.js      # 📋 Wspólne recepty i tagi
│
├── client_scripts/            # 🎮 Logika po stronie klienta
│   └── tooltips.js            # Podpowiedzi itemów (tooltips)
│
├── config/                    # ⚙️  Konfiguracje modów
│   └── ...                    # (Będzie rozszerzone)
│
└── technical-manifest.json    # 📜 Opis paczki i zamiaru projektowego
```

## 🎮 Cztery Ery Progresji

### 🪵 **Era I: Rdzeń Andezytu**
- **Temat:** Kinetyka i Surowa Cyfryzacja
- **Bramka:** `kubejs:andesite_machine`
- **Komponenty:** Koła wodne, Wiatraki, Automatyzacja Andezytu
- **Ograniczenia:**
  - Refined Storage Controller wymaga zaawansowanego rzemiosła (Mechanical Crafting)
  - Storage Drawers wymuszają użycie Andesite Alloy
  - Surowiec: Andezyt, miedziana moneta

### ⚙️ **Era II: Mosiądz i Petrochemia**
- **Temat:** Ciężki Przemysł i Bezwzględna Wydajność
- **Bramka:** `kubejs:brass_machine`
- **Komponenty:** Silent Gear, TFMG Refinery, Mob Grinding
- **Ograniczenia:**
  - Blueprint Paper wymaga prasowania z mosiądzem
  - Gear Smithing Table wymaga stali z TFMG
  - Mob Grinder wymaga zaawansowanych komponentów
  - Surowce: Stal, Mosiądz, Precision Mechanism

### ⚛️ **Era III: Atom, Diesel i Flota Powietrzna**
- **Temat:** Globalny Endgame i Bezprzewodowość
- **Bramka:** `rsinfinitybooster:infinity_card`
- **Komponenty:** Reaktor Jądrowy, Silnik Dieslowy, Big Cannons
- **Ograniczenia:**
  - Wireless Transmission wymaga Uranu i Ołowu
  - Infinity Card wymuszają sequenced assembly z radioaktywnym materiałem
  - Surowce: Uran, Ołów, zaawansowana energia

### 🌑 **Era IV: Endgame - Głąb Ciemności**
- **Temat:** Eksploracja i Walka z Bossami
- **Bramka:** `apotheosis:gem` (Divine Gems)
- **Komponenty:** Deep Dark, Alex's Caves, Cataclysm Bosses
- **Ograniczenia:**
  - Boskie Klejnoty dostępne tylko w specjalnych biomach
  - Loot z bossów jako jedyne źródło endgame'owych materiałów
  - Surowce: Warden Skull, Divine Gems, Mythic Components

## 🔧 Jak Skrypty Działają

### Startup Scripts
- **Uruchamiają się na starcie serwera**
- Rejestrują niestandardowe bloki (Andesite Machine, itd.)
- Definiują tagi dla kategoryzacji

### Server Scripts
- **Uruchamiają się po załadowaniu świata**
- Usuwają domyślne przepisy (`event.remove()`)
- Dodają nowe przepisy spełniające wymagania Ery (`event.recipes.*`)
- Cada Era ma dedykowany plik do łatwego debugowania

### Client Scripts
- **Uruchamiają się tylko po stronie klienta**
- Dodają tooltipsy (podpowiedzi) do itemów
- Wskazują do której Ery należy item
- Pomagają graczowi w nawigacji progresji

## 📝 Edycja Przepisów

Aby dodać nowy przepis:

```javascript
ServerEvents.recipes(event => {
    // Usunięcie starego przepisu
    event.remove({ output: 'mod:item_name' })
    
    // Dodanie nowego przepisu
    event.shaped('mod:item_name', [
        'XYZ',
        'YXY',
        'ZYX'
    ], {
        X: 'minecraft:dirt',
        Y: 'create:andesite_alloy',
        Z: 'minecraft:stone'
    })
})
```

## 🎯 Zasady Projektowe

1. **Progresja** - Każda Era wymusza użycia materiałów z poprzedniej
2. **Gating** - Dostęp do zaawansowanej technologii jest zablokowany za "bramkami" (specjalne maszyny/itemy)
3. **Sensowalny Koszt** - Każdy item wymaga zaangażowania i zasobów
4. **Immersja** - Tooltipsy pomagają graczowi zrozumieć "opowieść" paczki

## 🛠️ Deweloperskie Tipy

- **Debug:** Dodaj `global.kubeJS_debug = true` aby włączyć logging
- **Testy:** Użyj `/reload` aby przeładować skrypty bez restartu
- **Błędy:** Sprawdź console (`/console` w grze lub `logs/latest.log`)

## 📦 Zależności Modów

Skrypty wymagają następujących modów:
- **Create** - Rzemiosło mechaniczne
- **Refined Storage** - Logistyka cyfrowa
- **Silent Gear** - Zaawansowane narzędzia
- **Create: The Factory Must Grow** - Petrochemia
- **Create Nuclear** - Energia atomowa
- **Create Big Cannons** - Artyleria
- I wiele innych... (patrz `modlist.html`)

## 📚 Powiązane Pliki

- `technical-manifest.json` - Szczegółowy opis zamiaru paczki
- `modlist.html` - Lista wszystkich zainstalowanych modów
- `complete_progression.js` - Oryginalna, jednolita wersja (referencja)

---

**Powodzenia w budowie Twojej paczki! 🚀**
