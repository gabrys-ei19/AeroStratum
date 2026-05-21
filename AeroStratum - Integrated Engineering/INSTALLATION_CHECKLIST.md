# 🚀 AEROSTRATUM - INSTALLATION & SETUP CHECKLIST

## ✅ Co zostało utworzone dla AeroStratum

### 📋 Pliki Konfiguracyjne (✨ NOWE)
- [x] `create-server.toml` - Konfiguracja mechaniki Create
- [x] `refinedstorage-common.toml` - Magazyn dyskowy i energia
- [x] `silentgear-common.toml` - System rzemiosła metalowego
- [x] `create_tfmg-common.toml` - The Factory Must Grow (petrochemia)
- [x] `mob_grinding_utils-common.toml` - Grindery kinematyczne
- [x] `aerostratum-progression.json` - Dokumentacja progresji

### 🎯 Pliki KubeJS (✅ UZUPEŁNIONE)
- [x] `recipes_common.js` - Wspólne recepty i tagi
- [x] `recipes_era1.js` - ERA I: Rdzeń Andezytu (KOMPLETNY)
- [x] `recipes_era2.js` - ERA II: Ciężki Przemysł (KOMPLETNY)
- [x] `recipes_era3.js` - ERA III: Atomowa Moc (KOMPLETNY)
- [x] `recipes_era4.js` - ERA IV: Ekspedycja w Głąb (KOMPLETNY)
- [x] `globals.js` - Zmienne globalne (NOWY)

### 📚 Dokumentacja (✨ NOWA)
- [x] `ANALIZA_I_KONFIGURACJA.md` - Pełna dokumentacja systemu

---

## 📥 KROK 1: Instalacja Modów

Upewnij się, że masz zainstalowane WSZYSTKIE te mody w odpowiedniej wersji (1.21 NeoForge):

```
CORE MODS (WYMAGANE):
✓ Create
✓ Create: The Factory Must Grow (TFMG)
✓ Create: Nuclear
✓ KubeJS
✓ Collective (biblioteka)

STORAGE & LOGISTICS:
✓ Refined Storage 2
✓ Storage Drawers
✓ Sophisticated Backpacks
✓ Sophisticated Storage

CRAFTING & EQUIPMENT:
✓ Silent Gear
✓ Lightman's Currency
✓ Comforts

MOB GRINDING:
✓ Mob Grinding Utils
✓ Champions

ADVANCED:
✓ RSInfinity Booster
✓ FTB Quests
✓ FTB Chunks
✓ Apotheosis
✓ Create: Deep Dark
✓ Create: Dragons Plus
✓ Create: Big Cannons
✓ Immersive Aircraft
```

**Gdzie znaleźć mody:**
- ModRinth: https://modrinth.com
- CurseForge: https://www.curseforge.com/minecraft/mods

---

## 📁 KROK 2: Aktualizacja Struktury

Sprawdź, czy masz taką strukturę:

```
AeroStratum - Integrated Engineering/
├── complete_progression.js          ✓ (Istnieje)
├── ANALIZA_I_KONFIGURACJA.md       ✓ (Nowy)
├── INSTALLATION_CHECKLIST.md       ✓ (Ten plik)
└── overrides/
    ├── config/
    │   ├── create-server.toml                    ✓ Nowy
    │   ├── refinedstorage-common.toml            ✓ Nowy
    │   ├── silentgear-common.toml                ✓ Nowy
    │   ├── create_tfmg-common.toml               ✓ Nowy
    │   ├── mob_grinding_utils-common.toml        ✓ Nowy
    │   ├── aerostratum-progression.json          ✓ Nowy
    │   └── [pozostałe config pliki...]           (Do dodania z Chosen's)
    └── kubejs/
        └── server_scripts/
            ├── recipes_common.js                 ✓ Istnieje
            ├── recipes_era1.js                   ✓ Istnieje
            ├── recipes_era2.js                   ✓ Istnieje
            ├── recipes_era3.js                   ✓ Istnieje
            ├── recipes_era4.js                   ✓ Istnieje
            └── startup_scripts/
                └── globals.js                    ✓ Nowy
```

---

## 🎮 KROK 3: Testowanie w Grze

### Pierwszy Start:
```bash
1. Otwórz launcher
2. Załaduj AeroStratum modpack
3. Utwórz nowy świat
4. Wejdź do grać
5. Otwórz chat i wpisz: /ftbquests

# Powinieneś zobaczyć questy ERA I
```

### Logowanie Błędów:
```bash
# Błędy będą w:
logs/latest.log

# Szukaj wiadomości:
[AeroStratum] 🪵 Ładowanie receptur ERA I...
[AeroStratum] ✅ ERA I receptury załadowane!

# BŁĄD - szukaj:
[AeroStratum] ❌ ERROR...
```

---

## 🔧 KROK 4: Co Jeszcze Trzeba Dodać?

### ❌ TODO - Missin Configurations:

```
1. 🎯 FTB Quests System
   Lokalizacja: overrides/config/ftbquests/
   Zawartość: Definicje zadań/zaawansowań dla każdej ery
   Priorytet: WYSOKI (bez tego graczom brakuje celu)

2. 🎵 Custom Sounds (opcjonalnie)
   Lokalizacja: overrides/assets/minecraft/sounds/
   Zawartość: Dźwięki dla osiągnięć ERA
   Priorytet: NISKI

3. 📖 Custom Resource Pack (opcjonalnie)
   Lokalizacja: overrides/resourcepacks/
   Zawartość: Custom tekstury dla maszyn ERA
   Priorytet: NISKI

4. 🌍 Custom Worldgen
   Lokalizacja: overrides/config/worldgen/
   Zawartość: Niestandardowe rudy, biomy
   Priorytet: ŚREDNI

5. 🛡️ Server Properties
   Lokalizacja: server.properties
   Ustawienia: Multiplayer properties
   Priorytet: ŚREDNI (jeśli serwer multiplayer)
```

### ✅ TODO - Configuration Tweaking:

```
1. 📊 Fine-Tuning Progresji
   - Sprawdzić czy bramki ERA są odpowiednio kosztowne
   - Przetestować czasy craftu
   - Dostosować numer Steps

2. 🎮 Balance Testowania
   - Grać w kazdej ERA przez 1-2 godziny
   - Notować co jest za łatwe/trudne
   - Ajustować recepty w kubejs/

3. 🔊 Debugging
   - Włączyć console logging
   - Szukać red flags w logs/latest.log
   - Fixować recipe conflicts
```

---

## 🎯 KROK 5: Optymalizacja dla Multiplayer (OPCJONALNE)

Jeśli grają wieloosobowo:

```toml
# overrides/config/neoforge-server.toml
[performance]
    enableAsyncChunkLoading = true
    maxChunkLoadingThreads = 4
    
[world]
    enablePersistentChunkStorage = true
    playerChunkLoadRadius = 10
```

---

## 📊 KROK 6: Monitorowanie Progresji

### Śledzenie Graczy:

```bash
# Komendy w grze (dla admina):

# Sprawdzić aktualną erę gracza
/advancement grant @s only aerostratum:era_1_complete

# Dać graczowi dostęp do ERA II
/give @s kubejs:brass_machine

# Zobaczyć wszystkie recepty
/jei
```

### Logi do Monitorowania:

```
logs/latest.log:

✅ SUKCES:
[AeroStratum] ✅ ERA I receptury załadowane!
[KubeJS] All 150+ recipes registered

❌ PROBLEMY:
[AeroStratum] ❌ ERROR...
[KubeJS] Failed to load...
[Create] Unknown recipe...
```

---

## 🚨 Troubleshooting

### Problem: Recepty nie działają
```
→ Sprawdzenie logs/latest.log
→ Sprawdzić czy itemy istnieją w modach
→ Zweryfikować item ID (np. create:brass_ingot vs create_brass:ingot)
→ Restartować grę
```

### Problem: Recepty duplikują się
```
→ Sprawdzić czy nie ma duplicate .js files
→ Pamiętaj: każdy .js w server_scripts/ jest wczytywany
→ Nie powielaj event.remove() w wielu plikach
```

### Problem: Graczy nie widzą postępu
```
→ Sprawdzić /ftbquests - czy questy są dostępne?
→ Dać gracze dostęp via /advancement
→ Sprawdzić czy bramki ERA są dobrze skonfigurowane
```

---

## 🏁 FINAL CHECKLIST

Przed wysłaniem gracjom:

- [ ] Wszystkie mody zainstalowane i kompatybilne
- [ ] Pliki config skopiowane do `overrides/config/`
- [ ] Pliki KubeJS w `overrides/kubejs/server_scripts/`
- [ ] Globals.js w `overrides/kubejs/startup_scripts/`
- [ ] Przetestowany pierwszy start w single player
- [ ] Sprawdzone logs - brak ERROR'ów
- [ ] Recepty działają (mechanical crafting testów)
- [ ] FTB Quests pokazują questy (jeśli dodane)
- [ ] Balans ery - nie za łatwy, nie za trudny
- [ ] Dokumentacja dostępna dla graczy

---

## 📞 Gdzie Szukać Pomocy

- **KubeJS Wiki**: https://kubejs.com/docs/script/
- **Create Mod Wiki**: https://create.fandom.com/
- **Modding Discord**: https://discord.gg/6W9DfwF

---

## 📝 Notatki

```
Data Tworzenia: 21 Maja 2026
Status Systemu: GOTOWY DO TESTOWANIA
Ostatnia Aktualizacja: Teraz
Wersja Modpacku: AeroStratum 1.0-BETA
```

---

**🎉 GRATULACJE! Twój modpack AeroStratum jest gotowy!**

**Następny krok**: Zaproś graczy, zbieraj feedback, i dostosuj balans ery!
