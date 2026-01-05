# A Nagy Túlélő: Az Első Hónap - Kódbázis Dokumentáció

## 📁 Fájlstruktúra

```
Moneygame/
├── index.html          # Játék HTML struktúra
├── style.css           # Stíluslapok és design
├── game.js             # Játéklogika és állapotkezelés
└── notes.md            # Fejlesztési jegyzetek
```

---

## 🎮 Játék Jelenlegi Állapota

### Megvalósított Funkciók

1. **Karakterválasztás**
   - 6 különböző karakter különböző fizetésekkel, fix kötelezettségekkel és élethelyzetekkel
   - Bruttó/nettó bér megjelenítése
   - Fix havi kötelezettségek megjelenítése (pl. Diákhitel, Tech-lízing, Autóhitel)
   - Kezdő egyenleg számítása (nettó bér - fix költség)
   - Karakterspecifikus pénzügyi szakszavak

2. **Végtelen Játékmenet**
   - A játék folytatódik a végtelenségig
   - Havonta (4 hét után) automatikusan új fizetés érkezik
   - Valós dátumok követése (hetenként +7 nap)
   - Magyar dátumformátum
   - Hónap megjelenítés valós dátum alapján (pl. "2026 január")

3. **Költségkategóriák**
   - Lakhatás (havi költség - csak minden hónap 1. hetében levonva)
     * 5 szint: Mamahotel (-40k, támogatás!), Szobatársak (110k), Garzon (190k), Modern lakás (280k), Luxus loft (420k)
   - Étkezés (heti költség - minden héten levonva)
     * 5 szint: Aszkéta (14k), Spórolós (23k), Normál (35k), Gasztro (53k), Gourmet (80k)
   - Szórakozás (havi költség - csak minden hónap 1. hetében levonva)
     * 5 szint: Unalom (0k), Minimál (20k), Szociális (50k), Aktív (110k), High Life (250k)
   - Megtakarítás (szabadon beállítható összeg, opcionálisan automatikus)

4. **Perzisztens Választások**
   - Kiválasztott opciók megmaradnak a hetek között
   - Nem kell minden héten újra választani
   - Csak változtatás esetén kell újra kattintani

5. **Információs Panel**
   - Összecsukható legördülő menü
   - Bruttó/nettó bér magyarázata
   - Adók és járulékok részletezése
   - Karakterspecifikus szakszavak minden karakterhez

6. **Automatikus Megtakarítás**
   - Checkbox opció a megtakarítás mellett
   - Ha be van pipálva: minden hónapban automatikusan félretesz ugyanannyi pénzt
   - Ha nincs bepipálva: csak manuálisan, az aktuális héten

7. **Befektetési Rendszer**
   - Három opció: Szabad megtakarítás, Bank, Tőzsde
   - **Szabad megtakarítás**: Bármikor elérhető
   - **Bank (lekötött betét)**: 
     * 1.5% fix kamat
     * 6 hónap után jár vissza a pénz + kamat
   - **Tőzsde (részvények)**:
     * Következő hónap végén visszatér
     * -3% és +5% közötti random hozam (kockázat)
   - Ha auto-savings be van kapcsolva, a kiválasztott befektetési típust használja havonta

8. **Heti Események**
   - Minden héten automatikusan történik egy véletlenszerű esemény
   - 100 különböző esemény: 40 balszerencse, 30 szerencse, 30 vegyes/döntés
   - **Balszerencse**: automatikus kiadások és boldogságcsökkenés (pl. törött telefon, büntetés)
   - **Szerencse**: automatikus bónuszok és boldogságnövekedés (pl. bónusz, találmány)
   - **Vegyes/Döntések**: a játékos választhat két opció között (pl. utazás, vásárlás)
   - **Speciális események**: befektetés (50% esély), szerencsejáték (kockadobás 1-6), stb.

9. **Játékmechanikák**
   - Egyenleg követés (lehet negatív is - adósság)
   - Boldogságszint (0-100)
   - Megtakarítás rendszer:
     * Szabad megtakarítás (bármikor elérhető)
     * Lekötött befektetések (bank + tőzsde)
   - Tranzakciós előzmények
   - Véletlenszerű események minden héten

10. **Játék Vége** (Jelenleg nem használt)
   - A játék most végtelen, nincs game over képernyő
   - A gameOverScreen HTML elem megmaradt, de nem kerül megjelenítésre

---

## 🔧 Technikai Részletek

### HTML Struktúra (`index.html`)

#### Status Bar
- `#characterSelection` - Karakterválasztó képernyő
- `#gameScreen` - Fő játék képernyő
- `#gameOverScreen` - Játék vége képernyő (jelenleg nem használt)

Minden képernyő `.screen` osztályú, és csak az `.active` osztályú látható.

#### Fő Játék Komponensek
```html
.status-bar              # Állapotmutatók (dátum, hónap, hét, egyenleg, boldogság)
                         # Sticky pozíció - mindig látható görgetéskor
.character-info          # Karakter információk
  .info-panel            # Összecsukható info panel
    .info-toggle         # Nyitó/záró gomb
    .info-content        # Panel tartalma
.weekly-actions          # Heti döntések területe
  .expense-category      # Költségkategória (lakhatás, étel, szórakozás)
    .options-grid        # Opciók rácsszerű elrendezése
      .option-card       # Egyetlen opció kártya
    .savings-investment-container  # Megtakarítás és befektetési opciók konténer (flexbox)
      .savings-display   # Megtakarítás összesítés (bal oldal)
      .investment-options # Befektetési típusok (jobb oldal)
  .savings-input         # Megtakarítás beviteli mező
  .auto-savings-checkbox # Automatikus megtakarítás checkbox
.event-display           # Eseménykártya megjelenítő (modal)
.transaction-history     # Tranzakciók listája
```

---

### CSS Architektúra (`style.css`)

#### CSS Változók (`:root`)
```css
--primary-color: #2563eb      # Elsődleges szín (kék)
--success-color: #10b981      # Sikeres műveletek (zöld)
--warning-color: #f59e0b      # Figyelmeztetések (sárga)
--danger-color: #ef4444       # Veszélyek, költségek (piros)
--bg-primary: #f8fafc         # Elsődleges háttér
--bg-secondary: #ffffff       # Másodlagos háttér
--text-primary: #1e293b       # Fő szövegszín
--text-secondary: #64748b     # Másodlagos szövegszín
```

#### Reszponzív Design
- Desktop first megközelítés
- Breakpoint: 768px (mobil)
- Grid layout az opciókhoz és státuszokhoz

#### Új Komponensek (Info Panel)
```css
.info-toggle              # Lenyíló gomb animációval
.info-content             # Max-height transition alapú animáció
.info-content.expanded    # Kinyitott állapot (max-height: 1000px)
```

---

### JavaScript Architektúra (`game.js`)

#### 1. Globális Állapot: `gameState`

```javascript
gameState = {
    character: null,           // Kiválasztott karakter objektum
    balance: 0,                // Aktuális egyenleg (Ft) - lehet negatív!
    happiness: 50,             // Boldogságszint (0-100)
    savings: 0,                // Szabad megtakarított összeg (Ft)
    currentWeek: 1,            // Jelenlegi hét (1-4)
    totalWeeks: 4,             // Összes hét havonta
    currentMonth: 1,           // Hónap számláló (1, 2, 3, ...)
    startDate: null,           // Játék kezdő dátuma (Date objektum)
    currentDate: null,         // Aktuális dátum (Date objektum)
    transactions: [],          // Tranzakciók tömbje
    weeklyChoices: {           // Heti választások (perzisztens!)
        housing: null,         // Lakhatás opció objektum
        food: null,            // Étkezés opció objektum
        entertainment: null,   // Szórakozás opció objektum
        savingsAmount: 0       // Megtakarítandó összeg (manuális)
    },
    autoSavingsEnabled: false, // Automatikus havi megtakarítás be van-e kapcsolva
    autoSavingsAmount: 0,      // Automatikus megtakarítás összege (ha engedélyezett)
    investmentType: 'none',    // 'none', 'bank', 'stock' - auto-savings befektetési típusa
    bankInvestments: [],       // Bank befektetések: [{amount, depositMonth, maturityMonth}]
    stockInvestments: []       // Tőzsde befektetések: [{amount, depositMonth}]
}
```

#### 2. Játékadatok: `gameData`

```javascript
gameData = {
    characters: [],          // Karakter objektumok tömbje
    housingOptions: [],      // Lakhatási opciók tömbje
    foodOptions: [],         // Étkezési opciók tömbje
    entertainmentOptions: [], // Szórakozási opciók tömbje
    weeklyEvents: [[], [], [], []]  // Heti események 4 hétre
}
```

##### Karakter Objektum Struktúra
```javascript
{
    id: 1,
    name: "Karakter neve",
    job: "Foglalkozás",
    grossSalary: 450000,        // Bruttó bér (Ft)
    netSalary: 300000,          // Nettó bér (Ft)
    fixedExpense: 20000,        // Havi fix kötelezettség (Ft)
    fixedExpenseDescription: "Költség neve", // pl. "Diákhitel"
    startingBalance: 280000,    // Kezdő egyenleg (nettó - fix költség)
    livingSituation: "Helyzet leírása",
    description: "Karakter leírása",
    specificTerms: [            // Karakter-specifikus pénzügyi fogalmak
        { 
            term: "Fogalom", 
            definition: "Definíció" 
        }
    ]
}
```
    livingSituation: "Élethelyzet leírása",
    description: "Rövid leírás",
    specificTerms: [            // Szakszavak tömb
        {
            term: "Szakszó neve",
            definition: "Szakszó magyarázata"
        }
    ]
}
```

##### Opció Objektum Struktúra
```javascript
{
    id: 1,
    name: "Opció neve",
    cost: 50000,           // Költség (Ft)
    happiness: -1,         // Boldogság változás (-10 - +10)
    description: "Leírás"
}
```

##### Esemény Objektum Struktúra
```javascript
{
    id: 1,
    title: "Esemény címe",
    description: "Esemény leírása",
    choices: [              // Választási lehetőségek
        {
            text: "Választás szövege",
            cost: 20000,    // Pozitív = kiadás, negatív = bevétel
            happiness: 3    // Boldogság változás
        }
    ]
}
```

##### Tranzakció Objektum Struktúra
```javascript
{
    description: "Tranzakció leírása",
    amount: 50000,
    type: "income" | "expense",  // Bevétel vagy kiadás
    date: Date,                   // Tranzakció dátuma
    week: 1                       // Melyik héten történt
}
```

---

#### 3. Kulcsfontosságú Függvények

##### Képernyőkezelés
```javascript
showScreen(screenId)           // Képernyők közötti váltás
```

##### Karakterkezelés
```javascript
loadCharacters()               // Karakterek betöltése DOM-ba
selectCharacter(character, cardElement)  // Karakter kiválasztása
startGame()                    // Játék indítása
loadCharacterSpecificInfo()    // Szakszavak betöltése
```

##### Dátumkezelés
```javascript
initializeDate()               // Mai dátum beállítása
advanceWeek()                  // +7 nap hozzáadása, currentWeek növelése
updateDateDisplay()            // Dátum frissítése DOM-ban (dátum, hét, hónap név)
```

##### Opció Kezelés
```javascript
loadOptions()                  // Összes opció betöltése
loadHousingOptions()           // Lakhatási opciók betöltése
loadFoodOptions()              // Étkezési opciók betöltése
loadEntertainmentOptions()     // Szórakozási opciók betöltése
createOptionCard(option, category)  // Opció kártya létrehozása
selectOption(option, category, cardElement)  // Opció kiválasztása
restoreSelections()            // Kiválasztások visszaállítása (perzisztencia)
```

##### Hét Lezárása
```javascript
// Gomb eseménykezelő: #confirmWeekBtn
1. Validáció: Minden kategória ki van választva?
2. Költségek számítása:
   - Lakhatás: csak currentWeek === 1 esetén
   - Szórakozás: csak currentWeek === 1 esetén
   - Étkezés: minden héten
   - Megtakarítás: 
     * Ha autoSavingsEnabled: csak currentWeek === 1 esetén (havonta)
     * Ha nem autoSavingsEnabled: az aktuális input értéket használja
3. Levonások végrehajtása (nincs egyenleg validáció - lehet negatív)
4. Auto-savings beállítások mentése
5. Boldogság módosítása
6. showWeeklyEvent() hívása
```

##### Eseménykezelés
```javascript
showWeeklyEvent()              // Heti esemény megjelenítése
handleEventChoice(choice)      // Esemény választás kezelése
```

##### Hét Befejezése
```javascript
finishWeek()
1. Ellenőrzi: currentWeek >= totalWeeks?
   - Ha igen: Új hónap!
     * currentMonth++
     * currentWeek = 0 (advanceWeek növeli 1-re)
     
     * Bank befektetések ellenőrzése:
       - Ha maturityMonth <= currentMonth: kifizetés + 1.5% kamat
       - Tranzakció rögzítése
       - Eltávolítás a bankInvestments tömbből
     
     * Tőzsde befektetések feldolgozása:
       - MINDEN befektetés lejár (1 hónap eltelt)
       - Random hozam: -3% és +5% között
       - Kifizetés az egyenlegbe
       - Tranzakció rögzítése (%-kal)
       - Összes elem törlése a stockInvestments tömbből
     
     * Fizetés hozzáadása (balance += netSalary)
     * Tranzakció rögzítése
   - Ha nem: tovább a következő lépésre
2. advanceWeek() - hét és dátum növelése
3. NEM reseteli a weeklyChoices-t!
4. Megtakarítás input:
   - Ha autoSavingsEnabled: megtartja az értéket
   - Ha nem: nullázza
5. restoreSelections() - visszaállítja a kiválasztásokat
```

##### Állapot Frissítés
```javascript
updateStatusBar()              // Egyenleg és boldogság frissítése DOM-ban
addTransaction(desc, amount, type)  // Tranzakció hozzáadása
displayTransaction(transaction)     // Tranzakció megjelenítése DOM-ban
```

##### Játék Vége
```javascript
endGame()                      // Végső kiértékelés és eredmények
```

##### Segédfüggvények
```javascript
formatCurrency(amount)         // Formázás: "123 456 Ft"
```

##### Info Panel
```javascript
initializeInfoToggle()         // Info panel nyitás/zárás kezelése
```

---

## 🎯 Játék Folyamata

### 1. Játék Indítása
```
loadCharacters() → Karakterkártyák megjelenítése
Felhasználó választ → selectCharacter()
Felhasználó kattint "Játék Indítása" → startGame()
  ↓
- gameState inicializálása
- balance = character.netSalary
- happiness = 50
- Tranzakció hozzáadása: "Havi fizetés"
- Dátum inicializálása (mai nap)
- Opciók betöltése
- Szakszavak betöltése
- Info toggle inicializálása
- gameScreen megjelenítése
```

### 2. Heti Ciklus
```
Felhasználó választ minden kategóriából
  ↓
"Hét Lezárása" gomb kattintás
  ↓
Validáció: minden kategória ki van választva?
  ↓
Költségek számítása:
- Lakhatás: currentWeek === 1 ? cost : 0
- Étkezés: mindig cost
- Szórakozás: currentWeek === 1 ? cost : 0
- Megtakarítás: 
  * autoSavingsEnabled && currentWeek === 1 ? autoSavingsAmount : 0
  * VAGY ha nem autoSavingsEnabled: input value
  ↓
Levonások + tranzakciók rögzítése (nincs egyenleg ellenőrzés)
  ↓
Auto-savings beállítások mentése (checkbox állapot és összeg)
  ↓
Boldogság módosítása
  ↓
Esemény megjelenítése (ha van - jelenleg üres)
  ↓
finishWeek()
```

### 3. Hét Befejezése
```
finishWeek()
  ↓
currentWeek >= totalWeeks?
  ├─ Igen → Hónap vége!
  │         ↓
  │       currentMonth++
  │       currentWeek = 0
  │         ↓
  │       Fizetés hozzáadása (balance += netSalary)
  │       Tranzakció rögzítése
  │         ↓
  │       advanceWeek() (növeli currentWeek-et 1-re)
  │
  └─ Nem → advanceWeek()
            ↓
          currentWeek++
          currentDate += 7 nap
            ↓
          Megtakarítás input kezelése:
          - autoSavingsEnabled: érték megmarad
          - nem autoSavingsEnabled: nullázás
            ↓
          restoreSelections() - korábbi választások visszaállítása
```

### 4. Végtelen Játék
```
A játék folytatódik a végtelenségig.
Minden 4. hét után új hónap kezdődik:
  ↓
currentMonth++
Új fizetés automatikusan
Játék folytatódik
```

---

## 💡 Fontos Megjegyzések

### Negatív Egyenleg
- Az egyenleg mehet negatívba (adósság)
- Nincs validáció a kiadásoknál
- A játékos szabadon "eladósodhat"
- Következő havi fizetésből kell visszafizetni

### Perzisztencia Logika
- A `weeklyChoices` objektum **NEM** kerül resetelésre a `finishWeek()` függvényben
- A `restoreSelections()` függvény újra alkalmazza a `.selected` osztályt a megfelelő kártyákra
- Így a felhasználó nem kell minden héten újra kattintani a választásokra

### Automatikus Megtakarítás Logika
```javascript
// Ha checkbox BE van pipálva:
autoSavingsEnabled = true
autoSavingsAmount = user input érték

// Minden hónap 1. hetében (currentWeek === 1):
savingsAmount = autoSavingsAmount
balance -= savingsAmount
savings += savingsAmount

// Ha checkbox NINCS bepipálva:
autoSavingsEnabled = false
// Minden héten a user által megadott értéket használja
savingsAmount = current input value
```

Az input mező értéke:
- Ha autoSavingsEnabled: megmarad a hetek között
- Ha nem autoSavingsEnabled: minden hét után nullázódik

### Befektetési Rendszer

**Három befektetési típus:**

1. **Szabad megtakarítás (none)**
   - A pénz a `gameState.savings`-be kerül
   - Bármikor elérhető, nincs lekötve
   - Nincs hozam, de nincs kockázat sem

2. **Bank (bank)**
   - A pénz a `gameState.bankInvestments` tömbbe kerül
   - Struktúra: `{amount, depositMonth, maturityMonth}`
   - `maturityMonth = depositMonth + 6` (6 hónapos lekötés)
   - **Hozam**: Fix 1.5% kamat
   - **Kifizetés**: 6 hónap után automatikusan visszakerül az egyenlegbe
   - Számítás: `total = amount * 1.015`

3. **Tőzsde (stock)**
   - A pénz a `gameState.stockInvestments` tömbbe kerül
   - Struktúra: `{amount, depositMonth}`
   - **Lejárat**: Minden hónap végén (1 hónap)
   - **Hozam**: Random -3% és +5% között
   - Számítás: `returnRate = Math.random() * 8 - 3` (%-ban)
   - `total = amount * (1 + returnRate/100)`
   - **Kerekítés**: Tízesekre kerekítve (`Math.round(total / 10) * 10`)
   - **Kockázat**: Lehet veszteség is!

**Befektetés logika:**
```javascript
// Megtakarítás során:
if (selectedInvestment === 'bank') {
    bankInvestments.push({amount, depositMonth, maturityMonth: depositMonth + 6});
} else if (selectedInvestment === 'stock') {
    stockInvestments.push({amount, depositMonth});
} else {
    savings += amount; // Szabad megtakarítás
}

// Hónap végén (finishWeek):
// Bank: Ellenőrzi maturityMonth <= currentMonth
// Stock: Minden befektetés lejár 1 hónap után
```

**Auto-savings + Befektetés:**
- Ha `autoSavingsEnabled === true`, a kiválasztott `investmentType` mentésre kerül
- Minden hónapban (currentWeek === 1) az `autoSavingsAmount` automatikusan a kiválasztott típusba kerül
- Ha nincs auto-savings, manuálisan kell minden héten választani

### Havi vs. Heti Költségek
```javascript
// confirmWeekBtn eseménykezelőben:
const housingCost = (gameState.currentWeek === 1) ? gameState.weeklyChoices.housing.cost : 0;
const entertainmentCost = (gameState.currentWeek === 1) ? gameState.weeklyChoices.entertainment.cost : 0;
const foodCost = gameState.weeklyChoices.food.cost; // Mindig levonva

// Megtakarítás:
if (gameState.autoSavingsEnabled && gameState.currentWeek === 1) {
    savingsAmount = gameState.autoSavingsAmount; // Havi automatikus
} else if (!gameState.autoSavingsEnabled) {
    savingsAmount = inputValue; // Manuális, aktuális heti érték
}
```

### Dátumkezelés
- `startDate`: Játék kezdési dátuma (mai nap amikor elindítod)
- `currentDate`: Aktuális dátum a játékban
- Minden hét végén: `currentDate.setDate(currentDate.getDate() + 7)`
- Magyar formátum: `toLocaleDateString('hu-HU', {...})`
- Hónap név megjelenítés: `toLocaleDateString('hu-HU', {year: 'numeric', month: 'long'})`

### Havi Fizetés
```javascript
// finishWeek() függvényben:
if (gameState.currentWeek >= gameState.totalWeeks) {
    gameState.currentMonth++;
    gameState.currentWeek = 0; // advanceWeek() 1-re növeli
    
    gameState.balance += gameState.character.netSalary;
    addTransaction(`Havi fizetés (${gameState.currentMonth}. hónap)`, netSalary, 'income');
}
```

### Boldogság Számítás
```javascript
// Minden döntés boldogság értéke hozzáadódik
gameState.happiness += housingChoice.happiness;
gameState.happiness += foodChoice.happiness;
gameState.happiness += entertainmentChoice.happiness;

// Clamp 0-100 közé
gameState.happiness = Math.max(0, Math.min(100, gameState.happiness));
```

### Eseményrendszer
- `gameData.weeklyEvents` tömb 4 elemet tartalmaz (4 hét)
- Minden elem egy eseménytömb (jelenleg mind üres)
- Ha van esemény, random választ egyet
- Az esemény modal-ként jelenik meg
- A választás után automatikusan hívódik a `finishWeek()`
- Események költségeinél nincs egyenleg validáció (lehet negatív)

---

## 🚧 Nem Implementált Funkciók

1. **Heti Események Tartalma**
   - Mind a 4 hét eseményei üres tömbök
   - Framework kész, csak tartalmat kell tölteni
   - Jelenleg nincs esemény egyik héten sem

2. **Game Over Képernyő**
   - HTML elem megmaradt, de nem használt
   - A játék végtelen, nincs játék vége
   - `endGame()` függvény nem kerül meghívásra

---

## 📊 Adatáramlás Diagram

```
User Action
    ↓
Event Listener (addEventListener)
    ↓
Function Call (pl. selectOption, confirmWeekBtn)
    ↓
gameState Módosítás
    ↓
DOM Update (updateStatusBar, displayTransaction)
    ↓
Visual Feedback (CSS osztályok, innerHTML)
```

---

## 🎨 CSS Osztályok Használata

### Állapotkezelő Osztályok
- `.active` - Aktív képernyő
- `.selected` - Kiválasztott opció/karakter
- `.hidden` - Rejtett elem
- `.expanded` - Kinyitott info panel

### Típus Osztályok
- `.income` - Bevétel (zöld)
- `.expense` - Kiadás (piros)

---

## 🔍 Gyakori Műveletek Kódhelye

| Művelet | Fájl | Függvény/Rész |
|---------|------|---------------|
| Karakter hozzáadása | `game.js` | `gameData.characters` tömb |
| Új opció hozzáadása | `game.js` | `gameData.housingOptions/foodOptions/entertainmentOptions` |
| Esemény hozzáadása | `game.js` | `gameData.weeklyEvents[weekIndex]` |
| Heti ciklus logika | `game.js` | `#confirmWeekBtn` eseménykezelő |
| Dátum formázás | `game.js` | `updateDateDisplay()` |
| Pénz formázás | `game.js` | `formatCurrency()` |
| Képernyő váltás | `game.js` | `showScreen()` |
| Színek módosítása | `style.css` | `:root` változók |
| Layout módosítás | `style.css` | Grid és flexbox definíciók |

---

## 📝 Konvenciók

### Változók és Függvények
- camelCase (JavaScript)
- Magyar nyelvű stringek
- Angol függvénynevek

### HTML ID-k
- camelCase (pl. `characterName`, `currentWeek`)

### CSS Osztályok
- kebab-case (pl. `character-card`, `info-panel`)

### Pénznem
- Mindig Ft (magyar forint)
- Formázás: "123 456 Ft" (magyar formátum)

### Dátumok
- JavaScript Date objektumok
- Magyar formátum megjelenítésnél
- 7 napos növekmény hetente

---

## 🔐 Játék Állapot Védelem

### Validációk
1. **Karakterválasztás**: `startGameBtn` csak kiválasztott karakter esetén engedélyezett
2. **Hét lezárása**: Csak ha minden kategória ki van választva
3. **Pénz ellenőrzés**: NINCS - az egyenleg mehet negatívba
4. **Boldogság clamp**: Mindig 0-100 között marad

---

## 🎮 Játékélmény Elemek

### Vizuális Visszajelzések
- Hover effektek az opció kártyákon
- Selected állapot színezés
- Egyenleg színkódolás (piros/sárga/zöld)
- Boldogság színkódolás
- Tranzakciók baloldali színezett border

### Animációk
- Transform translateY (hover)
- Max-height transition (info panel)
- Arrow rotation (info toggle)
- Fade transitions

### Sticky Elemek
- **Status Bar**: `position: sticky; top: 0;`
  - Mindig látható marad görgetéskor
  - Z-index: 100 (más elemek fölött)
  - Box shadow a kiemeléshez

### Emoji Használat
- 💰 Egyenleg
- 😊 Boldogság
- 🏠 Lakhatás
- 🍽️ Étkezés
- 🎉 Szórakozás
- 💾 Megtakarítás

---

## 📱 Reszponzív Breakpointok

```css
@media (max-width: 768px) {
    - 1 oszlopos grid minden opciónál
    - 2x2 grid a status bar-nál
    - Kisebb padding az event card-nál
    - Kisebb font size a header-ben
}
```

---

*Dokumentáció utoljára frissítve: 2026. január 5.*
*Jelenlegi verzió: v3.0 - Befektetési rendszer (Bank + Tőzsde) + Megtakarítás követés*
