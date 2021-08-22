var Nav = (function() {
  var nav = $(".nav"),
    burger = $(".burger"),
    page = $(".page"),
    section = $(".section"),
    link = nav.find(".nav__link"),
    navH = nav.innerHeight(),
    isOpen = true,
    hasT = false;

  var toggleNav = function() {
    nav.toggleClass("nav--active");
    burger.toggleClass("burger--close");
    shiftPage();
  };

  var shiftPage = function() {
    if (!isOpen) {
      page.css({
        transform: "translateY(" + navH + "px)",
        "-webkit-transform": "translateY(" + navH + "px)"
      });
      isOpen = true;
    } else {
      page.css({
        transform: "none",
        "-webkit-transform": "none"
      });
      isOpen = false;
    }
  };

  var switchPage = function(e) {
    var self = $(this);
    var i = self.parents(".nav__item").index();
    var s = section.eq(i);
    var a = $("section.section--active");
    var t = $(e.target);

    if (!hasT) {
      if (i == a.index()) {
        return false;
      }
      a.addClass("section--hidden").removeClass("section--active");

      s.addClass("section--active");
      
      hasT = true;

      a.on("transitionend webkitTransitionend", function() {
        $(this).removeClass("section--hidden");
        hasT = false;
        a.off("transitionend webkitTransitionend");
      });
    }

    return false;
  };

  var keyNav = function(e) {
    var a = $("section.section--active");
    var aNext = a.next();
    var aPrev = a.prev();
    var i = a.index();
    var element = document.getElementById("services");

    if (!hasT) {
      if (e.keyCode === 37) {
        if (aPrev.length === 0) {
          aPrev = section.last();
        }

        hasT = true;

        aPrev.addClass("section--active");
        
        element.classList.add("section--active");
        a.addClass("section--hidden").removeClass("section--active");

        a.on("transitionend webkitTransitionend", function() {
          a.removeClass("section--hidden");
          hasT = false;
          a.off("transitionend webkitTransitionend");
        });
      } else if (e.keyCode === 39) {
        if (aNext.length === 0) {
          aNext = section.eq(0);
        }

        aNext.addClass("section--active");
        a.addClass("section--hidden").removeClass("section--active");

        hasT = true;

        aNext.on("transitionend webkitTransitionend", function() {
          a.removeClass("section--hidden");
          hasT = false;
          aNext.off("transitionend webkitTransitionend");
        });
      } else {
        return;
      }
    }
  };

  var bindActions = function() {
    burger.on("click", toggleNav);
    link.on("click", switchPage);
    $(document).on("ready", function() {
      page.css({
        transform: "translateY(" + navH + "px)",
        "-webkit-transform": "translateY(" + navH + "px)"
      });
    });
    $("body").on("keydown", keyNav);
  };

  var init = function() {
    bindActions();
  };

  return {
    init: init
  };
})();

Nav.init();


var baseUrl = document.getElementsByTagName('base')[0].href;
var language = document.getElementsByTagName('html')[0].getAttribute('lang');
var queryString = (function (a) {
    if (a === "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=');
        if (p.length !== 2) continue;
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

/**
 * bir hata nedeniyle veya sunucudan silinmiÅŸ ya da bulunamayan bir resim olduÄŸunda, hata gÃ¶stermek yerine
 * placehold.it resimlerinin gÃ¶sterilmesini saÄŸlar.
 */


/**
 * android cihazlarda select boxlarÄ±n dÃ¼zgÃ¼n gÃ¶rÃ¼nmesini saÄŸlar.
 */

/**
 * @param obj
 * @returns {boolean}
 */
isset = function(obj) {
    var i, max_i;
    if(obj === undefined) return false;
    for (i = 1, max_i = arguments.length; i < max_i; i++) {
        if (obj[arguments[i]] === undefined) {
            return false;
        }
        obj = obj[arguments[i]];
    }
    return true;
};

 $('.megaMenu').on("click", function () {
        var $mega = $('#mega'),
            $bars = $('#bars'),
            $times = $('#times');

        if (document.getElementById('mega').style.display == "block") {
            $mega.slideUp(1000);
            $times.fadeOut(500);
            setTimeout(function () {
                $bars.fadeIn(500);
            }, 500);
            return false;
        }

        $mega.slideDown(1000);
        $bars.fadeOut(500);
        setTimeout(function () {
            $times.fadeIn(500);
        }, 500);
    });


$(document).ready(function() {	
    headerH();
   
   function owlSlider(){
  var owl = $('.owl-carousel'),
      dataGroupItem = owl.data('group-item'),
      owlItem = owl.find(".item-child").length;
  
      var groupNumber = owlItem / dataGroupItem;
      for(var i = 0; i < groupNumber; i++) {
       owl.append('<div class="item-' + (i + 1) + '"></div>');
        
       var item = owl.children('.item-child');
        var flag = 0;
        item.each(function(){
          $(this).appendTo('.owl-carousel .item-' + (i + 1));
          if(flag == (dataGroupItem - 1)) {
            return false;
          }
          flag++;
        });
      }
  
  owl.owlCarousel({
      loop:true,
      margin:10,
	  items:2,
	  autoPlay: true,
    pagination: false,
	 navigation: true,
     smartSpeed: 900,
     navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsiveClass:true,
      responsive:{
          0:{
              items: 1
          },
          767:{
            items: 1
          }
      }
  });
}

owlSlider();
    /*OWL*/
    var owl1 = $("#main-slide");
    owl1.owlCarousel({
        items : 3,
        loop : true,
        pagination : false
    });
    $("#Next").click(function(){
        owl1.trigger('owl.next');
    })
    $("#Prev").click(function(){
        owl1.trigger('owl.prev');
    })

	  var owl1 = $("#main-slide2");
    owl1.owlCarousel({
        items : 1,
       
		autoPlay : true,
        pagination : false
    });
    $("#Next").click(function(){
        owl1.trigger('owl.next');
    })
    $("#Prev").click(function(){
        owl1.trigger('owl.prev');
    })
});

var aboveHeighti = 200;
$(window).scroll(function(){
    if ($(window).scrollTop() > aboveHeighti){
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});


$(window).resize(function(){
    serviceBox();
    headerH();
});
$(window).load(function(){
    serviceBox();
});
function headerH() {
    var hm = $(".navbar-default").height();
    $("#header").css('height',hm);
}


function serviceBox (){
    var heights = $(".news-box").map(function () {
         return $(this).height();
     }).get(),

    maxHeight = Math.max.apply(null, heights);

    $('.news-box').height(maxHeight);
}