light.setBrightness(255)
while (true) {
    console.log(input.soundLevel())
    if (input.soundLevel() <= 146 && input.lightLevel() < 8) {
        music.baDing.playUntilDone()
        light.setAll(color.rgb(255, 0, 0))
        pause(500)
        music.baDing.playUntilDone()
        light.clear()
        pause(500)
    } else {
        music.stopAllSounds()
        light.clear()
    }
    
}
