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
            "zfffpfffxzzpzffzfffffffffffffffffpffff"
    }

    #colors = {
        "x": "black", "f": "white", "p": "red", "z": "green"
    }

    getPlantsMatrixLength = () => Object.keys(this.#plantsMatrix).length
    getPlants = () => Object.keys(this.#plantsMatrix)
    getRow = (plantName) => this.#plantsMatrix[plantName]
    getColor = (i) => this.#colors[i]
}