loadTheme();
loadHomeTheme();
const themebutton = document.getElementById('theme');
themebutton.addEventListener('click', function () {
    theme();
    homeTheme();

});


let vidtext1 = "Freshly baked,";
let vidtext2 = "just for you!!";
let textspeed = 200;
let text1index = 0;
let text2index = 0;
function letterbyletter() {
    if (text1index < vidtext1.length) {
        document.getElementById("vidtext").innerHTML += vidtext1.charAt(text1index);
        text1index++;
        setTimeout(letterbyletter, textspeed);;
    }
    else {
        setTimeout(letterbyletter2, textspeed)
    }
}
function letterbyletter2() {
    if (text2index < vidtext2.length) {
        document.getElementById("vidtext2").innerHTML += vidtext2.charAt(text2index);
        text2index++;
        setTimeout(letterbyletter2, textspeed);
    }

}
window.onload = letterbyletter;
const start = 1;
let counter = start * 60;
let offertime = document.getElementById('timer');
let cartbutton = document.getElementById('add-offer');
function countdown() {
    let min = Math.floor(counter / 60);
    let second = counter % 60;

    if (second < 10) {
        second = '0' + second;
    }

    if (counter <= 0) {
        offertime.innerHTML = 'offer end';
        cartbutton.style.display = "none";
        clearInterval(offerInterval);
    }
    else {
        offertime.innerHTML = `${min}:${second}`;
        counter--;
    }
}
const offerInterval = setInterval(countdown, 1000);
function loadHomeTheme() {
    const savedTheme = localStorage.getItem("theme-mode");
    // If a saved theme exists, apply it
    if (savedTheme == "dark") {
        homeSwitchToDarkModek();
    } else {
        homeSwitchToLightMode();
    }
}
function homeTheme() {
    const savedTheme = localStorage.getItem("theme-mode");
    if (savedTheme == "dark") {
        homeSwitchToDarkModek();
    }
    else {
        homeSwitchToLightMode();
    }
}
function homeSwitchToLightMode() {
    const logoFooter = document.getElementById("logo-footer");
    const phonefooter = document.getElementById("icon-footer");
    logoFooter.src = 'logono.png';
    phonefooter.src = 'phone-plus.png';

}

function homeSwitchToDarkModek() {
    const logoFooter = document.getElementById("logo-footer");
    const phonefooter = document.getElementById("icon-footer");
    logoFooter.src = 'darklogo-removebg-preview (1).png';
    phonefooter.src = 'phone-plus (1).png';

}

