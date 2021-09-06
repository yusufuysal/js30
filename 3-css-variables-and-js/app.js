var colorPicker = document.getElementById("color-picker")
var blurSlider = document.getElementById("blur-slider")

var image = document.getElementById("b-img")

colorPicker.addEventListener("input", function () {
    document.body.style.backgroundColor = colorPicker.value
})

blurSlider.addEventListener("input", function () {
    image.style.filter = `blur(${blurSlider.value}px)`
})
