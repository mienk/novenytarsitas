export default class PlantsAssociation {

    constructor() {
        this.plantsMatrix = {
            "paradicsom":
                "xzzzppzzzzzzzfffpfppfzzfzfzfzfpffpzfpf",
            "paprika":
                "zxzzpfzfffffzzzzffpffffffpffzfpfffzfpf",
            "tojásgyümölcs":
                "zzxzpfzzffffzzzzfzppfzffffzfzfpfffzfpz",
            "földicseresznye":
                "zzzxpfzzffffzzzzfzppfzffffzfzfpfffzfpz"
        }
    }

    getPlants = () => Object.keys(this.plantsMatrix)
}