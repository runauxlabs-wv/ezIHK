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


//버튼 창띄우기
var ba = document.querySelectorAll("a.ba");

[].forEach.call(ba, function (bas) {
    bas.addEventListener('click', function (e) {
        if (confirm('학생 포트폴리오로 본인인증없이 폼작성 페이지로 연결됩니다.')) {
            location.href = "/portfolio/minwon_police/html/minwon_police_form2.html";
        } else {}
        e.preventDefault();
    });
});


$(function () {

    //ajax 불러오기
    $('#siteBox1').load("/portfolio/minwon_police/html/terms.html #box1");
    $('#siteBox2').load("/portfolio/minwon_police/html/terms.html #box2");

    // sub메뉴 hover & tabindex
    if (window.innerWidth > 1200) {
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
    $(".topBanner").on("keyup", function (e) {
        if (e.keyCode == 9) {
            $(".header_bottom").removeClass('active');
            // $('.ie9 .header_bottom .gnbsub').css({
            //     "height": "0px"
            // });
            $(".gnbsub").hide();
        }
    });

    // //ie9 transition대신 animate 바꿔치기
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



    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });





});