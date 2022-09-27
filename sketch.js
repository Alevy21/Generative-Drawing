
let symmetry = 12;
let angle = 360 / symmetry;
let xoff = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
angleMode(DEGREES);
  background(0);
translate(width/2,height/2);
stroke(0);
  for (let i = 0; i < symmetry; i++){
  rotate(angle);
  line(0, 0, width, 0); 
  colorMode(HSB, 255, 255, 255);
}


}

function draw() {
  
translate(width/2,height/2);
 
  let mx = mouseX - width/2
  let my = mouseY - height/2
   let pmx = pmouseX - width/2
     let pmy = pmouseY - height/2
  
     
     if (mouseIsPressed){
      let hu = noise(xoff)*255;
      xoff += 0.01;
       stroke(hu, 255, 255, 100);
let angle = 360 / 12;
  for (let i = 0; i < 12; i++){
  rotate(angle);
  let d = dist(mx, my, pmx, pmy);
 let sw = map(d, 0, 20, 20,1 ); 
  strokeWeight(sw);
  line(mx, my, pmx, pmy); 
}
 }

}






