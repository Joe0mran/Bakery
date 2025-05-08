loadTheme();
const themebutton = document.getElementById('theme');
themebutton.addEventListener('click', theme);

document.addEventListener("DOMContentLoaded",function() {
    const back =["670c40b0-3e3e-405f-824d-19d840027923.jpg",
                 "donut.jpg" ,
                 "4.jpg",
                 "coffe.jpg",
                 "3.jpg",
                 "coofe2.jpg",
                 "cc.jpg" ,
                 "2.jpg",
                 "back.jpg",
        ] ;

    const img= document.getElementById("img");

    let index=0;
    function changeimage(){
    index= (index+1)% back.length;

    img.src=back[index];
}
    setInterval(changeimage,5000);
})


