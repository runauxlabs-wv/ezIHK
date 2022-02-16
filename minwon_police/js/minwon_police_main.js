// var slide = new Swiper(".slide", {
//     loop: true,
//     slidesPerView: 1,
//     autoplay: {
//         delay: 2000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// new Swiper(".siteSlide", {
//     loop: true,
//     slidesPerView: 7,
//     spaceBetween: 20,
//     autoplay: {
//         delay: 2000,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//         500: {
//             slidesPerView: 5,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 7,
//             spaceBetween: 20,
//         },
//     },
// });


//모바일 nav open
if (window.innerWidth < 1200) {
    var gnb = document.querySelector("div.gnb");
    var headerTop = document.querySelector("div.header_top");

    function addOn() {
        gnb.classList.add("on");
        headerTop.classList.add("on");
    }

    function removeOn() {
        gnb.classList.remove("on");
        headerTop.classList.remove("on");
    }
    var hamburgerBt = document.querySelector(".hamburger");
    var closeBt = document.querySelector(".close");

    hamburgerBt.addEventListener('click', addOn);
    closeBt.addEventListener('click', removeOn);

    // 메뉴클릭시 subOn

    var nav = document.querySelectorAll(".nav li a");
    [].forEach.call(nav, function (eachButton, index) {
        eachButton.addEventListener('click', function (e) {
            var sub = document.querySelectorAll("ul.sub");
            for (var i = 0; i < sub.length; i++) {
                sub[i].classList.remove("on");
                nav[i].classList.remove("on");
            }
            sub[index].classList.add("on");
            this.classList.add("on");
            e.preventDefault();
        });
    });

    // var subMenu = document.querySelectorAll(".sub li a");
    // subMenu.forEach(function (subMenu) {
    //     subMenu.addEventListener('click', function (e) {
    //         if (this.classList.add('on')) {} else {
    //             this.classList.remove("on");
    //         }
    //     });
    // });
}

//footer site_go
var btWrap1 = document.querySelector("div.btWrap1");
var btWrap2 = document.querySelector("div.btWrap2");

function toggleOn() {
    btWrap1.classList.toggle("on");
}

function toggleOn1() {
    btWrap2.classList.toggle("on");
}

btWrap1.addEventListener('click', toggleOn);
btWrap2.addEventListener('click', toggleOn1);


// 화면 확대 / 축소
var zoomIn1 = document.querySelector("a.zoomIn");
var zoomOut1 = document.querySelector("a.zoomOut");
var zoomTxt1 = document.querySelector("span.zoomTxt");

var nowZoom = 100;

var zoomControl = {
    zoomIn: function () {
        nowZoom = nowZoom + 10;
        if (nowZoom >= 130) nowZoom = 130;
        zoomControl.zooms();
    },
    zoomOut: function () {
        nowZoom = nowZoom - 10;
        if (nowZoom <= 70) nowZoom = 70;
        zoomControl.zooms();
    },
    zoomTxt: function () {
        nowZoom = 100;
        zoomControl.zooms();
    },
    zooms: function () {
        document.querySelector(".zoomTxt").innerHTML = nowZoom + "%";
        var browser = navigator.userAgent.toLowerCase();
        if (browser.indexOf("firefox") >= 0) {
            document.body.style.MozTransform = 'scale(' + nowZoom + '%)';
            document.body.style.MozTransformOrigin = "0 0";

        } else {
            document.body.style.zoom = nowZoom + "%";
        }

        if (nowZoom == 70) {
            alert("더 이상 축소할 수 없습니다.");
        }
        if (nowZoom == 130) {
            alert("더 이상 확대할 수 없습니다.");
        }
    }
}
zoomIn1.addEventListener('click', zoomControl.zoomIn);
zoomOut1.addEventListener('click', zoomControl.zoomOut);
zoomTxt1.addEventListener('click', zoomControl.zoomTxt);


$(function () {

    //모달띄우기
    $(".background").addClass('show');


    $(".closeBt").click(function () {
        $(".background").removeClass('show');
    });

    //ajax 불러오기
    $('#siteBox1').load("/portfolio/minwon_police/html/terms.html #box1");
    $('#siteBox2').load("/portfolio/minwon_police/html/terms.html #box2");

    //nav 색상변경
    if (window.innerWidth > 1200) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                $(".header_bottom").addClass("on");
            } else {
                $(".header_bottom").removeClass("on");
            }
        });
        $(".header_bottom").on("mouseenter", function (e) {
            $(this).addClass('active');
            $(".gnbsub").stop().slideDown();
        });
        $(".header_bottom").on("mouseleave", function (e) {
            // $(".gnbsub").stop().slideUp();
            // $(".gnbsub").hide();
            $(".gnbsub").hide();

            $(this).removeClass('active');
        });
    }


    //tab 접근성
    $(".nav, .header_bottom *").on("keyup", function (e) {
        if (e.keyCode == 9) {
            $(".header_bottom").addClass('active');
            // $('.ie9 .header_bottom.active .gnbsub').stop().animate({
            //     height: "420px"
            // }, 500);
            $(".gnbsub").stop().slideDown();
        }
    });
    $(".main").on("keyup", function (e) {
        if (e.keyCode == 9) {
            $(".header_bottom").removeClass('active');
            // $('.ie9 .header_bottom .gnbsub').css({
            //     "height": "0px"
            // });
            $(".gnbsub").hide();
        }
    });

    // // ie9 transition대신 animate 바꿔치기
    // var headerBottom = $(".ie9 .header_bottom")
    // headerBottom.mouseenter(function () {
    //     $('.gnbsub').stop().animate({
    //         height: "420px"
    //     }, 500);
    //     $('.gnbsub').css({
    //         "boxShadow": "0px 5px 5px rgba(0, 0, 0, 0.1)"
    //     });
    // });
    // headerBottom.mouseleave(function () {
    //     $('.gnbsub').stop(true).css({
    //         "height": "0"
    //     });
    // });


    var bt = $(".info .bt")
    bt.each(function () {
        $(this).mouseenter(function () {
            $(this).stop().animate({
                marginRight: "0px"
            }, 500);
        });
        $(this).mouseleave(function () {
            $(this).stop().animate({
                marginRight: "10px"
            }, 500);
        });
    })



    $('.slideWrap').slick({
        autoplay: true,
        autoplayspeed: 2000,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: false,
        prevArrow: $('.nextBt'),
        nextArrow: $('.prevBt'),
        responsive: [
            {
              breakpoint: 999,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
              }
            }
        ]
    });

    //slick slide,
    //slick pagenation ex) 1/6 먼저 뜨게 선언 -> 슬라이드 -> 페이지카운트
    var slideCount = $('.swiper-pagination');
    var baSlide = $('.baSlide');
    
    baSlide.on('init', function(event, slick){
        // slideCount.html('<span class="slideCountItem">' + 1 + '</span> ' + '/' + ' <span class="slideCountAll">' + slick.slideCount + '</span>');
        slideCount.append('<div class="slider-count"><p><span id="current">1</span>' + ' / ' + '<span id="total">'+slick.slideCount+'</span></p></div>');
    });
    
    $('.baSlide').slick({
        autoplay: true,
        autoplayspeed: 2000,
        infinite: true,
        pauseOnHover: false,
        prevArrow: $('.baPrev'),
        nextArrow: $('.baNext'),
    });

    baSlide.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        // var i = (currentSlide ? currentSlide : 0) + 1;
        // slideCount.html('<span class="slideCountItem">' + i + '</span>');
        $('.slider-count #current').html(currentSlide+1);
    });


    //슬라이드 재생멈춤버튼 (swiper)
    // $(".start").click(function () {
    //     baSlide.autoplay.start();
    //     $(this).addClass('disabled');
    //     $(".stop").removeClass('disabled');
    // });

    // $(".stop").click(function () {
    //     baSlide.autoplay.stop();
    //     $(this).addClass('disabled');
    //     $(".start").removeClass('disabled');
    // });

    //슬라이드 재생멈춤버튼 (slick)
    $(".start").click(function () {
        $('.baSlide').slick('slickPlay');
        $(this).addClass('disabled');
        $(".stop").removeClass('disabled');
    });

    $(".stop").click(function () {
        $('.baSlide').slick('slickPause');
        $(this).addClass('disabled');
        $(".start").removeClass('disabled');
    });



    //경찰행정qna tab
    $(".tab li").on("keyup", function (key) {
        if (key.keyCode == 13) {
            $(this).addClass('on').siblings().removeClass('on').attr('tabindex', '-1');
            $("#" + $(this).data('id')).addClass('on').attr('tabindex', '0').siblings().removeClass('on').removeAttr('tabindex');
        }
    });
    $(".tab li").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
    });

    



    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });
    // 모바일에서는 베가스 삭제
    if (window.innerWidth > 767) {
        $('.pcvegas').vegas({
            slides: [{
                    src: "/portfolio/minwon_police/img/mainBg1.png",
                    delay: 3500
                },
                {
                    src: "/portfolio/minwon_police/img/mainBg2.png",
                    delay: 3500
                },
                {
                    src: "/portfolio/minwon_police/img/mainBg3.png",
                    delay: 3500
                },
            ], //슬라이드는 배열로, 각자 객체로 입력
            // overlay: '../lib/vegas/overlays/05.png', //망점효과
            //효과 배열로 매칭
            // animation: 'random', //효과랜덤
            animation: ['kenburnsDownLeft', 'kenburnsUpLeft', 'kenburnsUp'],
        });
    } else {
        $('.main').removeClass('pcvegas');
    }


});
