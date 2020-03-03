function GameOver() {

    Phaser.Scene.call(this, { key: 'gameOver' });
    this.preload = function () {
        this.load.image('button', 'assets/js/games/samurai-run/assets/button.png');
    }
    this.create = function () {
        console.log(this);
        gameOverTxt = this.add.text(16, 16, 'GAME OVER :( ', { fontSize: '64px', fill: '#000' });
        //gameOverButton = this.add.button(95, 400, 'button', restart.bind(this), this, 2, 1, 0);
    }
    this.update = function () {

    }
    function restart(self) {
        self.scene.start('levelOne');
    }
}