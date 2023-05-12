radio.onReceivedBuffer(function on_received_buffer(receivedBuffer: Buffer) {
    
    //  decode data
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    ux = receivedBuffer.getNumber(NumberFormat.Int16LE, 0)
    dx = receivedBuffer.getNumber(NumberFormat.Int16LE, 2)
    dy = receivedBuffer.getNumber(NumberFormat.Int16LE, 4)
    dz = receivedBuffer.getNumber(NumberFormat.Int16LE, 6)
    led.plot(pins.map(ux, -1023, 1023, 0, 4), pins.map(dy, -1023, 1023, 0, 4))
})
let dz = 0
let dy = 0
let dx = 0
let ux = 0
let buff = control.createBuffer(8)
radio.setGroup(99)
basic.showIcon(IconNames.Duck)
radio.off()
basic.pause(2)
basic.clearScreen()
radio.on()
