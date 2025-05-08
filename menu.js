loadTheme();
const themebutton = document.getElementById('theme');
themebutton.addEventListener('click', theme);

document.addEventListener("DOMContentLoaded",function() {
    const back =["2.jpg","3.jpg","4,jpg","670c40b0-3e3e-405f-824d-19d840027923.jpg", "cc.jpg" ,"coffe.jpg","back.jpg"] ;

    const img= document.getElementById("img");

    let index=0;
    function changeimage(){
    index= (index+1)% back.length;

    img.src=back[index];
}
    setInterval(changeimage,2000);
})


