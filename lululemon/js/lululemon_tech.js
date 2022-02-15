// var slide = new Swiper(".productSlide", {
//     slidesPerView: 4,
//     spaceBetween: 10,
//     freeMode: true,
//     loop: true,
//     breakpoints: {
//         320: {
//             slidesPerView: 4,
//             spaceBetween: 10,
//           },
//         768: {
//           slidesPerView: 5,
//           spaceBetween: 10,
//         },
//         1200: {
//             slidesPerView: 4,
//             spaceBetween: 10,
//           },
//       },
// });
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


//모바일 subgnb
var iw = window.innerWidth;
if (iw < 1200) {

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

//tab
var tabButtons = document.querySelectorAll('.tabButton');
[].forEach.call(tabButtons, function (eachButton, index) {
    eachButton.addEventListener('click', function (e) {
        var tabBoxs = document.querySelectorAll('.tabBox');
        for (var i = 0; i < tabBoxs.length; i++) {
            tabBoxs[i].classList.remove("on");
            tabButtons[i].classList.remove("on");
        }
        tabBoxs[index].classList.add("on");
        this.classList.add("on");
        $('.slideWrap').slick('setPosition');
        e.preventDefault();
    })
})

$(function () {

    //nav 색상변경
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $("header").addClass("on");
        } else {
            $("header").removeClass("on");
        }
    });

    // 해시를 찾아 이동

    if (location.hash) {
        $('.tabButton').removeClass('on');

        if (location.hash == "#sec2-1") {
            $('.sec2-1').addClass('on').siblings().removeClass('on');
            $('.tabButton').eq(0).addClass('on');
        } else if (location.hash == "#sec2-2") {
            $('.sec2-2').addClass('on').siblings().removeClass('on');
            $('.tabButton').eq(1).addClass('on');
        } else if (location.hash == "#sec2-3") {
            $('.sec2-3').addClass('on').siblings().removeClass('on');
            $('.tabButton').eq(2).addClass('on');
        } else if (location.hash == "#sec2-4") {
            $('.sec2-4').addClass('on').siblings().removeClass('on');
            $('.tabButton').eq(3).addClass('on');
        } else if (location.hash == "#sec2-5") {
            $('.sec2-5').addClass('on').siblings().removeClass('on');
            $('.tabButton').eq(4).addClass('on');
        } else if (location.hash == "#sec2-6") {
            $('.sec2-6').addClass('on').siblings().removeClass('on');
            $('.tabButton').eq(5).addClass('on');
        }
    }


    $(".sub li a").each(function () {
        $(this).click(function () {
            var thisHash = $(this).attr('href'); // 목적지 추출
            var thisHashTrim = thisHash.substr(thisHash.length - 6, 6); // 목적지에서 #이후 문자열만 추출
            var thisHashClass = '.' + thisHashTrim; // 목적지에서 #이후 문자열만 추출
            $('.tabButton').removeClass('on');
            $(thisHashClass).addClass('on').siblings().removeClass('on');
            $('.nav').removeClass('on');
        });
    });



    $('.slideWrap').slick({
        infinite: true,
        slidesToScroll: 4,
        dots: false,
        setPosition: 0,
        slidesToShow: 4,
        responsive: [
            { breakpoint: 768,
                settings: { 
                    slidesToShow: 3,
                }
            }
        ]
    });

    var icon = $(".ie9 .icon li")
    icon.each(function () {
        $(this).mouseenter(function () {
            $(this).find('span').stop().animate({
                bottom: "-25px",
                opacity: "1"
            }, 'slow');
        });
        $(this).mouseleave(function () {
            $(this).find('span').stop().animate({
                bottom: "0",
                opacity: "0"
            }, 'slow');
        });
    });


    var productImg = $(".ie9 .product_img");
    productImg.each(function () {
        $(this).mouseenter(function () {
            $(this).find("div").stop().animate({
                bottom: "110px"
            }, 700);
        });
        $(this).mouseleave(function () {
            $(this).find("div").stop().animate({
                bottom: "0"
            }, 700);
        });
    });

});