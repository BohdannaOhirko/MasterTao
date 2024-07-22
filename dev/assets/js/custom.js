// $( document ).ready(function() {
//    $('.single-item').slick();
//    console.log( "ready!" );
// });

const burger = document.querySelector("#burger");
const mobileContainer = document.querySelector(".mobile-container");
const body = document.querySelector("body");
burger.classList.toggle("show");
mobileContainer.classList.toggle("open");

function showBurgerMenu() {
	burger.classList.toggle("open");
	mobileContainer.classList.toggle("show");
	body.classList.toggle("overflow-hidden");
}
burger.addEventListener("click", showBurgerMenu);

const swiperInfo = new Swiper(".slider-info", {
	spaceBetween: 12,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	navigation: {
		enabled: false,
	},

	breakpoints: {
		1025: {
			spaceBetween: 40,
			navigation: {
				enabled: true,
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		},
	},
});

const fileLable = document.querySelectorAll(".calculation-label");
const fileInput = document.querySelectorAll(".calculation-file");

fileInput.forEach((item) => {
	// console.log(item);

	item.addEventListener("change", function () {
		// let fileName = item.previousElementSibling; і так теж можна
		// console.log(fileName);
		let fileName = item.closest(".input-box").querySelector(".file-name");
		fileName.innerHTML = item.files[0].name;
	});
});
// console.log(fileInput);
fileLable.forEach((item) =>
	item.closest(".form-row").previousElementSibling.classList.add("special-gap")
);

// fileInput.addEventListener("change", () => {
// 	fileName.innerHTML = fileInput.files[0].name;
// });

// fileInput.closest(".form-row").classList.add("special-gap");
/*swiperAdvantages*/
let swiperAdvantages ;

function initAdvantages() {
    swiperAdvantages = new Swiper('.slider-advantages', {
    spaceBetween: 12,
    loop: true,
  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: true,
    },
    breakpoints: {
        1025: {
            spaceBetween: 40,
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                enabled: false,
            },
  
        }
    }
  });
}

function destroyAdvantages() {
  swiperAdvantages.destroy( true, true )   
}


function mediaQuery(matchMedia1024) {
    if (matchMedia1024.matches) { // If media query matches
      initAdvantages()
    } else {
      destroyAdvantages()
    }
}

// Create a MediaQueryList object
const matchMedia1024 = window.matchMedia("(max-width: 1024px)")

// Call listener function at run time
mediaQuery(matchMedia1024);

// Attach listener function on state changes
matchMedia1024.addEventListener("change", function() {
    mediaQuery(matchMedia1024);
});
/**/