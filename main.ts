radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 7) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(6)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(333)
basic.showString("¡Hola!")
music.playMelody("F A F D A F D C5 ", 120)
basic.forever(function () {
    if (input.rotation(Rotation.Roll) < 30) {
        radio.sendNumber(4)
    }
})
basic.forever(function () {
    if (input.rotation(Rotation.Roll) > 30) {
        radio.sendNumber(5)
    }
})
