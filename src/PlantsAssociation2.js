export default class PlantsAssociation2 {

    #plantsMatrix2 = {
        BÜDÖSKE: {
            JÓ_SZOMSZÉD: [],
            ROSSZ_SZOMSZÉD: []
        },
        CICKAFARK: {
            JÓ_SZOMSZÉD: [],
            ROSSZ_SZOMSZÉD: []
        },
        KÖRÖMVIRÁG: {
            JÓ_SZOMSZÉD: [],
            ROSSZ_SZOMSZÉD: []
        },
        PETÚNIA: {
            JÓ_SZOMSZÉD: [],
            ROSSZ_SZOMSZÉD: []
        },
        RÉZVIRÁG: {
            JÓ_SZOMSZÉD: [],
            ROSSZ_SZOMSZÉD: []
        },
        RÓZSA: {
            JÓ_SZOMSZÉD: [],
            ROSSZ_SZOMSZÉD: []
        },
        SARKANTYÚKA: {
            JÓ_SZOMSZÉD: [],
            ROSSZ_SZOMSZÉD: []
        },
        BAB: {
            JÓ_SZOMSZÉD: ["eper", "uborka", "tök", "burgonya", "karfiol", "káposzta", "retek", "karalábé", "saláta", "zeller",
                "paradicsom", "cékla", "sárgarépa", "spenót", "padlizsán", "cukkini", "kukorica", "napraforgó", "mángold", "paprika",
                "kelbimbó", "brokkoli", "kínai kel", "káposzta", "kelkáposzta", "csemegekukorica", "fekete gyökér", "menta",
                "rozmaring", "borsikafű", "zsálya", "bazsalikom", "borágó", "büdöske", "sarkantyúka", "cickafark"],
            ROSSZ_SZOMSZÉD: ["borsó", "fokhagyma", "hagyma", "póréhagyma", "édeskömény", "mogyoróhagyma", "petrezselyem", "cukorrépa",
                "metélőhagyma", "szőlő"]
        },
        BOKORBAB: {
            JÓ_SZOMSZÉD: ["eper", "uborka", "tök", "burgonya", "karfiol", "káposzta", "retek", "karalábé", "saláta", "zeller",
                "paradicsom", "cékla", "sárgarépa", "spenót", "padlizsán", "cukkini", "kukorica", "napraforgó", "mángold", "paprika",
                "kelbimbó", "brokkoli", "kínai kel", "káposzta", "kelkáposzta", "csemegekukorica", "fekete gyökér", "menta",
                "rozmaring", "borsikafű", "zsálya", "bazsalikom", "borágó", "büdöske", "sarkantyúka", "cickafark"],
            ROSSZ_SZOMSZÉD: ["borsó", "fokhagyma", "hagyma", "póréhagyma", "édeskömény", "mogyoróhagyma", "petrezselyem", "cukorrépa",
                "metélőhagyma", "szőlő"]
        },
        BORSÓ: {
            JÓ_SZOMSZÉD: ["kapor", "uborka", "tök", "káposzta", "karalábé", "saláta", "kukorica", "sárgarépa", "retek",
                "cukkini", "káposzta", "zeller", "spárga", "padlizsán", "spenót", "fehérrépa", "csemegekukorica", "menta", "rozmaring",
                "cickafark"],
            ROSSZ_SZOMSZÉD: ["bokorbab", "burgonya", "fokhagyma", "póréhagyma", "paradicsom", "hagyma", "szőlő", "petrezselyem",
                "metélőhagyma", "kelbimbó", "édeskömény"]
        },
        BURGONYA: {
            JÓ_SZOMSZÉD: ["karalábé", "kukorica", "torma", "spenót", "saláta", "fokhagyma", "karfiol",
                "káposzta", "brokkoli", "csicsóka", "bokorbab", "póréhagyma", "kínai kel", "kelbimbó", "leveles kel", "lóbab",
                "kamilla", "menta", "rozmaring", "len", "ánizs", "koriander", "csalán", "kömény", "sarkantyúka", "büdöske", "petúnia",
                "körömvirág"],
            ROSSZ_SZOMSZÉD: ["borsó", "cékla", "zeller", "körtefa", "napraforgó", "tök", "paradicsom", "uborka", "hagyma", "padlizsán",
                "diófa", "patiszon", "csemegekukorica", "málna", "almafa", "őszibarack fa", "sárgabarack fa"]
        },
        CÉKLA: {
            JÓ_SZOMSZÉD: ["bokorbab", "kapor", "uborka", "fokhagyma", "káposzta", "zeller", "karalábé", "tépősaláta",
                "cukkini", "hagyma", "karfiol", "káposzta", "saláta", "kelbimbó", "kömény", "koriander", "zsálya"],
            ROSSZ_SZOMSZÉD: ["burgonya", "spárga", "futóbab", "póréhagyma", "kukorica", "spenót", "paradicsom", "sárgarépa"]
        },
        CUKKINI: {
            JÓ_SZOMSZÉD: ["kukorica", "cékla", "hagyma", "borsó", "futóbab", "bokorbab", "káposzta", "csemegekukorica",
                "borágó", "sarkantyúka", "petúnia"],
            ROSSZ_SZOMSZÉD: ["paradicsom"]
        },
        SALÁTA: {
            JÓ_SZOMSZÉD: ["futóbab", "eper", "uborka", "káposzta", "tök", "karalábé", "borsó", "póréhagyma", "retek", "sárgarépa",
                "cékla", "paradicsom", "hagyma", "mángold", "cukorrépa", "mogyoróhagyma", "fehérrépa", "karfiol", "fokhagyma", "patiszon",
                "burgonya", "kelbimbó", "bokorbab", "articsóka", "metélőhagyma", "kelkáposzta", "káposzta", "brokkoli", "édeskömény",
                "fekete gyökér", "rozmaring", "turbolya", "zsálya", "menta", "kapor", "büdöske"],
            ROSSZ_SZOMSZÉD: ["petrezselyem", "zeller", "lóbab", "napraforgó", "kukorica"]
        },
        FOKHAGYMA: {
            JÓ_SZOMSZÉD: ["eper", "uborka", "cékla", "sárgarépa", "paradicsom", "burgonya", "zeller", "padlizsán", "retek", "kelbimbó",
                "brokkoli", "saláta", "cukorrépa", "karfiol", "paprika", "kínai kel", "kelkáposzta", "rozmaring", "kamilla", "rózsa",
                "málna", "szőlő", "körtefa", "almafa", "őszibarack fa", "sárgabarack fa"],
            ROSSZ_SZOMSZÉD: ["borsó", "káposzta", "futóbab", "spárga", "bokorbab", "leveles kel", "fehérrépa", "káposzta"]
        },
        HAGYMA: {
            JÓ_SZOMSZÉD: ["eper", "uborka", "saláta", "sárgarépa", "cékla", "paradicsom", "paprika", "mángold", "cukkini", "spenót",
                "tök", "kelkáposzta", "zeller", "póréhagyma", "brokkoli", "karotta", "karfiol", "kelbimbó", "paszternák", "cukorrépa", "kapor",
                "édeskömény", "kamilla", "borsikafű", "bazsalikom", "majoranna", "petrezselyem", "rózsa"],
            ROSSZ_SZOMSZÉD: ["bokorbab", "káposzta", "leveles kel", "burgonya", "káposzta", "spárga", "retek", "karalábé", "borsó",
                "futóbab", "kerti ruta", "zsálya"]
        },
        RETEK: {
            JÓ_SZOMSZÉD: ["bokorbab", "borsó", "karalábé", "saláta", "mángold", "sárgarépa", "spenót", "paradicsom", "fokhagyma",
                "futóbab", "paszternák", "eper", "tök", "cukorrépa", "zeller", "brokkoli", "karfiol", "dinnye", "póréhagyma", "fekete gyökér",
                "menta", "kerti zsázsa", "turbolya", "zsálya", "petrezselyem", "sarkantyúka", "szőlő"],
            ROSSZ_SZOMSZÉD: ["uborka", "hagyma", "patiszon", "káposzta", "kelkáposzta", "izsóp"]
        },
        KARALÁBÉ: {
            JÓ_SZOMSZÉD: ["bokorbab", "borsó", "burgonya", "retek", "cékla", "saláta", "zeller", "spenót", "póréhagyma", "borágó",
                "bazsalikom", "rozmaring"],
            ROSSZ_SZOMSZÉD: ["paprika", "paradicsom", "hagyma", "futóbab", "édeskömény"]
        },
        KUKORICA: {
            JÓ_SZOMSZÉD: ["bokorbab", "uborka", "burgonya", "tök", "dinnye", "paradicsom", "cukkini", "patiszon", "napraforgó", "borsó",
                "futóbab", "spenót", "tök", "kapor", "facélia"],
            ROSSZ_SZOMSZÉD: ["cékla", "zeller", "saláta", "sárgarépa", "menta", "rozmaring"]
        },
        NAPRAFORGÓ: {
            JÓ_SZOMSZÉD: ["uborka", "tök", "kukorica", "bokorbab", "futóbab", "csemegekukorica", "cickafark"],
            ROSSZ_SZOMSZÉD: ["burgonya", "saláta"]
        },
        PARADICSOM: {
            JÓ_SZOMSZÉD: ["zeller", "fokhagyma", "bokorbab", "padlizsán", "póréhagyma", "retek", "káposzta", "spenót", "hagyma",
                "saláta", "sárgarépa", "paprika", "metélőhagyma", "spárga", "kelkáposzta", "brokkoli", "tépősaláta", "zsálya",
                "bazsalikom", "borágó", "menta", "citromfű", "rozmaring", "csalán", "petrezselyem", "büdöske", "petúnia", "sarkantyúka",
                "körömvirág", "rézvirág"],
            ROSSZ_SZOMSZÉD: ["borsó", "burgonya", "cukorrépa", "uborka", "futóbab", "cékla", "cukkini", "karfiol", "kelbimbó", "karalábé",
                "kapor", "kömény", "édeskömény", "diófa", "őszibarack fa", "sárgabarack fa"]
        },
        PÓRÉHAGYMA: {
            JÓ_SZOMSZÉD: ["eper", "hagyma", "retek", "karalábé", "saláta", "sárgarépa", "zeller", "paradicsom", "spárga", "spenót",
                "endivia", "burgonya", "fekete gyökér", "kamilla", "petrezselyem", "édeskömény"],
            ROSSZ_SZOMSZÉD: ["bokorbab", "borsó", "cékla", "káposzta"]
        },
        SÁRGARÉPA: {
            JÓ_SZOMSZÉD: ["borsó", "retek", "spárga", "fokhagyma", "mángold", "póréhagyma", "uborka", "metélőhagyma", "saláta", "paprika",
                "mogyoróhagyma", "paradicsom", "hagyma", "bokorbab", "káposzta", "bokorbab", "rozmaring", "zsálya", "menta", "turbolya",
                "petrezselyem", "kapor"],
            ROSSZ_SZOMSZÉD: ["cékla", "cukorrépa", "zeller", "kukorica", "csemegekukorica", "kömény", "ánizs", "kapor"]
        },
        SPENÓT: {
            JÓ_SZOMSZÉD: ["eper", "burgonya", "zeller", "káposzta", "borsó", "karalábé", "retek", "futóbab", "padlizsán", "paradicsom",
                "hagyma", "póréhagyma", "karfiol", "bokorbab", "kukorica", "csemegekukorica", "káposzta"],
            ROSSZ_SZOMSZÉD: ["cukorrépa", "cékla"]
        },
        PATISZON: {
            JÓ_SZOMSZÉD: ["saláta", "kukorica", "dinnye", "csemegekukorica", "lóbab", "bazsalikom", "sarkantyúka", "petúnia"],
            ROSSZ_SZOMSZÉD: ["burgonya", "retek"]
        },
        EPER: {
            JÓ_SZOMSZÉD: ["bokorbab", "futóbab", "fokhagyma", "saláta", "póréhagyma", "retek", "spenót", "hagyma",
                "metélőhagyma", "borágó", "zsálya", "körömvirág", "csalán"],
            ROSSZ_SZOMSZÉD: ["brokkoli", "karfiol", "kelbimbó", "káposzta"]
        },
        TORMA: {
            JÓ_SZOMSZÉD: ["burgonya", "körtefa", "almafa", "diófa", "őszibarack fa", "sárgabarack fa"],
            ROSSZ_SZOMSZÉD: []
        },
        UBORKA: {
            JÓ_SZOMSZÉD: ["káposzta", "cékla", "napraforgó", "zeller", "bokorbab", "saláta", "kukorica", "hagyma", "sárgarépa",
                "borsó", "brokkoli", "karfiol", "leveles kel", "futóbab", "fokhagyma", "metélőhagyma", "csemegekukorica", "káposzta",
                "kapor", "bazsalikom", "koriander", "borsikafű", "édeskömény", "kömény", "rozmaring", "büdöske", "sarkantyúka", "petúnia"],
            ROSSZ_SZOMSZÉD: ["paradicsom", "burgonya", "dinnye", "retek", "zsálya", "izsóp"]
        },
        ZELLER: {
            JÓ_SZOMSZÉD: ["cékla", "karalábé", "fokhagyma", "uborka", "bokorbab", "spenót", "póréhagyma", "borsó", "paradicsom",
                "retek", "kínai kel", "karfiol", "káposzta", "kelbimbó", "hagyma", "édeskömény", "kamilla", "sarkantyúka"],
            ROSSZ_SZOMSZÉD: ["saláta", "burgonya", "kukorica", "petrezselyem", "sárgarépa"]
        },
        CUKORRÉPA: {
            JÓ_SZOMSZÉD: ["zeller", "káposzta", "saláta", "hagyma", "retek", "fokhagyma", "cickafark"],
            ROSSZ_SZOMSZÉD: ["bokorbab", "spenót", "spárga", "sárgarépa", "paradicsom"]
        },
        TÖK: {
            JÓ_SZOMSZÉD: ["bokorbab", "saláta", "hagyma", "borsó", "csemegekukorica", "kukorica", "napraforgó", "dinnye", "retek",
                "káposzta", "menta", "borágó", "rozmaring", "sarkantyúka", "petúnia"],
            ROSSZ_SZOMSZÉD: ["burgonya"]
        },
        PAPRIKA: {
            JÓ_SZOMSZÉD: ["padlizsán", "hagyma", "paradicsom", "sárgarépa", "fokhagyma", "bokorbab", "oregánó", "majoranna", "bazsalikom",
                "rézvirág", "büdöske"],
            ROSSZ_SZOMSZÉD: ["karalábé", "édeskömény", "diófa"]
        },
        PADLIZSÁN: {
            JÓ_SZOMSZÉD: ["paprika", "bokorbab", "borsó", "paradicsom", "spenót", "fokhagyma", "futóbab", "kakukkfű", "tárkony", "menta",
                "petrezselyem", "büdöske"],
            ROSSZ_SZOMSZÉD: ["burgonya", "sárgabarack fa", "kerti ruta"]
        },
        KARFIOL: {
            JÓ_SZOMSZÉD: ["bokorbab", "cékla", "burgonya", "zeller", "hagyma", "fokhagyma", "retek", "spenót", "uborka", "saláta", "kapor",
                "rozmaring", "izsóp", "kakukkfű", "kamilla", "menta", "bazsalikom", "zsálya", "büdöske", "sarkantyúka"],
            ROSSZ_SZOMSZÉD: ["paradicsom", "eper", "szőlő", "kerti ruta"]
        },
        DINNYE: {
            JÓ_SZOMSZÉD: ["káposzta", "tök", "kukorica", "retek", "patiszon", "csemegekukorica", "sarkantyúka", "petúnia", "büdöske"],
            ROSSZ_SZOMSZÉD: ["uborka"]
        },
        FUTÓBAB: {
            JÓ_SZOMSZÉD: ["káposzta", "retek", "kukorica", "sárgarépa", "spenót", "endivia", "eper", "brokkoli", "uborka", "kínai kel",
                "burgonya", "csemegekukorica", "saláta", "padlizsán", "cukkini", "napraforgó", "rozmaring", "bazsalikom", "borsikafű", "borágó",
                "menta", "sarkantyúka", "büdöske", "petúnia", "rézvirág"],
            ROSSZ_SZOMSZÉD: ["mogyoróhagyma", "fokhagyma", "édeskömény", "paradicsom", "szőlő", "karalábé", "hagyma", "cékla", "petrezselyem"]
        },
        SPÁRGA: {
            JÓ_SZOMSZÉD: ["sárgarépa", "paradicsom", "articsóka", "borsó", "póréhagyma", "édeskömény", "petrezselyem", "bazsalikom",
                "őszibarack fa", "petúnia"],
            ROSSZ_SZOMSZÉD: ["fokhagyma", "cukorrépa", "hagyma", "cékla"]
        },
        BROKKOLI: {
            JÓ_SZOMSZÉD: ["paradicsom", "retek", "káposzta", "saláta", "uborka", "bokorbab", "burgonya", "fokhagyma", "hagyma", "futóbab",
                "rozmaring", "kapor", "kakukkfű", "zsálya", "bazsalikom", "menta", "izsóp", "büdöske", "sarkantyúka"],
            ROSSZ_SZOMSZÉD: ["eper", "szőlő"]
        },
        KELBIMBÓ: {
            JÓ_SZOMSZÉD: ["fehérrépa", "cékla", "fokhagyma", "zeller", "bokorbab", "saláta", "burgonya", "hagyma", "kapor", "kamilla",
                "rozmaring", "izsóp", "bazsalikom", "menta", "kakukkfű", "zsálya", "sarkantyúka"],
            ROSSZ_SZOMSZÉD: ["paradicsom", "borsó", "kerti ruta", "szőlő", "eper"]
        },
        METÉLŐHAGYMA: {
            JÓ_SZOMSZÉD: ["sárgarépa", "eper", "uborka", "paradicsom", "saláta", "cikória", "kamilla", "kapor", "borsikafű", "ánizs",
                "bazsalikom", "rózsa", "szőlő", "almafa"],
            ROSSZ_SZOMSZÉD: ["bokorbab", "borsó"]
        },
        PETREZSELYEM: {
            JÓ_SZOMSZÉD: ["póréhagyma", "retek", "paradicsom", "spárga", "hagyma", "padlizsán", "sárgarépa", "rozmaring", "büdöske", "rózsa"],
            ROSSZ_SZOMSZÉD: ["zeller", "bokorbab", "saláta", "futóbab", "káposzta", "borsó", "menta"]
        },
        KÁPOSZTA: {
            JÓ_SZOMSZÉD: ["cickafark", "borsikafű", "koriander", "rebarbara", "cukkini", "brokkoli", "sárgarépa", "dinnye", "paradicsom",
                "endivia", "burgonya", "spenót", "futóbab", "zeller", "cékla", "cukorrépa", "uborka", "bokorbab", "saláta", "fehérrépa", "borsó",
                "fekete gyökér", "mángold", "rozmaring", "kapor", "kakukkfű", "menta", "zsálya", "borágó", "bazsalikom", "izsóp", "kamilla",
                "üröm", "sarkantyúka", "büdöske", "tök"],
            ROSSZ_SZOMSZÉD: ["mogyoróhagyma", "eper", "fokhagyma", "póréhagyma", "retek", "hagyma", "petrezselyem", "édeskömény",
                "cikória", "szőlő", "mustár"]
        },
        LEVELES_KEL: {
            JÓ_SZOMSZÉD: ["bokorbab", "uborka", "saláta", "burgonya", "paradicsom", "fokhagyma", "hagyma", "bazsalikom", "izsóp", "kapor",
                "menta", "rozmaring", "zsálya", "kakukkfű", "büdöske", "sarkantyúka"],
            ROSSZ_SZOMSZÉD: ["fokhagyma", "hagyma", "szőlő", "kerti ruta", "retek"]
        },
        KELKÁPOSZTA: {
            JÓ_SZOMSZÉD: ["bokorbab", "uborka", "saláta", "burgonya", "paradicsom", "fokhagyma", "hagyma", "bazsalikom", "izsóp", "kapor",
                "menta", "rozmaring", "zsálya", "kakukkfű", "büdöske", "sarkantyúka"],
            ROSSZ_SZOMSZÉD: ["fokhagyma", "hagyma", "szőlő", "kerti ruta", "retek"]
        },
        FEHÉRRÉPA: {
            JÓ_SZOMSZÉD: ["kelbimbó", "borsó", "káposzta", "saláta", "rozmaring", "menta"],
            ROSSZ_SZOMSZÉD: ["fokhagyma"]
        },
        KÍNAI_KEL: {
            JÓ_SZOMSZÉD: ["bokorbab", "fokhagyma", "zeller", "burgonya", "futóbab", "rozmaring", "kapor", "borsikafű", "menta",
                "kakukkfű", "zsálya", "sarkantyúka"],
            ROSSZ_SZOMSZÉD: ["szőlő"]
        },
        KÖMÉNY: {
            JÓ_SZOMSZÉD: ["cékla", "uborka", "édeskömény"],
            ROSSZ_SZOMSZÉD: ["paradicsom", "sárgarépa", "kapor"]
        },
        MÁNGOLD: {
            JÓ_SZOMSZÉD: ["hagyma", "bokorbab", "retek", "sárgarépa", "saláta", "káposzta", "cickafark"],
            ROSSZ_SZOMSZÉD: []
        },
        TÉPŐSALÁTA: {
            JÓ_SZOMSZÉD: ["paradicsom", "cékla"],
            ROSSZ_SZOMSZÉD: []
        },
        PASZTERNÁK: {
            JÓ_SZOMSZÉD: ["retek", "hagyma", "lóbab", "kamilla"],
            ROSSZ_SZOMSZÉD: ["kapor"]
        },
        ENDIVIA: {
            JÓ_SZOMSZÉD: ["káposzta", "futóbab", "póréhagyma", "édeskömény"],
            ROSSZ_SZOMSZÉD: []
        },
        CSEMEGEKUKORICA: {
            JÓ_SZOMSZÉD: ["uborka", "borsó", "futóbab", "bokorbab", "spenót", "tök", "cukkini", "patiszon", "napraforgó", "dinnye",
                "facélia", "kapor"],
            ROSSZ_SZOMSZÉD: ["saláta", "sárgarépa", "burgonya", "zeller", "menta", "rozmaring"]
        },
        ÉDESKÖMÉNY: {
            JÓ_SZOMSZÉD: ["saláta", "uborka", "endivia", "póréhagyma", "hagyma", "zeller", "spárga", "zsálya", "kapor",
                "kömény", "cickafark"],
            ROSSZ_SZOMSZÉD: ["paradicsom", "kapor", "borsó", "káposzta", "karalábé", "futóbab", "bokorbab", "paradicsom",
                "paprika", "koriander"]
        },
        FEKETE_GYÖKÉR: {
            JÓ_SZOMSZÉD: ["retek", "káposzta", "saláta", "póréhagyma", "bokorbab"],
            ROSSZ_SZOMSZÉD: []
        },
        LÓBAB: {
            JÓ_SZOMSZÉD: ["paszternák", "burgonya", "rézvirág", "cickafark"],
            ROSSZ_SZOMSZÉD: ["saláta"]
        },
        BAZSALIKOM: {
            JÓ_SZOMSZÉD: ["kelbimbó", "futóbab", "bokorbab", "hagyma", "patiszon", "brokkoli", "káposzta", "karfiol", "leveles kel",
                "paprika", "paradicsom", "karalábé", "metélőhagyma", "uborka", "spárga", "oregánó", "büdöske", "petúnia"],
            ROSSZ_SZOMSZÉD: ["kerti ruta", "rozmaring", "kamilla", "ánizs"]
        },
        BORÁGÓ: {
            JÓ_SZOMSZÉD: ["bokorbab", "cukkini", "tök", "eper", "paradicsom", "káposzta", "karalábé", "futóbab", "cickafark"],
            ROSSZ_SZOMSZÉD: []
        },
        MENTA: {
            JÓ_SZOMSZÉD: ["futóbab", "káposzta", "fehérrépa", "kelbimbó", "padlizsán", "brokkoli", "bokorbab", "borsó", "burgonya",
                "saláta", "retek", "káposzta", "sárgarépa", "tök", "kínai kel", "leveles kel", "karfiol", "paradicsom"],
            ROSSZ_SZOMSZÉD: ["petrezselyem", "kukorica", "csemegekukorica"]
        },
        IZSÓP: {
            JÓ_SZOMSZÉD: ["brokkoli", "kelbimbó", "káposzta", "karfiol", "kínai kel", "kelkáposzta", "szőlő"],
            ROSSZ_SZOMSZÉD: ["retek", "uborka"]
        },
        ROZMARING: {
            JÓ_SZOMSZÉD: ["bab", "fokhagyma", "tök", "káposzta", "saláta", "uborka", "karalábé", "sárgarépa", "petrezselyem",
                "fehérrépa", "kelbimbó", "káposzta", "kelkáposzta", "brokkoli", "kínai kel", "futóbab", "bokorbab", "borsó", "burgonya",
                "paradicsom", "karfiol", "cickafark"],
            ROSSZ_SZOMSZÉD: ["bazsalikom", "kukorica", "csemegekukorica"]
        },
        BORSIKAFŰ: {
            JÓ_SZOMSZÉD: ["bokorbab", "futóbab", "kínai kel", "hagyma", "káposzta", "uborka", "metélőhagyma"],
            ROSSZ_SZOMSZÉD: []
        },
        ZSÁLYA: {
            JÓ_SZOMSZÉD: ["édeskömény", "karfiol", "brokkoli", "kelbimbó", "káposzta", "kelkáposzta", "kínai kel", "bokorbab",
                "cékla", "saláta", "retek", "káposzta", "paradicsom", "sárgarépa", "eper"],
            ROSSZ_SZOMSZÉD: ["hagyma", "uborka"]
        },
        CITROMFŰ: {
            JÓ_SZOMSZÉD: ["paradicsom"],
            ROSSZ_SZOMSZÉD: []
        },
        TÁRKONY: {
            JÓ_SZOMSZÉD: ["padlizsán"],
            ROSSZ_SZOMSZÉD: []
        },
        MOGYORÓHAGYMA: {
            JÓ_SZOMSZÉD: ["saláta", "sárgarépa"],
            ROSSZ_SZOMSZÉD: ["bokorbab", "futóbab", "káposzta"]
        },
        KAKUKKFŰ: {
            JÓ_SZOMSZÉD: ["padlizsán", "karfiol", "brokkoli", "kelbimbó", "káposzta", "kelkáposzta", "kínai kel"],
            ROSSZ_SZOMSZÉD: []
        },
        CIKÓRIA: {
            JÓ_SZOMSZÉD: ["metélőhagyma"],
            ROSSZ_SZOMSZÉD: ["káposzta"]
        },
        SZŐLŐ: {
            JÓ_SZOMSZÉD: ["fokhagyma", "retek", "metélőhagyma", "izsóp"],
            ROSSZ_SZOMSZÉD: ["bokorbab", "borsó", "karfiol", "futóbab", "brokkoli", "kelbimbó", "kelkáposzta", "kínai kel"]
        },
        ÜRÖM: {
            JÓ_SZOMSZÉD: ["káposzta"],
            ROSSZ_SZOMSZÉD: []
        },
        KAPOR: {
            JÓ_SZOMSZÉD: ["cékla", "metélőhagyma", "brokkoli", "kelbimbó", "káposzta", "kelkáposzta", "kínai kel", "borsó",
                "uborka", "saláta", "hagyma", "káposzta", "kukorica", "sárgarépa", "karfiol"],
            ROSSZ_SZOMSZÉD: ["paradicsom", "kömény", "paszternák", "édeskömény"]
        },
        CSICSÓKA: {
            JÓ_SZOMSZÉD: ["burgonya"],
            ROSSZ_SZOMSZÉD: []
        },
        KAMILLA: {
            JÓ_SZOMSZÉD: ["burgonya", "fokhagyma", "hagyma", "káposzta", "póréhagyma", "zeller", "karfiol", "kelbimbó",
                "metélőhagyma", "káposzta", "paszternák"],
            ROSSZ_SZOMSZÉD: ["bazsalikom"]
        },
        MUSTÁR: {
            JÓ_SZOMSZÉD: [],
            ROSSZ_SZOMSZÉD: ["káposzta"]
        },
        ÁNIZS: {
            JÓ_SZOMSZÉD: ["burgonya", "metélőhagyma"],
            ROSSZ_SZOMSZÉD: ["sárgarépa", "bazsalikom"]
        },
        KORIANDER: {
            JÓ_SZOMSZÉD: ["burgonya", "cékla", "káposzta", "uborka"],
            ROSSZ_SZOMSZÉD: ["édeskömény"]
        },
        LEN: {
            JÓ_SZOMSZÉD: ["burgonya"],
            ROSSZ_SZOMSZÉD: []
        },
        CSALÁN: {
            JÓ_SZOMSZÉD: ["burgonya", "paradicsom", "eper"],
            ROSSZ_SZOMSZÉD: []
        },
        FACÉLIA: {
            JÓ_SZOMSZÉD: ["csemegekukorica"],
            ROSSZ_SZOMSZÉD: []
        },
        KÖRTEFA: {
            JÓ_SZOMSZÉD: ["fokhagyma", "torma", "körömvirág", "kerti zsázsa", "sarkantyúka", "menta"],
            ROSSZ_SZOMSZÉD: ["burgonya"]
        },
        DIÓFA: {
            JÓ_SZOMSZÉD: ["torma", "körömvirág"],
            ROSSZ_SZOMSZÉD: ["burgonya", "paprika", "paradicsom"]
        },
        MÁLNA: {
            JÓ_SZOMSZÉD: ["fokhagyma"],
            ROSSZ_SZOMSZÉD: ["burgonya"]
        },
        ALMAFA: {
            JÓ_SZOMSZÉD: ["fokhagyma", "torma", "metélőhagyma", "körömvirág", "kerti zsázsa", "sarkantyúka", "menta"],
            ROSSZ_SZOMSZÉD: ["burgonya"]
        },
        ŐSZIBARACK_FA: {
            JÓ_SZOMSZÉD: ["fokhagyma", "torma", "spárga", "körömvirág", "kerti zsázsa", "sarkantyúka", "menta"],
            ROSSZ_SZOMSZÉD: ["burgonya", "paradicsom"]
        },
        SÁRGABARACK_FA: {
            JÓ_SZOMSZÉD: ["fokhagyma", "torma", "körömvirág", "kerti zsázsa", "sarkantyúka", "menta"],
            ROSSZ_SZOMSZÉD: ["burgonya", "paradicsom", "padlizsán"]
        },
        ARTICSÓKA: {
            JÓ_SZOMSZÉD: ["saláta", "spárga"],
            ROSSZ_SZOMSZÉD: []
        },
        TURBOLYA: {
            JÓ_SZOMSZÉD: ["saláta", "retek", "sárgarépa"],
            ROSSZ_SZOMSZÉD: []
        },
        KAROTTA: {
            JÓ_SZOMSZÉD: ["hagyma"],
            ROSSZ_SZOMSZÉD: []
        },
        MAJORANNA: {
            JÓ_SZOMSZÉD: ["hagyma", "paprika"],
            ROSSZ_SZOMSZÉD: []
        },
        KERTI_RUTA: {
            JÓ_SZOMSZÉD: [],
            ROSSZ_SZOMSZÉD: ["hagyma", "karfiol", "kelbimbó", "kelkáposzta", "bazsalikom", "padlizsán"]
        },
        KERTI_ZSÁZSA: {
            JÓ_SZOMSZÉD: ["retek"],
            ROSSZ_SZOMSZÉD: []
        },
        REBARBARA: {
            JÓ_SZOMSZÉD: ["káposzta"],
            ROSSZ_SZOMSZÉD: []
        },
        OREGÁNÓ: {
            JÓ_SZOMSZÉD: ["paprika", "bazsalikom"],
            ROSSZ_SZOMSZÉD: []
        }
    }

    #plantsMatrix22 = {}

    /*
    Megjegyzések:
    CUKKINI: A cukkini lehet másodvetés is, de semmiképpen se vessük: retek, saláta és dughagyma után!
    FEJES SALÁTA: Vetésforgóban használható, de ne kerüljön gyökérzöldégek helyére!!
    KÖMÉNY: A felsorolt ROSSZ szomszédokon kívül, gyakorlatilag bárhová lehet vetni, ültetni!!
    PATISZON: Másodvetésre is használható, a legjobb a saláta, dughagyma vagy retek után!!
    TÖK: Másodvetésre is használható retek, dughagyma és saláta után!!
    UBORKA: Másodvetésben is használható, retek, burgonya és saláta ágyások után a legkiválóbb!!
    */

    #colors = {
        "x": "maroon", "f": "white", "p": "red", "z": "green", "s": "gray"
    }

    #plantNames = []
    #plantNamesSorted = []

    constructor() {
        for (const [key, value] of Object.entries(this.#plantsMatrix2)) {
            this.#plantNames.push(key.toLowerCase().replace(/_/g, " "))
            for (const [key2, value2] of Object.entries(value)) {
                value2.forEach(n =>
                    this.#plantNames.push(n)
                )
            }
        }
        this.#plantNames.sort()
        this.#plantNamesSorted = new Set(this.#plantNames)
        this.#plantNamesSorted.forEach(item =>
            this.#plantsMatrix22[item] = []
        )
        this.#plantNamesSorted.forEach(
            item => console.log(item)
        )
        this.#plantNamesSorted.forEach(
            n => {
                this.#plantNamesSorted.forEach(
                    m => {
                        if (n == m)
                            console.log(n, m, "x")
                        else if (
                            this.#plantsMatrix2[n.toUpperCase().replace(/ /g, "_")]
                            ["JÓ_SZOMSZÉD"].includes(m)
                        )
                            console.log(n, m, "z")
                        else if (
                            this.#plantsMatrix2[n.toUpperCase().replace(/ /g, "_")]
                            ["ROSSZ_SZOMSZÉD"].includes(m)
                        )
                            console.log(n, m, "p")
                        else console.log(n, m, "s")
                    }
                )
            }
        )
    }
}