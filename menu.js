loadTheme();
const themebutton = document.getElementById('theme');
themebutton.addEventListener('click', theme);

document.addEventListener("DOMContentLoaded",function() {
    const back =[ "cc.jpg" ,"coffe.jpg","back.jpg"] ;

    const img= document.getElementById("img");

    let index=0;
    function changeimage(){
    index= (index+1)% back.length;

    img.src=back[index];
}
    setInterval(changeimage,2000);
})


