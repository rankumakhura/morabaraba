class startScreen extends Phaser.Scene {
  constructor() {
    super({
      key: "startScreen"
    });
  }
  preload() {
    console.log("Start screen");
    this.load.spritesheet("boom", "assets/rose.jpeg", {
      frameWidth: 64,
      frameHeight: 64,
      endFrame: 23
    });
  }
  create() {
    var testText = this.add.text(100, 100, "Click to start the game.", {
      fontSize: "52px",
      fill: "#FFF"
    });
    testText.setInteractive();

    testText.on("pointerdown", startGameplay);

    var config = {
      key: "explode",
      frames: this.anims.generateFrameNumbers("boom", {
        start: 0,
        end: 23,
        first: 23
      }),
      frameRate: 30,
      repeat: -1,
      repeatDelay: 10
    };

    this.anims.create(config);

    for (var i = 0; i < 120; i++) {
      var x = Phaser.Math.Between(0, 790);
      var y = Phaser.Math.Between(0, 590);

      var boom = this.add.sprite(x, y, "boom", 23);

      boom.anims.delayedPlay(Math.random() * 3, "explode");
    }
  }
  update() {}
}
function startGameplay() {
  game.scene.stop("startScreen");
  game.scene.start("Example");
}
