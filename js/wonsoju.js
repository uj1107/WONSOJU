$(document).ready(function () {
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
    } else {
      $("#footer").css("opacity", 0);
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
});
