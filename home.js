starsLife = [];
starsX = [];
starsY = [];
starsR = [];
starsB = [];
nuobois = 200;
maxRadius = 10;

function setup() {
  createCanvas(windowWidth, windowHeight+200);
  if (windowWidth <= 600){
    maxRadius = 20;
  }
  for(let i = 0; i <= nuobois; i++){
    starsLife[i] = round(random(nuobois*1000));
    starsX[i] = random(width);
    starsY[i] = random(height);
    starsR[i] = random(nuobois*1000);
    starsB[i] = random(nuobois*1000);
  }
  console.log(maxRadius);
}

function draw() {
  background (0,0,30);
  starsLife.forEach(starChange);
}

function starChange(value, index){
  let x = map(noise(starsR[index]),0,1,0,255);
  let y = map(noise(starsB[index]),0,1,0,255);
  let z = map(noise(value),0,1,1,maxRadius);
  noStroke();
  fill(y,0,x,map(noise(value),0,1,0,255));
  ellipse(starsX[index], starsY[index],z );
  starsLife[index] += random(0.01,0.005);
  starsB[index] += random(0.001,0.01);
  starsX[index] += map(noise(starsLife[index]),0,1,-1,1);
  starsY[index] += map(noise(1000+starsLife[index]),0,1,-1,1);

  if (starsX[index] > width + z){
    starsX[index] = 1;
  } else if (starsX[index] < 0 - z){
    starsX[index] = width;
  }
  if (starsY[index] > height + z){
    starsY[index] = 1;
  } else if (starsY[index] < 0 - z){
    starsY[index] = height;
  }
}