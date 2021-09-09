import PlantsAssociation from './PlantsAssociation.js'

export default class Main {

    constructor() {
        this.plantsAssociation = new PlantsAssociation()
        this.plants = this.plantsAssociation.getPlants()
        //this.view()
        this.draw()
    }

    // view = () => {
    //     let matrix = document.getElementById("matrix")
    //     this.plants.forEach(
    //         (plant) => {
    //             matrix.innerHTML += plant + "<br/>"
    //         }
    //     )
    // }

    draw = () => {
        let matrixDraw = document.getElementsByTagName("canvas")[0]
        window.context = matrixDraw.getContext("2d")
        matrixDraw.width = this.plantsAssociation.getPlantsMatrixLength() * 10 + 300
        matrixDraw.height = this.plantsAssociation.getPlantsMatrixLength() * 22 + 10 + 250
        context.fillStyle = "#f0f0f0"
        context.fillRect(0, 0, matrixDraw.width, matrixDraw.height)
        context.font = '16px Arial'
        context.fillStyle = 'black'
        let y = 250
        this.plants.forEach(
            (plant) => {
                context.fillText(plant, 10, y += 22)
                this.plantsAssociation.getRow(plant).split('').forEach(
                    (colorSign) => {
                        console.log(this.plantsAssociation.getColor(colorSign))
                    }
                )
            }
        )
    }
}