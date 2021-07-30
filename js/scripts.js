"use strict";
/* ----ON CLICK---- */

/* When the hamburger menu button is clicked, it sets the state of the menuToggle
   to menu--open which allows for event management
*/
menuToggler.addEventListener('click', event => {
  menu.classList.toggle('menu--open');
});


topButton.addEventListener('click', event => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});




