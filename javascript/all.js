
$(document).ready(function(){

  $('.bgimg').parallax({
    imageSrc: 'source/img/index-bg-1.jpg',
    speed: 0.3
  });

  $(window).trigger('resize').trigger('scroll');
  $(window).scroll(function(e){
    if ($(window).scrollTop()>0){
      $(".myNavbar").removeClass("navbar-top");
      $(".menu_mobile").removeClass("menu_mobile_top")
    }else{
      $(".myNavbar").addClass("navbar-top");
      $(".menu_mobile").addClass("menu_mobile_top")
    };
  });

  $(document).on("click",'.fa-chevron-down',function(e){
    e.preventDefault();
    let target=$('.fa-chevron-down').attr('href');
    $('html,body').animate({
      scrollTop: $(target).offset().top - 45
    },500);
  });

  $(document).on("click",'.fa-chevron-up',function(e){
    e.preventDefault();
    let target=$('.fa-chevron-up').attr('href');
    $('html,body').animate({
      scrollTop: $(target).offset().top - 45
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
  });

  $('.menu_mobile').on("click",'#about_us_title',function(e){
    $('#membership').collapse('hide')
  }).on("click",'#membership_title', function(e){
    $('#about_us').collapse('hide')
  }).on("click","#option", function(e){
    $('#about_us').collapse('hide');
    $("#membership").collapse('hide');
  });

  $('.menu-hamburger').click(function(event){
    event.preventDefault();
    $('.menu_mobile').toggleClass('open');
    $(this).find('.fas').toggleClass('fa-bars');
    $(this).find('.fas').toggleClass('fa-times');
    $('#about_us').collapse('hide');
    $("#membership").collapse('hide');
  });

  $(window).resize(function(){
    x=$(window).width();
    if(x>992){
      $('.menu_mobile').removeClass('open');
      $('.hamburger').removeClass('fa-times');
      $('#about_us').collapse('hide');
      $("#membership").collapse('hide');
      $('.site-map').find('.row').find('.col-lg-7').removeClass('order-12');
      $('.site_map').find('.row').find('.col-lg-5').removeClass('order-1');
    }else{
      $('.hamburger').addClass('fa-bars');
      $('.site-map').find('.row').find('.col-lg-7').addClass('order-12');
      $('.site_map').find('.row').find('.col-lg-5').addClass('order-1');
    };
    if(x>500){
      $('.footer_list').removeClass('col-6').addClass('col-4');
      $('.footer_list_app').removeClass('col-12').addClass('col-4')
      
    }else{
      $('.footer_list').removeClass('col-4').addClass('col-6');
      $('.footer_list_app').removeClass('col-4').addClass('col-12');
    };
  });


  // $('.inputfocusone').focus(function(e){
  //   $('.labelfocusone').css('bottom','50px');
  // });
  // $('.inputfocustwo').focus(function(e){
  //   $('.labelfocustwo').css('bottom','50px');
  // });
  // $('.inputfocusthree').focus(function(e){
  //   $('.labelfocusthree').css('bottom','50px');
  // });
  // $('.inputfocusfour').focus(function(e){
  //   $('.labelfocusfour').css({'bottom':'50px','left':'-62px'});
  // });
  // $('.inputfocusfive').focus(function(e){
  //   $('.labelfocusfive').css('bottom','50px');
  // });
  // $('.inputfocussix').focus(function(e){
  //   $('.labelfocussix').css('bottom','50px');
  // });
  // $('.inputfocusone').blur(function(e){
  //   $('.labelfocusone').css('bottom','0px');
  // });
  // $('.inputfocustwo').blur(function(e){
  //   $('.labelfocustwo').css('bottom','0px');
  // });
  // $('.inputfocusthree').blur(function(e){
  //   $('.labelfocusthree').css('bottom','0px');
  // });
  // $('.inputfocusfour').blur(function(e){
  //   $('.labelfocusfour').css({'bottom':'0px','left':'0px'});
  // });
  // $('.inputfocusfive').blur(function(e){
  //   $('.labelfocusfive').css('bottom','0px');
  // });
  // $('.inputfocussix').blur(function(e){
  //   $('.labelfocussix').css('bottom','0px');
  // });
  


  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
  
});



 

