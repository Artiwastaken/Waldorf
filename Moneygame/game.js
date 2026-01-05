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
            netSalary: 385000,
            fixedExpense: 20000,
            fixedExpenseDescription: "Diákhitel",
            startingBalance: 365000,
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
            netSalary: 632000,
            fixedExpense: 30000,
            fixedExpenseDescription: "Tech-lízing",
            startingBalance: 602000,
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
            netSalary: 545000,
            fixedExpense: 85000,
            fixedExpenseDescription: "Autóhitel",
            startingBalance: 460000,
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
            netSalary: 432000,
            fixedExpense: 40000,
            fixedExpenseDescription: "Szerencsejáték tartozás",
            startingBalance: 392000,
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
            netSalary: 299000,
            fixedExpense: 15000,
            fixedExpenseDescription: "Edzőterem bérlet",
            startingBalance: 284000,
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
            netSalary: 450000,
            fixedExpense: 25000,
            fixedExpenseDescription: "Eszközbiztosítás",
            startingBalance: 425000,
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
        { id: 1, type: "bad", title: "Hűtőbaleset", description: "Elromlott a hűtőd, megromlott minden benne.", cost: 25000, happiness: -1 },
        { id: 2, type: "bad", title: "Beázás", description: "Beázott a plafon, a biztosító nem fizet mindent.", cost: 40000, happiness: -2 },
        { id: 3, type: "bad", title: "Büntetés", description: "Megbüntetett az ellenőr, mert lejárt a bérleted.", cost: 25000, happiness: -1 },
        { id: 4, type: "bad", title: "Fogászat", description: "Letört a fogad, sürgősségi fogászat kell.", cost: 35000, happiness: -2 },
        { id: 5, type: "bad", title: "Fülhallgató", description: "Elvesztetted a fülhallgatód egyik felét.", cost: 15000, happiness: -1 },
        { id: 6, type: "bad", title: "Cipőcsere", description: "Kiszakadt a cipőd, kell egy új.", cost: 30000, happiness: 0 },
        { id: 7, type: "bad", title: "App előfizetés", description: "Véletlenül előfizetve maradt egy app, amit nem használsz.", cost: 8000, happiness: -1 },
        { id: 8, type: "bad", title: "Karcolt jármű", description: "Megkarcolták az autód/biciklid az utcán.", cost: 20000, happiness: -2 },
        { id: 9, type: "bad", title: "Zárcsere", description: "Elhagytad a lakáskulcsod, zárat kell cserélni.", cost: 45000, happiness: -2 },
        { id: 10, type: "bad", title: "Közműhátralék", description: "Kiderült, hogy tartozol a közműveknek (hátralék).", cost: 15000, happiness: -1 },
        { id: 11, type: "bad", title: "Szülinap", description: "Meghívtak egy szülinapra, illik ajándékot vinni.", cost: 15000, happiness: 1 },
        { id: 12, type: "bad", title: "Törött kijelző", description: "Leesett a telefonod, betört a kijelző.", cost: 50000, happiness: -3 },
        { id: 13, type: "bad", title: "Gyorshajtás", description: "Kaptál egy gyorshajtási büntetést.", cost: 30000, happiness: -2 },
        { id: 14, type: "bad", title: "Bicikliszerviz", description: "Kilyukadt a bringád gumija, szerviz kell.", cost: 10000, happiness: -1 },
        { id: 15, type: "bad", title: "Rossz tej", description: "Megromlott a tej a hűtőben, mindent ki kellett dobni.", cost: 5000, happiness: -1 },
        { id: 16, type: "bad", title: "Drágább net", description: "Drágult a net-előfizetésed.", cost: 3000, happiness: -1 },
        { id: 17, type: "bad", title: "Beázott pince", description: "Beázott a pincéd, tönkrement pár ruhád.", cost: 20000, happiness: -2 },
        { id: 18, type: "bad", title: "Esküvő", description: "Meghívtak egy esküvőre, kell egy öltöny/ruha.", cost: 60000, happiness: 1 },
        { id: 19, type: "bad", title: "Elveszett kesztyű", description: "Elvesztetted a kesztyűdet a hidegben.", cost: 8000, happiness: -1 },
        { id: 20, type: "bad", title: "Késés", description: "Késett a vonatod, lekéstél egy fontos találkozót.", cost: 0, happiness: -3 },
        { id: 21, type: "bad", title: "Vírusos gép", description: "Vírusos lett a géped, szakember kell.", cost: 25000, happiness: -2 },
        { id: 22, type: "bad", title: "Személyi igazolvány", description: "Lejárt a személyid, illetéket kell fizetni.", cost: 10000, happiness: -1 },
        { id: 23, type: "bad", title: "Szállás lemondás", description: "Elfelejtettél lemondani egy szállást, levonták a díjat.", cost: 35000, happiness: -2 },
        { id: 24, type: "bad", title: "Szakadt nadrág", description: "Kiszakadt a kedvenc nadrágod.", cost: 12000, happiness: -1 },
        { id: 25, type: "bad", title: "Mikró", description: "Elromlott a mikród.", cost: 30000, happiness: -1 },
        { id: 26, type: "bad", title: "Felújítási alap", description: "Ki kell fizetned a társasházi felújítási alapot.", cost: 15000, happiness: 0 },
        { id: 27, type: "bad", title: "Esernyő", description: "Elhagytad az esernyőd az esőben.", cost: 6000, happiness: -1 },
        { id: 28, type: "bad", title: "Betegség", description: "Megbetegedtél, drága volt a gyógyszer.", cost: 15000, happiness: -2 },
        { id: 29, type: "bad", title: "Karcolt autó", description: "Megkarcoltad a főnököd autóját.", cost: 50000, happiness: -4 },
        { id: 30, type: "bad", title: "Rossz busz", description: "Rossz buszra szálltál, késtél 1 órát.", cost: 0, happiness: -2 },
        { id: 31, type: "bad", title: "Csőtörés", description: "Kiderült, hogy a lakásodban csőtörés van.", cost: 80000, happiness: -3 },
        { id: 32, type: "bad", title: "Mobilnet", description: "Elfogyott a mobilneted, venned kell pluszt.", cost: 5000, happiness: -1 },
        { id: 33, type: "bad", title: "Töltőkábel", description: "Tönkrement a töltőkábeled.", cost: 8000, happiness: -1 },
        { id: 34, type: "bad", title: "Kondibérlet", description: "Elvesztetted a kondibérleted, az új drágább.", cost: 12000, happiness: -1 },
        { id: 35, type: "bad", title: "Albérlet drágulás", description: "Megemelték az albérleted díját váratlanul.", cost: 20000, happiness: -2 },
        { id: 36, type: "bad", title: "Gázszámla", description: "Túl sokáig volt nyitva az ablak, magas lett a gázszámla.", cost: 15000, happiness: -1 },
        { id: 37, type: "bad", title: "Parkolási bírság", description: "Megbírságoltak a parkolásért.", cost: 12000, happiness: -1 },
        { id: 38, type: "bad", title: "Rossz pizza", description: "Kértél egy pizzát, de ehetetlen volt és nem fizették vissza.", cost: 6000, happiness: -2 },
        { id: 39, type: "bad", title: "Pénztárca", description: "Elhagytad a pénztárcád (benne 10.000 Ft-tal).", cost: 15000, happiness: -4 },
        { id: 40, type: "bad", title: "Kulcs a zárban", description: "Beletört a kulcs a zárba.", cost: 30000, happiness: -2 },
        
        // 🟢 Szerencse események (30 db)
        { id: 41, type: "good", title: "Húszezres", description: "Találtál a kabátodban egy húszezrest!", cost: -20000, happiness: 2 },
        { id: 42, type: "good", title: "Bónusz", description: "Kaptál egy váratlan bónuszt a munkahelyeden.", cost: -50000, happiness: 3 },
        { id: 43, type: "good", title: "Nagyi támogatás", description: "A nagyid küldött egy kis 'zsebpénzt'.", cost: -15000, happiness: 2 },
        { id: 44, type: "good", title: "Adóvisszatérítés", description: "Visszajárt az adódból egy kisebb összeg.", cost: -30000, happiness: 1 },
        { id: 45, type: "good", title: "Sorsjegy", description: "Nyertél a kaparós sorsjegyen, amit találtál.", cost: -10000, happiness: 2 },
        { id: 46, type: "good", title: "Tartozás", description: "Visszafizették egy régi tartozásodat.", cost: -12000, happiness: 1 },
        { id: 47, type: "good", title: "Mozijegy", description: "Kaptál egy ingyen mozijegyet.", cost: -5000, happiness: 1 },
        { id: 48, type: "good", title: "Akció", description: "Akciós volt a kedvenc terméked a boltban.", cost: -5000, happiness: 1 },
        { id: 49, type: "good", title: "Dicséret", description: "Megdicsért a főnököd mindenki előtt.", cost: 0, happiness: 3 },
        { id: 50, type: "good", title: "Turi ruha", description: "Találtál egy szuper ruhát a turiban fillérekért.", cost: -10000, happiness: 2 },
        { id: 51, type: "good", title: "Sorsolás", description: "Nyertél egy céges sorsoláson.", cost: -25000, happiness: 2 },
        { id: 52, type: "good", title: "Ingyen autózás", description: "Ingyen elvittek autóval vidékre, megspóroltad a jegyet.", cost: -8000, happiness: 1 },
        { id: 53, type: "good", title: "Ajándékkártya", description: "Kaptál egy ajándékkártyát.", cost: -10000, happiness: 1 },
        { id: 54, type: "good", title: "Kutya jutalom", description: "Találtál egy elveszett kutyát, a gazdája jutalmat adott.", cost: -20000, happiness: 4 },
        { id: 55, type: "good", title: "Éttermi kupon", description: "Kaptál egy 50%-os kupont a kedvenc éttermedbe.", cost: -5000, happiness: 2 },
        { id: 56, type: "good", title: "Ebédmeghívás", description: "Valaki meghívott ebédre.", cost: -4000, happiness: 1 },
        { id: 57, type: "good", title: "Koncertjegy", description: "Ingyen koncertjegyhez jutottál.", cost: -15000, happiness: 3 },
        { id: 58, type: "good", title: "Marketplace", description: "Eladtál egy régi cuccot a Marketplace-en.", cost: -15000, happiness: 1 },
        { id: 59, type: "good", title: "Kaja csomag", description: "Kaptál egy csomagot a szüleidtől (tele kajával).", cost: -20000, happiness: 2 },
        { id: 60, type: "good", title: "Túlfizetés", description: "Jóváírták egy korábbi túlfizetésedet.", cost: -10000, happiness: 1 },
        { id: 61, type: "good", title: "Alacsony rezsi", description: "Kiderült, hogy kevesebb a rezsid, mint hitted.", cost: -8000, happiness: 1 },
        { id: 62, type: "good", title: "Ingyen fagyi", description: "Ingyen fagyit kaptál, mert te voltál a 100. vásárló.", cost: 0, happiness: 1 },
        { id: 63, type: "good", title: "Lomtalanítás", description: "Találtál egy hibátlan bútort a lomtalanításon.", cost: -20000, happiness: 2 },
        { id: 64, type: "good", title: "Masszázs", description: "Kaptál egy ingyenes masszázs kupont.", cost: 0, happiness: 3 },
        { id: 65, type: "good", title: "Kvíznyeremény", description: "Nyertél egy online kvízen.", cost: -5000, happiness: 1 },
        { id: 66, type: "good", title: "Csokis könyv", description: "Egy barátod visszaadta a könyvedet és hozott mellé csokit.", cost: 0, happiness: 2 },
        { id: 67, type: "good", title: "Extra spórolás", description: "Kiszámoltad a költségvetésed és maradt extrád.", cost: 0, happiness: 1 },
        { id: 68, type: "good", title: "Szabadnap", description: "Kaptál egy plusz szabadnapot.", cost: 0, happiness: 5 },
        { id: 69, type: "good", title: "Kupon", description: "Találtál egy kupont a postaládában.", cost: -3000, happiness: 1 },
        { id: 70, type: "good", title: "Dupla termék", description: "Véletlenül két terméket küldtek egy áráért.", cost: -10000, happiness: 2 },
        
        // 🟡 Vegyes/Döntések (30 db)
        { id: 71, type: "choice", title: "Milánó", description: "Akciós a repjegy Milánóba! Mész?", choices: [
            { text: "Megveszem! 🛫", cost: 40000, happiness: 4 },
            { text: "Nem, maradok.", cost: 0, happiness: 0 }
        ]},
        { id: 72, type: "choice", title: "Jótékonyság", description: "Jótékonysági gyűjtés az irodában. Adsz?", choices: [
            { text: "Adok 💝", cost: 5000, happiness: 2 },
            { text: "Nem adok", cost: 0, happiness: -1 }
        ]},
        { id: 73, type: "choice", title: "Cuki cipő", description: "Megláttál egy cuki cipőt. Megveszed?", choices: [
            { text: "Megveszem! 👟", cost: 35000, happiness: 3 },
            { text: "Nem kell", cost: 0, happiness: -2 }
        ]},
        { id: 74, type: "choice", title: "Rossz hangulat", description: "Rossz a hangulatod. Elmész bulizni?", choices: [
            { text: "Igen, bulizom! 🎉", cost: 20000, happiness: 3 },
            { text: "Maradok otthon", cost: 0, happiness: -3 }
        ]},
        { id: 75, type: "choice", title: "Laptop javítás", description: "Elromlott a laptopod. Megjavíttatod vagy vársz?", choices: [
            { text: "Megjavíttatom 💻", cost: 40000, happiness: 0 },
            { text: "Várok még", cost: 0, happiness: -3 }
        ]},
        { id: 76, type: "choice", title: "Túra", description: "Meghívnak egy hétvégi túrára. Mész?", choices: [
            { text: "Megyek! 🏔️", cost: 15000, happiness: 3 },
            { text: "Nem megyek", cost: 0, happiness: -1 }
        ]},
        { id: 77, type: "choice", title: "Tanfolyam", description: "Tanfolyamra mehetnél, ami emeli a béred később.", choices: [
            { text: "Beiratkozom 📚", cost: 50000, happiness: 1 },
            { text: "Nem éri meg", cost: 0, happiness: 0 }
        ]},
        { id: 78, type: "choice", title: "Extra műszak", description: "Kértél egy extra műszakot. Bevállalod?", choices: [
            { text: "Bevállalom 💪", cost: -30000, happiness: -3 },
            { text: "Nem vállalom", cost: 0, happiness: 0 }
        ]},
        { id: 79, type: "choice", title: "Kuponos vacsora", description: "Van egy kuponod: fele árú vacsora.", choices: [
            { text: "Felhasználom 🍽️", cost: 8000, happiness: 2 },
            { text: "Nem használom", cost: 0, happiness: 0 }
        ]},
        { id: 80, type: "choice", title: "Olcsóbb kondi", description: "Találtál egy olcsóbb konditermet. Átiratkozol?", choices: [
            { text: "Átiratkozom 🏋️", cost: -5000, happiness: -1 },
            { text: "Maradok", cost: 0, happiness: 0 }
        ]},
        { id: 81, type: "choice", title: "Hétvégi munka", description: "Felkérnek egy kis plusz munkára hétvégén.", choices: [
            { text: "Bevállalom", cost: -25000, happiness: -2 },
            { text: "Nem vállalom", cost: 0, happiness: 0 }
        ]},
        { id: 82, type: "choice", title: "Rendelés", description: "Rendelnél vacsorát, mert lusta vagy főzni.", choices: [
            { text: "Rendelek 🍕", cost: 6000, happiness: 1 },
            { text: "Főzök inkább", cost: 0, happiness: 0 }
        ]},
        { id: 83, type: "choice", title: "Kávéfőző", description: "Elromlott a kávéfőző. Veszel újat?", choices: [
            { text: "Veszek újat ☕", cost: 20000, happiness: 1 },
            { text: "Majd később", cost: 0, happiness: -2 }
        ]},
        { id: 84, type: "choice", title: "Kölcsön", description: "Valaki megkér, hogy kölcsönözz neki.", choices: [
            { text: "Kölcsönadok 🤝", cost: 10000, happiness: 1 },
            { text: "Nem adok", cost: 0, happiness: -1 }
        ]},
        { id: 85, type: "choice", title: "Könyv", description: "Találtál egy szuper könyvet.", choices: [
            { text: "Megveszem 📖", cost: 6000, happiness: 2 },
            { text: "Nem veszem", cost: 0, happiness: 0 }
        ]},
        { id: 86, type: "choice", title: "Borkóstoló", description: "Meghívnak egy borkóstolóra.", choices: [
            { text: "Megyek 🍷", cost: 15000, happiness: 2 },
            { text: "Nem megyek", cost: 0, happiness: 0 }
        ]},
        { id: 87, type: "choice", title: "Új tévé", description: "Lecserélnéd a régi tévéd.", choices: [
            { text: "Veszek újat 📺", cost: 100000, happiness: 4 },
            { text: "Marad a régi", cost: 0, happiness: 0 }
        ]},
        { id: 88, type: "choice", title: "Vendégek", description: "Váratlan vendégek jönnek. Kell kaja/ital.", choices: [
            { text: "Bevásárolok 🛒", cost: 15000, happiness: 2 },
            { text: "Megoldom másként", cost: 0, happiness: -1 }
        ]},
        { id: 89, type: "choice", title: "Tetoválás", description: "Szeretnél egy új tetoválást/fodrászt.", choices: [
            { text: "Megcsináltatom ✂️", cost: 30000, happiness: 3 },
            { text: "Nem most", cost: 0, happiness: 0 }
        ]},
        { id: 90, type: "choice", title: "Porszívó", description: "Tönkrement a porszívód.", choices: [
            { text: "Veszek újat", cost: 40000, happiness: -1 },
            { text: "Majd később", cost: 0, happiness: -2 }
        ]},
        { id: 91, type: "choice", title: "Telekocsi", description: "Lehetőséged van telekocsizni munkába.", choices: [
            { text: "Beállok 🚗", cost: -10000, happiness: 0 },
            { text: "Marad a régi", cost: 0, happiness: 0 }
        ]},
        { id: 92, type: "choice", title: "Társasjáték", description: "Megláttál egy drága társasjátékot.", choices: [
            { text: "Megveszem 🎲", cost: 20000, happiness: 2 },
            { text: "Nem veszem", cost: 0, happiness: 0 }
        ]},
        { id: 93, type: "choice", title: "Streaming", description: "Új streaming szolgáltatás indul. Előfizetsz?", choices: [
            { text: "Előfizetek 📺", cost: 4000, happiness: 1 },
            { text: "Nem kell", cost: 0, happiness: 0 }
        ]},
        { id: 94, type: "choice", title: "Nyelvtanfolyam", description: "Beiratkozol egy nyelvtanfolyamra.", choices: [
            { text: "Beiratkozom 🗣️", cost: 40000, happiness: 1 },
            { text: "Nem most", cost: 0, happiness: 0 }
        ]},
        { id: 95, type: "choice", title: "Rokonlátogatás", description: "Meglátogatod a távoli rokonaidat. Utazási költség:", choices: [
            { text: "Megyek 🚂", cost: 15000, happiness: 2 },
            { text: "Nem megyek", cost: 0, happiness: 0 }
        ]},
        { id: 96, type: "choice", title: "Powerbank", description: "Veszel egy napelemes powerbanket.", choices: [
            { text: "Megveszem 🔋", cost: 12000, happiness: 1 },
            { text: "Nem kell", cost: 0, happiness: 0 }
        ]},
        { id: 97, type: "choice", title: "Befektetés", description: "Kapsz egy befektetési ajánlatot egy havertól. (50% esély +40k vagy 0k)", choices: [
            { text: "Befektetek 💰", cost: 20000, happiness: 0, special: "investment" },
            { text: "Nem fektetem be", cost: 0, happiness: 0 }
        ]},
        { id: 98, type: "choice", title: "Szerencsejáték", description: "Teszel fel 5.000 Ft-ot? (1-4: vesztesz, 5-6: nyersz 20k-t)", choices: [
            { text: "Felteszem 🎲", cost: 5000, happiness: 0, special: "gamble" },
            { text: "Nem teszek fel", cost: 0, happiness: 0 }
        ]},
        { id: 99, type: "choice", title: "Éves bérlet", description: "Akciós az éves bérlet, de drága. (Később megtérül)", choices: [
            { text: "Megveszem 🎫", cost: 80000, happiness: 0, special: "season-pass" },
            { text: "Nem veszem", cost: 0, happiness: 0 }
        ]},
        { id: 100, type: "choice", title: "Kutya befogadás", description: "Találtál egy kutyát az utcán és befogadtad. (30k havonta)", choices: [
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
