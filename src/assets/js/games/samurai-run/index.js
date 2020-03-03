var player;
var stars;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;
var game;
var gameOverTxt;
var gameOverButton;
window.startSamuraiGame = function () {
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: [LevelOne, GameOver],
        parent: 'game'
    };
    window.game = new Phaser.Game(config);
    window.game.launch('levelOne');
}