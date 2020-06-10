$(document).ready(function () {
    // preload
    setTimeout(function() {
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


    // dev ed https://www.youtube.com/watch?v=RLc8NB2JyxE
    // const sections = document.querySelectorAll('section');
    // const userposition = document.querySelector('.userposition');

    // const options = {
    //     threshold: 0.5
    // };

    // let observer = new IntersectionObserver(navCheck, options);

    // function navCheck(entries) {
    //     entries.forEach(entry => {
    //         const className = entry.target.className; 
    //         console.log(className)
    //         const activeAnchor = document.querySelector(`[data-page=${className}]`);
    //         const targetIndex = entry.target.getAttribute('data-index');
    //         const coords = activeAnchor.getBoundingClientRect();
    //         const directions = {
    //             height: coords.height/4,
    //             width: coords.width,
    //             top: coords.top,
    //             left: coords.left
    //         };
    //         if(entry.isIntersecting) {
    //             userposition.style.setProperty('left',`${directions.left}px`);
    //             userposition.style.setProperty('top',`${directions.top}px`);
    //             userposition.style.setProperty('width',`${directions.width}px`);
    //             userposition.style.setProperty('height',`${directions.height}px`);
    //         }
            
            
    //     });
    // }

    // sections.forEach(section => {
    //     observer.observe(section);
    // });




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
