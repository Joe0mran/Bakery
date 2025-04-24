function theme() {

    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        themebutton.innerHTML = '<img src="brightness.png" alt="sun" width="30px">';
        colorhouse.src = 'house-chimney -white.png';
        colormenu.src = 'apps -1.png';
        colorcart.src = 'cart-shopping-fast (1).png';
        colorlog.src = 'entrance (1).png';
        colorphone.src = 'phone-plus (1).png'

    }
    else {
        themebutton.innerHTML = '<img src="moon-stars.png" alt="moon" width="30px">';
        colorhouse.src = "house-chimney.png";
        colormenu.src = 'apps.png';
        colorcart.src = 'cart-shopping-fast.png';
        colorlog.src = 'entrance.png';
        colorphone.src = 'phone-plus.png';


    }


}
themebutton.addEventListener('click', theme);

