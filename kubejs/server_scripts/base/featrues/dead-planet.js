
addGrow('minecraft:dead_bush', 'minecraft:red_sand', 'bone_meal')
addCrushing(['sand %75','red_dye %5', 'dead_bush %4', 'bone %4'], 'red_sand')
addMilling([ 'dead_bush %10','bone %5'], 'red_sand')
addPurify('red_sand', 'minecraft:terracotta', 5)
addCompacting('dirt',['2x stick','#forge:sand','clay_ball'])
addCompacting('dirt %75',['4x stick','clay'])
addCompacting('dirt %75',['4x stick','2x #forge:sand'])
addMixing('white_dye',['32x snowball', '10mb kubejs:fermented_goop'])
addPurify('red_sand', 'lava', 25)
addShaped('stick', ['a', 'a'], { a: 'cactus' })
addMilling(['stick','stick %75'], 'dead_bush')
addFilling('sand', 'red_sand', '100x milk')