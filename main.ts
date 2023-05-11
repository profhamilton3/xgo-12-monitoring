radio.onReceivedValue(function (name, value) {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    num = value
    led.plotBarGraph(
    Math.map(num, 0, 300, 0, 5),
    5
    )
})
let num = 0
radio.setGroup(99)
basic.showIcon(IconNames.Snake)
