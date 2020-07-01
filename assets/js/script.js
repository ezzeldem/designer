$(document).ready(function(){

    $('.s-slider-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.s-slide-1'
      });
      $('.s-slide-1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.s-slider-2',
        prevArrow:"<div class='circle-arrow devo-left'><i class='fas fa-long-arrow-alt-left'></i></div>",
        nextArrow:"<div class='circle-arrow devo-right'><i class='fas fa-long-arrow-alt-right'></i></div>",
        dots: false,
        centerMode:true,
        responsive: [
          {
              breakpoint: 1333,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  centerMode:false,
              }
          },
          {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode:true,
            }
        },
          {
                  breakpoint: 767,
                  settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                  centerMode:true,
                  autoplay: false,
              }
          }
    ]
      
      });








    if($(window).width() < 767){
      $('.burder-u, .overlay').click(function(){
        $(".burder-u").toggleClass('close-b');
        $("#nav-side").toggleClass('right-3');
        $(".overlay").toggleClass("open-over");
    })

  
    }else{
      $('.burder-u, .overlay').click(function(){
        $(this).toggleClass('close-b');
        $("#nav-side").toggleClass('right-ul');
      
    })
    }




});