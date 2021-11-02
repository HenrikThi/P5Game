class Menu {
  constructor() {
    this.dino = loadImage("assets/dino/dino_red.png");
    this.dinoIdx = 0;
    this.musicOnIcon = loadImage("assets/menu/sound-on.png");
    this.musicOffIcon = loadImage("assets/menu/no-sound.png");
    this.backgroundMusic = loadSound("assets/sounds/background_music.wav");
    this.test = loadSound("assets/sounds/toink.mp3");
    this.musicActive = false;
  }
  draw() {
    this.drawMusicSymbol();
    this.drawScore();
    if (gameState === 0) {
      this.drawStartScreen();
    }

    if(gameState === 3){
      this.drawEndScreen();
    }
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

  drawStartScreen() {
    rect(300, 300, 400, 100);
    textSize(32);
    text("START THE GAME", 365, 360);
    image(this.dino, 460, 225, 100, 100, this.dinoIdx * 120, 0, 120, 120);
    if (frameCount % 12 === 0) {
      this.dinoIdx = (this.dinoIdx + 1) % 3;
    }
  }

  drawEndScreen(){
    console.log("drawing End Screen");
  }

  mousePressed() {
    if (mouseX >= WIDTH - 75 && mouseY <= 75) {
      this.musicActive = !this.musicActive;
      if (this.musicActive) this.backgroundMusic.loop();
      else this.backgroundMusic.stop();
      this.test.play();
    }

    if (
      gameState === 0 &&
      mouseX >= 300 &&
      mouseX <= 700 &&
      mouseY >= 300 &&
      mouseY <= 400
    ) {
      gameState = 1;
    }
  }
}
