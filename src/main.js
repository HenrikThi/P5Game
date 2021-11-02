let game;
let song;
let button;
let gameState = 0;

function preload() {
  song = loadSound("assets/sounds/background_music.wav");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game = new Game(new Player());
}

function draw() {
  clear();
  if (GAME_OVER) return;

  game.drawBackground();
  if (gameState === 1) {
    game.drawAssets();
  }
  game.drawForeground();
  game.drawMenu();
}

function keyPressed() {}

function mousePressed() {
  game.mousePressed();
  // game.restart();
}
