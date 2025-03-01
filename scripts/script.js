$('.owl-carousel').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  navText: [ '', ' ' ],
  autoplay:true,
  autoplayTimeout:10000,
  autoplaySpeed:500,
  autoplayHoverPause:true,
  margin:5,
  responsive:{
      0:{
          items:1.3
      },

      560:{
        items:1.7
    },

      767:{
        items:2.3
    },

      1000:{
          items:3
      }
  }
});


// Accordion Action

const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    }
    else {
      accordionItem.forEach((el2) => el2.classList.remove("active"));
      el.classList.add("active");
    }
  })
);


// Burger menu

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          menu.classList.toggle('active');
  })
})

// const link = document.querySelector('.link');
// const  = document.querySelector('.menu');

// link.addEventListener('click', e => {
//     if (menu.classList.contains('active')) {
//         menu.classList.remove('active');
//     } else {
//         menu.classList.add('active');
//     }
// });