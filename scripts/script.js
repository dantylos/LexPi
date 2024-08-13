$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      navText: [ '', ' ' ],
      autoplay:true,
      autoplayTimeout:2000,
      responsive:{
          0:{
              items:1
          },

          1200:{
              items:6
          }
      }
  });
}) 