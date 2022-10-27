let pricedown;
let flip;
let coinColor;
let coinText = "";
let flipHistory = [];
let headsColor;
let tailsColor;
let flipButton;

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

    // Create button
    flipButton = createElement("button", "FLIP");
    flipButton.id("flip-button");

    if (!getCookie("bonuspoints")) {
        document.cookie = "bonuspoints=1000";
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();
    // background(0, 0);
    let time = millis();

    // Text
    {
        push();
        translate(width / 2, height / 3);
        textSize(width / 20);
        text("Click to flip a coin!", 0, -200);
        text(getCookie("bonuspoints"), 0, -100);
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

    // Button
    {
        push();
        flipButton.position(width / 2 - flipButton.width / 2, height / 2);
        flipButton.mousePressed(coinFlip);
        pop();
    }

    // Flip history
    {
        push();
        translate(width / 2, height / 2);
        text("Flip History:", 0, -20);
        showFlipHistory();
        pop();
    }
}
// function mousePressed() {
//     coinFlip();
// }

function coinFlip() {
    var flip = random(100);

    if (flip < 50) {
        coinColor = color(255, 153, 51);
        coinText = "HEADS";
        flipHistory.push("H");
        changeBonusPoints("bonuspoints", 10);
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

function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(";").forEach(function (el) {
        let [key, value] = el.split("=");
        cookie[key.trim()] = value;
    });
    return cookie[cookieName];
}

function changeBonusPoints(cookieName, amount) {
    let previousValue = getCookie(cookieName);
    document.cookie = `bonuspoints=${Number(previousValue) + amount}`;
}
