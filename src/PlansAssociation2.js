export default class PlantsAssociation2 {

    #plantsMatrix2 = {
        NÖVÉNY: {
            JÓ_SZOMSZÉD: [],
            ROSSZ_SZOMSZÉD: []
        },
        BOKORBAB: {
            JÓ_SZOMSZÉD: ["eper", "uborka", "tök", "burgonya", "karfiol", "káposztafélék", "retek", "karalábé", "saláták", "zeller",
                "paradicsom", "cékla", "sárgarépa", "spenót", "padlizsán", "cukkíni", "kukorica", "napraforgó", "mángold", "paprika",
                "kelbimbó", "brokkoli", "kínai káposzta", "káposzta", "kelkáposzta", "csemegekukorica", "fekete gyökér", "menta",
                "rozmaring", "csombor", "zsálya", "bazsalikom", "borágó", "büdöske", "sarkantyúvirág", "cickafark"],
            ROSSZ_SZOMSZÉD: ["borsó", "fokhagyma", "hagyma", "póréhagyma", "édeskömény", "mogyoróhagyma", "petrezselyem", "cukorrépa",
                "metélőhagyma", "szőlő"]
        },
        BORSÓ: {
            JÓ_SZOMSZÉD: ["kapor", "uborka", "tök", "káposztafélék", "karalábé", "fejes saláta", "kukorica", "répa", "hónapos retek",
                "cukkíni", "káposzta", "zeller", "spárga", "padlizsán", "spenót", "fehérrépa", "csemegekukorica", "menta", "rozmaring",
                "cickafark"],
            ROSSZ_SZOMSZÉD: ["bokorbab", "burgonya", "fokhagyma", "póréhagyma", "paradicsom", "hagyma", "szőlő", "petrezselyem",
                "metélőhagyma", "kelbimbó", "édeskömény"]
        },
        BURGONYA: {
            JÓ_SZOMSZÉD: ["kései káposztafélék", "karalábé", "kukorica", "torma", "spenót", "saláta", "fokhagyma", "karfiol",
                "káposzta", "brokkoli", "csicsóka", "bokorbab", "póréhagyma", "kínai káposzta", "kelbimbó", "leveles kel", "lóbab",
                "kamilla", "borsmenta", "rozmaring", "len", "ánizs", "koriander", "csalán", "kömény", "sarkantyúka", "büdöske", "petúnia",
                "körömvirág"],
            ROSSZ_SZOMSZÉD: ["borsó", "cékla", "zeller", "körtefa", "napraforgó", "tök", "paradicsom", "uborka", "hagyma", "padlizsán",
                "diófa", "patiszon", "csemegekukorica", "málna", "almafa", "őszi és sárgabarack fa"]
        },
        CÉKLA: {
            JÓ_SZOMSZÉD: ["bokorbab", "kapor", "uborka", "fokhagyma", "káposztafélék", "zeller", "karalábé", "tépősaláta",
                "cukkíni", "hagyma", "karfiol", "káposzta", "saláta", "kelbimbó", "kömény", "koriander", "zsálya"],
            ROSSZ_SZOMSZÉD: ["burgonya", "spárga", "futóbab", "póréhagyma", "kukorica", "spenót", "paradicsom", "sárgarépa"]
        },
        CUKKINI: {
            JÓ_SZOMSZÉD: ["kukorica", "cékla", "karósbab", "hagyma", "borsó", "futóbab", "bokorbab", "káposztafélék", "csemegekukorica",
                "borágó", "sarkantyúka", "petúnia"],
            ROSSZ_SZOMSZÉD: ["paradicsom"]
        },
        FEJES_SALÁTA: {
            JÓ_SZOMSZÉD: ["futóbab", "eper", "uborka", "káposztafélék", "tök", "karalábé", "borsó", "póréhagyma", "retek", "sárgarépa", "cékla", "paradicsom", "hagyma", "mángold", "cukorrépa", "mogyoróhagyma", "fehérrépa", "karfiol", "fokhagyma", "patiszon", "burgonya", "kelbimbó", "bokorbab", "articsóka", "metélőhagyma", "kelkáposzta", "káposzta", "brokkoli", "édes kömény", "fekete gyökér", "rozmaring", "turbolya", "zsálya", "borsmenta", "kapor", "büdöske (bársonyvirág)"],
            ROSSZ_SZOMSZÉD: ["petrezselyem", "zeller", "lóbab", "napraforgó", "kukorica"]
        },
        FOKHAGYMA: {
            JÓ_SZOMSZÉD: ["eper", "uborka", "cékla", "sárgarépa", "paradicsom", "burgonya", "zeller", "padlizsán", "retek", "kelbimbó", "brokkoli", "saláta", "cukorrépa", "karfiol", "paprika", "kínai káposzta", "kelkáposzta", "rozmaring", "kamilla", "liliom", "tulipán", "rózsa", "málna", "szőlő", "gyümölcsfák (körtefa", "almafa", "őszbarack fa", "sárgabarack fa)"],
            ROSSZ_SZOMSZÉD: ["borsó", "káposztafélék", "karósbab", "futóbab", "spárga", "bokorbab", "leveles kel", "fehérrépa", "káposzta"]
        },
        HAGYMA: {
            JÓ_SZOMSZÉD: ["eper", "uborka", "fejes saláta", "sárgarépa", "cékla", "paradicsom", "paprika", "mángold", "cukkíni", "spenót", "tök", "kelkáposzta", "zeller", "póréhagyma", "brokkoli", "karotta", "karfiol", "kelbimbó", "pasztinák", "cukorrépa", "kapor", "édeskömény", "kamilla", "borsikafű (csombor)", "bazsalikom", "majoránna", "petrezselyem", "rózsa"],
            ROSSZ_SZOMSZÉD: ["bokorbab", "káposztafélék", "leveles kel", "burgonya", "káposzta", "spárga", "retek", "karalábé", "borsó futóbab", "kerti ruta", "zsálya"]
        },
        HÓNAPOS_RETEK: {
            JÓ_SZOMSZÉD: ["bokorbab", "borsó", "karalábé", "fejes saláta", "mángold", "sárgarépa", "spenót", "paradicsom", "fokhagyma", "futóbab", "paszternák", "eper", "tök", "cukorrépa", "zeller", "brokkoli", "karfiol", "dinnye", "póréhagyma", "fekete gyökér", "menta", "kerti zsázsa", "turbolya", "zsálya", "petrezselyem", "sarkantyúvirág", "szőlő"],
            ROSSZ_SZOMSZÉD: ["uborka", "hagyma", "patiszon", "káposzta", "kelkáposzta", "izsóp"]
        },
        KÁPOSZTA_FÉLÉK: {
            JÓ_SZOMSZÉD: ["bokorbab", "endívia", "borsó", "burgonya", "saláta", "mángold", "tök", "cékla", "zeller", "spenót", "paradicsom", "dinnye", "sárgarépa", "uborka", "brokkoli", "cukkíni", "futóbab", "rebarbara", "kapor", "üröm", "borágó", "kamilla", "kakukkfű", "zsálya", "bazsalikom", "menta", "koriander", "rozmaring", "borsikafű (csombor)", "sarkantyúvirág", "cickafark"],
            ROSSZ_SZOMSZÉD: ["eper", "mustár", "fokhagyma", "hagyma", "petrezselyem"]
        },
        KARALÁBÉ: {
            JÓ_SZOMSZÉD: ["bokorbab", "borsó", "burgonya", "retek", "cékla", "fejes saláta", "zeller", "spenót", "póréhagyma", "borágó", "bazsalikom", "rozmaring"],
            ROSSZ_SZOMSZÉD: ["paprika", "paradicsom", "hagyma", "futóbab", "édes kömény"]
        },
        KUKORICA: {
            JÓ_SZOMSZÉD: ["bokorbab", "uborka", "burgonya", "sütőtök dinnye", "paradicsom", "cukkíni", "patiszon", "napraforgó", "borsó", "futóbab", "spenót", "tök", "kapor", "muskátli", "facélia"],
            ROSSZ_SZOMSZÉD: ["cékla", "zeller", "saláta", "sárgarépa", "menta", "rozmaring"]
        },
        NAPRAFORGÓ: {
            JÓ_SZOMSZÉD: ["uborka", "tök", "kukorica", "bokorbab", "futóbab", "csemegekukorica", "cickafark"],
            ROSSZ_SZOMSZÉD: ["burgonya", "saláta"]
        },
        PARADICSOM: {
            JÓ_SZOMSZÉD: ["zeller", "fokhagyma", "bokorbab", "padlizsán", "póréhagyma", "retek", "káposztafélék", "spenót", "hagyma", "fejes saláta", "sárgarépa", "paprika", "metélőhagyma", "spárga", "kelkáposzta", "brokkoli", "tépősaláta", "zsálya", "bazsalikom", "borágó", "menta", "citromfű", "rozmaring", "csalán", "petrezselyem", "büdöske", "petúnia", "sarkantyúvirág", "körömvirág", "rézvirág"],
            ROSSZ_SZOMSZÉD: ["borsó", "burgonya", "cukorrépa", "uborka", "futóbab", "cékla", "cukkíni", "karfiol", "kelbimbó", "karalábé", "kapor", "kömény", "édeskömény", "diófa", "őszi és sárgabarack fa"]
        },
        PÓRÉHAGYMA: {
            JÓ_SZOMSZÉD: ["eper", "hagyma", "retek karalábé", "fejes saláta", "sárgarépa", "zeller", "paradicsom", "spárga", "spenót", "endívia", "burgonya", "fekete gyökér", "kamilla", "petrezselyem", "édes kömény"],
            ROSSZ_SZOMSZÉD: ["bokorbab", "borsó", "cékla", "káposzta"]
        },
        SÁRGARÉPA: {
            JÓ_SZOMSZÉD: ["borsó", "retek", "spárga fokhagyma", "mángold", "póréhagyma", "uborka", "metélőhagyma", "saláta", "paprika", "mogyoróhagyma", "paradicsom", "hagymák", "bokorbab káposztafélék", "bokorbab", "rozmaring", "zsálya", "menta", "turbolya", "petrezselyem", "kapor"],
            ROSSZ_SZOMSZÉD: ["cékla", "cukorrépa", "zeller", "kukorica", "csemegekukorica", "kömény", "ánizs", "kapor"]
        },
        SPENÓT: {
            JÓ_SZOMSZÉD: ["eper", "burgonya", "zeller káposztafélék", "borsó", "karalábé", "retek", "karósbab", "padlizsán paradicsom", "hagyma", "póréhagyma", "karfiol", "bokorbab", "kukorica", "csemegekukorica", "káposzta"],
            ROSSZ_SZOMSZÉD: ["cukorrépa", "cékla"]
        },
        PATISZON: {
            JÓ_SZOMSZÉD: ["saláta", "kukorica", "dinnye", "csemegekukorica", "lóbab", "bazsalikom", "sarkantyúvirág", "petúnia"],
            ROSSZ_SZOMSZÉD: ["burgonya", "retek"]
        },
        EPER: {
            JÓ_SZOMSZÉD: ["bokorbab", "futóbab", "fokhagyma", "fejes saláta", "póréhagyma", "hónapos retek", "spenót", "hagyma", "metélőhagyma", "borágó", "zsálya", "körömvirág", "csalán"],
            ROSSZ_SZOMSZÉD: ["káposztafélék", "brokkoli", "karfiol", "kelbimbó", "káposzta"]
        },
        TORMA: {
            JÓ_SZOMSZÉD: ["burgonya", "gyümölcsfák (körtefa", "almafa", "diófa", "őszibarack fa", "sárgabarack fa)"]
        },
        UBORKA: {
            JÓ_SZOMSZÉD: ["káposztafélék", "cékla", "napraforgó", "zeller", "bokorbab", "saláta", "kukorica", "hagyma", "sárgarépa", "borsó", "brokkoli", "karfiol", "leveles kel", "futóbab", "fokhagyma", "metélőhagyma", "csemegekukorica", "káposzta", "kapor", "bazsalikom", "koriander", "borsikafű (csombor)", "édeskömény", "kömény", "rozmaring", "büdöske", "sarkantyúvirág", "petúnia"],
            ROSSZ_SZOMSZÉD: ["paradicsom", "burgonya", "dinnye", "retek", "zsálya", "izsóp"]
        },
        ZELLER: {
            JÓ_SZOMSZÉD: ["káposztafélék", "cékla", "karalábé", "fokhagyma", "uborka", "bokorbab", "spenót", "póréhagyma", "borsó", "paradicsom", "retek", "kínai káposzta", "karfiol", "káposzta", "kelbimbó", "hagyma", "édeskömény", "kamilla", "sarkantyúvirág"],
            ROSSZ_SZOMSZÉD: ["saláta", "burgonya", "kukorica", "petrezselyem", "sárgarépa"]
        },
        CUKORRÉPA: {
            JÓ_SZOMSZÉD: ["zeller", "káposzta", "saláta", "hagyma", "retek", "fokhagyma", "cickafark"],
            ROSSZ_SZOMSZÉD: ["bokorbab", "spenót", "spárga", "sárgarépa", "paradicsom"]
        },
        TÖK: {
            JÓ_SZOMSZÉD: ["bokorbab", "saláta", "hagyma", "borsó", "csemegekukorica", "kukorica", "napraforgó", "dinnye", "retek", "káposztafélék", "menta", "borágó", "rozmaring", "sarkantyúvirág", "petúnia"],
            ROSSZ_SZOMSZÉD: ["burgonya"]
        },
        PAPRIKA: {
            JÓ_SZOMSZÉD: ["padlizsán", "hagyma", "paradicsom", "sárgarépa", "fokhagyma", "bokorbab", "oregánó", "majoránna", "bazsalikom", "rézvirág", "büdöske", "muskátli"],
            ROSSZ_SZOMSZÉD: ["karalábé", "édeskömény", "diófa"]
        },
        PADLIZSÁN: {
            JÓ_SZOMSZÉD: ["paprika", "bokorbab", "borsó", "paradicsom", "spenót", "fokhagyma", "futóbab", "kakukkfű", "tárkony", "menta", "petrezselyem", "büdöske"],
            ROSSZ_SZOMSZÉD: ["burgonya", "sárgabarack fa", "kerti ruta"]
        },
        KARFIOL: {
            JÓ_SZOMSZÉD: ["bokorbab", "cékla", "burgonya", "zeller", "hagyma", "fokhagyma", "retek", "spenót", "uborka", "saláta", "kapor", "rozmaring", "izsóp", "kakukkfű", "kamilla", "menta", "bazsalikom", "zsálya", "büdöske", "sarkantyúvirág"],
            ROSSZ_SZOMSZÉD: ["paradicsom", "eper", "szőlő", "kerti ruta"]
        },
        DINNYE: {
            JÓ_SZOMSZÉD: ["káposztafélék", "tök", "kukorica", "retek", "patiszon", "csemegekukorica", "sarkantyúvirág", "petúnia", "büdöske"],
            ROSSZ_SZOMSZÉD: ["uborka"]
        },
        FUTÓBAB_karósbab: {
            JÓ_SZOMSZÉD: ["káposztafélék", "retek", "kukorica", "sárgarépa", "spenót", "endívia", "eper", "brokkoli", "uborka", "kínai káposzta", "káposzta", "burgonya", "csemegekukorica", "saláta", "padlizsán", "cukkíni", "napraforgó", "rozmaring", "bazsalikom", "borsfű", "borágó", "menta", "sarkantyúvirág", "büdöske", "szagos bükköny", "petúnia", "rézvirág"],
            ROSSZ_SZOMSZÉD: ["mogyoróhagyma", "fokhagyma", "édeskömény", "paradicsom", "szőlő", "karalábé", "hagyma", "cékla", "petrezselyem"]
        },
        SPÁRGA: {
            JÓ_SZOMSZÉD: ["sárgarépa", "paradicsom", "articsóka", "borsó", "póréhagyma", "édeskömény", "petrezselyem", "bazsalikom", "őszibarack fa", "petúnia"],
            ROSSZ_SZOMSZÉD: ["fokhagyma", "cukorrépa", "hagyma", "cékla"]
        },
        BROKKOLI: {
            JÓ_SZOMSZÉD: ["paradicsom", "retek", "káposztafélék", "saláta", "uborka", "bokorbab", "burgonya", "fokhagyma", "hagyma", "futóbab", "rozmaring", "kapor", "kakukkfű", "zsálya", "bazsalikom", "menta", "izsóp", "büdöske", "sarkantyúvirág"],
            ROSSZ_SZOMSZÉD: ["eper", "szőlő"]
        },
        KELBIMBÓ: {
            JÓ_SZOMSZÉD: ["fehérrépa", "cékla", "fokhagyma", "zeller", "bokorbab", "saláta", "burgonya", "hagyma", "kapor", "kamilla", "rozmaring", "izsóp", "bazsalikom", "menta", "kakukkfű", "zsálya", "sarkantyúvirág"],
            ROSSZ_SZOMSZÉD: ["paradicsom", "borsó", "kerti ruta", "szőlő", "eper"]
        },
        METÉLŐHAGYMA: {
            JÓ_SZOMSZÉD: ["sárgarépa", "eper", "uborka", "paradicsom", "saláta", "cikória", "kamilla", "kapor", "borsikafű (csombor)", "ánizs", "bazsalikom", "rózsa", "szőlő", "almafa"],
            ROSSZ_SZOMSZÉD: ["bokorbab", "borsó"]
        },
        PETREZSELYEM: {
            JÓ_SZOMSZÉD: ["póréhagyma", "retek", "paradicsom", "spárga", "hagyma", "padlizsán", "sárgarépa", "rozmaring", "büdöske", "rózsa"],
            ROSSZ_SZOMSZÉD: ["káposztafélék", "zeller", "bokorbab", "saláta", "futóbab", "káposzta", "borsó ", "menta"]
        },
        KÁPOSZTA: {
            JÓ_SZOMSZÉD: ["burgonya", "spenót", "futóbab", "zeller", "cékla", "cukorrépa", "uborka", "bokorbab", "saláta", "fehérrépa", "borsó", "fekete gyökér", "mángold", "rozmaring", "kapor", "kakukkfű", "menta", "zsálya", "borágó", "bazsalikom", "izsóp", "kamilla", "üröm", "sarkantyúvirág", "büdöske"],
            ROSSZ_SZOMSZÉD: ["mogyoróhagyma", "eper", "fokhagyma", "póréhagyma", "retek", "hagyma", "petrezselyem", "édeskömény", "cikória", "szőlő"]
        },
        LEVELES_KEL_KELKÁPOSZTA: {
            JÓ_SZOMSZÉD: ["bokorbab", "uborka", "saláta", "burgonya", "paradicsom", "fokhagyma", "hagyma", "bazsalikom", "izsóp", "kapor", "menta", "rozmaring", "zsálya", "kakukkfű", "büdöske", "sarkantyúvirág"],
            ROSSZ_SZOMSZÉD: ["fokhagyma", "hagyma", "szőlő", "kerti ruta", "retek"]
        },
        FEHÉR_RÉPA: {
            JÓ_SZOMSZÉD: ["kelbimbó", "borsó", "káposzta", "saláta", "rozmaring", "menta"],
            ROSSZ_SZOMSZÉD: ["fokhagyma"]
        },
        KINAI_KÁPOSZTA: {
            JÓ_SZOMSZÉD: ["bokorbab", "fokhagyma", "zeller", "burgonya", "futóbab", "rozmaring", "kapor", "borsikafű", "menta", "kakukkfű", "zsálya", "sarkantyúvirág"],
            ROSSZ_SZOMSZÉD: ["szőlő"]
        },
        KÖMÉNY: {
            JÓ_SZOMSZÉD: ["cékla", "uborka", "édeskömény", "A felsorolt ROSSZ_SZOMSZÉDokon kívül", "gyakorlatilag bárhová lehet vetni", "ültetni!!"],
            ROSSZ_SZOMSZÉD: ["paradicsom", "sárgarépa", "kapor"]
        },
        MÁNGOLD: {
            JÓ_SZOMSZÉD: ["hagyma", "bokorbab", "káposztafélék", "retek", "sárgarépa", "saláta", "káposzta", "cickafark"],
            ROSSZ_SZOMSZÉD: ["Nem ismert"]
        },
        TÉPŐSALÁTA: {
            JÓ_SZOMSZÉD: ["paradicsom", "cékla"],
            ROSSZ_SZOMSZÉD: ["Nem ismert"]
        },
        PASZTINÁK: {
            JÓ_SZOMSZÉD: ["retek", "hagyma", "lóbab", "kamilla"],
            ROSSZ_SZOMSZÉD: ["kapor"]
        },
        ENDIVIA: {
            JÓ_SZOMSZÉD: ["káposztafélék", "futóbab", "póréhagyma", "édes kömény"],
            ROSSZ_SZOMSZÉD: ["Nem ismert"]
        },
        CSEMEGEKUKORICA: {
            JÓ_SZOMSZÉD: ["uborka", "borsó", "futóbab", "bokorbab", "spenót", "tök", "cukkíni", "patiszon", "napraforgó", "dinnye", "facélia", "kapor", "muskátli"],
            ROSSZ_SZOMSZÉD: ["saláta", "sárgarépa", "burgonya", "zeller", "menta", "rozmaring"]
        },
        ÉDESKÖMÉNY: {
            JÓ_SZOMSZÉD: ["saláta", "uborka", "endívia", "póréhagyma", "hagyma", "zeller", "spárga", "zsálya", "kapor", "kömény", "cickafark"],
            ROSSZ_SZOMSZÉD: ["paradicsom", "kapor", "borsó", "káposzta", "karalábé", "futó-és bokorbab", "paradicsom", "paprika", "koriander"]
        },
        FEKETE_GYÖKÉR: {
            JÓ_SZOMSZÉD: ["retek", "káposzta", "saláta", "póréhagyma", "bokorbab"]
        },
        LÓBAB: {
            JÓ_SZOMSZÉD: ["pasztinák", "burgonya", "rézvirág", "cickafark"],
            ROSSZ_SZOMSZÉD: ["fejes saláta"]
        },
        BAZSALIKOM: {
            JÓ_SZOMSZÉD: ["kelbimbó", "futóbab", "bokorbab", "hagyma", "káposztafélék", "patiszon", "brokkoli", "káposzta", "karfiol", "leveles kel", "paprika", "paradicsom", "karalábé", "metélőhagyma", "uborka", "spárga", "oregánó", "büdöske", "petúnia"],
            ROSSZ_SZOMSZÉD: ["kerti ruta", "rozmaring", "kamilla", "ánizs"]
        },
        BORÁGÓ: {
            JÓ_SZOMSZÉD: ["bokorbab", "káposztafélék", "cukkíni", "tök", "eper", "paradicsom", "káposzta", "karalábé", "futóbab", "cickafarok"]
        },
        MENTA: {
            JÓ_SZOMSZÉD: ["futóbab", "káposzta", "fehérrépa", "kelbimbó", "padlizsán", "brokkoli", "bokorbab", "borsó", "burgonya", "saláta", "retek", "káposztafélék", "sárgarépa", "tök", "kínai káposzta", "leveles kel karfiol", "paradicsom", "gyümölcsfák"],
            ROSSZ_SZOMSZÉD: ["petrezselyem", "kukorica", "csemegekukorica"]
        },
        IZSÓP: {
            JÓ_SZOMSZÉD: ["brokkoli", "kelbimbó", "káposzta", "karfiol", "kínai káposzta", "kelkáposzta", "szőlő"],
            ROSSZ_SZOMSZÉD: ["retek", "uborka"]
        },
        ROZMARING: {
            JÓ_SZOMSZÉD: ["bab", "fokhagyma", "tök", "káposztafélék", "saláta uborka", "karalábé", "sárgarépa", "petrezselyem", "fehérrépa", "kelbimbó", "káposzta", "kelkáposzta", "brokkoli", "kínai káposzta", "futóbab", "bokorbab", "borsó", "burgonya", "paradicsom", "karfiol", "cickafark"],
            ROSSZ_SZOMSZÉD: ["bazsalikom", "kukorica", "csemegekukorica"]
        },
        CSOMBOR_borsikafű: {
            JÓ_SZOMSZÉD: ["bokorbab", "futóbab", "kínai káposzta", "hagyma", "káposztafélék", "uborka", "metélőhagyma"]
        },
        ZSÁLYA: {
            JÓ_SZOMSZÉD: ["édeskömény", "karfiol", "brokkoli", "kelbimbó", "káposzta", "kelkáposzta", "kínai káposzta", "bokorbab", "cékla", "saláta", "retek", "káposztafélék", "paradicsom", "sárgarépa", "eper"],
            ROSSZ_SZOMSZÉD: ["hagyma", "uborka"]
        },
        CITROMFŰ: {
            JÓ_SZOMSZÉD: ["paradicsom"]
        },
        TÁRKONY: {
            JÓ_SZOMSZÉD: ["padlizsán"]
        },
        MOGYORÓHAGYMA: {
            JÓ_SZOMSZÉD: ["saláta", "sárgarépa"],
            ROSSZ_SZOMSZÉD: ["bokorbab", "futóbab", "káposzta"]
        },
        KAKUKKFŰ: {
            JÓ_SZOMSZÉD: ["káposztafélék", "padlizsán", "karfiol", "brokkoli", "kelbimbó", "káposzta", "kelkáposzta", "kínai káposzta"]
        },
        CIKÓRIA: {
            JÓ_SZOMSZÉD: ["metélőhagyma"],
            ROSSZ_SZOMSZÉD: ["káposzta"]
        },
        SZŐLŐ: {
            JÓ_SZOMSZÉD: ["fokhagyma", "retek", "metélőhagyma", "izsóp"],
            ROSSZ_SZOMSZÉD: ["bokorbab", "borsó", "karfiol", "futóbab", "brokkoli", "kelbimbó", "kelkáposzta", "kínai káposzta"]
        },
        ÜRÖM: {
            JÓ_SZOMSZÉD: ["káposzta és káposztafélék"]
        },
        KAPOR: {
            JÓ_SZOMSZÉD: ["cékla", "metélőhagyma", "brokkoli", "kelbimbó", "káposzta", "kelkáposzta", "kínai káposzta", "borsó", "uborka", "saláta", "hagyma", "káposztafélék", "kukorica", "sárgarépa", "karfiol"],
            ROSSZ_SZOMSZÉD: ["paradicsom", "kömény", "pasztinák", "édes kömény"]
        },
        CSICSÓKA: {
            JÓ_SZOMSZÉD: ["burgonya"]
        },
        KAMILLA: {
            JÓ_SZOMSZÉD: ["burgonya", "fokhagyma", "hagyma", "káposztafélék", "póréhagyma", "zeller", "karfiol", "kelbimbó", "metélőhagyma", "káposzta", "pasztinák"],
            ROSSZ_SZOMSZÉD: ["bazsalikom"]
        },
        MUSTÁR: {
            ROSSZ_SZOMSZÉD: ["káposztafélék"]
        },
        ÁNIZS: {
            JÓ_SZOMSZÉD: ["burgonya", "metélőhagyma"],
            ROSSZ_SZOMSZÉD: ["sárgarépa", "bazsalikom"]
        },
        KORIANDER: {
            JÓ_SZOMSZÉD: ["burgonya", "cékla", "káposztafélék", "uborka"],
            ROSSZ_SZOMSZÉD: ["édes kömény"]
        },
        LEN: {
            JÓ_SZOMSZÉD: ["burgonya"]
        },
        CSALÁN: {
            JÓ_SZOMSZÉD: ["burgonya", "paradicsom", "eper"]
        },
        FACÉLIA: {
            JÓ_SZOMSZÉD: ["csemegekukorica"]
        },
        KÖRTEFA: {
            JÓ_SZOMSZÉD: ["fokhagyma", "torma", "körömvirág", "kerti zsázsa", "sarkantyúvirág", "menta"],
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
            JÓ_SZOMSZÉD: ["fokhagyma", "torma", "metélőhagyma", "körömvirág", "kerti zsázsa", "sarkantyúvirág", "menta"],
            ROSSZ_SZOMSZÉD: ["burgonya"]
        },
        ŐSZIBARACK_FA: {
            JÓ_SZOMSZÉD: ["fokhagyma", "torma", "spárga", "körömvirág", "kerti zsázsa", "sarkantyúvirág", "menta"],
            ROSSZ_SZOMSZÉD: ["burgonya", "paradicsom"]
        },
        SÁRGABARACK_FA: {
            JÓ_SZOMSZÉD: ["fokhagyma", "torma", "körömvirág", "kerti zsázsa", "sarkantyúvirág", "menta"],
            ROSSZ_SZOMSZÉD: ["burgonya", "paradicsom", "padlizsán"]
        },
        ARTICSÓKA: {
            JÓ_SZOMSZÉD: ["saláta", "spárga"]
        },
        TURBOLYA: {
            JÓ_SZOMSZÉD: ["saláta", "retek", "sárgarépa"]
        },
        KAROTTA: {
            JÓ_SZOMSZÉD: ["hagyma"]
        },
        MAJORANNA: {
            JÓ_SZOMSZÉD: ["hagyma", "paprika"]
        },
        KERTI_RUTA: {
            ROSSZ_SZOMSZÉD: ["hagyma", "karfiol", "kelbimbó", "kelkáposzta", "bazsalikom", "padlizsán"]
        },
        KERTI_ZSÁZSA: {
            JÓ_SZOMSZÉD: ["retek", "gyümölcsfák"]
        },
        REBARBARA: {
            JÓ_SZOMSZÉD: ["káposztafélék"]
        },
        OREGÁNÓ: {
            JÓ_SZOMSZÉD: ["paprika", "bazsalikom"]
        }
    }

    #colors = {
        "x": "maroon", "f": "white", "p": "red", "z": "green", "g": "gray"
    }
}