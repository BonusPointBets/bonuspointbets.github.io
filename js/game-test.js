let pricedown;

function preload() {
    pricedown = loadFont("/fonts/pricedown.otf");
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    textFont(pricedown);
    textSize(width / 10);
    textAlign(CENTER, CENTER);
}
function draw() {
    background(0);
    let time = millis();
    rotateX(time / 1000);
    rotateZ(time / 1234);
    text("boņuks", 0, 0);
}
