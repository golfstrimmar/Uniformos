import $ from "jquery";
// import "./slick.js";


$(Document).ready(function () {
  $(".slider-js-1").show().slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    speed: 800,
    easing: "ease",
    // cssEase: "linear",
    centerMode: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinite: true,
    //  initialSlide: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
  });
//   $(".slider-js-5").slick({
//     dots: true,
//     arrows: false,
//     slidesToShow: 1,
//     speed: 800,
//     easing: "ease",
//     // cssEase: "linear",
//     centerMode: false,
//     // autoplay: true,
//     // autoplaySpeed: 2000,
//     infinite: true,
//     //  initialSlide: 1,
//     pauseOnFocus: true,
//     pauseOnHover: true,
  
// });

  // $('.slider-js-5').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//  $("body,html").animate({ scrollTop: 0 }, 400);    
// });


  $(".slider-js-3").show().slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    speed: 800,
    easing: "ease",
    // cssEase: "linear",
    centerMode: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinite: true,
    //  initialSlide: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
  });
  $(".slider-js-2")
    
    .slick({
      dots: false,
      // arrows: false,
      slidesToShow: 4,
      speed: 800,
      easing: "ease",
      // cssEase: "linear",
      centerMode: false,
      // autoplay: true,
      // autoplaySpeed: 2000,
      infinite: true,
      //  initialSlide: 1,
      pauseOnFocus: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  $(".slider-js-4")
    
    .slick({
      dots: false,
      // arrows: false,
      slidesToShow: 4,
      speed: 800,
      easing: "ease",
      // cssEase: "linear",
      centerMode: false,
      // autoplay: true,
      // autoplaySpeed: 2000,
      infinite: true,
      //  initialSlide: 1,
      pauseOnFocus: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

  
});