$(document).ready(function () {
    // preload
    // window.addEventListener('load', () => {
    //     const preload = document.querySelector('.preload');
    //     preload.classList.add('preload-finish');
    //     // only when finish loading, add y scroll 
    //     var root = this.getElementsByTagName('html')[0]; // '0' to assign the first (and only `HTML` tag)
    //     root.classList.add('enablescroll');
    //     // root.classList.remove('unablescroll');
    // });
    setTimeout(function() {
        const preload = document.querySelector('.preload');
        preload.classList.add('preload-finish');
        // only when finish loading, add y scroll 
        var root = document.getElementsByTagName('html')[0]; // '0' to assign the first (and only `HTML` tag)
        root.classList.add('enablescroll');
        // root.classList.remove('unablescroll');
    });

    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    // Handle ESC key (key code 27)
    document.addEventListener('keyup', function (e) {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000)
    });

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

    // typing effects
    const quotes =
        ['"i am where i am because i believe in all possibilities"',
            'i am willing to learn new skills',
            'i will never stop improving!'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    let letterdone = false;

    if (window.location.pathname == '/myskills.html') {
        (function type() {
            if (count === quotes.length) {
                count = 0;
            }

            currentText = quotes[count];
            letter = currentText.slice(0, ++index);
            document.querySelector('.typing').textContent = letter;

            if (letter.length === currentText.length) {
                count++;
                index = 0; // reset 
                letterdone = true;
            }

            // one line check
            if (letterdone == false) {
                setTimeout(type, 80);
            } else {
                setTimeout(type, 1000);
                letterdone = false;
            }

        }())
    }

    // scrolling detection
    let topnav = document.querySelector('.top-nav');
    let navlogo = document.querySelector('.nav-logo')


    window.onscroll = function (e) {
        // print "false" if direction is down and "true" if up
        // console.log(this.oldScroll > this.scrollY);
        // console.log(this.scrollY)

        if (screen.width >= 768) {
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

    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 3000)
    });

    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('#up').fadeIn();
        } 
        else {
            $('#up').fadeOut();
        }
    })


    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });



});
