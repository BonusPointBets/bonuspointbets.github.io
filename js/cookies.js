// Get cookie value
function getCookie(c_name) {
    var nameEQ = c_name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Set cookie value for 1 year
function setCookie(c_name, c_value) {
    let exdays = 365;
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 365);
    document.cookie = encodeURIComponent(c_name) + "=" + encodeURIComponent(c_value) + (!exdays ? "" : "; expires=" + exdate.toUTCString());
}

// Set cookie for specific amount of days
function setCookieForDays(c_name, c_value, c_days) {
    let exdays = c_days;
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + c_days);
    document.cookie = encodeURIComponent(c_name) + "=" + encodeURIComponent(c_value) + (!exdays ? "" : "; expires=" + exdate.toUTCString());
}

// CHANGE SOON, BAD CODE (changes bonus points by a value)
function changeBonusPoints(c_name, c_value) {
    let previousValue = getCookie(c_name);
    document.cookie = `bonuspoints=${Number(previousValue) + c_value}`;
}

// Reads cookies for profile page
function readCookies() {
    if (getCookie("username")) {
        console.log("YES");
        document.getElementById("cookie-username").innerHTML += getCookie("username");
        document.getElementById("cookie-bonuspoints").innerHTML += getCookie("bonuspoints");
        document.getElementById("cookie-bonuspointsgained").innerHTML += getCookie("bonuspointsgained");
        document.getElementById("cookie-bonuspointslost").innerHTML += getCookie("bonuspointslost");
    }
}

// Deletes all cookies
function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

// DEBUG Resets all cookies
function debugResetCookies() {
    deleteAllCookies();
    let username = prompt("Enter your username.");
    while (username.length == 0 || username.length > 15 || username.indexOf(" ") >= 0) {
        if (username.length == 0) {
            username = prompt("Username too short.");
        } else if (username.length > 15) {
            username = prompt("Username too long.");
        } else if (username.indexOf(" ") >= 0) {
            username = prompt("Username cannot contain spaces.");
        }
    }
    setCookie("username", username);
    setCookie("bonuspoints", 1000);
    setCookie("bonuspointsgained", 1000);
    setCookie("bonuspointslost", 0);
    location.reload();
}


// Super real statistic counter for bonus points earned and current players
let timer = setInterval(testLog, 1000);
function testLog() {
    setCookie("BonusPointsEarnedRandomly", Number(getCookie("BonusPointsEarnedRandomly")) + 10);
    document.getElementById("BonusPointsEarned").innerHTML = getCookie("BonusPointsEarned");
}

function onPageLoad() {
    if (!getCookie("BonusPointsEarnedRandomly")){
        setCookie("BonusPointsEarnedRandomly", 46505);
    }
}
