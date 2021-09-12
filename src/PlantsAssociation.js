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
        "x": "black", "f": "white", "p": "red", "z": "green"
    }

    getPlantsMatrixLength = () => Object.keys(this.#plantsMatrix).length
    getPlants = () => Object.keys(this.#plantsMatrix)
    getRow = (plantName) => this.#plantsMatrix[plantName]
    getColor = (i) => this.#colors[i]
}