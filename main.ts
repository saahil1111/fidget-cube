input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    sprite = 0
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 1; index++) {
        basic.showString("1", 5)
basic.showString("2", 5)
basic.showString("3", 5)
basic.showString("4", 5)
basic.showString("5", 5)
basic.showString("6", 5)
    }
    Letter = randint(1, 4)
    if (Letter == 1) {
        basic.showString("1")
    } else if (Letter == 2) {
        basic.showString("2")
    } else if (Letter == 3) {
        basic.showString("3")
    } else if (Letter == 4) {
        basic.showString("4")
    } else if (Letter == 5) {
        basic.showString("5")
    } else {
        basic.showString("6")
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.playMelody("- - - - - - - - ", 120)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
})
let Letter = 0
let sprite = 0
for (let index = 0; index < 1; index++) {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
