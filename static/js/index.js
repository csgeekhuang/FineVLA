window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Navbar burger toggle
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // Fixed navbar scroll effect + side-nav visibility and active state
    var sideNav = $("#side-nav");
    var sideNavLinks = $("#side-nav a[data-section]");
    var sectionIds = sideNavLinks.map(function() { return $(this).data("section"); }).get();

    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();

      if (scrollTop > 50) {
        $(".navbar").addClass("scrolled");
      } else {
        $(".navbar").removeClass("scrolled");
      }

      // Show navbar and side-nav when abstract section is reached
      var abstractEl = document.getElementById("abstract");
      var abstractTop = abstractEl ? abstractEl.getBoundingClientRect().top : 9999;
      if (abstractTop <= 200) {
        $(".navbar").addClass("is-visible");
        sideNav.addClass("is-visible");
      } else {
        $(".navbar").removeClass("is-visible");
        sideNav.removeClass("is-visible");
      }

      // Highlight current section in side-nav
      var current = "";
      for (var i = 0; i < sectionIds.length; i++) {
        var el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= 140) {
          current = sectionIds[i];
        }
      }
      sideNavLinks.removeClass("is-active");
      if (current) {
        sideNavLinks.filter("[data-section='" + current + "']").addClass("is-active");
      }
    });

    // Smooth scroll for side-nav links
    $("#side-nav a").click(function(e) {
      var href = $(this).attr("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        var target = $(href);
        if (target.length) {
          $("html, body").animate({ scrollTop: target.offset().top - 90 }, 400);
        }
      }
    });

    // Smooth scroll for navbar links
    $(".navbar-menu a").click(function(e) {
      var href = $(this).attr("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        var target = $(href);
        if (target.length) {
          $("html, body").animate({ scrollTop: target.offset().top - 90 }, 400);
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
