// nav open
var nav = document.querySelector("nav");

function addOn() {
    nav.classList.add("on");
}

function removeOn() {
    nav.classList.remove("on");
}

var menuBt = document.querySelector("a.menuBt");
var closeBt = document.querySelector("span.closeBt");


menuBt.addEventListener('click', addOn);
closeBt.addEventListener('click', removeOn);



//gnb 클릭시 subgnb open
if (window.innerWidth < 1201) {
    var gnb = document.querySelectorAll(".gnb li a");
    [].forEach.call(gnb, function (gnbbt, index) {
        gnbbt.addEventListener('click', function (e) {
            var subgnb = document.querySelectorAll(".subgnb > li");
            for (var i = 0; i < subgnb.length; i++) {
                subgnb[i].classList.remove("on");
                gnb[i].classList.remove("on");
            }
            subgnb[index].classList.add("on");
            this.classList.add("on");
            e.preventDefault();
        });
    });
}

// sec2 tab
var tabButton = document.querySelectorAll(".tabButton");
[].forEach.call(tabButton, function (eachButton, index) {
    eachButton.addEventListener('click', function (e) {
        var tabBox = document.querySelectorAll(".tabBox");
        for (var i = 0; i < tabBox.length; i++) {
            tabBox[i].classList.remove("on");
            tabButton[i].classList.remove("on");
        }
        tabBox[index].classList.add("on");
        this.classList.add("on");
    });
});

//카카오 지도 api

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(36.813787653726116, 127.18877137044238), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition = new kakao.maps.LatLng(36.813787653726116, 127.18877137044238);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);


// 지도에 클릭 이벤트를 등록합니다


mapContainer.addEventListener('click', function () {
    var url = 'https://map.kakao.com/link/map/우정박물관,36.813787653726116, 127.18877137044238';
    window.open(url, '_blank');
});


if (window.innerWidth < 767) {
    var clamp = document.querySelectorAll('p.ellipsis');
    [].forEach.call(clamp, function (eachClamp) {
        new MultiClamp(eachClamp, {
            ellipsis: '...',
            clamp: 3
        });
    });
}

var clamp2 = document.querySelectorAll('.clickShow');
[].forEach.call(clamp2, function (eachClamp1) {
    new MultiClamp(eachClamp1, {
        ellipsis: '...',
        clamp: 6
    });
});






$(function () {

    if (window.innerWidth < 1201) {
        var subMore = $('.subMore');

        subMore.click(function (e) {
            $('.sub').each(function () {
                $(this).stop().slideUp('fast');
            })
            $(this).next().stop().slideToggle('fast');
            e.preventDefault();
        });
    }


    // notice slide
    $('.slickSlide').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        vertical: true,
        autoplay: true,
        autoplayspeed: 1500,
        infinite: true,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, ]

    });

    $('.stampSlideWrap').slick({
        arrows: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        variableWidth: true,
        rtl: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, ]
    });

 
    // ie 일땐 이벤트 막고 항상 add on 상태

    $('.is-ie .slideBox').addClass('on');
    $('.slideBox').click(function (e) {
        var browser = navigator.userAgent;
        if (browser.match(/Trident/)) {
            e.stopPropargation();
        } 
        $(this).toggleClass('on').siblings().removeClass('on');
    });





    //리모컨
    $(".scroll li").each(function () {
        var thisOffset = $("." + $(this).data('id')).offset().top;

        $(this).click(function () {
            $("html, body").animate({
                scrollTop: thisOffset
            }, 800);
            $(this).addClass('on').siblings().removeClass('on');
        });
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
                    src: "/portfolio/woojeong/img/main02-1.png",
                    delay: 3500
                },
                {
                    src: "/portfolio/woojeong/img/main03-1.png",
                    delay: 3500
                },
                {
                    src: "/portfolio/woojeong/img/main01-1.png",
                    delay: 3500
                },
            ], //슬라이드는 배열로, 각자 객체로 입력
            // overlay: '../lib/vegas/overlays/05.png', //망점효과
            //효과 배열로 매칭
            // animation: 'random', //효과랜덤
            animation: ['kenburnsDownLeft', 'kenburnsUpLeft', 'kenburnsUp'],
        });
    } else {
        $('.section1').removeClass('pcvegas');
    }




});
$(document).scroll(function () {
    var scrolltop = $(window).scrollTop();

    $("section").each(function () {
        if (scrolltop >= $(this).offset().top - 450) {

            $(".scroll li[data-id=" + $(this).attr('class').split(' ')[0] + "]").addClass('on').siblings().removeClass('on');
            if ($(this).is('.section2, .section4')) {
                $('.logo img').attr("src", "/portfolio/woojeong/img/logoRed.png");
                $('.menuBt').addClass("Red");
            } else if ($(this).is('.section3, .section1')) {
                $('.logo img').attr("src", "/portfolio/woojeong/img/logo.png");
                $('.menuBt').removeClass("Red");
            }
        }
    });
});
