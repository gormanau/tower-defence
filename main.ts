namespace SpriteKind {
    export const arrow = SpriteKind.create()
    export const tower = SpriteKind.create()
    export const destroyed = SpriteKind.create()
}
function clear_list () {
    for (let value of sprite_list) {
        value.destroy()
    }
    sprite_list = []
    enemyCount = 0
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() >= 150 && tower_list.length < 10) {
        scout = sprites.create(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ............77777...............
            ............7777777.............
            .............d9d9...............
            .............dddd...............
            ............7dddd7..............
            ............777777..............
            .........777777777..fff.........
            .........77777777777f...........
            .........77777777777f...........
            .........77.777777..............
            .........77.77..77..............
            ............77..77..............
            ............77..77..............
            ............ff..ff..............
            ...........fff..fff.............
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.tower)
        tower_list.push(scout)
        scout.setPosition(mySprite.x, mySprite.y)
        info.changeScoreBy(-150)
    } else {
        music.playTone(175, music.beat(BeatFraction.Half))
    }
})
scene.onHitTile(SpriteKind.Enemy, 2, function (sprite) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        sprite.setVelocity(50, 0)
    }
    if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.setVelocity(0, 50)
    }
})
function wave_4 () {
    waveNumber = -1
    enemyCount = 0
    info.changeScoreBy(600)
    pause(10000)
    waveNumber = 4
    sprite_list = sprites.allOfKind(SpriteKind.Enemy)
    for (let index = 0; index < 8; index++) {
        tempSprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . f f 2 f 2 f f . . . . . . 
            . f . f f f f f f f . . . . . . 
            . . . f f f f . . . . f . . . . 
            . f . f f f f . . . . . f . . . 
            . . . f f f f f f f f f f . . . 
            . f f f f f f f f f f f . . . . 
            f f f f f f f . . . f f . . . . 
            f f f f f f f . . . . . f . . . 
            f f . f f f f . . f . . f . . . 
            f . f f f f f f . . f . . . . . 
            . . f f f f f f f . . . f . . . 
            . . f . . . . f f f . f f . . . 
            . f f . . . . . f f . . . f . . 
            . f f . . . . . f f . . . . . . 
            `, SpriteKind.Enemy)
        sprite_list.push(tempSprite)
        tempSprite.lifespan = 20000
        enemyCount = enemyCount + 1
        tempSprite.setPosition(20, 120)
        tempSprite.setVelocity(50, 0)
        pause(200)
    }
    for (let index = 0; index < 10; index++) {
        tempSprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f . . . . . f f f f f f . . 
            . . . f f . . . f 2 2 f 2 2 . . 
            . . . . . f f . f f f f f f . . 
            . . . f f f . f f f f . . . . . 
            . . . . . f f f f f . . . . . . 
            f f f f f f f f f f . . . . . . 
            . . . f f f f f f . . . . . . . 
            f f f f f f f f . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . f f . f f . . . . . . . . . 
            . . . . . f . f . . . . . . . . 
            f . . . f f . . f . . . . . . . 
            . . . f f . . . f f . . . . . . 
            . f f f . . . . . f . . . . . . 
            `, SpriteKind.Enemy)
        sprite_list.push(tempSprite)
        tempSprite.lifespan = 20000
        enemyCount = enemyCount + 1
        tempSprite.setPosition(20, 120)
        tempSprite.setVelocity(90, 0)
        pause(200)
    }
    for (let index = 0; index < 5; index++) {
        tempSprite = sprites.create(img`
            . . . f f f f f f f f . . . . . 
            . . . f f 2 f 2 f f f . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . f f f f f f f 2 2 2 2 2 . 
            . 2 2 2 2 f f f f 2 2 f f f f . 
            . f f f 2 2 f f 2 2 f f f f f . 
            f f f f f 2 2 2 2 f f f f f f . 
            f f . f f f 2 2 f f f f . f f . 
            f f . f f 2 2 2 2 f f f . f f . 
            f . . f 2 2 f f 2 2 f f . f f f 
            . . . f f f . . f 2 2 f . f f f 
            . . . f f f . . f f f f . . . . 
            . . . f f f . . f f f f . . . . 
            . . . f f f . . f f f f . . . . 
            . . . f f f . . f f f f . . . . 
            . . . f f f . . f f f f . . . . 
            `, SpriteKind.Enemy)
        sprite_list.push(tempSprite)
        tempSprite.lifespan = 160000
        enemyCount = enemyCount + 1
        tempSprite.setPosition(20, 120)
        tempSprite.setVelocity(30, 0)
        pause(200)
    }
    for (let index = 0; index < 1; index++) {
        tempSprite = sprites.create(img`
            . . . . . f f f f f . . . . . . 
            . . . . . f f 5 f 5 . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . f f 
            . . . . . f f f f f . . . . f f 
            . . . . 5 f f f f 5 5 . . . f . 
            . . . f 5 5 f f f 5 f f . . f . 
            . . . f . f 5 f 5 5 f f f . f . 
            . . f . . f 5 5 f f . f f f f . 
            . f f . . f 5 5 f f . . f f f . 
            . f . . . 5 f f 5 f . . . . f . 
            . . . . . f f f 5 5 . . . . . . 
            . . . . . f f . f f . . . . . . 
            . . . . . f f . f f . . . . . . 
            . . . . . f f . f f . . . . . . 
            `, SpriteKind.Enemy)
        sprite_list.push(tempSprite)
        tempSprite.lifespan = 500000
        enemyCount = enemyCount + 1
        tempSprite.setPosition(20, 120)
        tempSprite.setVelocity(10, 0)
        pause(200)
    }
}
function firstwave () {
    waveNumber = -1
    enemyCount = 0
    pause(10000)
    sprite_list = sprites.allOfKind(SpriteKind.Enemy)
    for (let index = 0; index < 4; index++) {
        sprite_list.push(sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . f f 2 f 2 f f . . . . . . 
            . f . f f f f f f f . . . . . . 
            . . . f f f f . . . . f . . . . 
            . f . f f f f . . . . . f . . . 
            . . . f f f f f f f f f f . . . 
            . f f f f f f f f f f f . . . . 
            f f f f f f f . . . f f . . . . 
            f f f f f f f . . . . . f . . . 
            f f . f f f f . . f . . f . . . 
            f . f f f f f f . . f . . . . . 
            . . f f f f f f f . . . f . . . 
            . . f . . . . f f f . f f . . . 
            . f f . . . . . f f . . . f . . 
            . f f . . . . . f f . . . . . . 
            `, SpriteKind.Enemy))
        enemyCount = enemyCount + 1
    }
    waveNumber = 1
    for (let sprite of sprite_list) {
        sprite.lifespan = 20000
        sprite.setPosition(20, 120)
        sprite.setVelocity(50, 0)
        pause(200)
    }
    waveNumber = 1
}
scene.onHitTile(SpriteKind.Enemy, 10, function (sprite) {
    if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.setVelocity(0, -50)
    }
    if (sprite.isHittingTile(CollisionDirection.Top)) {
        sprite.setVelocity(50, 0)
    }
})
info.onLifeZero(function () {
    game.over(false)
})
function checkIfnewWave () {
    if (enemyCount <= 0 && waveNumber == 1) {
        clear_list()
        waveNumber = -1
        pause(1000)
        game.showLongText("wave 2", DialogLayout.Center)
        wave_number_2()
    } else if (enemyCount <= 0 && waveNumber == 2) {
        clear_list()
        waveNumber = -1
        pause(1000)
        game.showLongText("wave 3", DialogLayout.Center)
        wave_3()
    } else if (enemyCount <= 0 && waveNumber == 3) {
        clear_list()
        waveNumber = -1
        pause(1000)
        game.showLongText("wave 4 boss!", DialogLayout.Center)
        wave_4()
    } else if (enemyCount <= 0 && waveNumber == 4) {
        clear_list()
        waveNumber = -1
        pause(1000)
        game.over(true)
    }
}
scene.onHitTile(SpriteKind.Enemy, 1, function (sprite) {
    sprite.setPosition(-300, -300)
    sprite.setVelocity(0, 0)
    sprite.destroy()
    info.changeLifeBy(-1)
    music.playTone(131, music.beat(BeatFraction.Half))
    checkIfnewWave()
})
function wave_number_2 () {
    waveNumber = -1
    enemyCount = 0
    info.changeScoreBy(200)
    pause(10000)
    waveNumber = 2
    sprite_list = sprites.allOfKind(SpriteKind.Enemy)
    for (let index = 0; index < 5; index++) {
        tempSprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . f f 2 f 2 f f . . . . . . 
            . f . f f f f f f f . . . . . . 
            . . . f f f f . . . . f . . . . 
            . f . f f f f . . . . . f . . . 
            . . . f f f f f f f f f f . . . 
            . f f f f f f f f f f f . . . . 
            f f f f f f f . . . f f . . . . 
            f f f f f f f . . . . . f . . . 
            f f . f f f f . . f . . f . . . 
            f . f f f f f f . . f . . . . . 
            . . f f f f f f f . . . f . . . 
            . . f . . . . f f f . f f . . . 
            . f f . . . . . f f . . . f . . 
            . f f . . . . . f f . . . . . . 
            `, SpriteKind.Enemy)
        sprite_list.push(tempSprite)
        tempSprite.lifespan = 20000
        enemyCount = enemyCount + 1
        tempSprite.setPosition(20, 120)
        tempSprite.setVelocity(50, 0)
        pause(200)
    }
    for (let index = 0; index < 5; index++) {
        tempSprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f . . . . . f f f f f f . . 
            . . . f f . . . f 2 2 f 2 2 . . 
            . . . . . f f . f f f f f f . . 
            . . . f f f . f f f f . . . . . 
            . . . . . f f f f f . . . . . . 
            f f f f f f f f f f . . . . . . 
            . . . f f f f f f . . . . . . . 
            f f f f f f f f . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . f f . f f . . . . . . . . . 
            . . . . . f . f . . . . . . . . 
            f . . . f f . . f . . . . . . . 
            . . . f f . . . f f . . . . . . 
            . f f f . . . . . f . . . . . . 
            `, SpriteKind.Enemy)
        sprite_list.push(tempSprite)
        tempSprite.lifespan = 20000
        enemyCount = enemyCount + 1
        tempSprite.setPosition(20, 120)
        tempSprite.setVelocity(90, 0)
        pause(200)
    }
}
function wave_3 () {
    waveNumber = -1
    enemyCount = 0
    info.changeScoreBy(350)
    pause(10000)
    waveNumber = 3
    sprite_list = sprites.allOfKind(SpriteKind.Enemy)
    for (let index = 0; index < 5; index++) {
        tempSprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . f f 2 f 2 f f . . . . . . 
            . f . f f f f f f f . . . . . . 
            . . . f f f f . . . . f . . . . 
            . f . f f f f . . . . . f . . . 
            . . . f f f f f f f f f f . . . 
            . f f f f f f f f f f f . . . . 
            f f f f f f f . . . f f . . . . 
            f f f f f f f . . . . . f . . . 
            f f . f f f f . . f . . f . . . 
            f . f f f f f f . . f . . . . . 
            . . f f f f f f f . . . f . . . 
            . . f . . . . f f f . f f . . . 
            . f f . . . . . f f . . . f . . 
            . f f . . . . . f f . . . . . . 
            `, SpriteKind.Enemy)
        sprite_list.push(tempSprite)
        tempSprite.lifespan = 20000
        enemyCount = enemyCount + 1
        tempSprite.setPosition(20, 120)
        tempSprite.setVelocity(50, 0)
        pause(200)
    }
    for (let index = 0; index < 5; index++) {
        tempSprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f . . . . . f f f f f f . . 
            . . . f f . . . f 2 2 f 2 2 . . 
            . . . . . f f . f f f f f f . . 
            . . . f f f . f f f f . . . . . 
            . . . . . f f f f f . . . . . . 
            f f f f f f f f f f . . . . . . 
            . . . f f f f f f . . . . . . . 
            f f f f f f f f . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . f f . f f . . . . . . . . . 
            . . . . . f . f . . . . . . . . 
            f . . . f f . . f . . . . . . . 
            . . . f f . . . f f . . . . . . 
            . f f f . . . . . f . . . . . . 
            `, SpriteKind.Enemy)
        sprite_list.push(tempSprite)
        tempSprite.lifespan = 20000
        enemyCount = enemyCount + 1
        tempSprite.setPosition(20, 120)
        tempSprite.setVelocity(90, 0)
        pause(200)
    }
    for (let index = 0; index < 5; index++) {
        tempSprite = sprites.create(img`
            . . . f f f f f f f f . . . . . 
            . . . f f 2 f 2 f f f . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . f f f f f f f 2 2 2 2 2 . 
            . 2 2 2 2 f f f f 2 2 f f f f . 
            . f f f 2 2 f f 2 2 f f f f f . 
            f f f f f 2 2 2 2 f f f f f f . 
            f f . f f f 2 2 f f f f . f f . 
            f f . f f 2 2 2 2 f f f . f f . 
            f . . f 2 2 f f 2 2 f f . f f f 
            . . . f f f . . f 2 2 f . f f f 
            . . . f f f . . f f f f . . . . 
            . . . f f f . . f f f f . . . . 
            . . . f f f . . f f f f . . . . 
            . . . f f f . . f f f f . . . . 
            . . . f f f . . f f f f . . . . 
            `, SpriteKind.Enemy)
        sprite_list.push(tempSprite)
        tempSprite.lifespan = 160000
        enemyCount = enemyCount + 1
        tempSprite.setPosition(20, 120)
        tempSprite.setVelocity(30, 0)
        pause(500)
    }
}
// Move enemy off screen if hit.
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    sprite.setVelocity(0, 0)
    sprite.setPosition(-900, -900)
    otherSprite.lifespan = otherSprite.lifespan - 20000
    if (otherSprite.lifespan <= 0) {
        otherSprite.destroy(effects.spray, 100)
        otherSprite.setVelocity(0, 0)
        pause(100)
        otherSprite.setPosition(-300, -300)
    }
})
let tempCount = 0
let shot: Sprite = null
let shot_x = 0
let shot_y = 0
let tempSprite: Sprite = null
let waveNumber = 0
let scout: Sprite = null
let tower_list: Sprite[] = []
let sprite_list: Sprite[] = []
let enemyCount = 0
let mySprite: Sprite = null
info.setScore(500)
scene.setTileMap(img`
    7777777777777777777777777777777777777777
    7777777777777777777777777777777777777777
    7777777777777777777777777777777777777777
    777777777777777777777a777777777777777777
    7777777777777777777779fffffffffffffffff1
    777777777777777777777f777777777777777777
    777777777777777777777f777777777777777777
    fffffff52777777777777f777777777777777777
    7777777f7777777777777f777777777777777777
    7777777f7777777777777f777777777777777777
    7777777f7777777777777f777777777777777777
    77777773fffffffffffff8a77777777777777777
    7777777277777777777777777777777777777777
    7777777777777777777777777777777777777777
    7777777777777777777777777777777777777777
    `)
scene.setTile(15, img`
    d d d d d d d d d d d d d d d d 
    d d d 1 1 d d d d d d d d b d d 
    d d d 1 1 d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d b d d d d d d b b d d d d d 
    d d d d d d d d d b b d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d b d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    1 1 d d d d d d d d d d d d d d 
    1 1 d d d d d d d d d d b d d d 
    d d d d d d 1 d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d b d 
    `, false)
scene.setTile(5, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    d 6 7 6 6 7 7 7 6 d 6 7 6 7 7 7 
    d d 6 6 d d 6 6 6 d d 6 d 6 7 7 
    d d d d d d d d d d d d d d 6 7 
    d d d d b d d d d d 1 1 d d 6 7 
    d d d d d d d d d d 1 1 d 6 7 7 
    1 d d d d d d d 1 d d d d d 6 7 
    d d d d d d d d d d d d d d 6 7 
    d d d d d d d d d b d d 6 7 7 7 
    d d d b b d d d d d d d d 6 7 7 
    d d d b b d d d d d d d d d 6 7 
    d d d d d d d d d d d d d d 6 7 
    d d d d d d d d d d 1 d d 6 7 7 
    d d d d d d d d d d d d d 6 6 7 
    d d d d d b d d d d d d d d d 7 
    d d d d d d d d d d d d d d 6 7 
    `, false)
scene.setTile(3, img`
    7 6 d d d d d d d d d d d d d d 
    7 d d d d d d d d d d d d d d d 
    7 6 6 d d d d d d d 1 1 d d d d 
    7 7 6 d d d 1 d d d 1 1 d d d d 
    7 6 d d d d d d d d d d d d d d 
    7 6 d d d d d d d d d d d d d d 
    7 7 6 d d d d d d d d d d d d b 
    7 7 7 6 d d d d d d d d d d d d 
    7 6 d d d d d d d d d b d d d d 
    7 6 d d b b d d d d d d d d d d 
    7 7 6 d b b d d d d d d d 1 1 d 
    7 6 d d d d d d d d d d d 1 1 d 
    7 6 d d d d d d d d d d d d d d 
    7 7 6 d 6 d d 6 6 6 d d 6 6 d d 
    7 7 7 6 7 6 d 6 7 7 7 6 6 7 6 d 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, false)
scene.setTile(9, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 6 7 7 6 6 6 7 6 7 7 6 7 
    7 7 7 6 d 6 6 6 d d 6 d 6 d 7 6 
    7 6 7 d d d d d d d d d d d d d 
    7 6 6 d d d d d d d d d d b d d 
    7 7 6 d d d d d d d d d d d d d 
    7 7 d d d d d d d d d d d d d d 
    7 6 d d d d b b d d d d d d d d 
    7 6 d d d d b b d d d 1 d d d d 
    7 7 6 d d d d d d d d d d d d d 
    7 6 d d d d d d d d d d d d 1 d 
    7 d d d d d d d d d 1 1 d d d d 
    7 6 d d d d d d d d 1 1 d d d d 
    7 7 6 d d d d d d d d d d d d d 
    7 6 d d b d d d d d d d d d d b 
    7 6 d d d d d d d d d d d d d d 
    `, false)
scene.setTile(8, img`
    d d d d d d d d d d d d d d 6 7 
    b d d d d d d d d d d d d d 6 7 
    d d d d d 1 d d d d d d d 6 7 7 
    d d d d d d d d d d d d d d 6 7 
    d d d d d d d d d b b d d d d 7 
    d d d d d d d d d b b d d d 6 7 
    d d d d d d d d d d d d d 6 7 7 
    d 1 1 d d d d d d d d d d d 6 7 
    d 1 1 d d d d 1 d d d d d d 6 7 
    d d d d d d d d d d d d d d 7 7 
    d d d d d d d d d d d d d 6 7 7 
    d d b d d d d d d d d 1 d 6 6 7 
    d d d d d d d d d d d d d 7 6 7 
    6 7 d 6 d 6 d d 6 6 6 d 6 7 7 7 
    7 6 7 7 6 7 6 6 6 7 7 6 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, false)
scene.setTile(7, img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 8 7 7 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 8 7 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, false)
scene.setTile(2, img`
    b d d d d d d c b d d d d d d c 
    d b b b b b b c d b b b b b c c 
    d b b b b b b c d b b b b c b c 
    d b b b b b b c d b b b d d b c 
    d b b b b b b c d b b c b b b c 
    d b b b b b b c d b c c b b b c 
    d b b b b b b b d b c c b b b b 
    c c c c c c b a c c c c c c b a 
    b d d d d d d c b d d d d d d c 
    d b b b b b b c d b b b b b b c 
    d b b b b b b c d b b b b b b c 
    d b b b b b b c d b b b b b b c 
    d b b b b b c c d b b b b b b c 
    d b b b b c c c d b b b b b b c 
    d b b b b c c b d b b b b b b b 
    c c c c c c c a c c c c c c c a 
    `, true)
scene.setTile(10, img`
    b d d d d d d c b d d d d d d c 
    d b b b b b b c d b b b b b c c 
    d b b b b b b c d b b b b c b c 
    d b b b b b b c d b b b d d b c 
    d b b b b b b c d b b c b b b c 
    d b b b b b b c d b c c b b b c 
    d b b b b b b b d b c c b b b b 
    c c c c c c b a c c c c c c b a 
    b d d d d d d c b d d d d d d c 
    d b b b b b b c d b b b b b b c 
    d b b b b b b c d b b b b b b c 
    d b b b b b b c d b b b b b b c 
    d b b b b b c c d b b b b b b c 
    d b b b b c c c d b b b b b b c 
    d b b b b c c b d b b b b b b b 
    c c c c c c c a c c c c c c c a 
    `, true)
scene.setTile(1, img`
    d d d d d d d d d d d d d d d d 
    d d d d d d 4 4 4 4 d d d d d d 
    d d d d 4 4 4 5 5 4 4 4 d d d d 
    d d d 3 3 3 3 4 4 4 4 4 4 d d d 
    d d 4 3 3 3 3 2 2 2 1 1 4 4 d d 
    d d 3 3 3 3 3 2 2 2 1 1 5 4 d d 
    d 4 3 3 3 3 2 2 2 2 2 5 5 4 4 d 
    d 4 3 3 3 2 2 2 4 4 4 4 5 4 4 d 
    d 4 4 3 3 2 2 4 4 4 4 4 4 4 4 d 
    d 4 2 3 3 2 2 4 4 4 4 4 4 4 4 d 
    d d 4 2 3 3 2 4 4 4 4 4 2 4 d d 
    d d 4 2 2 3 2 2 4 4 4 2 4 4 d d 
    d d d 4 2 2 2 2 2 2 2 2 4 d d d 
    d d d d 4 4 2 2 2 2 4 4 d d d d 
    d d d d d d 4 4 4 4 d d d d d d 
    d d d d d d d d d d d d d d d d 
    `, true)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f . . . . . . . . f f . . . 
    . . f f . . . . . . . f . . . . 
    . . . f f . . . . . f f . . . . 
    . . . . f f . . . f f . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 5 5 5 f . . . . . . 
    . . . . . f 5 5 5 f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . f f . . . . f f f . . . . 
    . . f f . . . . . . f f . . . . 
    . f f . . . . . . . . f f . . . 
    `, SpriteKind.arrow)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
info.setLife(20)
enemyCount = 0
firstwave()
forever(function () {
    pause(1000)
    for (let aTower2 of tower_list) {
        for (let anEnemy of sprite_list) {
            if (Math.abs(aTower2.x - anEnemy.x) < 30) {
                if (Math.abs(aTower2.y - anEnemy.y) < 30) {
                    if (aTower2.y < anEnemy.y) {
                        shot_y = 50
                    } else if (aTower2.y > anEnemy.y) {
                        shot_y = -50
                    } else {
                        shot_y = 0
                    }
                    if (aTower2.x < anEnemy.x) {
                        shot_x = 50
                    } else if (aTower2.y > anEnemy.y) {
                        shot_x = -50
                    } else {
                        shot_x = 0
                    }
                    shot = sprites.createProjectileFromSprite(img`
                        . . . . . . . . 
                        . . . . . . . . 
                        . . . . . . . . 
                        . . f f f f . . 
                        . . f f f f . . 
                        . . . . . . . . 
                        . . . . . . . . 
                        . . . . . . . . 
                        `, aTower2, shot_x, shot_y)
                    music.pewPew.play()
                }
            }
        }
    }
})
// Check if enemy killed and update score.
forever(function () {
    pause(500)
    tempCount = 0
    for (let value2 of sprite_list) {
        if (value2.x >= 0) {
            tempCount += 1
        }
    }
    if (tempCount < enemyCount) {
        info.changeScoreBy((enemyCount - tempCount) * 10)
    }
    enemyCount = tempCount
    checkIfnewWave()
})
