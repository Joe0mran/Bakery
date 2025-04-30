function loadTheme() {
    const savedTheme = localStorage.getItem("theme-mode");
    // If a saved theme exists, apply it
    if (savedTheme == "dark") {
        document.body.classList.add("dark");
        switchToDarkMode();

    } else {
        document.body.classList.add("light");
        switchToLightMode()
    }
}

function theme() {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        localStorage.setItem("theme-mode", "dark");
        switchToDarkMode();
    }
    else {
        localStorage.setItem("theme-mode", "light");
        switchToLightMode()
    }
}
function switchToLightMode() {
    const themebutton = document.getElementById('theme');
    const colorhouse = document.getElementById('iconhouse');
    const colormenu = document.getElementById('iconmenu');
    const colorphone = document.getElementById('icophone');
    const colorcart = document.getElementById('iconcart');
    const colorlog = document.getElementById('iconlog');
    themebutton.innerHTML = '<img src="moon-stars.png" alt="moon" width="30px">';
    colorhouse.src = "house-chimney.png";
    colormenu.src = 'apps.png';
    colorcart.src = 'cart-shopping-fast.png';
    colorlog.src = 'entrance.png';
    colorphone.src = 'phone-plus.png';
}

function switchToDarkMode() {
    const themebutton = document.getElementById('theme');
    const colorhouse = document.getElementById('iconhouse');
    const colormenu = document.getElementById('iconmenu');
    const colorphone = document.getElementById('icophone');
    const colorcart = document.getElementById('iconcart');
    const colorlog = document.getElementById('iconlog');
    themebutton.innerHTML = '<img src="brightness.png" alt="sun" width="30px">';
    colorhouse.src = 'house-chimney -white.png';
    colormenu.src = 'apps -1.png';
    colorcart.src = 'cart-shopping-fast (1).png';
    colorlog.src = 'entrance (1).png';
    colorphone.src = 'phone-plus (1).png'
}