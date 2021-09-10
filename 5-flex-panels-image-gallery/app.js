const panels = document.querySelectorAll(".box")

for (var i = 0; i < panels.length; i++) {
    panels[i].addEventListener("click", function () {
        this.classList.toggle("active")
    })
}
