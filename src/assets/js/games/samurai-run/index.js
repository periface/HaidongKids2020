var game;
window.startFooter = function () {
    let gameConfig = {
        type: Phaser.CANVAS,
        width: document.documentElement.clientWidth,
        height: 240,
        pixelArt: true,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
            }
        },
        scene: [PreloadGame, PlayGame],
        parent: 'game'
    };
    game = new Phaser.Game(gameConfig);
}