// $( document ).ready(function() {
//    $('.single-item').slick();
//    console.log( "ready!" );
// });

const burger = document.querySelector("#burger");
const mobileContainer = document.querySelector(".mobile-container");
const body = document.querySelector("body");
burger.classList.toggle("open");
mobileContainer.classList.toggle("show");

function showBurgerMenu() {
	burger.classList.toggle("open");
	mobileContainer.classList.toggle("show");
	body.classList.toggle("overflow-hidden");
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

	// breakpoints: {
	// 	992: {
	// 		navigation: {
	// 			enabled: true,
	// 		},
	// 	},
	// },
});

const fileInput = document.querySelector("#calculation-file");
const fileName = document.querySelector("#file-name");
fileInput.addEventListener("change", () => {
	fileName.innerHTML = fileInput.files[0].name;
});
