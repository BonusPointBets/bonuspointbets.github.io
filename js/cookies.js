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

function changeCookieValue(cookieName, value) {
    document.cookie = `${cookieName}=${value}`;
}

function readCookies() {
    document.getElementById("cookie-username").innerHTML += getCookie("username");
    document.getElementById("cookie-bonuspoints").innerHTML += getCookie("bonuspoints");
    document.getElementById("cookie-bonuspointsgained").innerHTML += getCookie("bonuspointsgained");
    document.getElementById("cookie-bonuspointslost").innerHTML += getCookie("bonuspointslost");
}
