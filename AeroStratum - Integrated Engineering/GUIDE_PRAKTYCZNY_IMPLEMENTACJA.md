# 🚀 PRAKTYCZNY GUIDE - Implementacja Create: Ages + Smithing

**Cel**: Zaimplementować zmiany w Twoim modpacku i zweryfikować że działa

---

## ⚠️ WAŻNE: Elementy do Weryfikacji

### 1. **Refined Storage Machine Casing** ❓

**Problem**: Recepta RS Controller używa `refinedstorage:machine_casing`

**Sprawdzenie**:
```bash
# Otwórz grę w creative mode
/jei refinedstorage:machine_casing
# Jeśli item NIE pojawia się → trzeba zmienić!
```

**Jeśli item NIE istnieje** → Edytuj `recipes_era1.js`:

```javascript
// ZMIEŃ TO:
event.smithing(
    'refinedstorage:controller',
    'create:andesite_casing',         // Template
    'refinedstorage:machine_casing',  // ← ZMIEŃ!
    'create:andesite_alloy'
)

// NA TO:
event.smithing(
    'refinedstorage:controller',
    'create:andesite_casing',         // Template
    'create:brass_casing',            // ← Alternatywa
    'create:andesite_alloy'
)
```

---

### 2. **Create: Ages Mod**

**Sprawdzenie**: Czy mod istnieje w packzie?

```bash
# W grze:
/jei createages:copper_mechanism
# Jeśli pojawia się → mod jest zainstalowany ✅
```

**Jeśli NIE istnieje**:
```
Trzeba dodać Create: Ages do manifest.json!
```

---

## 📝 Kroki Wdrożenia

### Krok 1: **Backup Plików**

```powershell
# Jeśli coś pójdzie nie tak
cd "\\ssm-fs01\Home\s.gabrys\My Documents\3_VScode\AeroStratum - Integrated Engineering"

# Skopiuj folder backup
Copy-Item -Path overrides -Destination overrides_backup -Recurse
```

### Krok 2: **Sprawdź Syntaksę KubeJS**

```bash
# W grze, console:
/kubejs reload_startup_scripts
# Czekaj na output...
```

**Szukaj błędów**:
```
[ERROR] ...
[WARN] ...
```

Jeśli pojawią się błędy - sprawdź logs:
```
logs/kubejs/latest.log
```

### Krok 3: **Reload Serwera**

```bash
# W grze:
/reload
```

**Czekaj** aż skrypty się loadują (~5-10 sekund)

### Krok 4: **Testuj Recepty**

```bash
# Creative mode
/gamemode creative

# Sprawdzaj każdą recepturę:
/jei refinedstorage:controller        # ← Powinno być Smithing!
/jei refinedstorage:basic_processor   # ← Smithing!
/jei kubejs:ages_machine              # ← Sequenced Assembly!
```

---

## 🧪 Test Suitе - Weryfikacja

### Test 1: **Ages Machine Craftable**
```
✓ Gracz ma dostęp do Copper Casing
✓ Gracz ma dostęp do Copper Mechanism
✓ Gracz ma dostęp do Electron Tube
✓ Može zbuild Sequenced Assembly
```

### Test 2: **RS Controller via Smithing**
```
✓ Smithing Table przyjmuje:
  - Template: Andesite Casing
  - Base: [sprawdzić co jest]
  - Addition: Andesite Alloy
✓ Output: RS Controller
```

### Test 3: **Basic Processor via Smithing**
```
✓ Smithing Table przyjmuje:
  - Template: Brass Casing
  - Base: RS Silicon
  - Addition: Iron Ingot
✓ Output: Basic Processor
```

### Test 4: **Processor Upgrade Chain**
```
✓ Basic → Improved (+ Gold Ingot)
✓ Improved → Advanced (+ Diamond)
✓ Advanced → Infinity Card (+ Uranium via Sequenced)
```

---

## 🔧 Troubleshooting

### ❌ Błąd: `unknown recipe type 'smithing'`

**Przyczyna**: Zamiast `event.smithing()` użyto złej metody

**Rozwiązanie**: Upewnij się że używasz:
```javascript
event.smithing(output, template, base, addition)
```

A NIE:
```javascript
event.recipes.smithing(...)  // ✗ ZŁE!
```

---

### ❌ Błąd: `item X not found`

**Przyczyna**: Item nie istnieje w grze

**Sprawdzenie**:
```bash
/jei item_name
```

**Jeśli item nie pojawia się**:
1. Mod nie jest zainstalowany
2. Item ma inną nazwie
3. Item wymaga konkretnej wersji moduŚ

---

### ❌ Recepta nie pojawia się w JEI

**Przyczyna**: Może być wiele!

**Debugowanie**:
```bash
# Sprawdź logi
tail -f logs/kubejs/latest.log

# Poszukaj:
[ERROR] Recipe failed: ...
[WARN] Unknown item: ...
```

---

## 📊 Spodziewane Rezultaty

Po wdrożeniu powinni Ci być:

### ✅ W ERA I:
- [ ] Refined Storage Controller dostępny via Smithing Table
- [ ] Ages Machine dostępny via Sequenced Assembly

### ✅ W ERA I.5 (Nowa):
- [ ] Unlock Create: Ages komponentów
- [ ] Basic Processor via Smithing

### ✅ W ERA II:
- [ ] Improved Processor via Smithing
- [ ] TFMG dostępny
- [ ] Silent Gear dostępny

### ✅ W ERA III:
- [ ] Advanced Processor via Smithing
- [ ] Nuclear dostępny
- [ ] Wireless Tech dostępny

---

## 🎯 Opcjonalne Ulepszenia

### Opcja 1: Dodaj Tooltips
**Plik**: `server_scripts/tooltips.js`

```javascript
ItemEvents.toolTip(event => {
    event.add('refinedstorage:controller', [
        '§7Crafted via Smithing Table',
        '§7Requires: Andesite Casing + [X] + Andesite Alloy'
    ])
})
```

### Opcja 2: Dodaj Advancement
**Plik**: `data/kubejs/advancements/aerostratum_ages.json`

```json
{
    "criteria": {
        "craft_ages": {
            "trigger": "minecraft:item_used_on_block",
            "predicate": {
                "item": {
                    "item": "kubejs:ages_machine"
                }
            }
        }
    }
}
```

### Opcja 3: Zmień Create: Ages Recepty
**Plik**: `recipes_era1.js` + `recipes_era2.js`

```javascript
// Dodaj inne Create: Ages komponenty
// Precision Mechanism via Smithing
// Electron Tube via Smithing
// itd...
```

---

## ⏱️ Czasowy Plan Implementacji

| Czas | Zadanie | Status |
|------|---------|--------|
| 5 min | Sprawdź backup | ⏳ |
| 10 min | Verify items | ⏳ |
| 5 min | Test Smithing | ⏳ |
| 5 min | Test Ages Machine | ⏳ |
| 5 min | Test Processors | ⏳ |
| **30 min** | **TOTAL** | ⏳ |

---

## 📞 Jeśli Coś Nie Działa

### Kroki Debug:

1. **Sprawdź logi**:
   ```
   logs/kubejs/latest.log
   logs/latest.log
   ```

2. **Reload skryptów**:
   ```
   /kubejs reload_startup_scripts
   /reload
   ```

3. **Clear cache** (jeśli trzeba):
   ```
   Usuń: kubejs/exported/
   Reload grę
   ```

4. **Sprawdź item names**:
   ```
   /jei item_name  # Pokaż w JEI
   ```

5. **Dodaj debug logi**:
   ```javascript
   console.log(`[DEBUG] Ages Machine recipe created`)
   ```

---

## ✅ Finalizacja

Po sprawdzeniu wszystkiego:

- [ ] Ages Machine craftable
- [ ] RS Controller via Smithing
- [ ] Procesory via Smithing
- [ ] Upgrade chain działający
- [ ] Brak błędów w logach
- [ ] JEI pokazuje receptury

**Status**: Gotowe do publicznej gry! 🚀

