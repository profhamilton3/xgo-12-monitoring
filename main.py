def on_received_buffer(receivedBuffer):
    global ux, uy, uz, dx, dy, dz
    # decode data
    music.play_sound_effect(music.create_sound_effect(WaveShape.SQUARE,
            200,
            1,
            255,
            0,
            100,
            SoundExpressionEffect.NONE,
            InterpolationCurve.CURVE),
        SoundExpressionPlayMode.IN_BACKGROUND)
    ux = receivedBuffer.get_number(NumberFormat.INT16_LE, 0)
    uy = receivedBuffer.get_number(NumberFormat.INT16_LE, 2)
    uz = receivedBuffer.get_number(NumberFormat.INT16_LE, 4)
    dx = receivedBuffer.get_number(NumberFormat.INT16_LE, 6)
    dy = receivedBuffer.get_number(NumberFormat.INT16_LE, 8)
    dz = receivedBuffer.get_number(NumberFormat.INT16_LE, 10)
    led.plot(pins.map(ux, 0, 100, 0, 4),
        pins.map(uy, 0, 100, 0, 4))
radio.on_received_buffer(on_received_buffer)

dz = 0
dy = 0
dx = 0
ux = 0
uy = 0
uz = 0

radio.set_group(99)
basic.show_icon(IconNames.DUCK)
radio.off()
basic.pause(2)
basic.clear_screen()
radio.on()