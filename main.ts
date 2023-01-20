input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 10; index++) {
        basic.showString("A", 5)
basic.showString("B", 5)
basic.showString("C", 5)
basic.showString("D", 5)
    }
    Letter = randint(1, 4)
    if (Letter == 1) {
        basic.showString("A")
    } else if (Letter == 2) {
        basic.showString("B")
    } else if (Letter == 3) {
        basic.showString("C")
    } else {
        basic.showString("D")
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("Hello! press A+B")
})
let Letter = 0
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
