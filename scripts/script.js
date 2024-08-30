$('.owl-carousel').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  navText: [ '', ' ' ],
  autoplay:false,
  autoplayTimeout:2000,
  responsive:{
      0:{
          items:1
      },

      767:{
        items:2
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
    } else {
      accordionItem.forEach((el2) => el2.classList.remove("active"));
      el.classList.add("active");
    }
  })
);

