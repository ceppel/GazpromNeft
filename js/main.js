const menuBtn = document.querySelector(".menu__btn");
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__list");
const menuShadow = document.querySelector(".menu__mobile-close");

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle("menu__list--open");
  menuShadow.classList.toggle("menu--open");
})

menuClose.addEventListener('click', () => {
  menuList.classList.remove("menu__list--open");
  menuShadow.classList.remove("menu--open");
})


$(function(){
	$('.about__popup').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
});


