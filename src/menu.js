class Menu {
  constructor() {
    this.musicOnIcon = loadImage("assets/menu/sound-on.png");
    this.musicOffIcon = loadImage("assets/menu/no-sound.png");
    this.backgroundMusic = loadSound("assets/sounds/background_music.wav");
    this.test = loadSound("assets/sounds/toink.mp3");
    this.musicActive = false;
  }
  draw() {
    const activeIcon = this.musicActive ? this.musicOnIcon : this.musicOffIcon;
    image(activeIcon, WIDTH - 75, 20, 50, 50);
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
