const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth

ctx.strokeStyle = "#BADA55"
ctx.lineJoin = "round"
ctx.lineCap = "round"
ctx.lineWidth = 10

let isDrawing = false

let x = 0
let y = 0
let hue = 0

function drawLine(ctx, x1, y1, x2, y2) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
    ctx.closePath()
    hue++
    ctx.lineWidth += 1
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
        ctx.lineWidth = 10
    }
})
