// Variables for image and canvas
let img;
let cnv;

// If key 's' is pressed, save the generated image
function keyPressed(){
  if (key === 's'){
    saveCanvas("portrait.jpg");
  }
}

// Load the image
function preload() {
  img = loadImage('pic.jpg');
}

// Setup the canvas
function setup() {
  // Create canvas
  cnv = createCanvas(img.width, img.height);
  // Set canvas width, height and position
  let newCanvasX = (windowWidth - img.width) / 2; 
  let newCanvasY = (windowHeight - img.height) / 2;
  cnv.position(newCanvasX, newCanvasY);
  
  // Traverse the image pixel by pixel
  for (let col = 0; col < img.width; col += 10) {
    for (let row = 0; row < img.height; row += 10) {
      let xPos = col;
      let yPos = row;
      // Get the RGB values of the pixel
      let c = img.get(xPos, yPos);

      // This whole section randomly chooses a stroke weight, position of curve, and angle of rotation for the curve that creates the drawing 
      push();
      translate(xPos, yPos);
      rotate(radians(random(360)));
      noFill();
      stroke(color(c));
      strokeWeight(random(10));
      point(xPos, yPos);
      strokeWeight(0.7);
      curve(
        xPos,
        yPos,
        sin(xPos) * random(100),
        cos(xPos) * sin(xPos) * random(160),
        random(20),
        random(50),
        cos(yPos) * sin(yPos) * random(200),
        cos(xPos) * sin(xPos) * 50
      );
      pop();
    }
  }
}
