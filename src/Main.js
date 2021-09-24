import PlantsAssociation1 from './PlantsAssociation1.js'
import PlantsAssociation2 from './PlantsAssociation2.js'

export default class Main {

    constructor() {
        document.onkeydown = e => {
            if (e.key === "Escape") {
                this.reload()
            }
        }
        this.plantsAssociation = []
        this.plantsAssociation[1] = new PlantsAssociation1()
        this.plantsAssociation[2] = new PlantsAssociation2()
        this.select()
        //this.draw(this.plantsAssociation1)
        //this.compatibility = (plant1, plant2) => this.plantsAssociation.getCompatibility(plant1, plant2)
        //example:
        //console.log(this.compatibility("paradicsom", "paprika"))
    }

    reload = () => {
        fetch('', {
            'Cache-Control': 'no-cache'
        })
            .then(() => location.reload())
            .catch(error => console.warn(error))
    }

    select = () => {
        let canvas = document.getElementsByTagName('canvas')[0]
        canvas.style.display = "none"
        let menu = document.getElementById("menu")
        this.insertForm(menu, "Válassz táblázatot: (Esc = vissza ide)", "tables", 1, 2)

        let tables = document.querySelectorAll('input[name="tables"]')
        for (const table of tables) {
            table.addEventListener("change", (event) => {
                let selectedTable = table.value
                menu.style.display = "none"
                canvas.style.display = "block"
                this.draw(this.plantsAssociation[selectedTable])
            })
        }
    }

    insertForm = (sect, title, name, min, max) => {
        sect.innerHTML += "<p><b>" + title + "</b></p>"
        for (let i = min; i <= max; i++) {
            let input = document.createElement('input')
            sect.append(input)
            input.type = "radio"
            input.name = name
            input.value = i
            let label = document.createElement("label")
            label.textContent = i + " "
            sect.append(label)
        }
    }

    draw = (plantsAssociation) => {
        let plants = plantsAssociation.getPlants()
        let textArea = 140
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

        let delta = window.innerWidth - matrixDraw.width
        let container = document.getElementsByClassName("container")[0]
        if (delta > 0)
            container.style.flexDirection = "column"

        let square = (x, y, color) => {
            context.strokeRect(x, y, edge, edge)
            context.fillStyle = color
            context.fillRect(x, y, edge, edge)
            context.fillStyle = "black"
        }

        plants.forEach(
            plant => {
                context.fillText(plant, textMargin, y + 17)
                context.rotate(-Math.PI / 2)
                context.fillText(plant, textMargin - textArea, y + 15)
                context.rotate(Math.PI / 2)
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