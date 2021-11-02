let game;
let song;
let button;

function preload() {
  song = loadSound("assets/sounds/background_music.wav");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game = new Game(new Player());
  // song.loop();
  button = createButton("click me");
  button.position(0, 0);
  button.mousePressed(console.log("clicked"));
}

function draw() {
  clear();
  if (GAME_OVER) return;
  for (let i = 0; i < 11; i++) {
    line(0, i * 100, 1000, i * 100);
    line(i * 100, 0, i * 100, 1000);
  }
  game.drawBackground();
  game.drawAssets();
  game.drawForeground();
  game.drawMenu();
}

function keyPressed() {}

function mousePressed() {
  game.mousePressed();
  // trigger sound
  //song.loop();
  console.log("loop song!");
}
