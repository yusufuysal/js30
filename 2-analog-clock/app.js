setInterval(() => {
    let currentDate = new Date()
    let timeInHour = currentDate.getHours()
    let timeInMinutes = currentDate.getMinutes()
    let timeInSeconds = currentDate.getSeconds()
    let hourHandTurn = 30 * timeInHour + timeInMinutes / 2
    let minuteHandTurn = 6 * timeInMinutes
    let secondHandTurn = 6 * timeInSeconds
    document.getElementById(
        "second"
    ).style.transform = `rotate(${secondHandTurn}deg)`
    document.getElementById(
        "minute"
    ).style.transform = `rotate(${minuteHandTurn}deg)`
    document.getElementById(
        "hour"
    ).style.transform = `rotate(${hourHandTurn}deg)`
}, 1000)
