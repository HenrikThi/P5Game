class Foreground {
  constructor() {
    this.ground04 = loadImage(
      "assets/foreground/Village Set_Platformer - Ground 04.png"
    );
    this.ground10 = loadImage(
      "assets/foreground/Village Set_Platformer - Ground 10.png"
    );
    this.ground11 = loadImage(
      "assets/foreground/Village Set_Platformer - Ground 11.png"
    );
    this.ground02 = loadImage(
      "assets/foreground/Village Set_Platformer - Ground 02.png"
    );
    this.ground12 = loadImage(
      "assets/foreground/Village Set_Platformer - Ground 12.png"
    );
    this.ground08 = loadImage(
      "assets/foreground/Village Set_Platformer - Ground 08.png"
    );
  }

  draw() {
    const tiles = [
      this.ground04,
      this.ground02,
      this.ground02,
      this.ground10,
      this.ground11,
      this.ground11,
      this.ground11,
      this.ground11,
      this.ground11,
      this.ground11,
      this.ground12,
      this.ground02,
      this.ground02,
      this.ground02,
      this.ground02,
      this.ground02,
      this.ground02,
      this.ground02,
      this.ground02,
      this.ground08,
    ];
    const y = GROUND_LVL;
    tiles.forEach((tile, idx) => image(tile, 50 * idx, y, 50, 50));
  }
}
