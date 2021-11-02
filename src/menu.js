class Menu {
  constructor() {
    this.musicOnIcon = loadImage("assets/menu/sound-on.png");
    this.musicOffIcon = loadImage("assets/menu/no-sound.png");
    this.backgroundMusic = loadSound("assets/sounds/background_music.wav");
    this.test = loadSound("assets/sounds/toink.mp3");
    this.musicActive = false;
  }
  draw() {
    this.drawMusicSymbol();
    this.drawScore();
  }

  drawMusicSymbol() {
    const activeIcon = this.musicActive ? this.musicOnIcon : this.musicOffIcon;
    image(activeIcon, WIDTH - 75, 20, 50, 50);
  }

  drawScore() {
    textFont("Roboto Mono");
    textSize(30);
    text(game.player.score.toString().padStart(8, "0"), 750, 55);
  }

  mousePressed() {
    if (mouseX >= WIDTH - 75 && mouseY <= 75) {
      this.musicActive = !this.musicActive;
      if (this.musicActive) this.backgroundMusic.loop();
      else this.backgroundMusic.stop();
      this.test.play();
    }
  }
}
