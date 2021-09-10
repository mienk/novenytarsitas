import PlantsAssociation from './PlantsAssociation.js'

export default class Main {

    constructor() {
        this.plantsAssociation = new PlantsAssociation()
        this.plants = this.plantsAssociation.getPlants()
        this.draw()
    }

    draw = () => {
        let edge = 22
        let matrixDraw = document.getElementsByTagName("canvas")[0]
        window.context = matrixDraw.getContext("2d")
        context.strokeStyle = "black"
        matrixDraw.width = this.plantsAssociation.getPlantsMatrixLength() * 10 + 910
        matrixDraw.height = this.plantsAssociation.getPlantsMatrixLength() * 22 + 20
        context.fillStyle = "#f0f0f0"
        context.fillRect(0, 0, matrixDraw.width, matrixDraw.height)
        context.font = '16px Arial'
        context.fillStyle = 'black'

        let square = (x, y, color) => {
            context.strokeRect(x, y, edge, edge)
            context.fillStyle = color
            context.fillRect(x, y, edge, edge)
            context.fillStyle = "black"
        }

        let x = 150
        let y = 10
        this.plants.forEach(
            (plant) => {
                context.fillText(plant, 10, y + 17)
                this.plantsAssociation.getRow(plant).split('').forEach(
                    (colorSign) => {
                        square(x, y, this.plantsAssociation.getColor(colorSign))
                        x += 22
                    }
                )
                x = 150
                y += 22
            }
        )
    }
}