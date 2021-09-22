import PlantsAssociation1 from '/src/PlantsAssociation1.js'
import PlantsAssociation2 from '/src/PlantsAssociation2.js'

export default class Main {

    constructor() {
        this.plantsAssociation1 = new PlantsAssociation1()
        this.plantsAssociation2 = new PlantsAssociation2()
        this.draw(this.plantsAssociation2)
        //this.compatibility = (plant1, plant2) => this.plantsAssociation.getCompatibility(plant1, plant2)
        //example:
        //console.log(this.compatibility("paradicsom", "paprika"))
    }

    draw = (plantsAssociation) => {
        let plants = plantsAssociation.getPlants()
        let textArea = 130
        let x = textArea
        let y = textArea
        let textMargin = 10
        let lineSpacing = 22
        let edge = lineSpacing

        let matrixDraw = document.getElementsByTagName("canvas")[0]
        window.context = matrixDraw.getContext("2d")
        context.strokeStyle = "black"
        matrixDraw.width = textArea + textMargin + plantsAssociation.getPlantsMatrixLength() * lineSpacing
        matrixDraw.height = matrixDraw.width
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

        plants.forEach(
            plant => {
                context.fillText(plant, textMargin, y + 17)
                context.rotate(-Math.PI/2)
                context.fillText(plant, textMargin - textArea, y + 15)
                context.rotate(Math.PI/2)
                console.log(plantsAssociation.getRow(plant))
                plantsAssociation.getRow(plant).split('').forEach(
                    colorSign => {
                        square(x, y, plantsAssociation.getColor(colorSign))
                        x += lineSpacing
                    }
                )
                x = textArea
                y += lineSpacing
            }
        )
    }
}