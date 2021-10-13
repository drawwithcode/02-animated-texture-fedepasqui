let value = 0;
let delay = 0;

// create a class
class Bubble {
  // define constructor
  constructor(temp_radius, temp_x, temp_y) {
    // add property to class
    this.radius = temp_radius;
    this.x = temp_x;
    this.y = temp_y;
    this.color = "yellow";
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(this.color);
    noStroke();
    circle(0, 0, this.radius);
    pop();
  }

  move() {
    this.x += noise(-0.5, +0.5);
    // this.y += noise(1, 0);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

let bubble1 = new Bubble(20, 300, 100);
let bubble2 = new Bubble(10, 500, 200);
let bubble3 = new Bubble(10, 500, 300);
let bubble4 = new Bubble(30, 0, 400);
let bubble5 = new Bubble(20, 50, 500);
let bubble6 = new Bubble(10, 0, 600);
let bubble7 = new Bubble(10, 0, 700);

function draw() {
  background(value);
  // fill("black");
  // circle(20, 20, 10);
  for (let x = 0; x < windowWidth; x += 25) {
    for (let y = 0; y < windowHeight; y += 25) {
      noStroke();
      let colour = map(mouseX, 0, width, 0, 255);
      fill(colour, colour, 255);
      let pattern = rect(x, y, 10, 10, delay);
    }
  }

  bubble1.move();
  bubble1.display();
  bubble2.move();
  bubble2.display();
  bubble3.move();
  bubble3.display();
  bubble4.move();
  bubble4.display();
  bubble5.move();
  bubble5.display();
  bubble6.move();
  bubble6.display();
  bubble7.move();
  bubble7.display();

  //cambio colore tenendo premuto il mouse (nella funzione draw)
  // if (mouseIsPressed) {
  //   color = "darkblue";
  // } else {
  //   color = "white";
  // }
}

function mousePressed() {
  if (value === 0) {
    value = 180;
  } else {
    value = 0;
  }

  if (delay === 0) {
    delay = 50;
  } else {
    delay = 0;
  }
}

// function mouseMoved() {
//   color = color + 5;
//   if (color > 255) {
//     color = 0;
//   }
// }

//cambio colore quando premo mouse (fuori dalla funzione draw)
// function mousePressed() {
//   if (color === "darkblue") {
//     color = 255;
//   } else {
//     color = "darkblue";
//   }
//   return false;
// }
