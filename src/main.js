let game;

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game = new Game(new Player());
}

function draw() {
  clear();
  for (let i = 0; i < 11; i++) {
    line(0, i * 100, 1000, i * 100);
    line(i * 100, 0, i * 100, 1000);
  }
  game.drawBackground();
  game.drawForeground();
  game.drawAssets();
}

function keyPressed() {}
