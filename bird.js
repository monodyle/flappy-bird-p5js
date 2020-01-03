let img;
const gravity = 0.9,
      lift = -12,
      velocity = 0;

function Bird() {
  this.y = height / 3;
  this.x = 64;
  this.gravity = gravity;
  this.lift = lift;
  this.velocity = velocity;

  img = loadImage('assets/bird.png');

  this.show = function () {
    image(img, this.x, this.y, img.width / 2, img.height / 2);
  }

  this.up = function () {
    this.velocity += this.lift;
  }

  this.update = function () {
    this.velocity += this.gravity;
    this.velocity *= 0.98;
    this.y += this.velocity;

    if (this.y > height - img.width) {
      this.y = height - img.width;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }

  this.underground = function () {
    return (this.y + img.height >= height)
  }

  this.die = function () {
    this.velocity = 0;
    this.gravity = 0;
  }
}