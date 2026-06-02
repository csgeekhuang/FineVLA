window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Navbar burger toggle
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // Fixed navbar scroll effect
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $(".navbar").addClass("scrolled");
      } else {
        $(".navbar").removeClass("scrolled");
      }
    });

    // Smooth scroll for navbar links
    $(".navbar-menu a").click(function(e) {
      var href = $(this).attr("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        var target = $(href);
        if (target.length) {
          $("html, body").animate({ scrollTop: target.offset().top - 60 }, 400);
        }
        // Close mobile menu
        $(".navbar-burger").removeClass("is-active");
        $(".navbar-menu").removeClass("is-active");
      }
    });

    var options = {
      slidesToScroll: 1,
      slidesToShow: 3,
      loop: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
    }

    var carousels = bulmaCarousel.attach('.carousel', options);
    bulmaSlider.attach();
})
