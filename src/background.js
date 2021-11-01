class Background {
  constructor() {
    this.sky = loadImage("../assets/background/sky.png");
    this.farGrounds = loadImage("../assets/background/far-grounds.png");
    this.closeMountains = loadImage(
      "../assets/background/grassy_mountains.png"
    );
    this.farMountains = loadImage("../assets/background/far_mountains.png");
    this.clouds = loadImage("../assets/background/clouds_mid.png");
  }
  draw() {
    this.drawSky();
    this.drawFarMountains();
    this.drawCloseMountains();
    this.drawClouds();
    this.drawFarGrounds();
    this.drawGrounds()
  }

  drawSky() {
    image(this.sky, 0, 0, 448, 1216);
    image(this.sky, 448, 0, 448, 1216);
    image(this.sky, 448 * 2, 0, 448, 1216);
  }

  drawCloseMountains() {
    const y = 400;
    image(this.closeMountains, 0, y, 768, 432);
    image(this.closeMountains, 768, y, 768, 432);
  }

  drawFarMountains() {
    const y = 400;
    image(this.farMountains, 0, y, 768, 432);
    image(this.farMountains, 768, y, 768, 432);
  }

  drawClouds() {
    const y = 330;
    image(this.clouds, 0, y, 1152, 648);
  }

  drawFarGrounds() {
    image(this.farGrounds, -150, HEIGHT - 220, 1232, 220);
  }

  drawGrounds(){

  }
}
