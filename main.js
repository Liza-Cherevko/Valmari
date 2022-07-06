
var swiper = new Swiper('.mySwiper', {
  observer: true,
  observeParents: true,
  slidesPerView:3,
  spaceBetween:55,
  slidesPerGroup: 3,
  navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
         pagination: {
          el: ".green-pagination",
          clickable: "true",
          
        },
        breakpoints: {
          768: {
            slidesPerView:3,
            spaceBetween:24.8,
            
          },
          1000: {
            slidesPerView:3,
            spaceBetween:30,
            
          },        
          1200: {
            slidesPerView:3,
            spaceBetween:55,
          }
        }
});


  var swiper2 = new Swiper(".master-class-slider", {
    observer: true,
    observeParents: true,
    slidesPerView:2,
    spaceBetween:150,
    slidesPerGroup: 3,
    navigation: {
          nextEl: ".master-class-next",
          prevEl: ".master-class-prew",
        },
           pagination: {
            el: ".green-pagination",
            clickable: "true",
            
          },
          breakpoints: {
            768: {
              slidesPerView:2,
              spaceBetween:20,
              
            },
            1000: {
              slidesPerView:2,
              spaceBetween:30,
              
            },        
            1200: {
              slidesPerView:2,
              spaceBetween:150,
            }
          }
  });

  var swiper3 = new Swiper('.swiper-offers-slide', {
    observer: true,
    observeParents: true,
    slidesPerView:3,
    spaceBetween:30,
    slidesPerGroup: 3,
    
    navigation: {
      nextEl: ".offers-class-next",
      prevEl: ".offers-class-prew",
    },
           pagination: {
            el: ".green-pagination",
            clickable: "true",
            
          },
          breakpoints: {
            // 768: {
            //   slidesPerView:3,
            //   spaceBetween:20,
              
            // }
            1000: {
              slidesPerView:3,
              spaceBetween:24,
              
            },        
            1200: {
              slidesPerView:3,
              spaceBetween:30,
            }
          }
  });

  var swiper4 = new Swiper('.swiper-courses-slide', {
    observer: true,
    observeParents: true,
    slidesPerView:3.5,
    spaceBetween:47,
    navigation: {
      nextEl: ".offers-class-next",
      prevEl: ".offers-class-prew",
    },
           pagination: {
            el: ".green-pagination",
            clickable: "true",
            
          },
          breakpoints: {
                768: {
              slidesPerView:3,
              spaceBetween:42,
                },
              
            1000: {
              slidesPerView:3,
              spaceBetween:48,
              
            },        
            1200: {
              slidesPerView:3.5,
              spaceBetween:47,
            }
          }
  });