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

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function debugResetCookies() {
    deleteAllCookies();
    let username = prompt("Enter your username");
    document.cookie = `username=${username}`;
    document.cookie = "bonuspoints=1000";
    document.cookie = "bonuspointsgained=1000";
    document.cookie = "bonuspointslost=0";
    location.reload();
}
