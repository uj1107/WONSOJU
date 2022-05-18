$(document).ready(function () {
  // 모바일 반응형 mobile_only

  if (matchMedia("screen and (max-width: 425px)").matches) {
    // 햄버거 버튼 햄버거 메뉴
    var burger = $(".hamburger");

    burger.on("click", function () {
      burger.toggleClass("click");
      $("#ham_menu").toggleClass("click");
      $("header").toggleClass("click");

      // 햄버거 메뉴 속 검색 버튼 search
      $(".search > a").on("click", function () {
        $(".search > form").toggleClass("click");
      });
    });

    $("#home-main > .mobile_slider").slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      infinite: true,
      speed: 1500,
      fade: true,
      cssEase: "linear",
    });
  }

  // searchbox 검색 기능
  var searchIcon = document.getElementById("searchicon");
  var searchBox = document.getElementById("searchbox");

  searchIcon.addEventListener("click", function () {
    searchClick();
  });

  function searchClick() {
    searchBox.className = "display";
  }

  $("#searchbox").click(function (e) {
    if (!$(e.target).hasClass("inputbox")) {
      searchBox.className = "";
    }
  });

  // scroll event
  var lastScrollTop = 0;
  var delta = 5;
  var fixbox = document.querySelector(".hide-box");
  var fixboxHeight = fixbox.offsetHeight;
  var didScroll;

  window.addEventListener("scroll", function (e) {
    didScroll = true;
  });

  //   0.25초마다 스크롤 여부 체크
  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var nowScrollTop = window.scrollY;
    if (Math.abs(lastScrollTop - nowScrollTop) <= delta) {
      return;
    }
    // scrolldown
    if (nowScrollTop > lastScrollTop && nowScrollTop > fixboxHeight) {
      fixbox.classList.add("down");
      document.getElementById("nav").classList.add("down");
    }
    // scrollup
    else {
      if (nowScrollTop < fixboxHeight) {
        fixbox.classList.remove("down");
        document.getElementById("nav").classList.remove("down");
      }
    }
    lastScrollTop = nowScrollTop;
  }

  // home footer event 홈화면 푸터 이벤트
  window.onscroll = function () {
    footerEvent();
  };

  function footerEvent() {
    var nowScrollTop = window.scrollY;
    var scrollbottom = nowScrollTop + screen.height;
    var main = document.querySelector("#home-main");
    var mainHeight = main.clientHeight - 150;

    if (scrollbottom >= mainHeight) {
      $("#footer").css("opacity", -0.7 + nowScrollTop / 350);
      if (scrollbottom >= mainHeight + 150) {
        $("#footer").css("z-index", 30);
      } else {
        $("#footer").css("z-index", 0);
      }
    } else {
      $("#footer").css("opacity", 0);
    }

    // 반응형 푸터
    if (matchMedia("screen and (max-width: 900px)").matches) {
      var mainHeight = main.clientHeight - 300;

      if (scrollbottom >= mainHeight) {
        $("#footer").css("opacity", nowScrollTop / 300);
        if (scrollbottom >= mainHeight + 280) {
          $("#footer").css("z-index", 30);
        } else {
          $("#footer").css("z-index", 0);
        }
      } else {
        $("#footer").css("opacity", 0);
      }
    }
    if (matchMedia("screen and (max-width: 425px)").matches) {
      var mainHeight = main.clientHeight - 350;

      if (scrollbottom >= mainHeight) {
        $("#footer").css("opacity", -1.5 + nowScrollTop / 00);
      } else {
        $("#footer").css("opacity", 0);
      }
    }
  }

  // slick

  $("#home-main > .slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: "linear",
  });

  // 리사이즈 시 자동 새로고침
  window.onresize = function () {
    document.location.reload();
    // if ($(window).width() <= 900) {

    // }
  };
});
