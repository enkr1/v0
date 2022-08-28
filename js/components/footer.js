// From
// https://dev.to/anuradha9712/create-reusable-web-components-in-html-1llc

/*
const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<link rel="stylesheet" href="css/style.css?v=1.0" />
<footer class="main-footer">

    <div class="contact-social-media">
        <ul class="nav-list contact-social-media-ul">
            <li data-aos="zoom-out-up" data-aos-delay="400">
                <a target="_blank" href="https://github.com/enkr1" class="icon-link">
                    <i class="fab fa-github-square"></i></a></li>

            <li data-aos="zoom-out-down" data-aos-delay="800">
                <a target="_blank" href="https://www.linkedin.com/in/jinghuipang/" class="icon-link">
                    <i class="fab fa-linkedin"></i></a></li>

            <li data-aos="zoom-out-down" data-aos-delay="1200">
                <a target="_blank" href="https://www.facebook.com/enkrbeatbox" class="icon-link">
                    <i class="fab fa-facebook-square"></i></a></li>

            <li data-aos="zoom-out-down" data-aos-delay="1400">
                <a target="_blank" href="https://www.instagram.com/enkr1/" class="icon-link">
                    <i class="fab fa-instagram"></i></a></li>

            <li data-aos="zoom-out-up" data-aos-delay="1600">
                <a target="_blank"
                    href="https://www.youtube.com/channel/UCJJmK5bN3b4izpMb2vtRXpw?view_as=subscriber"
                    class="icon-link">
                    <i class="fab fa-youtube-square"></i></a></li>

            <li data-aos="zoom-out-up" data-aos-delay="2000">
                <a href="mailto:enkr99@gmail.com" class="icon-link">
                    <i class="far fa-envelope"></i></a></li>
        </ul>
    </div>

    <div class="up" id="up" onclick="topFunction()">
        <i class="fas fa-chevron-up"></i>
    </div>

    <p>&copy; Copyright 2020</p>
    <p>Developed and designed by ENKR</p>

</footer>
`;
*/

class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        // write element functionality in here
        // ...
    }

    /*
    connectedCallback() {
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.appendChild(footerTemplate.content);
    }
    */

    connectedCallback() {
        this.innerHTML = `
<footer class="main-footer">
    <div class="contact-social-media">
        <ul class="nav-list contact-social-media-ul">
            <li data-aos="zoom-out-up" data-aos-delay="100">
                <a target="_blank" href="https://github.com/enkr1" class="icon-link">
                    <i class="fab fa-github-square"></i></a>
            </li>

            <li data-aos="zoom-out-down" data-aos-delay="300">
                <a target="_blank" href="https://www.linkedin.com/in/jinghuipang/" class="icon-link">
                    <i class="fab fa-linkedin"></i></a>
            </li>

            <li data-aos="zoom-out-down" data-aos-delay="500">
                <a target="_blank" href="https://www.facebook.com/enkrbeatbox" class="icon-link">
                    <i class="fab fa-facebook-square"></i></a>
            </li>

            <li data-aos="zoom-out-down" data-aos-delay="700">
                <a target="_blank" href="https://www.instagram.com/enkr1/" class="icon-link">
                    <i class="fab fa-instagram"></i></a>
            </li>

            <li data-aos="zoom-out-up" data-aos-delay="800">
                <a target="_blank" href="https://www.youtube.com/channel/UCJJmK5bN3b4izpMb2vtRXpw?view_as=subscriber"
                    class="icon-link">
                    <i class="fab fa-youtube-square"></i></a>
            </li>

            <li data-aos="zoom-out-up" data-aos-delay="1000">
                <a href="mailto:enkr99@gmail.com" class="icon-link">
                    <i class="far fa-envelope"></i></a>
            </li>
            <!-- <li data-aos="zoom-out-up" data-aos-delay="2000">
                <a target="_blank" href="https://soundcloud.com/enkr1" class="icon-link">
                    <i class="fab fa-soundcloud"></i></a></li> -->
        </ul>
    </div>

    <div class="up" id="up" onclick="topFunction()">
        <i class="fas fa-chevron-up"></i>
    </div>

    <p>&copy; 2020 - 2022 ENKR. All rights reserved.</p>
    <p>Developed and designed by ENKR</p>

</footer>
        `;
    }
}

customElements.define('footer-component', Footer);

//  $('#up').on('click', function () {
//     $('html, body').animate({
//         scrollTop: 0
//     }, 3000)
// });

$(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
        $('.up').fadeIn();
    } else {
        $('.up').fadeOut();
    }
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
