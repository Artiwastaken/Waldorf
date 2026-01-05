// Game State
const gameState = {
    character: null,
    balance: 0,
    happiness: 50,
    savings: 0,
    currentWeek: 1,
    totalWeeks: 4,
    currentMonth: 1,
    startDate: null,
    currentDate: null,
    transactions: [],
    weeklyChoices: {
        housing: null,
        food: null,
        entertainment: null,
        savingsAmount: 0
    },
    autoSavingsEnabled: false,
    autoSavingsAmount: 0,
    investmentType: 'none', // 'none', 'bank', 'stock'
    bankInvestments: [], // {amount, depositMonth, maturityMonth}
    stockInvestments: [] // {amount, depositMonth}
};

// Korábbi értékek tárolása animációkhoz
let previousBalance = 0;
let previousHappiness = 50;

// Game Data Structure (to be filled with actual data)
const gameData = {
    characters: [
        {
            id: 1,
            name: "Tanár",
            job: "Pedagógus",
            grossSalary: 385000,
            netSalary: 256000,
            fixedExpense: 20000,
            fixedExpenseDescription: "Diákhitel",
            startingBalance: 236000,
            livingSituation: "Albérletben lakik",
            description: "Közoktatásban dolgozó pedagógus, aki most kezdi az önálló életet.",
            specificTerms: [
                { term: "Közalkalmazott", definition: "Olyan munkavállaló, aki állami vagy önkormányzati intézményben (pl. iskola) dolgozik." },
                { term: "Illetmény", definition: "A közalkalmazottak fizetése, amely az illetménytábla alapján kerül megállapításra." },
                { term: "Diákhitel", definition: "Felsőoktatási tanulmányokhoz felvett állami támogatású kölcsön, amit a diploma megszerzése után kell törleszteni." }
            ]
        },
        {
            id: 2,
            name: "Fejlesztő",
            job: "Szoftverfejlesztő",
            grossSalary: 632000,
            netSalary: 420000,
            fixedExpense: 30000,
            fixedExpenseDescription: "Tech-lízing",
            startingBalance: 390000,
            livingSituation: "Modern lakásban él",
            description: "IT területen dolgozó fejlesztő, akinek rendszeresen frissítenie kell az eszközeit.",
            specificTerms: [
                { term: "Cafeteria", definition: "Adómentes juttatás munkáltatótól (pl. SZÉP-kártya, Erzsébet-utalvány), amit étel, szállás vagy szabadidő célra lehet fordítani." },
                { term: "Tech-lízing", definition: "Eszközök (laptop, telefon) bérleti díja, amit a cég vagy magánszemély fizet havonta a technológia használatáért." },
                { term: "Home office költségtérítés", definition: "Pénzbeli támogatás az otthoni munkavégzéshez (internet, áram)." }
            ]
        },
        {
            id: 3,
            name: "Orvos",
            job: "Kórházi szakorvos",
            grossSalary: 545000,
            netSalary: 362000,
            fixedExpense: 85000,
            fixedExpenseDescription: "Autóhitel",
            startingBalance: 277000,
            livingSituation: "Saját lakásban",
            description: "Szakorvosként dolgozik, autóval jár munkába.",
            specificTerms: [
                { term: "Ügyeleti díj", definition: "Pótlék az éjszakai vagy hétvégi orvosi ügyeleti szolgálatért." },
                { term: "Autóhitel", definition: "Gépjármű vásárlásához felvett hitel, amit havi részletekben kell törleszteni." },
                { term: "Kamarai tagdíj", definition: "Az orvosi kamarai tagság kötelező éves díja, ami a szakmai szervezet fenntartását szolgálja." }
            ]
        },
        {
            id: 4,
            name: "Gyári munkás",
            job: "Termelési dolgozó",
            grossSalary: 432000,
            netSalary: 287000,
            fixedExpense: 40000,
            fixedExpenseDescription: "Szerencsejáték tartozás",
            startingBalance: 247000,
            livingSituation: "Albérletben lakik",
            description: "Gyárban dolgozik műszakban, próbálja rendezni pénzügyeit.",
            specificTerms: [
                { term: "Műszakpótlék", definition: "Extra fizetés az éjszakai, hétvégi vagy ünnepnapi munkáért." },
                { term: "Szerencsejáték tartozás", definition: "Fogadásokból vagy szerencsejátékból felhalmozódott adósság, amit havonta kell törleszteni." },
                { term: "Túlórapótlék", definition: "A normál munkaidőn túli munkáért járó extra fizetés (legalább 50% plusz)." }
            ]
        },
        {
            id: 5,
            name: "Marketinges",
            job: "Marketing asszisztens",
            grossSalary: 299000,
            netSalary: 199000,
            fixedExpense: 15000,
            fixedExpenseDescription: "Edzőterem bérlet",
            startingBalance: 184000,
            livingSituation: "Szobatárssal lakik",
            description: "Junior marketinges, aki megosztott lakásban él és sokat ad az egészségére.",
            specificTerms: [
                { term: "Minimálbér", definition: "A törvény által meghatározott legkisebb összeg, amit havi munkáért kell fizetni (2026-ban kb. 290.000 Ft bruttó)." },
                { term: "Edzőterem bérlet", definition: "Havi előfizetés fitneszterem használatára, általában éves szerződéssel." },
                { term: "Próbaidő", definition: "A munkaviszony első szakasza (általában 3 hónap), amikor könnyebben megszüntethető a jogviszony." }
            ]
        },
        {
            id: 6,
            name: "Futár",
            job: "Kézbesítő",
            grossSalary: 450000,
            netSalary: 299000,
            fixedExpense: 25000,
            fixedExpenseDescription: "Eszközbiztosítás",
            startingBalance: 274000,
            livingSituation: "Albérletben lakik",
            description: "Kerékpáros vagy motoros futárként dolgozik, saját eszközökkel.",
            specificTerms: [
                { term: "Teljesítménybér", definition: "Fizetés, ami a teljesített munka mennyiségétől függ (pl. kiszállított csomagok száma)." },
                { term: "Eszközbiztosítás", definition: "Biztosítási díj a munkavégzéshez használt eszközökre (pl. kerékpár, roller, motor)." },
                { term: "Üzemanyag-költségtérítés", definition: "A munkáltató által fizetett támogatás az üzemanyagköltségek fedezésére." }
            ]
        }
    ],
    
    housingOptions: [
        {
            id: 1,
            name: "Mamahotel",
            cost: 40000,
            happiness: -2,
            description: "Szülőknél laksz, nincs magánélet."
        },
        {
            id: 2,
            name: "Szobatársak",
            cost: 110000,
            happiness: -1,
            description: "3-an egy lakásban, osztoztok mindenen."
        },
        {
            id: 3,
            name: "Garzon",
            cost: 190000,
            happiness: 0,
            description: "Kicsi, külvárosi, de a sajátod."
        },
        {
            id: 4,
            name: "Modern lakás",
            cost: 280000,
            happiness: 2,
            description: "Újépítésű, tágas, jó környéken."
        },
        {
            id: 5,
            name: "Luxus loft",
            cost: 420000,
            happiness: 4,
            description: "Okosotthon, panoráma, teremgarázs."
        }
    ],
    
    foodOptions: [
        {
            id: 1,
            name: "Aszkéta",
            cost: 14000,
            happiness: -4,
            description: "Legolcsóbb alapanyagok, napi minimum."
        },
        {
            id: 2,
            name: "Spórolós",
            cost: 23000,
            happiness: -1,
            description: "Akciós termékek, otthoni főzés."
        },
        {
            id: 3,
            name: "Normál",
            cost: 35000,
            happiness: 1,
            description: "Változatos főzés, néha rendelés."
        },
        {
            id: 4,
            name: "Gasztro",
            cost: 53000,
            happiness: 2,
            description: "Rendelés, minőségi alapanyagok, kávézó."
        },
        {
            id: 5,
            name: "Gourmet",
            cost: 80000,
            happiness: 4,
            description: "Éttermek, prémium etelék, luxus."
        }
    ],
    
    entertainmentOptions: [
        {
            id: 1,
            name: "Unalom",
            cost: 0,
            happiness: -3,
            description: "Csak az ingyenes TV és séta a parkban."
        },
        {
            id: 2,
            name: "Minimál",
            cost: 20000,
            happiness: 0,
            description: "Havi 1 sörözés és Netflix előfizetés."
        },
        {
            id: 3,
            name: "Szociális",
            cost: 50000,
            happiness: 1,
            description: "Mozi, hétvégi beülések, kis hobbi."
        },
        {
            id: 4,
            name: "Aktív",
            cost: 110000,
            happiness: 3,
            description: "Koncertek, kirándulások, márkás ruhák."
        },
        {
            id: 5,
            name: "High Life",
            cost: 250000,
            happiness: 6,
            description: "VIP bulik, hétvégi utazás, luxus hobbi."
        }
    ],
    
    // Random events pool
    allEvents: [
        // 🔴 Balszerencse események (40 db)
        { id: 1, type: "bad", title: "Hűtőbaleset", description: "Megállt a hűtő az éjszaka. Reggelre minden megromlott benne: a tej savanyú, a hús használhatatlan, a zöldségek latyakká váltak. Most vehetsz egy új hűtőt, vagy legalábbis fel kell töltened újra a polcokat.", cost: 25000, happiness: -1 },
        { id: 2, type: "bad", title: "Beázás", description: "Hazaérsz, és a plafon közepén ott díszeleg egy szép barna folt. A feletti lakásból szivárog a víz. A biztosító csak a kár egy részét fizeti, a többi rád marad. Legalább a lakásod friss felfestést kap...", cost: 40000, happiness: -2 },
        { id: 3, type: "bad", title: "Büntetés", description: "Szálltál a buszon, mint mindig, aztán jön az ellenőr. 'Bérlet?' Kicsit halványan mosolyogsz – lejárt tegnap. Az ellenőr nem viccel, fizetned kell a pótdíjat.", cost: 25000, happiness: -1 },
        { id: 4, type: "bad", title: "Fogászat", description: "Harapod a szendvicset és hallod a kellemetlen 'krakk'-ot. Letört a fogad. Most pedig hívhatod a fogászt sürgősségben. Nem lesz olcsó, de legalább utána megint tudsz mosolyogni.", cost: 35000, happiness: -2 },
        { id: 5, type: "bad", title: "Fülhallgató", description: "Lenyomod a zsebedre a táskádat és abból a pillanatból tudod, hogy valami baj van. Az egyik fülhallgató eltűnt valahová. A másik meg mit ér magában? Semmi. Vehetsz egy újat.", cost: 15000, happiness: -1 },
        { id: 6, type: "bad", title: "Cipőcsere", description: "Sétálsz az utcán, és érzed hogy valami nem stimmel. Lenézel: a cipőd talpa válik két részre. Ez a cipő túljárta magát, ideje újat venni. Legalább most választhatsz valami stílusosabbat.", cost: 30000, happiness: 0 },
        { id: 7, type: "bad", title: "App előfizetés", description: "Jön a banki értesítés, hogy levonták az app előfizetését, amit már hónapok óta nem használsz. Elfelejtetted lemondani a próbaidőszak után. Most lehet törölni, de a pénz elment.", cost: 8000, happiness: -1 },
        { id: 8, type: "bad", title: "Karcolt jármű", description: "Kint hagytad az autód/biciklid az utcán, és valaki úgy döntött, hogy karcol egyet rajta. Nem nagy, de látszódik. És persze senki sem hagyott cédulát. Fizetni kell a javításért.", cost: 20000, happiness: -2 },
        { id: 9, type: "bad", title: "Zárcsere", description: "Kotorsz a zsebedben, a táskádban, mindenhol. De nincs sehol. A kulcsod eltűnt. Most állsz a lakás előtt kulcs nélkül, és hívnod kell a lakatost, hogy cserélje a zárat. Ez nem lesz olcsó.", cost: 45000, happiness: -2 },
        { id: 10, type: "bad", title: "Közműhátralék", description: "Jön a levél a postafiókba: hátralék van a közműszámládon. Valószínűleg valami adminisztrációs hiba, de fizess, mert különben jön a kamat és a figyelmeztetés.", cost: 15000, happiness: -1 },
        { id: 11, type: "bad", title: "Szülinap", description: "Megkaptad az üzenetet: szülinapi buli a hétvégén. Természetesen illik ajándékot vinni, nem mehetsz üres kézzel. Pár órát keresel valamit, ami nem ciki, de nem is túl drága. Végül persze többről lesz szó, mint gondoltad.", cost: 15000, happiness: 1 },
        { id: 12, type: "bad", title: "Törött kijelző", description: "Leesik a telefon. Lássuk csak... És igen, betört a kijelző. Persze nem csak egy kis repedés, hanem egy gyönyörű pókháló az egész képernyőn. Ez most drága lesz megcsináltatni, de muszáj.", cost: 50000, happiness: -3 },
        { id: 13, type: "bad", title: "Gyorshajtás", description: "Késő voltál ma, és egy kicsit rányomtál a gázra. Persze ott volt a radarkamera pont akkor. Pár hét múlva jön a büntetés a postafiókba, és fizetned kell.", cost: 30000, happiness: -2 },
        { id: 14, type: "bad", title: "Bicikliszerviz", description: "Kilyukadt a bringád gumija, és természetesen pont amikor nincs időd géppel szórakozni. Keress egy szervizt, és fizess, hogy megcsinálják. Legalább utána olyan lesz, mint az új.", cost: 10000, happiness: -1 },
        { id: 15, type: "bad", title: "Rossz tej", description: "Kinyitod a hűtőt, és valami kellemetlen szagot érzel. A tej megromlott, és vele együtt minden tejtermék is. Az egészet ki kell dobni és újat venni. Micsoda pazarlás.", cost: 5000, happiness: -1 },
        { id: 16, type: "bad", title: "Drágább net", description: "Levél a szolgáltatótól: 'Tájékoztatjuk, hogy az előfizetése ára emelkedik...' Nagyszerű. Akkor most többet kell fizetned ugyanazért. De persze nem tudod lemondani, mert kell az internet.", cost: 3000, happiness: -1 },
        { id: 17, type: "bad", title: "Beázott pince", description: "Lementél a pincébe valamiért, és ott áll a víz. A tároló dobozban lévő ruhák teljesen átáztak, pár kedvenc darab tönkrement. Most vehetsz újakat helyettük.", cost: 20000, happiness: -2 },
        { id: 18, type: "bad", title: "Esküvő", description: "Megjött a meghívó: esküvő! Persze örülsz nekik, de azért egész költséges lesz. Kell egy öltöny vagy ruha, mert a régi már nem illik, és persze ajándék is kell. De legalább jó buli lesz!", cost: 60000, happiness: 1 },
        { id: 19, type: "bad", title: "Elveszett kesztyű", description: "Fázik a kezed, kotorsz a zsebedben... csak az egyik kesztyű van meg. A másik eltűnt valahol a tömegben. És persze páratlanul nem lehet használni, úgyhogy vehetsz egy új párt.", cost: 8000, happiness: -1 },
        { id: 20, type: "bad", title: "Késés", description: "Késés. Megint. A vonat 40 perce kellett volna indulnia, de sehol. És neked meg van egy fontos találkozód. Az egész napod teljesen tönkrement, és mindenki dühös rád. Remek.", cost: 0, happiness: -3 },
        { id: 21, type: "bad", title: "Vírusos gép", description: "A géped elkezdett furcsán viselkedni. Félnek tűnnek az ablakok, lassú minden, és folyton lefagy. Vírus van rajta. Hívnod kell egy szakembert, hogy kitisztítsa - persze pénzért.", cost: 25000, happiness: -2 },
        { id: 22, type: "bad", title: "Személyi igazolvány", description: "Nézegetted a személyidet: lejárt. Hogy hogy nem vetted észre? Most elmehetsz a hivatalba, állsz sorban, és fizeted az illetéket. Izgalmas program.", cost: 10000, happiness: -1 },
        { id: 23, type: "bad", title: "Szállás lemondás", description: "Elfelejtetted lemondani egy szállást amit régebben foglaltál. A szálloda levonta a teljes összeget, nincs visszatérítés. Erre ment a pénzed hiába...", cost: 35000, happiness: -2 },
        { id: 24, type: "bad", title: "Szakadt nadrág", description: "Lehajolsz, és hallod azt a rettenetes hangot: RRRRRIP. A kedvenc nadrágod kiszakadt. Semmiképp se menthető meg, újat kell venni helyette.", cost: 12000, happiness: -1 },
        { id: 25, type: "bad", title: "Mikró", description: "Bekapcsolod a mikrót, hallod a bzzzz hangot, aztán... semmi. Elromlott. Most vehetsz egy újat, mert mikró nélkül az élet nem ugyanaz.", cost: 30000, happiness: -1 },
        { id: 26, type: "bad", title: "Felújítási alap", description: "Levél a társasháztól: felújítási költség. A lépcsőház, a lift, meg minden mást fel kell újítani. És természetesen mindenki fizet. Te is.", cost: 15000, happiness: 0 },
        { id: 27, type: "bad", title: "Esernyő", description: "Esik az eső, keresed az esernyőt. De nincs sehol. Valahol elhagytad az előző héten. Most ázol, és vehetsz egy újat. Remek.", cost: 6000, happiness: -1 },
        { id: 28, type: "bad", title: "Betegség", description: "Megbetegedtél. Lázas vagy, fáj a fejed, és mindened. Kell a gyógyszer, de az sem olcsó. Legalább pár nap múlva jobban leszel.", cost: 15000, happiness: -2 },
        { id: 29, type: "bad", title: "Karcolt autó", description: "Parkolás közben egy kicsit odébbmész... és hallod a nyikorgást. Megkarcoltad a főnököd autóját. Most fizethetsz a kárért, és reméled, hogy nem haragszik meg túlságosan.", cost: 50000, happiness: -4 },
        { id: 30, type: "bad", title: "Rossz busz", description: "Felszállsz a buszra, leülsz, aztán 10 perc múlva rájössz: rossz busz. Pont az ellenkező irányba mész. Most le kell szállni, vissza menni, és késel egy órát. Nagyszerű.", cost: 0, happiness: -2 },
        { id: 31, type: "bad", title: "Csőtörés", description: "Furcsa hangokat hallasz a falból. Kihívod a szerelőt, és kiderül: csőtörés van a lakásodban. Ez nem lesz sem gyors, sem olcsó megjavítani. De muszáj.", cost: 80000, happiness: -3 },
        { id: 32, type: "bad", title: "Mobilnet", description: "Nézegetnéd a telefont, és látod: elfogyott a mobilneted. Már megint. Nem figyeltél rá, mennyi videót néztél. Most vehetsz extra netet, hogy használhasd tovább.", cost: 5000, happiness: -1 },
        { id: 33, type: "bad", title: "Töltőkábel", description: "A töltőkábel már rég nem tűnt stabilnak, és most teljesen tönkrement. Nem tölt, hiába dugod be. Venned kell egy újat, különben nem tudod használni a telefonod.", cost: 8000, happiness: -1 },
        { id: 34, type: "bad", title: "Kondibérlet", description: "Keresed a kondibérletedet, de nincs sehol. Elvesztetted. Az új drágább, mert már nincs akció. És természetesen nem tudod bizonyítani, hogy volt bérleted.", cost: 12000, happiness: -1 },
        { id: 35, type: "bad", title: "Albérlet drágulás", description: "A tulajdonos felhív: megemeli az albérlet díját jövő hónaptól. Váratlanul és jelentősen. Nem sok választásod van, vagy fizetsz, vagy költözöl.", cost: 20000, happiness: -2 },
        { id: 36, type: "bad", title: "Gázszámla", description: "Megérkezik a gázszámla és majdnem elejted: sokkal magasabb, mint vártad. Túl sokáig volt nyitva az ablak télen. Most fizetheted meg.", cost: 15000, happiness: -1 },
        { id: 37, type: "bad", title: "Parkolási bírság", description: "Visszajössz az autóhoz, és ott van a kis papír a szélvédőn. Parkolási bírság. Talán lejárt a jegyed, vagy rossz helyen álltál. Mindegy, fizetni kell.", cost: 12000, happiness: -1 },
        { id: 38, type: "bad", title: "Rossz pizza", description: "Rendeltél egy pizzát, mert éhes voltál. Megérkezik, kibontod... és szörnyű. Hideg, rossz, ehetetlen. Próbálod visszaküldeni, de nem hajlandók visszafizetni. Elment a pénzed.", cost: 6000, happiness: -2 },
        { id: 39, type: "bad", title: "Pénztárca", description: "Kotorsz a zsebedben, a táskádban... nincs sehol. A pénztárcádat valahol elhagytad. Benne volt 10.000 forint is, a kártyáid, minden. Most pótolhatod az egészet.", cost: 15000, happiness: -4 },
        { id: 40, type: "bad", title: "Kulcs a zárban", description: "Forgatod a kulcsot a zárban, és... ketté törik. A fele bent maradt a zárban. Most hívnod kell a lakatost, hogy kiszedje és cserélje az egész zárat. Drága mulatság.", cost: 30000, happiness: -2 },
        
        // 🟢 Szerencse események (30 db)
        { id: 41, type: "good", title: "Húszezres", description: "Találtál a kabátodban egy húszezrest!", cost: -20000, happiness: 2 },
        { id: 42, type: "good", title: "Bónusz", description: "A főnök hívat: 'Ön kiváló munkát végzett az elmúlt hónapban, íme egy kis extra.' Nem számítottál rá, de a váratlan bónusz mindig jól jön!", cost: -50000, happiness: 3 },
        { id: 43, type: "good", title: "Nagyi támogatás", description: "Csörög a telefon: a nagyid. 'Küldtem egy kis pénzt, vegyél magadnak valamit!' Olyan édes, és persze a pénz is jól jön.", cost: -15000, happiness: 2 },
        { id: 44, type: "good", title: "Adóvisszatérítés", description: "Levél a NAV-tól: adóvisszatérítés! Túl sokat vontak le tavaly, és most visszajár egy rész. Nem sokat, de legalább valami!", cost: -30000, happiness: 1 },
        { id: 45, type: "good", title: "Sorsjegy", description: "Találsz a parkban egy kaparós sorsjegyet. Mi van vesztenivalód? Megkaparod... és NYERTÉL! Kis összeg, de minden segít.", cost: -10000, happiness: 2 },
        { id: 46, type: "good", title: "Tartozás", description: "Egy régi barátod hív: 'Emlékszel, amikor kölcsön kértem? Most van pénzem, íme visszaadom!' Már el is felejtetted, de örülsz neki!", cost: -12000, happiness: 1 },
        { id: 47, type: "good", title: "Mozijegy", description: "Egy barátod felhív: 'Kaptam két mozijegyet, de nem tudok elmenni. Akarod?' Persze hogy akarod! Ingyen mozi, mi lehet ennél jobb?", cost: -5000, happiness: 1 },
        { id: 48, type: "good", title: "Akció", description: "Bent vagy a boltban, és meglátod: a kedvenc terméked 50%-os akcióban! Gyorsan megveszed, mielőtt más elkapja. Spór!", cost: -5000, happiness: 1 },
        { id: 49, type: "good", title: "Dicséret", description: "A főnök mindenki előtt megdicsér: 'Lássatok példát ebből a munkából!' Kicsit pirulsz, de belül örülsz. Jó érzés, amikor értékelik a munkád!", cost: 0, happiness: 3 },
        { id: 50, type: "good", title: "Turi ruha", description: "Bent vagy a turiban, és találsz egy szuper ruhát - szinte új! És hihetetlenül olcsó. Ez az a nap, amikor a turi kifizeti magát.", cost: -10000, happiness: 2 },
        { id: 51, type: "good", title: "Sorsolás", description: "Email érkezik: 'Gratulálunk, Ön nyert céges sorsolásunkon!' Fel se adtad a neved, de valaki megtette helyetted. Szerencse!", cost: -25000, happiness: 2 },
        { id: 52, type: "good", title: "Ingyen autózás", description: "A szomszéd felhív: 'Megyünk vidékre hétvégén, nem akarsz velünk jönni?' Ingyen fuvar, beszélgetés, és megspórolod a vonatjegyet is.", cost: -8000, happiness: 1 },
        { id: 53, type: "good", title: "Ajándékkártya", description: "A postás csenget: csomag. Kinyitod, és egy ajándékkártya van benne egy baráttól, akit régen nem láttál. Milyen kedves!", cost: -10000, happiness: 1 },
        { id: 54, type: "good", title: "Kutya jutalom", description: "Sétálsz az utcán, és látsz egy elveszett kutyust. Elolvasod a nyakörvén a telefonszámot, felhívod a gazdát. Annyira hálás, hogy jutalmul ad egy kis pénzt!", cost: -20000, happiness: 4 },
        { id: 55, type: "good", title: "Éttermi kupon", description: "A postaládában találsz egy kupont: 50% kedvezmény a kedvenc étteremedben! Pont jókor jött, mert rég voltál ott.", cost: -5000, happiness: 2 },
        { id: 56, type: "good", title: "Ebédmeghívás", description: "Egy kolléga odalép: 'Ma a szülinapom, meghívlak ebédre!' Ingyen kaja, és még jól is érzed magad a csapattal. Win-win!", cost: -4000, happiness: 1 },
        { id: 57, type: "good", title: "Koncertjegy", description: "Egy haver felhív: 'Kaptam két jegyet egy koncertre, de a párom nem tud jönni. Akarsz?' PERSZE hogy akarsz! Ez a hétvége most lett sokkal jobb.", cost: -15000, happiness: 3 },
        { id: 58, type: "good", title: "Marketplace", description: "Kiraktál egy régi cuccot a Marketplace-re, csak hogy szabadulj tőle. Pár óra múlva jön az üzenet: 'Megveszem!' És még pénzt is kapsz érte!", cost: -15000, happiness: 1 },
        { id: 59, type: "good", title: "Kaja csomag", description: "Anyukád/apukád felhív: 'Küldtem neked egy kis csomagot.' Másnap megérkezik, tele befőttel, süteménnyel és minden jóval. Ez az igazi szeretet!", cost: -20000, happiness: 2 },
        { id: 60, type: "good", title: "Túlfizetés", description: "Banki értesítés: visszautaltak egy összeget, amit tévedésből kétszer fizettél ki korábban. Eszedbe se jutott, de jól jön!", cost: -10000, happiness: 1 },
        { id: 61, type: "good", title: "Alacsony rezsi", description: "Jön a rezsiértesítő, és furcsán kevésnek tűnik. Megnézed kétszer: tényleg alacsonyabb, mint gondoltad! Végre valami jó hír a számlákon.", cost: -8000, happiness: 1 },
        { id: 62, type: "good", title: "Ingyen fagyi", description: "Állsz a sorban a fagyizóban, és a pult mögül kiált: 'Ön a 100. vásárló ma! Ingyen fagyi!' Ez tényleg a te szerencsés napod.", cost: 0, happiness: 1 },
        { id: 63, type: "good", title: "Lomtalanítás", description: "Sétálsz az utcán, lomtalanítás van. Meglátsz egy bútort, ami szinte új! Gyorsan hazacipeled. Most van egy tök jó bútor, ingyen!", cost: -20000, happiness: 2 },
        { id: 64, type: "good", title: "Masszázs", description: "Nyertél egy sorsoláson: ingyenes masszázs kupon! Pont kellett is, mert nagyon fáj a hátad a sok munka után. Végre pihenhetsz egy kicsit.", cost: 0, happiness: 3 },
        { id: 65, type: "good", title: "Kvíznyeremény", description: "Kitöltöttél egy online kvízt unalomból. Pár nap múlva jön az email: nyertél! Kis pénz, de mindig jobb, mint a semmi.", cost: -5000, happiness: 1 },
        { id: 66, type: "good", title: "Csokis könyv", description: "Egy barátod jön: 'Itt a könyved, amit kölcsönkértem. Bocsi a késésért, hoztam csokit!' Kedves gesztus, és te imádsz csokit.", cost: 0, happiness: 2 },
        { id: 67, type: "good", title: "Extra spórolás", description: "Leülsz számolni: mennyit költöttél ezen a héten? És wow, kevesebbet, mint gondoltad! Maradt egy kis extra pénz a végén.", cost: 0, happiness: 1 },
        { id: 68, type: "good", title: "Szabadnap", description: "A főnök hívat: 'Köszönöm a kemény munkát. Itt egy plusz szabadnap!' Hirtelen már tervezed is, mit fogsz csinálni vele. Ez aztán az ajándék!", cost: 0, happiness: 5 },
        { id: 69, type: "good", title: "Kupon", description: "Kinyitod a postaládát, és ott van: egy kupon a kedvenc boltodba. Nem sok, de egy kis kedvezmény mindig jól jön!", cost: -3000, happiness: 1 },
        { id: 70, type: "good", title: "Dupla termék", description: "Kinyitod a csomagot, amit rendeltél, és benne két ugyanolyan termék van! Tévedésből küldtek kettőt egy helyett. Felhívod őket, de azt mondják: 'Tartsa meg!' Szerencse!", cost: -10000, happiness: 2 },
        
        // 🟡 Vegyes/Döntések (30 db)
        { id: 71, type: "choice", title: "Milánó", description: "Emailben jön az értesítés: 'Flash sale! Milánó retúr jegy most csak 40.000 Ft!' Ez az esély talán soha nem jön vissza. Mész?", choices: [
            { text: "Megveszem! 🛫", cost: 40000, happiness: 4 },
            { text: "Nem, maradok.", cost: 0, happiness: 0 }
        ]},
        { id: 72, type: "choice", title: "Jótékonyság", description: "A kolléga körbeviszi a listát: 'Gyűjtünk egy jó célra, aki tud, az adjon.' Mindenki néz. Te mit teszel?", choices: [
            { text: "Adok 💝", cost: 5000, happiness: 2 },
            { text: "Nem adok", cost: 0, happiness: -1 }
        ]},
        { id: 73, type: "choice", title: "Cuki cipő", description: "Elmentél a plázába csak sétálni, de meglátod a kirakatban: pontosan azt a cipőt, amit mindig akartál. Drága, de annyira jó!", choices: [
            { text: "Megveszem! 👟", cost: 35000, happiness: 3 },
            { text: "Nem kell", cost: 0, happiness: -2 }
        ]},
        { id: 74, type: "choice", title: "Rossz hangulat", description: "Szar volt a hét, fáradt vagy, és egyáltalán nem érzed jól magad. De a haverok hívnak: 'Gyere már, jót fog tenni!' Elmész?", choices: [
            { text: "Igen, bulizom! 🎉", cost: 20000, happiness: 3 },
            { text: "Maradok otthon", cost: 0, happiness: -3 }
        ]},
        { id: 75, type: "choice", title: "Laptop javítás", description: "A laptopod többé nem kapcsol be rendesen. Néha működik, néha nem. A szervizes azt mondja: javítani kell, vagy hamarosan teljesen megdöglik.", choices: [
            { text: "Megjavíttatom 💻", cost: 40000, happiness: 0 },
            { text: "Várok még", cost: 0, happiness: -3 }
        ]},
        { id: 76, type: "choice", title: "Túra", description: "A barátaid szerveznek egy hétvégi túrát a hegyekbe. Szép lesz, jó társaság, de azért pénzbe kerül a szállás meg a kaja.", choices: [
            { text: "Megyek! 🏔️", cost: 15000, happiness: 3 },
            { text: "Nem megyek", cost: 0, happiness: -1 }
        ]},
        { id: 77, type: "choice", title: "Tanfolyam", description: "Láttad a hirdetést: szakmai tanfolyam, ami után jobb állást kaphatsz vagy több fizetést. Drága, de befektetés a jövőbe.", choices: [
            { text: "Beiratkozom 📚", cost: 50000, happiness: 1 },
            { text: "Nem éri meg", cost: 0, happiness: 0 }
        ]},
        { id: 78, type: "choice", title: "Extra műszak", description: "A főnök kérdezi: 'Tudnál szombaton is bejönni? Persze fizetjük.' Kell a pénz, de kell a pihenés is...", choices: [
            { text: "Bevállalom 💪", cost: -30000, happiness: -3 },
            { text: "Nem vállalom", cost: 0, happiness: 0 }
        ]},
        { id: 79, type: "choice", title: "Kuponos vacsora", description: "Találtál a fiókban egy kupont: 50% kedvezmény egy étteremben. Lejár hamarosan, de azért még mindig kerül valamibe.", choices: [
            { text: "Felhasználom 🍽️", cost: 8000, happiness: 2 },
            { text: "Nem használom", cost: 0, happiness: 0 }
        ]},
        { id: 80, type: "choice", title: "Olcsóbb kondi", description: "Új edzőterem nyílt a közelben, és olcsóbb, mint a jelenlegi. Kicsit kisebb, kevésbé fancy, de spórolnál vele.", choices: [
            { text: "Átiratkozom 🏋️", cost: -5000, happiness: -1 },
            { text: "Maradok", cost: 0, happiness: 0 }
        ]},
        { id: 81, type: "choice", title: "Hétvégi munka", description: "A főnök kérdezi: 'Szombaton lenne egy kis plusz munka, ha vállalod.' Fizetés jár érte, de elviszik a hétvégédet.", choices: [
            { text: "Bevállalom", cost: -25000, happiness: -2 },
            { text: "Nem vállalom", cost: 0, happiness: 0 }
        ]},
        { id: 82, type: "choice", title: "Rendelés", description: "Este van, fáradt vagy, és éhes. A hűtőben van kaja, de főzni kéne. Vagy csak egyszerűen rendelsz valamit?", choices: [
            { text: "Rendelek 🍕", cost: 6000, happiness: 1 },
            { text: "Főzök inkább", cost: 0, happiness: 0 }
        ]},
        { id: 83, type: "choice", title: "Kávéfőző", description: "A kávéfőződ tönkrement. Reggel már nem tudod megcsinálni a kávéd. Veszel egy újat most, vagy csak majd később?", choices: [
            { text: "Veszek újat ☕", cost: 20000, happiness: 1 },
            { text: "Majd később", cost: 0, happiness: -2 }
        ]},
        { id: 84, type: "choice", title: "Kölcsön", description: "Egy barátod üzent: 'Tudok kérni egy kis pénzt? Visszaadom jövő héten, szó!' Mit válaszolsz?", choices: [
            { text: "Kölcsönadok 🤝", cost: 10000, happiness: 1 },
            { text: "Nem adok", cost: 0, happiness: -1 }
        ]},
        { id: 85, type: "choice", title: "Könyv", description: "A könyvesboltban böngészve találsz egy könyvet, amit rég akartál elolvasni. Itt van most, a kezedben. Megveszed?", choices: [
            { text: "Megveszem 📖", cost: 6000, happiness: 2 },
            { text: "Nem veszem", cost: 0, happiness: 0 }
        ]},
        { id: 86, type: "choice", title: "Borkóstoló", description: "Meghívót kaptál egy borkóstolóra: fancy helyszín, jó borok, érdekes emberek. De azért belépődíj van.", choices: [
            { text: "Megyek 🍷", cost: 15000, happiness: 2 },
            { text: "Nem megyek", cost: 0, happiness: 0 }
        ]},
        { id: 87, type: "choice", title: "Új tévé", description: "A tévéd régi, kicsi, és rossz a képe. Látsz a boltban egy modern smart TV-t: nagy, szép, de nagyon drága. Megveszed?", choices: [
            { text: "Veszek újat 📺", cost: 100000, happiness: 4 },
            { text: "Marad a régi", cost: 0, happiness: 0 }
        ]},
        { id: 88, type: "choice", title: "Vendégek", description: "Hívnak: 'Megyunk hozád ma este, ok?' És már útban is vannak. A hűtő üres, nincs ital, nincs semmi. Mit csinálsz?", choices: [
            { text: "Bevásárolok 🛒", cost: 15000, happiness: 2 },
            { text: "Megoldom másként", cost: 0, happiness: -1 }
        ]},
        { id: 89, type: "choice", title: "Tetoválás", description: "Rég gondolkodsz rajta: csináltatnál egy új tetoválást vagy elmennél egy proff fodrászhoz. Drága, de jól éreznéd magad utána.", choices: [
            { text: "Megcsináltatom ✂️", cost: 30000, happiness: 3 },
            { text: "Nem most", cost: 0, happiness: 0 }
        ]},
        { id: 90, type: "choice", title: "Porszívó", description: "A porszívód feladta a lelkét. Már nem szív, csak hangot ad. Veszel egy újat most, vagy vársz még egy kicsit?", choices: [
            { text: "Veszek újat", cost: 40000, happiness: -1 },
            { text: "Majd később", cost: 0, happiness: -2 }
        ]},
        { id: 91, type: "choice", title: "Telekocsi", description: "Találtál egy telekocsizó csoportot, akik minden nap ugyanabba az irányba mennek munkába. Olcsóbb lenne, mint a saját autó/busz.", choices: [
            { text: "Beállok 🚗", cost: -10000, happiness: 0 },
            { text: "Marad a régi", cost: 0, happiness: 0 }
        ]},
        { id: 92, type: "choice", title: "Társasjáték", description: "A boltban meglátod azt a társasjátékot, amit a haverok mindig említenek. Drága, de biztos sokat fogtok játszani vele.", choices: [
            { text: "Megveszem 🎲", cost: 20000, happiness: 2 },
            { text: "Nem veszem", cost: 0, happiness: 0 }
        ]},
        { id: 93, type: "choice", title: "Streaming", description: "Indul egy új streaming szolgáltatás, rajta vannak azok a sorozatok, amiket mindenki néz. Előfizetsz rá?", choices: [
            { text: "Előfizetek 📺", cost: 4000, happiness: 1 },
            { text: "Nem kell", cost: 0, happiness: 0 }
        ]},
        { id: 94, type: "choice", title: "Nyelvtanfolyam", description: "Mindig is akartál megtanulni egy nyelvt rendesen. Most van lehetőséged: nyelvtanfolyam, de nem olcsó. Megcsinálod?", choices: [
            { text: "Beiratkozom 🗣️", cost: 40000, happiness: 1 },
            { text: "Nem most", cost: 0, happiness: 0 }
        ]},
        { id: 95, type: "choice", title: "Rokonlátogatás", description: "A távoli rokonaid hívnak: 'Rég láttunk, gyere már látogatóba!' Szereted őket, de messze vannak, utazási költséggel jár.", choices: [
            { text: "Megyek 🚂", cost: 15000, happiness: 2 },
            { text: "Nem megyek", cost: 0, happiness: 0 }
        ]},
        { id: 96, type: "choice", title: "Powerbank", description: "Látsz egy napelemes powerbanket a boltban. Jó lenne utazáshoz, hogy mindig legyen töltve a telefon. De kell ez most?", choices: [
            { text: "Megveszem 🔋", cost: 12000, happiness: 1 },
            { text: "Nem kell", cost: 0, happiness: 0 }
        ]},
        { id: 97, type: "choice", title: "Befektetés", description: "Egy haver felhív: 'Van egy biztos befektetési lehetőség, dupla profitot hozhat!' De persze kockázatos is. (50% esély +40k vagy 0k)", choices: [
            { text: "Befektetek 💰", cost: 20000, happiness: 0, special: "investment" },
            { text: "Nem fektetem be", cost: 0, happiness: 0 }
        ]},
        { id: 98, type: "choice", title: "Szerencsejáték", description: "A barátaid fogadnak: 'Dobj egy kockával! Ha 5-6 jön, mi adunk 20 ezret, ha nem, te adsz 5-öt!' Bevállalod? (1-4: vesztesz, 5-6: nyersz)", choices: [
            { text: "Felteszem 🎲", cost: 5000, happiness: 0, special: "gamble" },
            { text: "Nem teszek fel", cost: 0, happiness: 0 }
        ]},
        { id: 99, type: "choice", title: "Éves bérlet", description: "Akciós az éves bérlet most: drága egyben, de hosszútávon megspórolod vele a pénzét. Befektetsz? (Később megtérül)", choices: [
            { text: "Megveszem 🎫", cost: 80000, happiness: 0, special: "season-pass" },
            { text: "Nem veszem", cost: 0, happiness: 0 }
        ]},
        { id: 100, type: "choice", title: "Kutya befogadás", description: "Találtál az utcán egy kutyust. Nincs gazdija, nyakörv sincs rajta. Olyan kedves... Megtartod? (Havonta 30k kerül élelme, orvos, stb.)", choices: [
            { text: "Megtartom 🐕", cost: 30000, happiness: 10, special: "dog" },
            { text: "Nem tartom meg", cost: 0, happiness: -2 }
        ]}
    ]
};

// Date Management
function initializeDate() {
    const today = new Date();
    // Start from current date
    gameState.startDate = new Date(today);
    gameState.currentDate = new Date(today);
    updateDateDisplay();
}

function advanceWeek() {
    // Add 7 days to current date
    gameState.currentDate.setDate(gameState.currentDate.getDate() + 7);
    gameState.currentWeek++;
    updateDateDisplay();
}

function updateDateDisplay() {
    const dateStr = gameState.currentDate.toLocaleDateString('hu-HU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const monthName = gameState.currentDate.toLocaleDateString('hu-HU', {
        year: 'numeric',
        month: 'long'
    });
    document.getElementById('currentDate').textContent = dateStr;
    document.getElementById('currentWeek').textContent = `${gameState.currentWeek}/${gameState.totalWeeks}`;
    document.getElementById('currentMonth').textContent = monthName;
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('hu-HU').format(amount) + ' Ft';
}

// Screen Management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Check Game Over
function checkGameOver() {
    if (gameState.happiness <= 0) {
        // Game Over - boldogság elérte a 0-t
        document.getElementById('finalBalance').textContent = formatCurrency(gameState.balance);
        document.getElementById('finalSavings').textContent = formatCurrency(gameState.savings);
        document.getElementById('finalHappiness').textContent = `${gameState.happiness}/100`;
        document.getElementById('gameOverTitle').textContent = '😢 Játék Vége';
        document.getElementById('gameOverMessage').textContent = 'A boldogságod elérte a nullát. Nem tudtál tovább menni...';
        showScreen('gameOverScreen');
        return true;
    }
    return false;
}

// Character Selection
function loadCharacters() {
    const container = document.getElementById('characterCards');
    container.innerHTML = '';
    
    gameData.characters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <h3>${character.name}</h3>
            <p style="margin-bottom: 15px; color: #64748b;">${character.description}</p>
            <div class="detail">
                <span class="label">Foglalkozás:</span>
                <span>${character.job}</span>
            </div>
            <div class="detail">
                <span class="label">Bruttó bér:</span>
                <span>${formatCurrency(character.grossSalary)}</span>
            </div>
            <div class="detail">
                <span class="label">Nettó bér:</span>
                <span style="font-weight: 700; color: #10b981;">${formatCurrency(character.netSalary)}</span>
            </div>
            <div class="detail">
                <span class="label">Fix kötelezettség:</span>
                <span style="font-weight: 700; color: #ef4444;">-${formatCurrency(character.fixedExpense)} (${character.fixedExpenseDescription})</span>
            </div>
            <div class="detail">
                <span class="label">Kezdő keret:</span>
                <span style="font-weight: 700; color: #2563eb;">${formatCurrency(character.startingBalance)}</span>
            </div>
            <div class="detail">
                <span class="label">Élethelyzet:</span>
                <span>${character.livingSituation}</span>
            </div>
        `;
        
        card.addEventListener('click', () => selectCharacter(character, card));
        container.appendChild(card);
    });
}

function selectCharacter(character, cardElement) {
    // Remove selection from all cards
    document.querySelectorAll('.character-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Select this card
    cardElement.classList.add('selected');
    gameState.character = character;
    
    // Enable start button
    document.getElementById('startGameBtn').disabled = false;
}

function startGame() {
    if (!gameState.character) return;
    
    // Initialize game state
    gameState.balance = gameState.character.startingBalance;
    gameState.happiness = 50;
    gameState.savings = 0;
    gameState.currentWeek = 1;
    gameState.currentMonth = 1;
    gameState.transactions = [];
    gameState.autoSavingsEnabled = false;
    gameState.autoSavingsAmount = 0;
    gameState.investmentType = 'none';
    gameState.bankInvestments = [];
    gameState.stockInvestments = [];
    document.getElementById('autoSavings').checked = false;
    document.getElementById('investNone').checked = true;
    
    // Inicializáljuk a korábbi értékeket
    previousBalance = gameState.character.startingBalance;
    previousHappiness = 50;
    
    // Reset weekly choices but keep structure
    gameState.weeklyChoices = {
        housing: null,
        food: null,
        entertainment: null,
        savingsAmount: 0
    };
    
    // Add initial balance transaction
    addTransaction('Kezdő egyenleg (fiú - fix költ.)', gameState.character.startingBalance, 'income');
    
    // Initialize date
    initializeDate();
    
    // Load character info
    document.getElementById('characterName').textContent = gameState.character.name;
    document.getElementById('characterJob').textContent = gameState.character.job;
    document.getElementById('grossSalary').textContent = formatCurrency(gameState.character.grossSalary);
    document.getElementById('netSalary').textContent = formatCurrency(gameState.character.netSalary);
    document.getElementById('livingSituation').textContent = `${gameState.character.livingSituation} | Fix költ.: -${formatCurrency(gameState.character.fixedExpense)} (${gameState.character.fixedExpenseDescription})`;
    
    // Load options
    loadOptions();
    
    // Load character-specific info
    loadCharacterSpecificInfo();
    
    // Initialize info toggle
    initializeInfoToggle();
    
    // Update displays
    updateStatusBar();
    
    // Show game screen
    showScreen('gameScreen');
}

// Load Options
function loadOptions() {
    loadHousingOptions();
    loadFoodOptions();
    loadEntertainmentOptions();
}

function loadHousingOptions() {
    const container = document.getElementById('housingOptions');
    container.innerHTML = '';
    
    gameData.housingOptions.forEach(option => {
        const card = createOptionCard(option, 'housing');
        container.appendChild(card);
    });
}

function loadFoodOptions() {
    const container = document.getElementById('foodOptions');
    container.innerHTML = '';
    
    gameData.foodOptions.forEach(option => {
        const card = createOptionCard(option, 'food');
        container.appendChild(card);
    });
}

function loadEntertainmentOptions() {
    const container = document.getElementById('entertainmentOptions');
    container.innerHTML = '';
    
    gameData.entertainmentOptions.forEach(option => {
        const card = createOptionCard(option, 'entertainment');
        container.appendChild(card);
    });
}

function createOptionCard(option, category) {
    const card = document.createElement('div');
    card.className = 'option-card';
    
    const happinessDisplay = option.happiness >= 0 ? `+${option.happiness}` : option.happiness;
    const happinessEmoji = option.happiness > 0 ? '😊' : option.happiness < 0 ? '😟' : '😐';
    
    card.innerHTML = `
        <h5>${option.name}</h5>
        <p style="margin-bottom: 10px; font-size: 0.9rem; color: #64748b;">${option.description}</p>
        <div class="cost">-${formatCurrency(option.cost)}</div>
        <div class="happiness">${happinessEmoji} Boldogság: ${happinessDisplay}</div>
    `;
    
    card.addEventListener('click', () => selectOption(option, category, card));
    return card;
}

function selectOption(option, category, cardElement) {
    // Remove selection from all cards in this category
    cardElement.parentElement.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Select this card
    cardElement.classList.add('selected');
    
    // Save choice
    gameState.weeklyChoices[category] = option;
}

function restoreSelections() {
    // Restore housing selection
    if (gameState.weeklyChoices.housing) {
        const housingCards = document.querySelectorAll('#housingOptions .option-card');
        housingCards.forEach(card => {
            const optionName = card.querySelector('h5').textContent;
            if (optionName === gameState.weeklyChoices.housing.name) {
                card.classList.add('selected');
            }
        });
    }
    
    // Restore food selection
    if (gameState.weeklyChoices.food) {
        const foodCards = document.querySelectorAll('#foodOptions .option-card');
        foodCards.forEach(card => {
            const optionName = card.querySelector('h5').textContent;
            if (optionName === gameState.weeklyChoices.food.name) {
                card.classList.add('selected');
            }
        });
    }
    
    // Restore entertainment selection
    if (gameState.weeklyChoices.entertainment) {
        const entertainmentCards = document.querySelectorAll('#entertainmentOptions .option-card');
        entertainmentCards.forEach(card => {
            const optionName = card.querySelector('h5').textContent;
            if (optionName === gameState.weeklyChoices.entertainment.name) {
                card.classList.add('selected');
            }
        });
    }
}

// Week Confirmation
document.getElementById('confirmWeekBtn').addEventListener('click', () => {
    // Validate choices
    if (!gameState.weeklyChoices.housing || !gameState.weeklyChoices.food || !gameState.weeklyChoices.entertainment) {
        alert('Kérlek, válassz minden kategóriából!');
        return;
    }
    
    // Calculate total costs
    // Housing and entertainment are monthly (only charged on week 1)
    const housingCost = (gameState.currentWeek === 1) ? gameState.weeklyChoices.housing.cost : 0;
    const entertainmentCost = (gameState.currentWeek === 1) ? gameState.weeklyChoices.entertainment.cost : 0;
    
    // Food is weekly
    const foodCost = gameState.weeklyChoices.food.cost;
    
    // Savings: check if auto-savings is enabled
    const autoSavingsCheckbox = document.getElementById('autoSavings');
    const savingsInputValue = parseInt(document.getElementById('savingsAmount').value) || 0;
    
    let savingsAmount = 0;
    if (gameState.autoSavingsEnabled && gameState.currentWeek === 1) {
        // Auto-savings: only on first week of month
        savingsAmount = gameState.autoSavingsAmount;
    } else if (!gameState.autoSavingsEnabled) {
        // Manual savings: use current input value
        savingsAmount = savingsInputValue;
    }
    // If auto-savings enabled but not week 1, savingsAmount stays 0
    
    const totalCost = housingCost + foodCost + entertainmentCost + savingsAmount;
    
    // Apply costs (allow negative balance)
    if (housingCost > 0) {
        gameState.balance -= housingCost;
        addTransaction('Lakhatás (havi): ' + gameState.weeklyChoices.housing.name, housingCost, 'expense');
    }
    
    gameState.balance -= foodCost;
    addTransaction('Étkezés (heti): ' + gameState.weeklyChoices.food.name, foodCost, 'expense');
    
    if (entertainmentCost > 0) {
        gameState.balance -= entertainmentCost;
        addTransaction('Szórakozás (havi): ' + gameState.weeklyChoices.entertainment.name, entertainmentCost, 'expense');
    }
    
    if (savingsAmount > 0) {
        gameState.balance -= savingsAmount;
        
        // Get selected investment type
        const selectedInvestment = document.querySelector('input[name="investment"]:checked').value;
        
        if (selectedInvestment === 'bank') {
            // Bank investment: 6 months maturity
            gameState.bankInvestments.push({
                amount: savingsAmount,
                depositMonth: gameState.currentMonth,
                maturityMonth: gameState.currentMonth + 6
            });
            addTransaction('Megtakarítás (bank - 1.5% kamat, 6 hónap)', savingsAmount, 'expense');
        } else if (selectedInvestment === 'stock') {
            // Stock investment: 1 month maturity
            gameState.stockInvestments.push({
                amount: savingsAmount,
                depositMonth: gameState.currentMonth
            });
            addTransaction('Megtakarítás (tőzsde - következő hónap)', savingsAmount, 'expense');
        } else {
            // Free savings
            gameState.savings += savingsAmount;
            addTransaction('Megtakarítás (szabad)', savingsAmount, 'expense');
        }
    }
    
    // Save auto-savings settings and investment preference
    gameState.autoSavingsEnabled = autoSavingsCheckbox.checked;
    if (gameState.autoSavingsEnabled) {
        gameState.autoSavingsAmount = savingsInputValue;
        gameState.investmentType = document.querySelector('input[name="investment"]:checked').value;
    }
    
    // Apply happiness changes
    gameState.happiness += gameState.weeklyChoices.housing.happiness;
    gameState.happiness += gameState.weeklyChoices.food.happiness;
    gameState.happiness += gameState.weeklyChoices.entertainment.happiness;
    
    // Clamp happiness
    gameState.happiness = Math.max(0, Math.min(100, gameState.happiness));
    
    updateStatusBar();
    
    // Ellenőrizzük a game over feltételt a heti kiadások után
    if (checkGameOver()) {
        return;
    }
    
    // Show weekly event
    showWeeklyEvent();
});

// Events
function showWeeklyEvent() {
    // Select random event from allEvents pool
    const randomIndex = Math.floor(Math.random() * gameData.allEvents.length);
    const event = gameData.allEvents[randomIndex];
    
    // Display event
    document.getElementById('eventTitle').textContent = event.title;
    document.getElementById('eventDescription').textContent = event.description;
    
    const choicesContainer = document.getElementById('eventChoices');
    choicesContainer.innerHTML = '';
    
    if (event.type === 'bad' || event.type === 'good') {
        // Simple event with one button
        const button = document.createElement('button');
        button.className = 'event-choice-btn';
        button.textContent = 'Rendben';
        button.addEventListener('click', () => {
            // Apply cost (negative = income, positive = expense)
            if (event.cost > 0) {
                gameState.balance -= event.cost;
                addTransaction(event.title, event.cost, 'expense');
            } else if (event.cost < 0) {
                gameState.balance += (-event.cost);
                addTransaction(event.title, -event.cost, 'income');
            }
            
            // Apply happiness
            gameState.happiness += event.happiness;
            gameState.happiness = Math.max(0, Math.min(100, gameState.happiness));
            
            updateStatusBar();
            document.getElementById('eventDisplay').classList.add('hidden');
            finishWeek();
        });
        choicesContainer.appendChild(button);
    } else if (event.type === 'choice') {
        // Event with multiple choices
        event.choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'event-choice-btn';
            
            let buttonText = choice.text;
            
            // Add cost information
            if (choice.cost > 0) {
                buttonText += ` (-${formatCurrency(choice.cost)})`;
            } else if (choice.cost < 0) {
                buttonText += ` (+${formatCurrency(-choice.cost)})`;
            }
            
            // Add happiness information
            if (choice.happiness > 0) {
                buttonText += ` 😊+${choice.happiness}`;
            } else if (choice.happiness < 0) {
                buttonText += ` 😟${choice.happiness}`;
            }
            
            button.textContent = buttonText;
            
            button.addEventListener('click', () => {
                handleEventChoice(choice, event);
            });
            choicesContainer.appendChild(button);
        });
    }
    
    document.getElementById('eventDisplay').classList.remove('hidden');
}

function handleEventChoice(choice, event) {
    // Handle special events
    if (choice.special === 'investment') {
        // 50% chance to win double or lose all
        const success = Math.random() < 0.5;
        gameState.balance -= choice.cost;
        addTransaction(event.title + ' (befektetés)', choice.cost, 'expense');
        
        if (success) {
            gameState.balance += 40000;
            addTransaction(event.title + ' nyeremény', 40000, 'income');
            gameState.happiness += 5;
        } else {
            gameState.happiness -= 3;
        }
    } else if (choice.special === 'gamble') {
        // Roll dice: 1-4 lose, 5-6 win 20k
        const roll = Math.floor(Math.random() * 6) + 1;
        gameState.balance -= choice.cost;
        addTransaction(event.title + ' (szerencsejáték)', choice.cost, 'expense');
        
        if (roll >= 5) {
            gameState.balance += 20000;
            addTransaction(event.title + ' nyeremény', 20000, 'income');
            gameState.happiness += 4;
        } else {
            gameState.happiness -= 2;
        }
    } else {
        // Normal choice
        if (choice.cost > 0) {
            gameState.balance -= choice.cost;
            addTransaction(event.title, choice.cost, 'expense');
        } else if (choice.cost < 0) {
            gameState.balance += (-choice.cost);
            addTransaction(event.title, -choice.cost, 'income');
        }
        
        if (choice.happiness) {
            gameState.happiness += choice.happiness;
        }
    }
    
    // Clamp happiness
    gameState.happiness = Math.max(0, Math.min(100, gameState.happiness));
    updateStatusBar();
    
    // Ellenőrizzük a game over feltételt
    if (checkGameOver()) {
        return;
    }
    
    // Hide event
    document.getElementById('eventDisplay').classList.add('hidden');
    
    // Finish week
    finishWeek();
}

function finishWeek() {
    // Check if month has ended (4 weeks completed)
    if (gameState.currentWeek >= gameState.totalWeeks) {
        // New month begins!
        gameState.currentMonth++;
        gameState.currentWeek = 0; // Will be incremented to 1 by advanceWeek()
        
        // Process mature bank investments (6 months)
        gameState.bankInvestments = gameState.bankInvestments.filter(investment => {
            if (investment.maturityMonth <= gameState.currentMonth) {
                const interest = investment.amount * 0.015; // 1.5% interest
                const total = investment.amount + interest;
                gameState.balance += total;
                addTransaction(`Bank betét lejárt (+1.5% kamat)`, total, 'income');
                return false; // Remove from array
            }
            return true; // Keep in array
        });
        
        // Process all stock investments (1 month maturity)
        gameState.stockInvestments = gameState.stockInvestments.filter(investment => {
            // Stock returns between -3% and +5%
            const returnRate = (Math.random() * 8 - 3) / 100; // Random between -0.03 and 0.05
            const returnAmount = investment.amount * returnRate;
            const total = investment.amount + returnAmount;
            // Round to nearest 10
            const roundedTotal = Math.round(total / 10) * 10;
            gameState.balance += roundedTotal;
            
            const percentStr = (returnRate * 100).toFixed(1);
            const sign = returnRate >= 0 ? '+' : '';
            addTransaction(`Tőzsde befektetés visszatért (${sign}${percentStr}%)`, roundedTotal, 'income');
            return false; // Remove all stocks every month
        });
        
        // Add monthly salary
        gameState.balance += gameState.character.netSalary;
        addTransaction(`Havi fizetés (${gameState.currentMonth}. hónap)`, gameState.character.netSalary, 'income');
        
        // Deduct monthly fixed expense
        gameState.balance -= gameState.character.fixedExpense;
        addTransaction(`${gameState.character.fixedExpenseDescription} (hónap vége)`, gameState.character.fixedExpense, 'expense');
    }
    
    // Advance to next week
    advanceWeek();
    
    // Don't reset choices - they persist!
    // Reset manual savings input if not auto-savings
    if (!gameState.autoSavingsEnabled) {
        document.getElementById('savingsAmount').value = 0;
    }
    // If auto-savings enabled, keep the value for display
    
    // Restore selections for next week
    restoreSelections();
    
    // Ellenőrizzük a game over feltételt
    checkGameOver();
}

// Status Bar Update
function updateStatusBar() {
    const balanceElement = document.getElementById('balance');
    const happinessElement = document.getElementById('happiness');
    
    // Animáció hozzáadása ha változott az egyenleg
    if (gameState.balance !== previousBalance) {
        balanceElement.classList.remove('value-increase', 'value-decrease');
        void balanceElement.offsetWidth; // Trigger reflow
        
        if (gameState.balance > previousBalance) {
            balanceElement.classList.add('value-increase');
        } else if (gameState.balance < previousBalance) {
            balanceElement.classList.add('value-decrease');
        }
        previousBalance = gameState.balance;
    }
    
    // Animáció hozzáadása ha változott a boldogság
    if (gameState.happiness !== previousHappiness) {
        happinessElement.classList.remove('value-increase', 'value-decrease');
        void happinessElement.offsetWidth; // Trigger reflow
        
        if (gameState.happiness > previousHappiness) {
            happinessElement.classList.add('value-increase');
        } else if (gameState.happiness < previousHappiness) {
            happinessElement.classList.add('value-decrease');
        }
        previousHappiness = gameState.happiness;
    }
    
    balanceElement.textContent = formatCurrency(gameState.balance);
    happinessElement.textContent = `${gameState.happiness}/100`;
    
    // Calculate locked savings
    const bankTotal = gameState.bankInvestments.reduce((sum, inv) => sum + inv.amount, 0);
    const stockTotal = gameState.stockInvestments.reduce((sum, inv) => sum + inv.amount, 0);
    const lockedSavings = bankTotal + stockTotal;
    const totalSavings = gameState.savings + lockedSavings;
    
    // Update savings display
    document.getElementById('freeSavings').textContent = formatCurrency(gameState.savings);
    document.getElementById('lockedSavings').textContent = formatCurrency(lockedSavings);
    document.getElementById('totalSavings').textContent = formatCurrency(totalSavings);
    
    // Color code balance
    if (gameState.balance < 0) {
        balanceElement.style.color = '#ef4444';
    } else if (gameState.balance < 50000) {
        balanceElement.style.color = '#f59e0b';
    } else {
        balanceElement.style.color = '#10b981';
    }
    
    // Color code happiness
    if (gameState.happiness < 30) {
        happinessElement.style.color = '#ef4444';
    } else if (gameState.happiness < 60) {
        happinessElement.style.color = '#f59e0b';
    } else {
        happinessElement.style.color = '#10b981';
    }
}

// Transactions
function addTransaction(description, amount, type) {
    const transaction = {
        description,
        amount,
        type,
        date: new Date(gameState.currentDate),
        week: gameState.currentWeek
    };
    
    gameState.transactions.push(transaction);
    displayTransaction(transaction);
}

function displayTransaction(transaction) {
    const container = document.getElementById('transactionList');
    const item = document.createElement('div');
    item.className = `transaction-item ${transaction.type}`;
    
    const sign = transaction.type === 'income' ? '+' : '-';
    const dateStr = transaction.date.toLocaleDateString('hu-HU', { month: 'short', day: 'numeric' });
    
    item.innerHTML = `
        <div>
            <div class="description">${transaction.description}</div>
            <div class="date">Hét ${transaction.week} - ${dateStr}</div>
        </div>
        <div class="amount">${sign}${formatCurrency(transaction.amount)}</div>
    `;
    
    container.insertBefore(item, container.firstChild);
}

// Game Over
function endGame() {
    const finalBalance = gameState.balance;
    const finalSavings = gameState.savings;
    const finalHappiness = gameState.happiness;
    
    document.getElementById('finalBalance').textContent = formatCurrency(finalBalance);
    document.getElementById('finalSavings').textContent = formatCurrency(finalSavings);
    document.getElementById('finalHappiness').textContent = `${finalHappiness}/100`;
    
    // Generate message
    let message = '';
    
    if (finalBalance < 0) {
        message = '💸 <strong>Csődbe mentél!</strong> Negatív egyenleggel zárt a hónap. A pénzügyi tervezés kulcsfontosságú!';
    } else if (finalBalance < 20000 && finalSavings === 0) {
        message = '😰 <strong>Éppen megúsztad!</strong> Alig maradt pénzed és nincs megtakarításod. Legközelebb próbálj meg többet félretenni!';
    } else if (finalSavings > 50000) {
        message = '🎉 <strong>Nagyszerű!</strong> Nem csak túlélted a hónapot, de még megtakarítást is sikerült képezned!';
    } else {
        message = '😊 <strong>Jól teljesítettél!</strong> Sikerült kezelned a pénzügyeidet, de van még mit javítani.';
    }
    
    if (finalHappiness < 30) {
        message += '<br><br>😢 Boldogságszinted nagyon alacsony. Ne feledd, a pénz fontos, de a mentális egészség is!';
    } else if (finalHappiness > 70) {
        message += '<br><br>😄 Boldogságszinted magas maradt! Jól egyensúlyoztál a takarékosság és az életminőség között.';
    }
    
    document.getElementById('gameOverMessage').innerHTML = message;
    
    // Color code final balance
    const balanceElement = document.getElementById('finalBalance');
    if (finalBalance < 0) {
        balanceElement.style.color = '#ef4444';
    } else if (finalBalance < 50000) {
        balanceElement.style.color = '#f59e0b';
    } else {
        balanceElement.style.color = '#10b981';
    }
    
    showScreen('gameOverScreen');
}

// Restart
document.getElementById('restartBtn').addEventListener('click', () => {
    location.reload();
});

// Character-Specific Info
function loadCharacterSpecificInfo() {
    const container = document.getElementById('characterSpecificInfo');
    container.innerHTML = '<h4>📚 ' + gameState.character.job + ' - Szakszavak</h4>';
    
    const list = document.createElement('ul');
    gameState.character.specificTerms.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.term}:</strong> ${item.definition}`;
        list.appendChild(li);
    });
    
    container.appendChild(list);
}

function initializeInfoToggle() {
    const toggleBtn = document.getElementById('infoToggle');
    const content = document.getElementById('infoContent');
    
    toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('active');
        content.classList.toggle('expanded');
    });
}

// Initialize
document.getElementById('startGameBtn').addEventListener('click', startGame);
loadCharacters();
