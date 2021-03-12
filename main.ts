basic.forever(function () {
    serial.writeValue("light", input.lightLevel())
    if (input.lightLevel() < 25) {
        for (let index = 0; index < 100; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
        }
    } else {
        basic.clearScreen()
    }
})
