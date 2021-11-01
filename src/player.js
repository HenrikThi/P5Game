class Player {
  //maybe later: make the dino grow!
  constructor() {
    this.image = loadImage("../assets/dino/dino_red.png");
    this.width = 100;
    this.height = 100;
    this.x = 0;
    this.y = GROUND_LVL - 85;
    this.imgState = 0; //temp
    this.score = 0;
  }

  draw() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      this.x -= 10;
      if (this.x < 0) this.x = 0;
    }

    if (keyIsDown(RIGHT_ARROW)|| keyIsDown(68)) {
      this.x += 10;
      if (this.x > WIDTH - 100) this.x = WIDTH - 100;
    }
    if (frameCount % 12 === 0) {
      // console.log("frames 100");
      this.imgState = (this.imgState + 1) % 3;
    }
    image(
      this.image,
      this.x,
      this.y,
      100,
      100,
      this.imgState * 120,
      0,
      120,
      120
    );
  }
}

class Fruit {
  constructor(images) {
    this.images = images;
    this.width = 100;
    this.height = 100;
    this.type = Math.floor(Math.random() * FRUIT_NAMES.length);
    this.x;
    this.y;

    this.setRandomPosition();
  }

  draw() {
    this.y += 10;
    image(this.images[this.type][this.getImageIdx()], this.x, this.y, 100, 100);
  }

  getImageIdx() {
    const speed = 20; //lower number ^= faster animation
    let frameNumber = frameCount % speed;
    if (frameNumber <= Math.floor(speed / 3)) return 0;
    if (frameNumber <= Math.floor((speed / 3) * 2)) return 1;
    return 2;
  }

  setRandomPosition() {
    this.x = Math.floor(Math.random() * (WIDTH - 100));
    this.y = 0 - 100;
  }

  checkCollision(playerInfo) {
    // get the middle of the player
    const playerX = playerInfo.x + playerInfo.width / 2;
    const playerY = playerInfo.y + playerInfo.height / 2;

    // get the middle of the obstacle
    const obstacleX = this.x + this.width / 2;
    const obstacleY = this.y + this.height / 2;
    // console.log(obstacleX, obstacleY, playerX, playerY);

    // measure the distance between obstacle and player
    if (dist(obstacleX, obstacleY, playerX, playerY) > 40) {
      // this is not a collision
      return false;
    } else {
      game.player.score += 50
      if(this.type ===1){
        alert(`Don't eath the lemons!!! You lose the game...`);
        GAME_OVER = 1;
      }
      if(game.player.score >= 1000){
        alert(`You win the game. But remember... Don't eat the lemons!!!`);
        GAME_OVER = 1;
      }
      // console.log(game.player.score)
      console.log(this.type);
      return true;
    }
  }
}
