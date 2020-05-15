// Store the value of this preference in local storage, if it’s available
// ○ The one whose value equals the stored value should be “preselected”
// ○ When the user selects the other radio button, his option should be
// saved in the local storage
// ○ Save this preference in a cookie as fallback (use the previous cookie
// hands on)

const language1 = {
    name: "language",
    value: "1",
}

const language2 = {
    name: "language",
    value: "2",
}

document.getElementById("en").onclick = function() {
    console.log('en')
    window.localStorage.setItem('language', JSON.stringify(language1));
}

document.getElementById("ro").onclick = function() {
    console.log('ro')
    window.localStorage.setItem('language', JSON.stringify(language2));
}

function onStartUp() {
    let storageValue = window.localStorage.getItem('language');
    if (storageValue === JSON.stringify(language1)) {
        document.getElementById("ro").checked = false;
        document.getElementById("en").checked = true;
    } else if (storageValue === JSON.stringify(language2)) {
        document.getElementById("ro").checked = true;
        document.getElementById("en").checked = false;
    }
}
onStartUp();