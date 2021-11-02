let game;
let song;

// function preload() {
//   // soundFormats('mp3');
//   song = loadSound("assets/sounds/example.mp3");
// }
function preload() {
  // soundFormats('mp3');
  song = loadSound("assets/sounds/background_music.wav");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game = new Game(new Player());
  song.loop();
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
}

function keyPressed() {}

function mousePressed() {
  // trigger sound
  song.loop();
}
