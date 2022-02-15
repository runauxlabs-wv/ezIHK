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


// 각 이용약관 체크박스, 모두 선택이 전체선택 활성화
function checkSelectAll() {
    // 전체 체크박스
    var checkbox1 = document.querySelectorAll("input[name='agree_01']");
    // 선택된 체크박스
    var checkbox1True = document.querySelectorAll("input[name='agree_01']:checked");
    // select all 체크박스
    var checkAll = document.querySelector("input[name='selectall']");
    //유효성검사

    if (checkbox1.length === checkbox1True.length) {
        checkAll.checked = true;
    } else {
        checkAll.checked = false;
    }
}

// 이용약관 전체선택 체크박스 
function selectAll(checkAll) {
    var checkbox1 = document.getElementsByName("agree_01");
    [].forEach.call(checkbox1, function (checkbox) {
        checkbox.checked = checkAll.checked
    })
}



function validate() {
    // 전체 체크박스
    var checkbox1 = document.querySelectorAll("input[name='agree_01']");
    // 선택된 체크박스
    var checkbox1True = document.querySelectorAll("input[name='agree_01']:checked");
    // select all 체크박스
    var checkAll = document.querySelector("input[name='selectall']");
    // var agree1 = document.querySelector("#agree1");
    //유효성검사
    var tel = document.querySelector("input[name='tel']")
    var addDetail = document.querySelector("input[name='detail']")
    var type1 = document.querySelector("#type1")
    var type2 = document.querySelector("#type2")
    // var reg = /^[0-9]+/g; //숫자만 입력하는 정규식

    if (checkbox1.length === checkbox1True.length) {
        checkAll.checked = true;
    } else {
        alert("약관 동의를 체크해주세요.");
        checkAll.focus();
        return false;
    }
    // //국민신문고 약관동의
    // if (!agree1.checked) { //체크박스 미체크시
    //     alert("약관 동의를 체크해주세요.");
    //     agree1.focus();
    //     return false;
    // }
    if (!type1.checked && !type2.checked) { //둘다 미체크시
        alert("신청인 구분을 선택해주세요.");
        document.querySelector("label[for='type1']").focus();
        type1.checked = true;
        return false;
    }
    if (tel.value == "") {
        alert("전화번호를 입력해주세요.");
        tel.focus();
        return false;
    }
    if (addDetail.value == "") {
        alert("상세주소를 입력해주세요.");
        addDetail.focus();
        return false;
    };
}
var validation = document.querySelector('#validation');
// validation.addEventListener('click', (e) => validate(e));
validation.addEventListener('click', function(e) {
    validate(e)
});

//ie9이고 상세주소 값이 있으면 label display: none 하기
var addLabel1 = document.querySelector('label[for="address_kakao"]')
var addLabel2 = document.querySelector('label[for="addDetail"]')
var addDetail = document.querySelector("input[name='detail']")


// navigator.userAgent.indexOf('9.0') 으로 실행할 경우 
// 30 이란 값이 나옵니다. 유저 정보의 30번째 문자열에 정보가 있다는 것
// 해당 정보가 없을 경우 -1값을 떨굽니다.
// if(navigator.userAgent.indexOf('9.0') !== -1 && addDetail) { // 레이블 떠야됨, 빈상태에서 주소검색이 입력되었을때레이블 없애기

if (navigator.userAgent.indexOf('9.0') !== -1) {
    // 레이블 떠야됨, 빈상태에서 주소검색이 입력되었을때레이블 없애기
    // if($(addDetail).val() == ""){
    //     console.log('입력해라');
    //     addLabel1.style.display = "block";  
    //     addLabel2.style.display = "block";
    // }
    // var oldVal;
    // $(addDetail).on("propertychange change keyup paste input", function() {
    //     var currentVal = $(this).val();

    //     if(currentVal == oldVal){
    //         return;
    //     }
    //     oldVal = currentVal;
    //     console.log('입력됐다');
    //     addLabel1.style.display = "none";
    //     addLabel2.style.display = "none";
    // });

    addDetail.addEventListener('keyup', function (e) {
        if (!!e.target.value) {
            console.log('입력됐다');
            addLabel2.style.display = "none";
        } else {
            console.log('입력해라');
            addLabel2.style.display = "block";
        }
    })
}

//카카오 주소 api
window.onload = function () {
    document.querySelector("div.add").addEventListener("click", function () {
        new daum.Postcode({
            oncomplete: function (data) {
                document.getElementById("address_kakao").value = data.address;
                if(navigator.userAgent.indexOf('9.0') !== -1) {
                    if (data.address) {
                        console.log('자동입력했다');
                        addLabel1.style.display = "none";
                    } else {
                        console.log('자동입력해라');
                        addLabel1.style.display = "block";
                    }
                }
                document.querySelector("input[name='detail']").focus();
            }
        }).open();
    });
}

// 하이픈 넣기, 문자입력시 문구출력
var tel = document.querySelector("input[name='tel']")
var result = document.querySelector(".result");

var autoHyphen = function (tel) {
    tel.value = tel.value
        .replace(/[^0-9]/, '')
        .replace(/^(\d{3,4})(\d{4})$/, '$1-$2');
}

tel.onkeyup = function (e) {
    var reg = (/^[0-9]+/g).test(tel.value);
    // if(!reg.test(tel.value)) {
    if (!reg) {
        result.innerHTML = "전화번호는 숫자만 입력할 수 있습니다.";
        tel.focus();
        return false;
    } else if (reg) {
        result.innerHTML = "";
    }
}


$(function () {


    // ajax 정보 불러오기

    $('#termsWrap_1').load("/portfolio/minwon_police/html/terms.html #terms1");
    $('#termsWrap_2').load("/portfolio/minwon_police/html/terms.html #terms2");
    $('#termsWrap_3').load("/portfolio/minwon_police/html/terms.html #terms3");
    $('#termsWrap_4').load("/portfolio/minwon_police/html/terms.html #terms4");
    $('#siteBox1').load("/portfolio/minwon_police/html/terms.html #box1");
    $('#siteBox2').load("/portfolio/minwon_police/html/terms.html #box2");
    $('#numSelect').load("/portfolio/minwon_police/html/terms.html #numSel");
    



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

    //년도생성
    for (var i = 2022; i >= 1920; i--) {
        $('#selectYear').append(new Option(i, i));
    }

    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function() {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });


});

//https://kin.naver.com/qna/detail.nhn?d1id=1&dirId=1040202&docId=344246285&qb=SFRNTA==&enc=utf8&section=kin.qna&rank=12&search_sort=0&spq=0

//[Javascript] Javascript에서 request.getParameter
// https://bbuljj.tistory.com/91

// JSON 연결하여 소스줄이기