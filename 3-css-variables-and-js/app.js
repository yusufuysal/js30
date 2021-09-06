var colorPicker = document.getElementById("color-picker")

colorPicker.addEventListener("input", function () {
    document.body.style.backgroundColor = colorPicker.value
})
