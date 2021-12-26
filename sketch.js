var bgImg
var flyingBirdImg, deadBirdImg;
var eggImg, bulletImg;
var planeImg; 
var lifebar1, lifebar2, lifebar3;

var invisCeling;
var score;


function preload() {
bgImg = loadImage("Assets/Sky_Background.png");
flyingBirdImg = loadAnimation("Assets/Vulture_Flying1.png", "Assets/Vulture_Flying2.png", "Assets/Vulture_Flying3.png");
deadBirdImg = loadImage("Assets/Vulture_Dead.png");
eggImg = loadImage("Assets/Golden_Egg.png");
bulletImg = loadImage("Assets/Bullet.png");
planeImg = loadImage("Assets/Plane.png");
lifebar1 = loadImage("Assets/lifebar1.png");
lifebar2 = loadImage("Assets/lifebar2.png");
lifebar3 = loadImage("Assets/lifebar3.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  invisCeling = createSprite(960, windowHeight-1, windowWidth, 1);
  flyingBird = createSprite(windowWidth - 850, windowHeight - 500, 100,100);
  flyingBird.addAnimation("flying", flyingBirdImg);
}

function draw() {
  background(bgImg);  
  drawSprites();
}