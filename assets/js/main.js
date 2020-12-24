$(document).ready(function () {
  // navbar dropdown hover effect
  $(".dropdown").hover(
    function () {
      $(this).addClass("show");
      $(this).find(".dropdown-menu").addClass("show");
    },
    function () {
      $(this).removeClass("show");
      $(this).find(".dropdown-menu").removeClass("show");
    }
  );


  //home page fixed navbar
  if($("header").length){
  $(window).bind("scroll", function () {
    var navHeight = $(window).height() - 70;
    if ($(window).scrollTop() > navHeight) {
      $("header").addClass("fixedTop");
      $(".nav-item").css({ padding: "20px 0px" });
      $("header").css({ transition: "all 1s eae-in-out" });
      $("header").css({ backgroundColor: "white" });
      $(".nav-link").css({ color: "black" });
      $(".blackLogo").css({display: "block"})
      $(".blackLogo").css({marginTop: "-30px"})
    } else {
      $("header").removeClass("fixedTop");
      $(".nav-item").css({ padding: "30px 0px" });
      $(".nav-link").css({ color: "white" });
      $(".blackLogo").css({display: "none"})
    }
  });
  }

  //other pages navbar fixed
  if($(".headerBg").length){
  $(window).bind("scroll", function () {
    var navHeight = $(window).height() - 70;
    if ($(window).scrollTop() > navHeight) {
      $(".headerBg").addClass("fixedTop");
      $(".nav-item").css({ padding: "20px 0px" });
      $(".headerBg").css({ transition: "all 1s eae-in-out" });
    } else {
      $(".headerBg").removeClass("fixedTop");
      $(".nav-item").css({ padding: "30px 0px" });
      $(".nav-link").css({ color: "black" });
    }
  });
  }


  //calendar fixed in right side room pahe
  $(window).bind("scroll", function () {
    var navHeight = $(window).height() - 100;
    if ($(window).scrollTop() > navHeight) {
      $(".calendar").addClass("fixed");
    } else {
      $(".calendar").removeClass("fixed");
    }
  });

  //home slider
  if ($("#homeSlider").length) {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  }

  //testimonials slider
  if ($("#testimonials").length) {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  }

  //sinle room page carousel
  if ($("#roomSlider").length) {
    $(".owl-carousel").owlCarousel({
      stagePadding: 50,
      loop: true,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 2,
        },
      },
    });
  }
});
