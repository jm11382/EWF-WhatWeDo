// Hamburger Animation Start//
const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navCstm');
    const navLinks = document.querySelectorAll('.navCstm a');



    burger.addEventListener('click', () => {
            //Toggle Nav
    nav.classList.toggle('nav-active');
            //Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.4s ease forwards ${index / 9 + 0.3}s`
        }
    });
            //Burger Animation
        burger.classList.toggle('toggle');
    });
}
navSlide();
// Hamburger Animation End//

var cnt=document.getElementById("count"); 
var water=document.getElementById("water");
var percent=cnt.innerText;
var interval;
interval=setInterval(function(){ 
  percent++; 
  cnt.innerHTML = percent; 
  water.style.transform='translate(0'+','+(100-percent)+'%)';
  if(percent==87){
    clearInterval(interval);
  }
},0);