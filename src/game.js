class Game {
  constructor(player) {
    this.player = player;
    this.background = new Background(player);
    this.foreground = new Foreground();
    this.menu = new Menu();

    this.fruits = [];
    this.fruitImages = FRUIT_NAMES.map((name) => [
      loadImage(`assets/fruit/${name}_run_0.png`),
      loadImage(`assets/fruit/${name}_run_1.png`),
      loadImage(`assets/fruit/${name}_run_2.png`),
    ]);
    this.sounds = {
      toink: loadSound("assets/sounds/toink.mp3"),
      pickup: loadSound("assets/sounds/pickup.wav"),
    };
  }

  drawBackground() {
    this.background.draw();
  }

  drawForeground() {
    this.foreground.draw();
  }

  drawMenu() {
    this.menu.draw();
  }

  drawAssets() {
    //"Ends" the game at a score of 3000.
    const fruitFrequency = this.player.score < 3000 ? 10 : 1;
    if (frameCount % fruitFrequency === 0) {
      this.fruits.push(new Fruit(this.fruitImages, this.sounds));
    }
    this.fruits.forEach((fruit) => {
      fruit.draw();
    });
    this.player.draw();
    this.fruits = this.fruits.filter(
      (fruit) => !fruit.checkCollision(this.player) && fruit.y <= GROUND_LVL
    );
  }

  mousePressed() {
    this.menu.mousePressed();
  }
}
