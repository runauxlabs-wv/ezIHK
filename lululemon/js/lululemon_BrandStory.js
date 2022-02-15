window.onload = function () {



    //하단 슬라이드
    // var slide = new Swiper(".slide", {
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //     },
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    //     loop: true,
    //     autoplay: {
    //         delay: 2000,
    //         disableOnInteraction: false,
    //     },
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
            e.preventDefault();
        })
    })
   

    // 모바일 연꽃
    var iw2 = window.innerWidth;
    if (iw2 < 1200) {


        var lotusBts = document.querySelectorAll('.lotusBt');
        [].forEach.call(lotusBts, function (lotusEach, index) {
            lotusEach.addEventListener('click', function () {
                var lotusTxt1 = document.querySelectorAll('.lotusTxt');
                for (var i = 0; i < lotusTxt1.length; i++) {
                    lotusTxt1[i].classList.remove("on");
                    lotusBts[i].classList.remove("on");
                }
                lotusTxt1[index].classList.add("on");
                this.classList.add("on");
            })
        })

    }
};

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

        if (location.hash == "#sec1-1") {
            $('.sec1-1').addClass('on').siblings().removeClass('on');
            $('.tabButton').eq(0).addClass('on');
        } else if (location.hash == "#sec1-2") {
            $('.sec1-2').addClass('on').siblings().removeClass('on');
            $('.tabButton').eq(1).addClass('on');
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
        autoplay: true,
        autoplayspeed: 2000,
        infinite: true,
        dots: true,
        nextArrow: $('.swiper-button-next'),
        pauseOnHover: false,
    });

});



//카운팅
$(document).scroll(function () {
    var scrolltop = $(window).scrollTop();
    if (scrolltop > $(".impactCount").offset().top - 400) {
        $('.counting').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            //시작 숫자와 종료숫자를 비교한다    
            $({
                // countNum: $this.text()
                countNum: 0
            }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'linear',
                step: function () {
                    $this.text(comma(Math.floor(this.countNum)));
                },
                complete: function () {
                    $this.text(comma(this.countNum));
                }
            });
        });
    }
});


function comma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// 3자리마다 ,콤마찍는 함수
