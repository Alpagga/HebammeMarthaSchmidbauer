jQuery(document).ready(function($) {

  function reposition() {
    var wrapper = $('.cbn-navbar-wrapper');
    var tabsNewAnim = wrapper.find('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    if (!activeItemNewAnim.length) return;

    var itemPos = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPos.top + "px",
      left: itemPos.left + "px",
      height: activeItemNewAnim.innerHeight() + "px",
      width: activeItemNewAnim.innerWidth() + "px"
    });
  }

  setTimeout(reposition, 300);
  $(window).on('resize', () => setTimeout(reposition, 500));

  $(document).on("click", ".cbn-navbar-wrapper #navbarSupportedContent li", function() {
    $('.cbn-navbar-wrapper #navbarSupportedContent ul li').removeClass("active");
    $(this).addClass('active');
    reposition();
  });

  $(".cbn-navbar-wrapper .navbar-toggler").click(function() {
    $(".cbn-navbar-wrapper .navbar-collapse").slideToggle(300);
    setTimeout(reposition);
  });

  // Funktion, um den aktiven Navbar-Punkt zu setzen
  function updateActiveNav() {
    var scrollPos = $(document).scrollTop();
    var navHeight = $('.cbn-navbar-wrapper .navbar').outerHeight();

    $('.cbn-navbar-wrapper #navbarSupportedContent li a').each(function() {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));

      if (refElement.length) {
        var refTop = refElement.offset().top - navHeight - 1;
        var refBottom = refTop + refElement.outerHeight();

        if (scrollPos >= refTop && scrollPos < refBottom) {
          $('.cbn-navbar-wrapper #navbarSupportedContent li').removeClass('active');
          currLink.parent('li').addClass('active');

          // Hori-Selector positionieren
          var itemPos = currLink.parent('li').position();
          $(".hori-selector").css({
            top: itemPos.top + "px",
            left: itemPos.left + "px",
            height: currLink.parent('li').innerHeight() + "px",
            width: currLink.parent('li').innerWidth() + "px"
          });
        }
      }
    });
  }

  // Scroll-Event
  $(window).on('scroll', updateActiveNav);

  // Beim Laden einmal ausführen
  updateActiveNav();

  // Smooth Scroll für interne Links mit Navbar-Offset
  $(document).on('click', 'a.nav-link[href^="#"]', function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);
    var offset = $('.cbn-navbar-wrapper .navbar').outerHeight() || 0;

    if ($target.length) {
      $('html, body').stop().animate({
        scrollTop: $target.offset().top - offset
      }, 800, 'swing');
    }
  });

});

