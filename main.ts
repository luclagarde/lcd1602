input.onButtonPressed(Button.A, function () {
    makerbit.clearLcd1602()
    makerbit.showStringOnLcd1602("" + (randint(0, 10)), makerbit.position1602(LcdPosition1602.Pos1), 16)
})
makerbit.connectLcd(39)
basic.showIcon(IconNames.SmallHeart)
makerbit.showStringOnLcd1602("Appuyez sur A", makerbit.position1602(LcdPosition1602.Pos1), 32)
basic.forever(function () {
	
})
