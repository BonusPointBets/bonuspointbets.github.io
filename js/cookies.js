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
    let username = prompt("Enter your username");
    setCookie("username", username);
    setCookie("bonuspoints", 1000);
    setCookie("bonuspointsgained", 1000);
    setCookie("bonuspointslost", 0);
    location.reload();
}
