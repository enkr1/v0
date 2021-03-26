// GitHub: @enkr1
// Instagram: @enkr1
// :)

// https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

$(document).ready(function () {

    // /*
    // https://www.w3schools.com/xml/ajax_intro.asp
    // IDEA!! 
    $("#interest-nav-item").on("click", function () {
        const xhr = new XMLHttpRequest();
        // const landing_section = document.getElementById("landing-section");
        const landing_section = document.getElementById("index-body");

        xhr.onload = function () {
            if (200 === this.status) {
                landing_section.innerHTML = xhr.responseText;
            } else {
                console.warn("NOT 200");
            }
        }
        xhr.open("get", "_interest.html")
        xhr.send();
    });
    // */


    // load parts
    // $('#navbar').load('/navbar.html');


    // https://stackoverflow.com/questions/21561480/trigger-event-when-user-scroll-to-specific-element-with-jquery
    // https://stackoverflow.com/questions/52220491/jquery-detecting-if-element-is-in-viewport
    // https://stackoverflow.com/questions/45362236/isinview-not-working-correctly
    // detect scroll to
    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('#up').fadeIn();
        } else {
            $('#up').fadeOut();
        }

        // if ($('#home').isInViewport()) {
        //     console.log('rched home.');

        // } else if ($('#about').isInViewport()) {
        //     console.log('rched about.');

        // } else if ($('#specialization').isInViewport()) {
        //     console.log('rched specialization.');

        // } else if ($('#portfolio').isInViewport()) {
        //     console.log('rched portfolio.');

        // } else if ($('#experience').isInViewport()) {
        //     console.log('rched experience.');

        // } else if ($('#contact').isInViewport()) {
        //     console.log('rched contact.');

        // }
    });


    // https://medium.com/@nilayvishwakarma/build-a-scroll-progress-bar-with-vanilla-js-in-10-minutes-or-less-4ba07e2554f3
    document.addEventListener(
        "scroll",
        function () {
            var scrollTop =
                document.documentElement["scrollTop"] || document.body["scrollTop"];
            var scrollBottom =
                (document.documentElement["scrollHeight"] ||
                    document.body["scrollHeight"]) - document.documentElement.clientHeight;
            scrollPercent = scrollTop / scrollBottom * 100 + "%";
            document
                .getElementById("_progress")
                .style.setProperty("--scroll", scrollPercent);
        }, {
            passive: true
        }
    );


    // Handle ESC key (key code 27)
    // document.addEventListener('keyup', function (e) {
    //     $('.menu-toggler').removeClass('open');
    //     $('.top-nav').removeClass('open');
    // });


    let mouseCursor = document.querySelector(".cursor");
    let words = document.querySelectorAll("img, .nav-link");
    window.addEventListener('mousemove', cursor);

    function cursor(e) {
        mouseCursor.style.top = e.pageY + 'px';
        mouseCursor.style.left = e.pageX + 'px';
    }

    words.forEach(word => {
        word.addEventListener("mouseover", () => {
            mouseCursor.classList.add("img-grow");
            // image.classList.add("img-hover");
        })
        word.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("img-grow");
            // image.classList.add("img-hover");
        })
    });


    // menu bar 
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });


    // Navigation bar
    // scrolling detection
    let topnav = document.querySelector('.top-nav');
    let navlogo = document.querySelector('.nav-logo')

    window.onscroll = function (e) {
        // print "false" if direction is down and "true" if up
        // console.log(this.oldScroll > this.scrollY);
        // console.log(this.scrollY)

        if (screen.width > 800) {

            if (this.oldScroll > this.scrollY) {
                topnav.classList.add('scrollup')
            } else {
                topnav.classList.remove('scrollup')
                topnav.classList.add('startscrolling')
                navlogo.classList.add('hide')
            }

            // leave top
            if (this.scrollY == 0) {
                topnav.classList.remove('startscrolling')
                topnav.classList.remove('scrollup')
                navlogo.classList.remove('hide')
            }

            this.oldScroll = this.scrollY;

        }
    }


    // plugins
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });

});