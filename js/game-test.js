let pricedown;
let angleRotate = 0.0;

function preload() {
    pricedown = loadFont("/fonts/pricedown.otf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(pricedown);
    textSize(width / 10);
    textAlign(CENTER, CENTER);
}

function draw() {
    clear();

    push();
    translate(width / 2, height / 2);
    rotate(radians(angleRotate));
    text("boņuks", 0, 0);
    pop();

    angleRotate += 1;
}
