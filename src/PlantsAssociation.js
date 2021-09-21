export default class PlantsAssociation {

    #plantsMatrix = {
        "paradicsom":
            "xzzzppzzzzzzzfffpfppfzzfzfzfzfpffpzfpf",
        "paprika":
            "zxzzpfzfffffzzzzffpffffffpffzfpfffzfpf",
        "tojásgyümölcs":
            "zzxzpfzzffffzzzzfzppfzffffzfzfpfffzfpz",
        "földicseresznye":
            "zzzxpfzzffffzzzzfzppfzffffzfzfpfffzfpz",
        "burgonya":
            "ppppxpffpffppfzzpzfppzzzzzzfzfpppzzffz",
        "cékla":
            "pfffpxpffffzzfzzfzfzfzfzzzzfpffffzzfzz",
        "sárgarépa":
            "zzzzfpxzfzzpzzzzzzfzfzzfzfzffzffpfzfff",
        "petrezselyem":
            "zfzzffzxfzzpzfpfpffffpffffpfffffffffff",
        "paszternák":
            "zfffpfffxzzpzffzfffffffffffffffffpffff",
        "retek":
            "zfffffzzzxpzpfzzzzfpfpffpfzfzzffffzfff",
        "tarlórépa":
            "zfffffzzzpxzppzzzzfpfpffpfzfzzffffzfff",
        "zeller":
            "zfffpzpppzzxzzzzzzfzfzfzfzpzzfffpfffzf",
        "hagyma":
            "zzzzpzzzzppzxfppppfzzpfffpzffzpfffzzzf",
        "fokhagyma":
            "fzzzffzfffpzfxppppfzfpfffffzfzpfffffff",
        "bab":
            "fzzzzzzpfzzzppxfpfzzzzzzzzzzzzpzzfzzpf",
        "lóbab":
            "fzzzzzzfzzzzppfxpfzzzzzzzzpzzzpzzfzzff",
        "borsó":
            "pfffpfzpfzzzppppxfzzzzfffzzfzzpzzzzzpf",
        "szója":
            "ffzzzzzffzzzppfffxzzzzzzzzzfzfpzzfzzff",
        "dinnye":
            "pppppfffffffffzzzzxppfffffffffzzzfzfff",
        "uborka":
            "pfpppzzffppzzzzzzzpxpzzzzfzfffzzzzzzzz",
        "tök":
            "ffffpfffffffzfzzzzppxfffffzfffzzzfzfff",
        "káposzták":
            "zfzzzzzpfppzppzzzzfzfxppppzpzzzffzzzpz",
        "brokkoli":
            "zfffzfzfffffffzzfzfzfpxpppzpzzzffzzzfz",
        "karfiol":
            "ffffzzfffffzffzzfzfzfppxppzpzzzffzzzfz",
        "leveles kel":
            "zfffzzzffppfffzzfzfzfpppxpzpzzzffzzzfz",
        "karalábé":
            "fpffzzfffffzpfzzzzfffppppxzpzzzffzzzpz",
        "saláta":
            "zfzzzzzpfzzpzfzpzzfzzzzzzzxffzzzpzzfzf",
        "ázsiai saláta":
            "fffffffffffzfzzzfffffpppppfxfzzzfzzzff",
        "spenót":
            "zzzzzpfffzzzffzzzzfffzzzzzffxfzzzfzfff",
        "mángold":
            "ffffffzffzzfzzzzzffffzzzzzzzfxzzffzfff",
        "földimogyoró":
            "pppppfffffffppppppzzzzzzzzzzzzxpzfzzff",
        "földimandula":
            "ffffpfffffffffzzzzzzzfffffzzzzpxffzzfz",
        "kukorica":
            "ffffpfpffffpffzzzzzzzfffffpfzfzfxzzfff",
        "kapor":
            "pfffzzffpfffffffzffzfzzzzzzzffffzxffpp",
        "bazsalikom":
            "zzzzzzzffzzfzfzzzzzzzzzzzzzzzzzzzfxfff",
        "borsikafű":
            "ffffffffffffzfzzzzfzfzzzzzfzffzzfffxff",
        "édeskömény":
            "ppppfzfffffzzfpfpffzfpfffpzffffffpffxp",
        "koriander":
            "ffzzzzfffffffffffffzfzzzzzfffffzfpffpx"
    }

    #colors = {
        "x": "maroon", "f": "white", "p": "red", "z": "green"
    }

    getPlantsMatrixLength = () => Object.keys(this.#plantsMatrix).length
    getPlants = () => Object.keys(this.#plantsMatrix)
    getRow = (plantName) => this.#plantsMatrix[plantName]
    getColor = (i) => this.#colors[i]
    getCompatibility = (plant1, plant2) =>
        this.getColor( // 5. a plant2 indexének birtokában megkeressük a jelhez tartozó szín nevét
            this.getRow(plant1) // 1. kikeressük a plant1-hez tartozó sort, ami egy tömb (array)
            [ // 2. ide várjunk a tömb egy indexét, amivel kiválasztjuk az összeférhetőség (kompatibilitás) jelét (x, f, p, z),
            this.getPlants() // 3. ehhez lekérdezzük, milyen növények vannak, ezek közül kikeressük...
                .indexOf(plant2) // 4. ... a plant2 indexét
            ]
        )
}