const gameSpeed = 5;
let pass = false;

function Pipe() {
  this.spacing = 200;
  this.top = random(height / 6, (4 / 5) * height - this.spacing);
  this.bottom = height - this.top - this.spacing;
  this.x = width;
  this.w = 40;

  this.show = function () {
    fill(129, 208, 58);
    strokeWeight(1);
    rect(this.x, -1, this.w, this.top);
    rect(this.x, height - this.bottom + 1, this.w, this.bottom);
    // shadow
    fill(57, 94, 24);
    strokeWeight(0);
    rect(this.x + 32, -1, this.w / 5, this.top);
    rect(this.x + 32, height - this.bottom + 1, this.w / 5, this.bottom);

    // 
    fill(129, 208, 58);
    strokeWeight(1);
    rect(this.x - 2, this.top - 8, this.w + 4, 8);
    rect(this.x - 2, height - this.bottom, this.w + 4, 8);
  }

  this.offscreen = function () {
    return (this.x <= -this.w);
  }

  this.hit = function (bird) {
    if (bird.y + bird.height / 2 < this.top || (bird.y  + bird.height / 2) > (height - this.bottom)) {
      if ((bird.x + bird.width / 2) > this.x && (bird.x + bird.width / 2) < (this.x + this.w)) {
        this.touched = true;
        return true;
      }
    }
    this.touched = false;
    return false;
  }

  this.passed = function (bird) {
    if (pass) return false;
    if (!pass && (this.x + (this.w / 2) < bird.x)) {
      passed = true;
      return true;
    }
  }

  this.update = function () {
    this.x -= gameSpeed;
  }
}