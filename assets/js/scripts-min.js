function checkMobileMenu(){window.matchMedia("(max-width: 991px)").matches?($("nav ul").addClass("main-nav-mobil"),$("nav ul").removeClass("main-nav-desktop")):($("nav ul").addClass("main-nav-desktop"),$("nav ul").removeClass("main-nav-mobil"))}function updateUI(){checkMobileMenu()}function updateUI(){checkMobileMenu()}$(".dropdown").click(function(e){e.preventDefault;var a=$(".dropdown").index(this);$(".main-nav-mobil").eq(a).slideToggle("slow")}),checkMobileMenu(),$(".nav__item").click(function(){$(".nav__item").removeClass("active"),$(this).addClass("active")}),$(".owl-carousel").owlCarousel({loop:!0,margin:0,nav:!1,autoplay:!1,center:!0,touchDrag:!1,mouseDrag:!1,onDrag:!1,autoWidth:!0,URLhashListener:!0,autoplayHoverPause:!1,startPosition:"URLHash",responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$(window).resize(updateUI),$(window).resize(updateUI);