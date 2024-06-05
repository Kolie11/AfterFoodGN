const btnMenu = document.querySelector(".fa-bars");
const menu = document.querySelector(".list-nav");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const allLinks = document.querySelectorAll(".item-nav");

allLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});

//-------Slider

// const slider = document.querySelector('.slider');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');

// let currentSlide = 0;

// function showSlide(index) {
//   const slides = document.querySelectorAll('.img-box');
//   slides.forEach((slide, i) => {
//     slide.style.transform = `translateX(${100 * (i - index)}%)`;
//   });
// }

// prevBtn.addEventListener('click', () => {
//   currentSlide = Math.max(currentSlide - 1, 0);
//   showSlide(currentSlide);
// });

// nextBtn.addEventListener('click', () => {
//   const slides = document.querySelectorAll('.img-box');
//   currentSlide = Math.min(currentSlide + 1, slides.length - 1);
//   showSlide(currentSlide);
// });
