class Game {
  constructor(player) {
    this.background = new Background();
    this.foreground = new Foreground();
    this.player = player;
    this.fruits = [];

    this.fruitImages = FRUIT_NAMES.map((name) => [
      loadImage(`assets/fruit/${name}_run_0.png`),
      loadImage(`assets/fruit/${name}_run_1.png`),
      loadImage(`assets/fruit/${name}_run_2.png`),
    ]);
  }

  drawBackground() {
    this.background.draw();
  }

  drawForeground() {
    this.foreground.draw();
  }

  drawAssets() {
    if (frameCount % 10 === 0) {
      this.fruits.push(new Fruit(this.fruitImages));
    }
    this.fruits.forEach((fruit) => {
      fruit.draw();
    });
    this.player.draw();
    this.fruits = this.fruits.filter(
      (fruit) => !fruit.checkCollision(this.player) && fruit.y <= GROUND_LVL
    );
  }
}
