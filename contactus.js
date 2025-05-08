loadTheme();
const themebutton = document.getElementById('theme');
themebutton.addEventListener('click',theme);

document.addEventListener("DOMContentLoaded", function() {
 document.querySelector("form").addEventListener("submit",function (m){
    m.preventDefault();
    
    document.getElementById("button").textContent="We received your feedback";

;e.target.reset();
});
});



document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to Pretty Baked! We 're glad you're here.If you need any help ,please don't hesitate to contact us.")
});

document.addEventListener("DOMContentLoaded",function() {
   const textarea =document.getElementById("message");
   const counter =document.getElementById("counter");

   textarea.addEventListener("input",function(){
    const Length = textarea.value.length;
    counter.textContent = `${Length} / 500`;
   });
})
