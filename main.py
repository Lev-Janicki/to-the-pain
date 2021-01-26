light.set_brightness(255)
while True:
    print(input.sound_level())
    if input.sound_level() <= 146 and input.light_level() < 8:
        music.ba_ding.play_until_done()
        light.set_all(color.rgb(255,0,0))
        pause(500)
        music.ba_ding.play_until_done()
        light.clear()
        pause(500)
    else:
        music.stop_all_sounds()
        light.clear()