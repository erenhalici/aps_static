$(document).ready(function() {
  $(window).on("scroll", fixHeader);
  var header = $("#navbar");
  var headerOffset = header.offset().top;
  var headerHeight = header.outerHeight();
  var afterHeader = header.next();
  function fixHeader(evt) {
    var currentScroll = $(window).scrollTop();
    if (headerOffset <= currentScroll) {
      header.addClass("navbar-fixed-top");
      header.addClass("navbar-pad");
      afterHeader.css("margin-top", headerHeight);
    } else {
      header.removeClass("navbar-fixed-top");
      header.removeClass("navbar-pad");
      afterHeader.css("margin-top", 0);
    }
  }

  $(".news-carousel").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".news-item").hover(
    function() {
      $(this)
        .children(".news-item-container")
        .addClass("news-item-container-hover");

      $(this)
        .children(".news-item-container")
        .children(".news-item-content")
        .addClass("news-item-content-hover");

      $(this)
        .children(".news-item-background")
        .addClass("news-item-background-hover");
    },
    function() {
      $(this)
        .children(".news-item-container")
        .removeClass("news-item-container-hover");

      $(this)
        .children(".news-item-container")
        .children(".news-item-content")
        .removeClass("news-item-content-hover");

      $(this)
        .children(".news-item-background")
        .removeClass("news-item-background-hover");
    }
  );
});
