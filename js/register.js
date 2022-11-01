document.getElementById("register-submit-button").onclick = function () {
    getUsernameValue();
};

function onRegisterLoad() {
    document.getElementById("onload-register-button").click();
}

function getUsernameValue() {
    let username = document
        .getElementById("username-input-field")
        .value.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    if (username.length == 0 || username.length > 15 || username.indexOf(" ") >= 0) {
        if (username.length == 0) {
            document.getElementById("register-error-message").innerHTML = "Username too short!";
        } else if (username.length > 15) {
            document.getElementById("register-error-message").innerHTML = "Username too long!";
        } else if (username.indexOf(" ") >= 0) {
            document.getElementById("register-error-message").innerHTML = "Username cannot contain spaces!";
        }
    } else {
        newUserRegister(username);
    }
}

function newUserRegister(username) {
    setCookie("username", username);
    setCookie("bonuspoints", 1000);
    setCookie("bonuspointsgained", 1000);
    setCookie("bonuspointslost", 0);
    location.replace("/Profile.html");
}

// Set cookie value for 1 year
function setCookie(c_name, c_value) {
    let exdays = 365;
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 365);
    document.cookie = encodeURIComponent(c_name) + "=" + encodeURIComponent(c_value) + (!exdays ? "" : "; expires=" + exdate.toUTCString());
}
