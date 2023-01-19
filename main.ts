input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    sprite = game.createSprite(2, 2)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.TiltRight, function () {
    if (true) {
        sprite.turn(Direction.Right, 45)
        sprite.move(1)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Hello! press A+B")
})
let sprite: game.LedSprite = null
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
