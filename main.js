
// GitHub: @enkr1
// Instagram: @enkr1
// :)


$(document).ready(function () {
    // load parts
    $('#footer').load('/footer.html');
    // $('#navbar').load('/navbar.html');

    // preload
    setTimeout(function () {
        const preload = document.querySelector('.preload');
        const preloadTop = document.querySelector('.preload-top');
        const preloadBot = document.querySelector('.preload-bot');
        const svgLoading = document.querySelector('.svg-loading');
        svgLoading.classList.add('loading-finish');
        preload.classList.add('preload-finish');
        preloadTop.classList.add('moveup');
        preloadBot.classList.add('movedown');

        // only when finish loading, add y scroll 
        var root = document.getElementsByTagName('html')[0]; // '0' to assign the first (and only `HTML` tag)
        root.classList.add('enablescroll');
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
        },
        { passive: true }
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
        if ($('#home').isInViewport()) {
            console.log('rched home.');

        } else if ($('#about').isInViewport()) {
            console.log('rched about.');

        } else if ($('#specialization').isInViewport()) {
            console.log('rched specialization.');

        } else if ($('#portfolio').isInViewport()) {
            console.log('rched portfolio.');

        } else if ($('#experience').isInViewport()) {
            console.log('rched experience.');

        } else if ($('#contact').isInViewport()) {
            console.log('rched contact.');

        }
    });



    // plugins
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });



});
