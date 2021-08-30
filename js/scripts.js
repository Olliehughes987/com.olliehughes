"use strict";

let intro = "Hey, I'm Ollie Hughes :)"
let counter = 0


function typeWriter() {
  if(counter < intro.length) {
    document.getElementById("typing-text").innerHTML += intro.charAt(counter);
    counter++
    setTimeout(typeWriter, 50);
  } else {
    
  }
}

menuToggler.addEventListener('click', event => {
  menu.classList.toggle('menu--open');
});


window.addEventListener('load', () => {
  typeWriter();
})


