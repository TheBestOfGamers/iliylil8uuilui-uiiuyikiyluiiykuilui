function Welcome_visitor () {
    basic.showIcon(IconNames.Happy)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
}
function Init () {
    basic.showIcon(IconNames.Heart)
    PlanetX_AILens.initModule()
    PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Face)
    basic.showIcon(IconNames.Yes)
}
function No_visitor () {
    basic.showIcon(IconNames.Sad)
}
Init()
while (true) {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.checkFace()) {
        Welcome_visitor()
    } else {
        No_visitor()
    }
}
basic.forever(function () {
	
})
