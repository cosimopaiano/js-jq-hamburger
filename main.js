/**
*Hamburger menu: mostrare / nascondere
 il menu principale
 *non modificare HTML e CSS
*/

// logica gli elementi su cui lavorare sono :
// la a di header-right
// hamburger-Menu
// close
// tutti trasformabili in variabili

var hamburgerMenu = $('.hamburger-menu');
var hamburger = $('.header-right a');
var close = $('.close');


// Prova usando fadeIn e out invece di show e hide
hamburger.click(function() {
  hamburgerMenu.fadeIn();

} );

close.click(function() {
  hamburgerMenu.fadeOut();

} );
