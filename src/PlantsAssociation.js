export default class PlantsAssociation {

    #plantsMatrix = {
        "paradicsom":
            "xzzzppzzzzzzzfffpfppfzzfzfzfzfpffpzfpf",
        "paprika":
            "zxzzpfzfffffzzzzffpffffffpffzfpfffzfpf",
        "tojásgyümölcs":
            "zzxzpfzzffffzzzzfzppfzffffzfzfpfffzfpz",
        "földicseresznye":
            "zzzxpfzzffffzzzzfzppfzffffzfzfpfffzfpz"
    }

    getPlantsMatrixLength = () => this.#plantsMatrix.paradicsom.length
    getPlants = () => Object.keys(this.#plantsMatrix)
    getRow = (plantName) => this.plantsMatrix[plantName]
}