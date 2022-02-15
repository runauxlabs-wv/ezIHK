

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
    
    function toggleOn1(e) {
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

// var slide = new Swiper(".img_ba", {
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     observer: true,
//     observeParents: true,
//     loop: true,
//     slidesPerView: 1,
//     autoplay: {
//         delay: 2000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     on: {
//         slideChange: function () {
//           $('a.text').eq(this.realIndex).addClass('on').siblings().removeClass('on');
//         }
//       }
// });

$(function(){

    $('.baWrap').slick({
        autoplay: true,
        autoplayspeed: 2000,
        infinite: true,
        prevArrow: $('.swiper-button-prev'),
        nextArrow: $('.swiper-button-next'),
        dots: true,
        
    });

    var iw = window.innerWidth;
    if (iw < 1200) {
        $("section.main").remove();
    }
    
    //nav 색상변경
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $("header").addClass("on");
        } else {
            $("header").removeClass("on");
        }
    });


    // 뉴스 탭
    $('a.text').click(function(e){
        $(this).addClass('on').siblings().removeClass('on');
        // slide.slideTo($('a.text').index($(this)) + 1 );
        var slideNo = $(this).index();
        $('.baWrap').slick('slickGoTo', slideNo);
        e.preventDefault();
    });
    $('.baWrap').on('beforeChange', function(event, slick, currentSlide, nextSlide){ 
        $('a.text').eq(nextSlide).addClass('on').siblings().removeClass('on');
    })

    // if (!$.support.transition)
    // $.fn.transition = $.fn.animate;

    var ba = $(".ie9 .ba")
    ba.mouseenter(function() {
            $('.title').stop().animate({bottom : "84px"}, 700);
        });  
        ba.mouseleave(function() {
            $('.title').stop().animate({bottom : "0"}, 700);
        });  
        
});