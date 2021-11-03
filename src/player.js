class Player {
  //maybe later: make the dino grow!
  constructor() {
    this.image = loadImage("assets/dino/dino_red.png");
    this.imageMirrored = loadImage("assets/dino/dino_red_mirror.png");
    this.width = 100;
    this.height = 100;
    this.x = WIDTH / 2 - this.width / 2;
    this.y = GROUND_LVL - 85;
    this.imgIdx = 0;
    this.score = 0;
    //-1 =^ move left, 0 =^ standing still, 1^ move right
    this.currentDirection = 0;
    this.directionsIdx = { left: 0, standing: 0, right: 0 };
  }

  draw() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      this.moveLeft();
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      this.moveRight();
    } else {
      this.currentDirection = 0;
    }

    this.setImage();
    const img = this.directionsIdx.left > 0 ? this.imageMirrored : this.image;
    image(img, this.x, this.y, 100, 100, this.imgIdx * 120, 0, 120, 120);
  }

  setImage() {
    if (frameCount % 12 != 0) return;

    //-1 =^ move left, 0 =^ standing still, 1^ move right
    if (this.currentDirection === 0) {
      this.directionsIdx.standing++;
      this.directionsIdx.left = 0;
      this.directionsIdx.right = 0;
      this.imgIdx = (this.directionsIdx.standing + 1) % 3;
    } else if (this.currentDirection == -1) {
      this.directionsIdx.standing = 0;
      this.directionsIdx.left++;
      this.directionsIdx.right = 0;
      this.imgIdx = 20 - (this.directionsIdx.left % 4);
    } else if (this.currentDirection == 1) {
      this.directionsIdx.standing = 0;
      this.directionsIdx.left = 0;
      this.directionsIdx.right++;
      this.imgIdx = (this.directionsIdx.right % 6) + 3;
    }
  }

  moveLeft() {
    this.x -= 10;
    this.currentDirection = -1;
    if (this.x < 0) this.x = 0;
  }

  moveRight() {
    this.x += 10;
    this.currentDirection = 1;
    if (this.x > WIDTH - 100) this.x = WIDTH - 100;
  }
}

class Fruit {
  constructor(images, sounds) {
    this.images = images;
    this.sounds = sounds;
    this.width = 100;
    this.height = 100;
    this.type = this.getRndFruitType();
    this.x;
    this.y;

    this.setRandomPosition();

    // this.getRndFruitType();
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

    // measure the distance between obstacle and player
    if (dist(obstacleX, obstacleY, playerX, playerY) > 40) {
      // this is not a collision
      return false;
    } else {
      if (this.type !== 0) {
        game.player.score += 50;
        this.sounds.pickup.play();
      }

      if (this.type === 0) {
        this.sounds.toink.play();
        gameState = 3;
      }
      return true;
    }
  }

  getRndFruitType() {
    const score = game.player.score;
    const rnd = Math.random() * 100 + (score + 1) / 50;
    if (rnd >= 83.34) {
      return 0;
    } else {
      return Math.floor(Math.random() * (FRUIT_NAMES.length - 1)) + 1;
    }
  }
}
