$(document).ready(function () {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function() {
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

    
    // var svgSkills = document.querySelectorAll("[id='svg-skills']");
    // $(window).scroll(function() {
    //     if($(this).scrollTop()>1900) { 
    //         for (var i = 0; i < svgSkills.length; i++) {
    //             svgSkills[i].classList.add('svg-skills-display');
    //         }
    //         // animationCounter();
    //     }
    //     else { 
    //         for (var i = 0; i < svgSkills.length; i++) {
    //             svgSkills[i].classList.remove('svg-skills-display');
    //         } 
    //     }
    // })


    // $('.svg-skills').hover(

        
    //     // function(){ $(".content-carrousel").addClass('stop-3d-animation') },
    //     // function(){ $(".content-carrousel").removeClass('stop-3d-animation') }
    //  )
    // function animationCounter(){
    //     $('.count').each(function () {
    //         $(this).prop('Counter',0).animate({
    //             Counter: $(this).text()
    //         }, {
    //             duration: 3000,
    //             easing: 'swing',
    //             step: function (now) {
    //                 $(this).text(Math.ceil(now));
    //             }
    //         });
    //     });
    // }



    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 3000)
    });

    $(window).scroll(function() {
        if($(this).scrollTop()>800) {
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
