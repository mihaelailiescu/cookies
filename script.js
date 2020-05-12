//salvezi in cookie valoarea selectata
//apoi in functie de ce valoare ai in cookie, acel button trebuie sa fie pre-selected
//cand user-ul bifeaza celalalt radio button, atunci trebuie sa apara selectat celelalt buton si cookie sa retina acea valoare 

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

document.getElementById("en").onclick = function() {
    console.log('en')
    eraseCookie('language');
    createCookie('language', 1, 1)
    document.getElementById("en").checked = true;
    document.getElementById("ro").checked = false;
}

document.getElementById("ro").onclick = function() {
    console.log('ro')
    eraseCookie('language');
    createCookie('language', 2, 1)
    document.getElementById("ro").checked = true;
    document.getElementById("en").checked = false;
}

if (getCookie("language") === "1") {
    document.getElementById("en").checked = true;
    document.getElementById("ro").checked = false;
} else {
    document.getElementById("en").checked = false;
    document.getElementById("ro").checked = true;
}