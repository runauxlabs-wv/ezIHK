gsap.utils.toArray('.talkWrap').forEach(section => {
    const elems = section.querySelectorAll('.talkBox');
    // Set starting params for sections
    gsap.set(elems, {
        y: 50,
        opacity: 0,
        duration: 10,
        ease: 'power3.out',
        overwrite: 'auto',
    });

    ScrollTrigger.create({
        trigger: section,
        start: 'top 60%',
        end: 'bottom 30%',
        //   markers: true,
        onEnter: () => gsap.to(elems, {
            y: 0,
            opacity: 1,
            stagger: 0.8,
        }),
        onLeave: () => gsap.to(elems, {
            y: -50,
            opacity: 0,
            stagger: 0.8,
        }),
        onEnterBack: () => gsap.to(elems, {
            y: 0,
            opacity: 1,
            stagger: 0.8,
        }),
        onLeaveBack: () => gsap.to(elems, {
            y: 50,
            opacity: 0,
            stagger: 0.8,
        }),
    });
})

//aos 대신


window.addEventListener('scroll', () => {
    var scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
    // if (window.innerWidth > 1899) {
        if (scrollLocation > 8600) {
            gsap.utils.toArray('.contactWrap').forEach(section => {
                const elems = section.querySelectorAll('.contact');
                // Set starting params for sections
                gsap.set(elems, {
                    y: 50,
                    opacity: 0,
                    duration: 30,
                    ease: 'power3.out',
                    overwrite: 'auto',
                });

                ScrollTrigger.create({
                    trigger: section,
                    start: 'top 60%',
                    end: 'bottom 30%',
                    //   markers: true,
                    onEnter: () => gsap.to(elems, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.8,
                    }),
                    onLeave: () => gsap.to(elems, {
                        y: -50,
                        opacity: 0,
                        stagger: 0.8,
                    }),
                    onEnterBack: () => gsap.to(elems, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.8,
                    }),
                    onLeaveBack: () => gsap.to(elems, {
                        y: 50,
                        opacity: 0,
                        stagger: 0.8,
                    }),
                });
            })
        }
    // }
})


// gsap.registerPlugin(ScrollTrigger);

// const pageContainer = document.querySelector(".container");

// /* SMOOTH SCROLL */
// const scroller = new LocomotiveScroll({
//   el: pageContainer,
//   smooth: true
// });

// scroller.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(pageContainer, {
//   scrollTop(value) {
//     return arguments.length
//       ? scroller.scrollTo(value, 0, 0)
//       : scroller.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       left: 0,
//       top: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   },
//   pinType: pageContainer.style.transform ? "transform" : "fixed"
// });

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {

    var projectWrap = document.querySelector(".projectWrap");
    var projectWrapWidth = projectWrap.offsetWidth;
    var horizontalScrollLength = projectWrapWidth - window.innerWidth;

    gsap.to(projectWrap, {
        scrollTrigger: {
            // scroller: pageContainer, //locomotive-scroll
            scrub: true,
            trigger: "#section",
            pin: true,
            // anticipatePin: 1,
            start: "top top",
            end: projectWrapWidth,
            invalidateOnRefresh: true
        },
        x: -horizontalScrollLength,
        ease: "none"
    });

    // ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

    ScrollTrigger.refresh();
});





$(function () {

    // $(window).scroll(function () {
    //     const distanceFromHtml = sec4.getBoundingClientRect().top + window.pageYOffset
    //     // var divTop = document.querySelector("#sec4").offsetTop;
    //     console.log("HTML 시작점으로부터의 거리",distanceFromHtml);
    // }); 
    //스크롤값 구하기
    // $(window).scroll(function () {
    //     var scrollValue = $(document).scrollTop();
    //     console.log(scrollValue);
    // });

    var $mainTxt = $('[data-main-text]');
    var maxDuration = 2000;
    var maxDelay = 500;
    var minDuration = maxDuration - maxDelay;

    $mainTxt.blast({
        delimiter: 'character',
    });

    setTimeout(function () {
        $mainTxt.find('.blast').each(function (i, el) {
            var $el = $(el);

            var duration = getRandomValue(minDuration, maxDuration);
            var delay = maxDuration - duration;
            var blur = getRandomValue(2, 10);

            // From
            $el.velocity({
                opacity: 0,
                blur: blur,
            }, {
                duration: 0,
            });

            // To
            $el.velocity({
                opacity: 1,
                blur: 0,
            }, {
                duration: duration,
                delay: delay,
                ease: [250, 0],
            });
        });

        $mainTxt.css({
            visibility: 'visible'
        });
    }, 500);

    var getRandomValue = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    $('.slideWrap').slick({
        autoplay: true,
        autoplayspeed: 2500,
        infinite: true,
        pauseOnHover: false,
        arrows: false,
    });

    //모달띄우기
    var talk = $(".talk")
    var body = $("body")


    talk.each(function () {
        $(this).click(function () {
            $(".background").addClass('show');
            body.addClass('scrollLock');
        });
    });
    $(".modal").click(function () {
        $(".background").removeClass('show');
        body.removeClass('scrollLock');

    });
});