let pricedown;
let flip;
let coinColor;
let coinText = "";
let flipHistory = [];
let headsColor;
let tailsColor;

function preload() {
    pricedown = loadFont("/fonts/pricedown.otf");
    headsColor = color(255, 153, 51);
    tailsColor = color(51, 153, 255);
    coinColor = (120, 120, 120);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(pricedown);
    textSize(width / 50);
    textAlign(CENTER, CENTER);
}
function draw() {
    clear();
    // background(0, 0);
    let time = millis();

    // Flip history
    {
        push();
        translate(width / 2, height / 2);
        text("Flip History:", 0, -20);
        showFlipHistory();
        pop();
    }

    // Text
    {
        push();
        translate(width / 2, height / 3);
        textSize(width / 20);
        text("Click to flip a coin!", 0, -200);
        pop();
    }

    // Coin
    {
        push();
        translate(width / 2, height / 3);
        fill(coinColor);
        ellipse(0, 0, 80, 80);
        fill(0);
        textSize(width / 60);
        text(coinText, 0, 0 - 2);
        pop();
    }
}
function mousePressed() {
    coinFlip();
}

function coinFlip() {
    var flip = random(100);

    if (flip < 50) {
        coinColor = color(255, 153, 51);
        coinText = "HEADS";
        flipHistory.push("H");
    } else {
        coinColor = color(51, 153, 255);
        coinText = "TAILS";
        flipHistory.push("T");
    }
}

function showFlipHistory() {
    let y = 20;
    for (let i = 0; i < flipHistory.length; i++) {
        let value = flipHistory[i];
        let x = 1 + (i % 8) * 30;
        let y = 10 + floor(i / 8) * 40;
        textSize(width / 40);

        text(value, x - 100, y);
    }
}
