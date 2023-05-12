radio.onReceivedBuffer(function (receivedBuffer) {
    // decode data
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    ux = receivedBuffer.getNumber(NumberFormat.Int16LE, 0)
uy = receivedBuffer.getNumber(NumberFormat.Int16LE, 2)
uz = receivedBuffer.getNumber(NumberFormat.Int16LE, 4)
dx = receivedBuffer.getNumber(NumberFormat.Int16LE, 6)
dy = receivedBuffer.getNumber(NumberFormat.Int16LE, 8)
dz = receivedBuffer.getNumber(NumberFormat.Int16LE, 10)
led.plot(pins.map(
    ux,
    0,
    100,
    0,
    4
    ), pins.map(
    uy,
    0,
    100,
    0,
    4
    ))
})
let uz = 0
let uy = 0
let ux = 0
let dx = 0
let dy = 0
let dz = 0
radio.setGroup(99)
basic.showIcon(IconNames.No)
radio.off()
basic.pause(2)
basic.clearScreen()
radio.on()
