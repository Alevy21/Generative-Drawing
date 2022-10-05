// for red, green, and blue color values
let r, g, b;


let x = 5;
let y = 60;
let dim = 800;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
createCanvas(windowWidth, windowHeight);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
   createCanvas(windowWidth, windowHeight);
  noStroke();
  max_distance = dist(0, 0, width, height);


}

function draw() {
  background(0);
  // Animate by increasing our x value
  x = x + 200;
  // If the shape goes off the canvas, reset the position
  if (x > width + dim) {
    x = -dim;
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(360, 200, 200, 200);}
    
    for (let i = 0; i <= width; i += 20) {
    for (let j = 0; j <= height; j += 20) {
      let size = dist(mouseX, mouseY, i, j);
      size = (size / max_distance) * 66;
      quad(i, j, size, size);
      
    }
  }
// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
 
  

 
  

  

}

ellipse
