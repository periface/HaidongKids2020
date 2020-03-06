class PreloadGame extends Phaser.Scene {
    constructor() {
        super("PreloadGame");
    }
    preload() {
        // load all assets tile sprites
        this.load.image("bg_1", "/assets/js/games/samurai-run/assets/bg-1.png");
        this.load.image("bg_2", "/assets/js/games/samurai-run/assets/bg-2.png");
        this.load.image("ground", "/assets/js/games/samurai-run/assets/ground2.png");
        this.load.spritesheet("dog", "/assets/js/games/samurai-run/assets/dog.png", {
            frameWidth: 251,
            frameHeight: 199
        });
        // load spritesheet
        this.load.spritesheet("player", "/assets/js/games/samurai-run/assets/bee.png", {
            frameWidth: 37,
            frameHeight: 39
        });
    }
    create() {
        console.log('start')
        this.scene.start("PlayGame");
    }
}