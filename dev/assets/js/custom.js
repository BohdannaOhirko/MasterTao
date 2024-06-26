// $( document ).ready(function() {
//    $('.single-item').slick(); 
//    console.log( "ready!" );
// });

const burger = document.querySelector('#burger');
const mobileContainer = document.querySelector('.mobile-container');
function showBurgerMenu(){
  mobileContainer.classList.toggle('show');
}
showBurgerMenu();
burger.addEventListener('click', showBurgerMenu);