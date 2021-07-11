"use strict";

const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const slides = document.querySelectorAll(".slide");

// Slider --1
const maxSlide = slides.length;
let currentSlide = 0;

//Count-boxes

const countBoxContainer = document.querySelector(".count-boxes");

//creating boxes function
const createBoxes = function () {
	slides.forEach((_, i) => {
		countBoxContainer.insertAdjacentHTML(
			"beforeend",
			`<button class = "count-boxes__box" data-slide = "${i}">0${
				i + 1
			}</button>`
		);
	});
};
createBoxes();

//Activating boxes

const activateBoxes = function (slide) {
	const allBoxes = document.querySelectorAll(".count-boxes__box");
	allBoxes.forEach((box) => {
		box.classList.remove("count-boxes__box--active");
	});
	document
		.querySelector(`.count-boxes__box[data-slide="${slide}"]`)
		.classList.add("count-boxes__box--active");
};

// Go to slide no 'slide'
const goToSlide = function (slide) {
	slides[slide].style.zIndex = 10;
	slides.forEach((s, i) => {
		s.style.transform = `translateX(${100 * (i - slide)}%)`;
	});
	// activateDots(slide);
	activateBoxes(slide);
};

goToSlide(0);

// 0%,100%,200%,300%

//For going to next slide
const nextSlide = function () {
	if (currentSlide >= maxSlide - 1) {
		currentSlide = 0;
	} else {
		currentSlide++;
	}
	goToSlide(currentSlide);
};

//for going to prev slide
const prevSlide = function () {
	if (currentSlide === 0) {
		currentSlide = maxSlide - 1;
	} else {
		currentSlide--;
	}

	goToSlide(currentSlide);
};

/** Event handlers*/

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

// curSlide = 1: -100%,0%,100%,200%

// handling slider using key arrow left and key arrow right

document.addEventListener("keydown", function (e) {
	if (e.key === "ArrowLeft") {
		prevSlide();
	}
	if (e.key === "ArrowRight") {
		nextSlide();
	}
});

//For box functionality

countBoxContainer.addEventListener("click", function (e) {
	if (e.target.classList.contains("count-boxes__box")) {
		const { slide } = e.target.dataset;
		goToSlide(slide);
		currentSlide = slide;
	}
});

const timer = setInterval(nextSlide, 6000);

// For testimonial slider
const slider2 = document.querySelector(".slider-2");
const testimonials = document.querySelectorAll(".testimonial");
const btnLeft2 = document.querySelector(".slider-2-btn--left");
const btnRight2 = document.querySelector(".slider-2-btn--right");

const numTestimonials = testimonials.length;
let currentTestimonial = 0;

// Go to slide no 'slide'
const goToTestimonial = function (t) {
	testimonials.forEach((s, i) => {
		s.style.transform = `translateX(${100 * (i - t)}%)`;
	});
	// activateDots(slide);
};

goToTestimonial(0);

//For going to next slide
const nextTestimonial = function () {
	if (currentTestimonial === numTestimonials - 1) {
		currentTestimonial = 0;
	} else {
		currentTestimonial++;
	}

	goToTestimonial(currentTestimonial);
};

//for going to prev slide
const prevTestimonial = function () {
	if (currentTestimonial === 0) {
		currentTestimonial = numTestimonials - 1;
	} else {
		currentTestimonial--;
	}

	goToTestimonial(currentTestimonial);
};

/** Event handlers*/

btnRight2.addEventListener("click", nextTestimonial);
btnLeft2.addEventListener("click", prevTestimonial);

// curSlide = 1: -100%,0%,100%,200%

setInterval(nextTestimonial, 6000);
