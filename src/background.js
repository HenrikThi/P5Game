class Background {
  constructor(player) {
    this.player = player;
    this.playerDelta = 0;
    this.sky = loadImage("assets/background/sky.png");
    this.farGrounds = loadImage("assets/background/far-grounds.png");
    this.closeMountains = loadImage("assets/background/grassy_mountains.png");
    this.farMountains = loadImage("assets/background/far_mountains.png");
    this.clouds = loadImage("assets/background/clouds_mid.png");
  }
  draw() {
    this.drawSky();
    this.drawFarMountains();
    this.drawCloseMountains();
    this.drawClouds();
    this.drawFarGrounds();
    this.playerDelta = (450 - this.player.x) / 10;
  }

  drawSky() {
    image(this.sky, 0, 0, 448, 1216);
    image(this.sky, 448, 0, 448, 1216);
    image(this.sky, 448 * 2, 0, 448, 1216);
  }

  drawCloseMountains() {
    const y = 400;
    image(this.closeMountains, -20 + this.playerDelta / 8, y, 768, 432);
    image(this.closeMountains, -20 + 768 + this.playerDelta / 8, y, 768, 432);
    // -20 =^ image offset so that the edges are not visible, because of player movement.
  }

  drawFarMountains() {
    const y = 400;
    image(this.farMountains, -20 + this.playerDelta / 16, y, 768, 432);
    image(this.farMountains, -20 + 768 + this.playerDelta / 16, y, 768, 432);
  }

  drawClouds() {
    const y = 330;
    image(this.clouds, -50 + this.playerDelta / 4, y, 1152, 648);
  }

  drawFarGrounds() {
    image(
      this.farGrounds,
      -150 + this.playerDelta / 2,
      HEIGHT - 220,
      1232,
      220
    );
  }
}
