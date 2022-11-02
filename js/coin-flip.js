let font;
let coinText = "";
let coinColor;
let headsColor;
let tailsColor;
let flipAngle = 0.0;
let flipping = false;
let flipButton;
let increaseButton;
let decreaseButton;
let maxButton;
let minButton;
let divideButton;
let multiplyButton;
let betAmount;
let buttonDiv;
let flippedOnce = false;

function preload() {
    font = loadFont("/fonts/AGENCYB.otf");
    headsColor = color(255, 153, 51);
    tailsColor = color(51, 153, 255);
    coinColor = (120, 120, 120);
}

function setup() {
    // Redirect to account creation if no cookies exist
    if (!getCookie("username")) {
        location.replace("/register.html");
    }

    // Set minimum possible bet
    if (getCookie("bonuspoints") >= 10) {
        betAmount = 10;
    } else {
        betAmount = Number(getCookie("bonuspoints"));
    }

    createCanvas(windowWidth, 600);
    textFont(font);
    textAlign(CENTER, CENTER);
    frameRate(60);

    buttonDiv = createDiv();
    buttonDiv.addClass("button-div");

    flipButton = createButton("FLIP");
    decreaseButton = createButton("-50");
    increaseButton = createButton("+50");
    minButton = createButton("MIN");
    maxButton = createButton("MAX");
    divideButton = createButton("1/2");
    multiplyButton = createButton("X2");

    flipButton.position(0, 0, "relative");
    decreaseButton.position(0, 0, "relative");
    increaseButton.position(0, 0, "relative");
    minButton.position(0, 0, "relative");
    maxButton.position(0, 0, "relative");
    divideButton.position(0, 0, "relative");
    multiplyButton.position(0, 0, "relative");

    flipButton.addClass("coinflip-button");
    decreaseButton.addClass("coinflip-button");
    increaseButton.addClass("coinflip-button");
    minButton.addClass("coinflip-button");
    maxButton.addClass("coinflip-button");
    divideButton.addClass("coinflip-button");
    multiplyButton.addClass("coinflip-button");

    flipButton.id("flip-button");
    decreaseButton.id("decrease-button");
    increaseButton.id("increase-button");
    minButton.id("min-button");
    maxButton.id("max-button");
    divideButton.id("divide-button");
    multiplyButton.id("multiply-button");

    flipButton.parent(buttonDiv);
    decreaseButton.parent(buttonDiv);
    increaseButton.parent(buttonDiv);
    minButton.parent(buttonDiv);
    maxButton.parent(buttonDiv);
    divideButton.parent(buttonDiv);
    multiplyButton.parent(buttonDiv);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    // Clear canvas
    clear();

    // Draw text
    push();
    {
        drawTopText();
    }
    pop();

    // Get input
    {
        getButtonPress();
    }

    // Draw and update coin
    push();
    {
        coinFunctions();
    }
    pop();
}

function coinFunctions() {
    // Draw coin
    drawCoin();

    // Animate flip
    animateFlip();
}

function drawCoin() {
    push();
    {
        translate(width / 2, height / 1.5);
        strokeWeight(4);
        fill(coinColor, 120);
        if (!flippedOnce) {
            stroke(coinColor, 255);
        } else {
            stroke(coinText == "HEADS" ? 190 : 0, 103, coinText == "TAILS" ? 190 : 0, 255);
        }
        ellipse(0, 50 - sin(flipAngle) * 150, 80, min(80 - sin(flipAngle * 2) * 200, 80));
        strokeWeight(0);
        fill(0);
        if (!flipping) {
            textSize(width / 60);
            fill(coinText == "HEADS" ? 190 : 0, 103, coinText == "TAILS" ? 190 : 0, 255);
            text(coinText, 0, 47);
        }
    }
    pop();
}

function animateFlip() {
    if (flipping) {
        flipAngle += 0.1;
        if (flipAngle > PI) {
            flipping = false;
            flippedOnce = true;
            flipAngle = 0;
            coinCalculations();
        }
    }
}

function coinCalculations() {
    let flip = random(100);
    // Win
    if (flip < 45) {
        coinColor = color(255, 153, 51);
        coinText = "HEADS";
        lastFlip = betAmount * 2;
        setCookie("bonuspointsgained", Number(getCookie("bonuspointsgained")) + Number(lastFlip));
    }
    // Lose
    else {
        coinColor = color(51, 153, 255);
        coinText = "TAILS";
        lastFlip = -betAmount;
        setCookie("bonuspointslost", Number(getCookie("bonuspointslost")) + Number(lastFlip));
    }
    setCookie("bonuspoints", Number(getCookie("bonuspoints")) + Number(lastFlip));
}

function getButtonPress() {
    flipButton.mousePressed(bFlip);
    increaseButton.mousePressed(bIncrease);
    decreaseButton.mousePressed(bDecrease);
    maxButton.mousePressed(bMax);
    minButton.mousePressed(bMin);
    multiplyButton.mousePressed(bMultipliy);
    divideButton.mousePressed(bDivide);
}

function bFlip() {
    if (!flipping && Number(getCookie("bonuspoints")) >= betAmount) {
        flipping = true;
    }
}

function bIncrease() {
    if (betAmount + 50 <= Number(getCookie("bonuspoints"))) {
        betAmount += 50;
    }
}

function bDecrease() {
    if (betAmount - 50 > 0) {
        betAmount -= 50;
    }
}

function bMax() {
    betAmount = Number(getCookie("bonuspoints"));
}

function bMin() {
    if (Number(getCookie("bonuspoints")) >= 1) {
        betAmount = 1;
    }
}

function bMultipliy() {
    if (betAmount * 2 <= Number(getCookie("bonuspoints"))) {
        betAmount *= 2;
    }
}

function bDivide() {
    if (floor(betAmount / 2) >= 1) {
        betAmount = floor(betAmount / 2);
    }
}

function drawTopText() {
    push();
    {
        translate(width / 2, 0 + textAscent() * 3);
        textSize(width / 20);
        text("Place your bets and flip a coin!", 0, height / 100);
        textSize(width / 35);
        text(`Bonus Points: ${getCookie("bonuspoints")}`, 0, 100 + height / 20);
        text(`Bet: ${betAmount}`, 0, 100 + height / 6);
    }
    pop();
}
