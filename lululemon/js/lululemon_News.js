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

var clamp = document.querySelectorAll('.hoverShow');
[].forEach.call(clamp, function(eachClamp) {
    new MultiClamp(eachClamp, {
        ellipsis: '...',
        clamp: 2
    });
});


$(function () {

    //nav 색상변경
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $("header").addClass("on");
        } else {
            $("header").removeClass("on");
        }
    });


    var card = $(".ie9 .card")
    card.each(function () {
        $(this).mouseenter(function () {
            $(this).find("div").stop().animate({
                bottom: "84px"
            }, 500);
        });
        $(this).mouseleave(function () {
            $(this).find("div").stop().animate({
                bottom: "0"
            }, 500);
        });
    });



});