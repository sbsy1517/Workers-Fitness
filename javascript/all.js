// /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//   }
  
//   /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//   }




$(document).ready(function(){
  $('.bgimg').parallax({
    imageSrc: 'source/img/index-bg-1.jpg',
    positionY: "-700px",
    speed: 0.3
  });
  jQuery(window).trigger('resize').trigger('scroll');
  $(window).scroll(function(e){
    if ($(window).scrollTop()>0)
      $(".myNavbar").removeClass("navbar-top");
    else
      $(".myNavbar").addClass("navbar-top");
  });
  $(document).on("click",'.fa-chevron-down',function(e){
    e.preventDefault();
    let target=$('.fas').attr('href');
    // console.log(alert(target));
    $('html,body').animate({
      scrollTop: $(target).offset().top - 65
    },500);
  });
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right' ></i>"],
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    lazyLoad: true,
  });
  
  
})



 

