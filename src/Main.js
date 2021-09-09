import PlantsAssociation from './PlantsAssociation.js'

export default class Main {

    constructor() {
        this.plantsAssociation = new PlantsAssociation()
        this.view()
        this.draw()
    }

    view = () => {
        let plants = this.plantsAssociation.getPlants()
        let matrix = document.getElementById("matrix")
        plants.forEach(
            (plant) => {
                matrix.innerHTML += plant + "<br/>"
            }
        )
    }

    draw = () => {
        let matrixDraw = document.getElementsByTagName("canvas")[0]
        window.context = matrixDraw.getContext("2d")
        matrixDraw.width = this.plantsAssociation.getPlantsMatrixLength() * 10
        matrixDraw.height = this.plantsAssociation.getPlantsMatrixLength() * 10
        context.fillStyle = "lightgray"
        context.fillRect(0, 0, matrixDraw.width, matrixDraw.height)
    }
}