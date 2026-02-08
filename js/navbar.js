<<<<<<< HEAD
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

  $(document).on("click", ".cbn-navbar-wrapper #navbarSupportedContent li a", function() {
      // Active-Klasse setzen
      $('.cbn-navbar-wrapper #navbarSupportedContent ul li').removeClass("active");
      $(this).parent().addClass("active");
      reposition();

      // Navbar auf Mobil schließen (falls sichtbar)
      var navbarCollapse = $(".cbn-navbar-wrapper .navbar-collapse");
      if(navbarCollapse.is(":visible")) {
          navbarCollapse.slideUp(300); // animiert schließen
      }
  });

  $(".cbn-navbar-wrapper .navbar-toggler").click(function() {
    $(".cbn-navbar-wrapper .navbar-collapse").slideToggle(200);
    setTimeout(reposition);
  });

});


document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('bgVideo');
    let forward = true; // Richtung
    const fps = 60;
    const step = 1 / fps;

    // Autoplay sicherstellen
    video.muted = true;
    video.play();

    function pingPong() {
        if(video.paused) return;

        if(forward) {
            video.currentTime += step;
            if(video.currentTime >= video.duration) forward = false;
        } else {
            video.currentTime -= step;
            if(video.currentTime <= 0) forward = true;
        }
        requestAnimationFrame(pingPong);
    }

    requestAnimationFrame(pingPong);
});


const fadeElements = document.querySelectorAll('h1, h2, h3, p, .arrow-button, .ausbildungsliste');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    let baseDelay = 0;

        if (entry.target.classList.contains('arrow-button')) {
        baseDelay = 450; // Delay für Buttons
        } else if (entry.target.classList.contains('ausbildungsliste')) {
        baseDelay = 350; // Delay für Listen
        } else {
        switch(entry.target.tagName) {
            case 'H1': baseDelay = 0; break;
            case 'H2': baseDelay = 150; break;
            case 'H3': baseDelay = 250; break;
            case 'P':  baseDelay = 350; break;
        }
        }

    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), baseDelay);
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0 });

fadeElements.forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);

  requestAnimationFrame(() => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;

                    // URL Hash updaten (ohne Scroll-Sprung)
                    history.replaceState(null, null, "#" + id);

                    // Aktive Klasse im Menü setzen
                    navLinks.forEach((link) => {
                        link.parentElement.classList.remove("active");
                        if (link.getAttribute("href") === "#" + id) {
                            link.parentElement.classList.add("active");
                        }
                    });
                }
            });
        },
        {
            threshold: 0.6, // ab 60% Sichtbarkeit gilt die Section als "aktiv"
        }
    );

    sections.forEach((sec) => observer.observe(sec));
});



document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".cbn-navbar-wrapper #navbarSupportedContent li");
    const navLinks = document.querySelectorAll(".cbn-navbar-wrapper #navbarSupportedContent a");

// Funktion zur Aktualisierung der jQuery-Navigation + hori-selector
function activateNavById(id) {

    // EINZIGE Ausnahme
    if (id === "AngebotDetails") {
        id = "Angebot";
    }

    navItems.forEach((item) => item.classList.remove("active"));

    const activeItem = document.querySelector(
        `.cbn-navbar-wrapper a[href="#${id}"]`
    );

    if (activeItem) {
        activeItem.parentElement.classList.add("active");

        // WICHTIG: Dein jQuery reposition() Trigger
        if (typeof jQuery !== "undefined") {
            setTimeout(() => {
                jQuery(document).ready(function ($) {
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
                });
            }, 50);
        }
    }
}


// IntersectionObserver definiert aktive Section

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id || "";

      // Spezialfall horizontalWrapper
      if (entry.target.classList.contains("horizontalWrapper")) {
        activateNavById("Angebot");
        return;
      }

      // Normalfall → URL + Navbar
      if (id) {
        history.replaceState(null, null, "#" + id);
        activateNavById(id);
      }
    });
  },
  { threshold: 0.5 } // 50% der Section sichtbar
);

sections.forEach(sec => observer.observe(sec));

});






function playBackgroundVideo() {
    const video = document.getElementById('bgVideo');
    if(video && video.paused) {
        video.muted = true;
        video.play().catch(err => console.log('Autoplay blockiert:', err));
    }
    // Eventlistener entfernen, einmalig starten
    window.removeEventListener('touchstart', playBackgroundVideo);
    window.removeEventListener('scroll', playBackgroundVideo);
}

window.addEventListener('touchstart', playBackgroundVideo, {once: true});
window.addEventListener('scroll', playBackgroundVideo, {once: true});
=======
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
    $(".cbn-navbar-wrapper .navbar-collapse").slideToggle(200);
    setTimeout(reposition);
  });

});


document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('bgVideo');
    let forward = true; // Richtung
    const fps = 60;
    const step = 1 / fps;

    // Autoplay sicherstellen
    video.muted = true;
    video.play();

    function pingPong() {
        if(video.paused) return;

        if(forward) {
            video.currentTime += step;
            if(video.currentTime >= video.duration) forward = false;
        } else {
            video.currentTime -= step;
            if(video.currentTime <= 0) forward = true;
        }
        requestAnimationFrame(pingPong);
    }

    requestAnimationFrame(pingPong);
});


const fadeElements = document.querySelectorAll('h1, h2, h3, p, .arrow-button, .ausbildungsliste');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    let baseDelay = 0;

        if (entry.target.classList.contains('arrow-button')) {
        baseDelay = 450; // Delay für Buttons
        } else if (entry.target.classList.contains('ausbildungsliste')) {
        baseDelay = 350; // Delay für Listen
        } else {
        switch(entry.target.tagName) {
            case 'H1': baseDelay = 0; break;
            case 'H2': baseDelay = 150; break;
            case 'H3': baseDelay = 250; break;
            case 'P':  baseDelay = 350; break;
        }
        }

    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), baseDelay);
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0 });

fadeElements.forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);

  requestAnimationFrame(() => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;

                    // URL Hash updaten (ohne Scroll-Sprung)
                    history.replaceState(null, null, "#" + id);

                    // Aktive Klasse im Menü setzen
                    navLinks.forEach((link) => {
                        link.parentElement.classList.remove("active");
                        if (link.getAttribute("href") === "#" + id) {
                            link.parentElement.classList.add("active");
                        }
                    });
                }
            });
        },
        {
            threshold: 0.6, // ab 60% Sichtbarkeit gilt die Section als "aktiv"
        }
    );

    sections.forEach((sec) => observer.observe(sec));
});



document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".cbn-navbar-wrapper #navbarSupportedContent li");
    const navLinks = document.querySelectorAll(".cbn-navbar-wrapper #navbarSupportedContent a");

// Funktion zur Aktualisierung der jQuery-Navigation + hori-selector
function activateNavById(id) {

    // EINZIGE Ausnahme
    if (id === "AngebotDetails") {
        id = "Angebot";
    }

    navItems.forEach((item) => item.classList.remove("active"));

    const activeItem = document.querySelector(
        `.cbn-navbar-wrapper a[href="#${id}"]`
    );

    if (activeItem) {
        activeItem.parentElement.classList.add("active");

        // WICHTIG: Dein jQuery reposition() Trigger
        if (typeof jQuery !== "undefined") {
            setTimeout(() => {
                jQuery(document).ready(function ($) {
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
                });
            }, 50);
        }
    }
}


// IntersectionObserver definiert aktive Section

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id || "";

      // Spezialfall horizontalWrapper
      if (entry.target.classList.contains("horizontalWrapper")) {
        activateNavById("Angebot");
        return;
      }

      // Normalfall → URL + Navbar
      if (id) {
        history.replaceState(null, null, "#" + id);
        activateNavById(id);
      }
    });
  },
  { threshold: 0.5 } // 50% der Section sichtbar
);

sections.forEach(sec => observer.observe(sec));



});




function playBackgroundVideo() {
    const video = document.getElementById('bgVideo');
    if(video && video.paused) {
        video.muted = true;
        video.play().catch(err => console.log('Autoplay blockiert:', err));
    }
    // Eventlistener entfernen, einmalig starten
    window.removeEventListener('touchstart', playBackgroundVideo);
    window.removeEventListener('scroll', playBackgroundVideo);
}

window.addEventListener('touchstart', playBackgroundVideo, {once: true});
window.addEventListener('scroll', playBackgroundVideo, {once: true});
>>>>>>> c28808a4cf6732635907c4c3c8b6c85a7d87d235
