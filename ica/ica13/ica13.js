// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//console.log("loaded properly")

// vel for velocity (speed of balls)
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI); //defines ball perameters
    ctx.fill();
  }

  update() {
    //handles right edge of screen
    if((this.x + this.size) >= width) {
      this.velX = -(this.velX); //if velocity value is negative, make it positive
    }

    //handles left edge of screen
    if((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }

    //handles bottom of screen
    if((this.y + this.size) >= height) {
      this.velY = -(this.velY); //if velocity value is negative, make it positive
    }

    //handles top of screen
    if((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;

  }

  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx*dx + dy*dy);

        if(distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

const balls = [];

while (balls.length < 15) {
  const size = random(10,20);
  const ball = new Ball (
    random(0 - size, width-size),
    random(0 - size, height - size),
    random(-7,7),
    random(-7,7),
    randomRGB(),
    size,
  );
  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(0,0,width,height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  //calls the function as a smooth animation
  requestAnimationFrame(loop);
}

loop();

//console.log(balls);