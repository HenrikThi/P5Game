class Menu {
  constructor() {
    this.dino = loadImage("assets/dino/dino_red.png");
    this.dinoIdx = 0;
    this.musicOnIcon = loadImage("assets/menu/sound-on.png");
    this.musicOffIcon = loadImage("assets/menu/no-sound.png");
    this.backgroundMusic = loadSound("assets/sounds/background_music.wav");
    this.menuBeep = loadSound("assets/sounds/menu_beep.wav")
    this.musicActive = false;
  }
  draw() {
    this.drawMusicSymbol();
    this.drawScore();
    if (gameState === 0) {
      this.drawStartScreen();
    }

    if (gameState === 3) {
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
    textAlign(LEFT, BASELINE);
    text(game.player.score.toString().padStart(8, "0"), 750, 55);
  }

  drawStartScreen() {
    rect(300, 300, 400, 100);
    textSize(32);
    text("START THE GAME", 365, 360);
    this.drawDino();
  }

  drawEndScreen() {
    rect(300, 300, 400, 210);
    textSize(48);
    textAlign(CENTER, CENTER);
    text(`GAME OVER`, 500, 360);
    textSize(32);
    text(`score: ${game.player.score.toString().padStart(8, "0")}`, 500, 420);
    push();
    strokeWeight(4);
    stroke(51);
    // fill(255, 255, 0);
    fill(188, 76, 78);

    text(`RePlay`, 500, 470);
    pop();
    this.drawDino();
  }

  drawDino() {
    image(this.dino, 450, 225, 100, 100, this.dinoIdx * 120, 0, 120, 120);
    if (frameCount % 12 === 0) {
      this.dinoIdx = (this.dinoIdx + 1) % 3;
    }
  }

  mousePressed() {
    if (
      mouseX >= WIDTH - 75 &&
      mouseX <= WIDTH &&
      mouseY <= 75 &&
      mouseY >= 0
    ) {
      this.musicActive = !this.musicActive;
      if (this.musicActive) {
        this.backgroundMusic.loop();
      } else this.backgroundMusic.stop();
    }

    if (
      gameState === 0 &&
      mouseX >= 300 &&
      mouseX <= 700 &&
      mouseY >= 300 &&
      mouseY <= 400
    ) {
      this.menuBeep.play()
      gameState = 1;
    }

    if (
      gameState === 3 &&
      mouseX >= 439 &&
      mouseX <= 560 &&
      mouseY >= 450 &&
      mouseY <= 490
    ) {
      this.menuBeep.play()
      game.restart();
      gameState = 1;
    }
  }
}
