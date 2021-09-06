var colorPicker = document.getElementById("color-picker")
var blurSlider = document.getElementById("blur-slider")
var marginSlider = document.getElementById("margin-slider")

var image = document.getElementById("b-img")

colorPicker.addEventListener("input", function () {
    document.body.style.backgroundColor = colorPicker.value
})

blurSlider.addEventListener("input", function () {
    image.style.filter = `blur(${blurSlider.value}px)`
})

marginSlider.addEventListener("input", function () {
    image.style.margin = marginSlider.value + "px"
})
