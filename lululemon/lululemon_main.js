var slide = new Swiper(".img_ba", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    observer: true,
    observeParents: true,
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        slideChange: function () {
          $('a.text').eq(this.realIndex).addClass('on').siblings().removeClass('on');
        }
      }
});
var nav = document.querySelector("ul.nav");

function addOn1() {
    nav.classList.add("on");
}
function removeOn1() {
    nav.classList.remove("on");
}

var hamburger = document.querySelector(".hamburger");
var closeBt = document.querySelector(".closeBt");

hamburger.addEventListener('click', addOn1);
closeBt.addEventListener('click', removeOn1);



var iw = window.innerWidth;
if (iw < 1200) {

    // 2차 메뉴 열기
    // $(".nav > li > a").click(function() {
    //     $(this).next().toggleClass("on");
    //     $(".nav > li > a").not(this).next().removeClass("on");
    //     return false;
    // });

    var sub1 = document.querySelector("ul.sub1");
    var sub2 = document.querySelector("ul.sub2");

    function toggleOn1() {
        e.preventDefault();
        sub1.classList.toggle("on");
        sub2.classList.remove("on");
    }
    function toggleOn2(e) {
        e.preventDefault();
        sub2.classList.toggle("on");
        sub1.classList.remove("on");
    }

    var brandBt = document.querySelector(".brandBt");
    var techBt = document.querySelector(".techBt");
    brandBt.addEventListener('click', toggleOn1);
    techBt.addEventListener('click', toggleOn2);
}

//nav 색상변경
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $("header").addClass("on");
    } else {
        $("header").removeClass("on");
    }
});
$(function(){
    // 뉴스 탭
    $('a.text').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        slide.slideTo($('a.text').index($(this)) + 1 );
        return false;
    });
});