var scrollNow = scrollY;
var to_begin_button = document.getElementById("to_begin_button");
var headerline = document.getElementById("headerline");
var navigation = document.getElementById("navigation"); 
var redact_exit = document.getElementById("redact_exit");
var redact_pages = document.getElementById("redact_pages");
var redact_dobavit = document.getElementById("redact_dobavit");
var redact_pages = document.getElementById("redact_pages");
var parent_redact_dobavit = redact_dobavit.parentNode;

redact_dobavit.style.transition = "top 0.1s ease-in-out, height 0s linear";
if(parent_redact_dobavit.classList.contains("first")) {
    redact_dobavit.style.height = "calc(100% - 135px - 45px - 123px)";
} else {
    redact_dobavit.style.height = "calc(100% - 135px - 68px - 123px)";
}

document.onscroll = function() {
    if (scrollNow < scrollY) {
        headerline.style.top = "-31px";
        navigation.style.transition = "top 0.1s ease-in-out, height 0.1s ease-in-out";
        navigation.style.top = "50px";
        navigation.style.height = "calc(100% - 75px - 45px)";
        redact_dobavit.style.transition = "top 0.1s ease-in-out, height 0.1s ease-in-out";
        redact_dobavit.style.top = "70px";
        if(parent_redact_dobavit.classList.contains("first")) {
            redact_dobavit.style.height = "calc(100% - 105px - 45px - 123px)";
        } else {
            redact_dobavit.style.height = "calc(100% - 105px - 68px - 123px)";
        }
    } else {
        headerline.style.top = "0px";
        navigation.style.transition = "top 0.1s ease-in-out, height 0.1s ease-in-out";
        navigation.style.top = "80px";
        navigation.style.height = "calc(100% - 105px - 45px)";
        redact_dobavit.style.transition = "top 0.1s ease-in-out, height 0.1s ease-in-out";
        redact_dobavit.style.top = "100px";
        if(parent_redact_dobavit.classList.contains("first")) {
            redact_dobavit.style.height = "calc(100% - 135px - 45px - 123px)";
        } else {
            redact_dobavit.style.height = "calc(100% - 135px - 68px - 123px)";
        }
    }

    if (scrollY + window.innerHeight + 30 >= document.body.scrollHeight) {
        to_begin_button.style.bottom = "75px";
        redact_exit.style.bottom = "92px";
        redact_pages.style.bottom = "92px";
        navigation.style.transition = "top 0.1s ease-in-out, height 0.1s ease-out";
        navigation.style.height = "calc(100% - 105px - 45px)";
        redact_dobavit.style.transition = "top 0.1s ease-in-out, height 0.1s ease-out";
        if(parent_redact_dobavit.classList.contains("first")) {
            redact_dobavit.style.height = "calc(100% - 135px - 45px - 123px)";
        } else {
            redact_dobavit.style.height = "calc(100% - 135px - 68px - 123px)";
        }
        redact_pages.style.transition = "bottom 0.1s ease-out";
    } else {
        to_begin_button.style.bottom = "45px";
        redact_exit.style.bottom = "45px";
        redact_pages.style.bottom = "62px";
        redact_pages.style.transition = "bottom 0.1s ease-out";
    }

    scrollNow = scrollY;
};