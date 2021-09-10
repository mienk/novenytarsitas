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
        let edge = 22
        let matrixDraw = document.getElementsByTagName("canvas")[0]
        window.context = matrixDraw.getContext("2d")
        context.strokeStyle = "black"
        context.strokeWidth = 1
        matrixDraw.width = this.plantsAssociation.getPlantsMatrixLength() * 10 + 910
        matrixDraw.height = this.plantsAssociation.getPlantsMatrixLength() * 22 + 20
        context.fillStyle = "#f0f0f0"
        context.fillRect(0, 0, matrixDraw.width, matrixDraw.height)
        context.font = '16px Arial'
        context.fillStyle = 'black'

        let square = (x, y, color) => {
            context.beginPath()
            context.moveTo(x, y)
            context.lineTo(x + edge, y)
            context.lineTo(x + edge, y + edge)
            context.lineTo(x, y + edge)
            context.lineTo(x, y)
            //context.stroke()
            context.closePath()  
            context.fillStyle = color
            context.fill()
            context.stroke()
            context.fillStyle = "black"
        }

        let x = 150
        let y = 10
        this.plants.forEach(
            (plant) => {
                context.fillText(plant, 10, y + 20)
                this.plantsAssociation.getRow(plant).split('').forEach(
                    (colorSign) => {
                        console.log(colorSign)
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