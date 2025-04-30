loadTheme();
const themebutton = document.getElementById('theme');
themebutton.addEventListener('click', theme);

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
const start = 0.5;
let counter = start * 60;
let offertime = document.getElementById('timer');
let buttonremove = document.getElementById('add-offer');
function countdown() {
    let min = Math.floor(counter / 60);
    let second = counter % 60;

    if (second < 10) {
        second = '0' + second;
    }

    if (counter <= 0) {
        // clearInterval(con);
        offertime.innerHTML = 'offer end';
        buttonremove.innerHTML = 'cant add';
        return;
    }
    else {
        offertime.innerHTML = `${min}:${second}`;
        counter--;
    }
}
setInterval(countdown, 1000);


