$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
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
    const landingtexts =
        ['i design websites,',
            'products',
            'and i am looking for internship!'];
    const quotes = 
        ['i am where i am because i believe in all possibilities',
        'i am willing to learn new skills',
        'and i will never stop improving!'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    let letterdone = false;

    if (window.location.pathname == '/index.html') {
        (function type() {
            if (count === landingtexts.length) {
                count = 0;
            }

            currentText = landingtexts[count];
            letter = currentText.slice(0, ++index);
            document.querySelector('.typing').textContent = letter;

            if (letter.length === currentText.length) {
                count++;
                index = 0; // reset 
                letterdone = true;
            }

            // one line check
            if (letterdone == false) {
                setTimeout(type, 100);
            } else {
                setTimeout(type, 800);
                letterdone = false;
            }

        }())
    }
    else if (window.location.pathname == '/myskills.html') {
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
