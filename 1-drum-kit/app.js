const buttonNumber = document.querySelectorAll(".kit").length

for (var i = 0; i < buttonNumber; i++) {
    document
        .querySelectorAll(".kit")
        [i].addEventListener("keydown", function (event) {
            Press(event.key)
        })

    document.querySelectorAll(".kit")[i].addEventListener(
        "click",
        function (index) {
            Press(index)
        }.bind(this, i)
    )
}

var audio

function Press(action) {
    switch (action) {
        case "b":
        case 0:
            audio = new Audio("sounds/bass.mp3")
            audio.play()

            break
        case "f":
        case 1:
            audio = new Audio("sounds/floor-tom.mp3")
            audio.play()

            break
        case "s":
        case 2:
            audio = new Audio("sounds/snare.mp3")
            audio.play()

            break
        case "t":
        case 3:
            audio = new Audio("sounds/tom-tom.wav")
            audio.play()

            break
        case "h":
        case 4:
            audio = new Audio("sounds/hat.mp3")
            audio.play()
            break
        case "c":
        case 5:
            audio = new Audio("sounds/crash.mp3")
            audio.play()

            break
        case "r":
        case 6:
            audio = new Audio("sounds/ride.mp3")
            audio.play()
            break
        case "p":
        case 7:
            audio = new Audio("sounds/splash.mp3")
            audio.play()

            break
        case "y":
        case 8:
            audio = new Audio("sounds/china.mp3")
            audio.play()

        default:
            break
    }
}
