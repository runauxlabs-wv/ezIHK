var tabBt = document.querySelectorAll(".tabBox li");
[].forEach.call(tabBt, function (eachButton, index) {
    eachButton.addEventListener('click', function () {
        var conBox = document.querySelectorAll(".conBox");
        for (var i = 0; i < conBox.length; i++) {
            conBox[i].classList.remove("on");
            tabBt[i].classList.remove("on");
        }
        conBox[index].classList.add("on");
        this.classList.add("on");
    });
});


$(function () {

    // main slick
    $('.sec1').slick({
        arrows: false,
        infinite: true,
        speed: 650,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
    });


    // top 버튼
    $(".top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });


});
