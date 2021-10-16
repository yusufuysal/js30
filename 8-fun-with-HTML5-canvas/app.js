const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = "#BADA55"
ctx.lineJoin = "round"
ctx.lineCap = "round"

let isDrawing = false

let x = 0
let y = 0

function drawLine(ctx, x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.strokeStyle = "black"
    ctx.lineWidth = 1
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
    ctx.closePath()
}

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true
    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener("mousemove", (e) => {
    if (isDrawing === true) {
        drawLine(ctx, x, y, e.offsetX, e.offsetY)
        x = e.offsetX
        y = e.offsetY
    }
})

window.addEventListener("mouseup", (e) => {
    if (isDrawing === true) {
        drawLine(ctx, x, y, e.offsetX, e.offsetY)
        x = 0
        y = 0
        isDrawing = false
    }
})
