/**
 * test2
 */
input.onButtonPressed(Button.A, function () {
    led.plot(4, 1)
    led.plot(3, 2)
    led.plot(2, 3)
    led.plot(1, 2)
})
input.onButtonPressed(Button.AB, function () {
    led.plot(3, 0)
    led.plot(3, 3)
    led.plot(3, 1)
    led.plot(3, 2)
})
input.onButtonPressed(Button.B, function () {
    led.plot(0, 0)
    led.plot(1, 1)
    led.plot(2, 2)
    led.plot(3, 3)
    led.plot(4, 0)
    led.plot(3, 1)
    led.plot(1, 3)
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(262, music.beat(BeatFraction.Breve))
    music.playMelody("- - - - - - - - ", 120)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
basic.forever(function () {
    music.setVolume(255000)
    music.playMelody("AB B C5 A B G A F ", 120)
})
