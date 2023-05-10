radio.onReceivedValue(function (name, value) {
    num = value
    led.plotBarGraph(
    Math.map(num, 0, 500, 0, 5),
    5
    )
})
let num = 0
radio.setGroup(99)
basic.showIcon(IconNames.Giraffe)
