// $( document ).ready(function() {
//    $('.single-item').slick();
//    console.log( "ready!" );
// });

const burger = document.querySelector("#burger");
const mobileContainer = document.querySelector(".mobile-container");
burger.classList.toggle("open");
mobileContainer.classList.toggle("show");
function showBurgerMenu() {
	burger.classList.toggle("open");
	mobileContainer.classList.toggle("show");
}
showBurgerMenu();
burger.addEventListener("click", showBurgerMenu);

const swiper = new Swiper(".slider-info", {
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// autoplay: {
	// 	delay: 3000,
	// },
});
