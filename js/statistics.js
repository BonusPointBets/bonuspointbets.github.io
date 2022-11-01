// Gets a random number between 0 and (max - 1)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Sets super real statistic counter value if doesnt exist
function onPageLoad() {
    if (!getCookie("BonusPointsEarnedRandomly")) {
        setCookie("BonusPointsEarnedRandomly", 46505);
        setCookie("CoinsFlippedRandomly", 364);
        setCookie("CoinsLostRandomly", 42599);
    }
    document.getElementById("cookie-BonusPointsEarned").innerHTML = getCookie("BonusPointsEarnedRandomly");
    document.getElementById("cookie-CoinsFlipped").innerHTML = getCookie("CoinsFlippedRandomly");
    document.getElementById("cookie-PointsLost").innerHTML = getCookie("CoinsLostRandomly");
}

// Super real statistic counter for bonus points earned
let timerRandomizeBonusPointsEarned = setInterval(randomizeBonusPointsEarned, 5000);
function randomizeBonusPointsEarned() {
    setCookie("BonusPointsEarnedRandomly", Number(getCookie("BonusPointsEarnedRandomly")) + getRandomInt(100));
    document.getElementById("cookie-BonusPointsEarned").innerHTML = getCookie("BonusPointsEarnedRandomly");
}

// Super real statistic counter for coins flipped
let timerRandomizeCoinsFlipped = setInterval(randomizeCoinsFlipped, 6000);
function randomizeCoinsFlipped() {
    setCookie("CoinsFlippedRandomly", Number(getCookie("CoinsFlippedRandomly")) + getRandomInt(5));
    document.getElementById("cookie-CoinsFlipped").innerHTML = getCookie("CoinsFlippedRandomly");
}

// Super real statistic counter for bonus points lost
let timerRandomizeBonusPointsLost = setInterval(randomizeBonusPointsLost, 5500);
function randomizeBonusPointsLost() {
    setCookie("CoinsLostRandomly", Number(getCookie("CoinsLostRandomly")) + getRandomInt(100));
    document.getElementById("cookie-PointsLost").innerHTML = getCookie("CoinsLostRandomly");
}
