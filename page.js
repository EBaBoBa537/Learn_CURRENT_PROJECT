var scrollNow = scrollY;
var to_next_page = document.getElementById("to_next_page");
var to_previous_page = document.getElementById("to_previous_page");
var to_begin_button = document.getElementById("to_begin_button");
var headerline = document.getElementById("headerline");
var navigation = document.getElementById("navigation");

document.onscroll = function() {
    if (scrollNow < scrollY) {
        headerline.style.top = "-31px";
        navigation.style.transition = "top 0.1s ease-in-out, height 0.1s ease-in-out";
        navigation.style.top = "50px";
        navigation.style.height = "calc(100% - 75px - 45px)";
    } else {
        headerline.style.top = "0px";
        navigation.style.transition = "top 0.1s ease-in-out, height 0.1s ease-in-out";
        navigation.style.top = "80px";
        navigation.style.height = "calc(100% - 105px - 45px)";
    }

    if (scrollY + window.innerHeight + 130 >= document.body.scrollHeight) {
        to_next_page.style.transition = "opacity 0.3s, visibility 0s linear 0.3s";
        to_previous_page.style.transition = "opacity 0.3s, visibility 0s linear 0.3s";
        to_next_page.style.opacity = "0";
        to_previous_page.style.opacity = "0";
        to_next_page.style.visibility = "hidden";
        to_previous_page.style.visibility = "hidden";
    } else {
        to_next_page.style.transition = "opacity 0.3s, visibility 0s linear 0s";
        to_previous_page.style.transition = "opacity 0.3s, visibility 0s linear 0s";
        to_next_page.style.opacity = "1";
        to_previous_page.style.opacity = "1";
        to_next_page.style.visibility = "visible";
        to_previous_page.style.visibility = "visible";
    }

    if (scrollY + window.innerHeight + 30 >= document.body.scrollHeight) {
        to_begin_button.style.bottom = "75px";
        navigation.style.transition = "top 0.1s ease-in-out, height 0.1s ease-out";
        navigation.style.height = "calc(100% - 105px - 45px)";
    } else {
        to_begin_button.style.bottom = "45px";
    }

    scrollNow = scrollY;
};
