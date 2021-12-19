



var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
});


function slideToLeft() {
    ham = document.getElementById("ham");
    if (ham.classList.contains("show")) {
        ham.classList.remove("show");
    } else {
        ham.classList.add("show");
    }
}



function init() {
    slideHam = document.getElementsByClassName("hamburger");
    slideHam[0].addEventListener("click", slideToLeft, false);
    closeHam = document.getElementById("InsideHamburger");

}
window.onload = init;


$(document).ready(function () {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var mainTop = $("header").offset().top;
        var navbarHeight = $("").height();

        if (scrollTop > mainTop) {
            $("#navbar2").addClass("fixed");
            $("header").css("paddingTop", navbarHeight);
        } else {
            $("#navbar2").removeClass("fixed");
            $("header").css("paddingTop", 0);

        }
    })
});

$(document).ready(function () {
    $(window).scroll(function () {
        var scrollTop2 = $(window).scrollTop();
        var mainTop2 = $(".quide").offset().top;
      


        if (scrollTop2 > mainTop2) {
            $(".suportArea").addClass("fixed");
           
        } else {
            $(".suportArea").removeClass("fixed");
          
        }
    })
});



var VisibleMenu = '';

function switchMenu(theMainMenu, theSubMenu, theEvent) {
    var SubMenu = document.getElementById("hotelBoxInside");
    if (SubMenu.style.display == 'none') { // 顯示子選單
        SubMenu.style.display = 'block';
        VisibleMenu = theSubMenu;
    } else { // 隱藏子選單
        if (theEvent != 'MouseOver' || VisibleMenu != theSubMenu) {
            SubMenu.style.display = 'none';
            VisibleMenu = '';
        }
    }
}

function hideMenu() {
    if (VisibleMenu != '') {
        document.getElementById(VisibleMenu).style.display = 'none';
    }
    VisibleMenu = '';
}

var VisibleMenu2 = '';

function switchMenu2(theMainMenu2, theSubMenu2, theEvent2) {
    var SubMenu2 = document.getElementById("hotelBoxInside2");
    if (SubMenu2.style.display == 'none') { // 顯示子選單
        SubMenu2.style.display = 'block';
        VisibleMenu2 = theSubMenu2;
    } else { // 隱藏子選單
        if (theEvent2 != 'MouseOver' || VisibleMenu2 != theSubMenu2) {
            SubMenu2.style.display = 'none';
            VisibleMenu2 = '';
        }
    }
}

function hideMenu2() {
    if (VisibleMenu2 != '') {
        document.getElementById(VisibleMenu2).style.display = 'none';
    }
    VisibleMenu2 = '';
}

$(document).ready(function () {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var mainTop = $("main").offset().top;
        var navbarHeight = $("").height();

        if (scrollTop > mainTop) {
            $("#go_top").addClass("show");
            $("body").css("paddingTop", navbarHeight);
        } else {
            $("#go_top").removeClass("show");
            $("body").css("paddingTop", 0);

        }
    })
});
