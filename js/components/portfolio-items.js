class PortfolioItem {
    constructor(category, projectName, desc, imgSrc, ridirectionPath, buttonName) {
        this.category = category;
        this.projectName = projectName;
        this.desc = desc;
        this.imgSrc = imgSrc;
        this.ridirectionPath = ridirectionPath;
        this.buttonName = buttonName ?? "view";
    }

    // images/coming-soon.jpg
    display(index) {
        // this.imgSrc = "images/coming-soon.jpg";

        let item =
            `<div class="swiper-slide portfolio-item" data-hash="portfolio-item-${index}">` +

            `<picture class="portfolio-img-div">` +
            `<img src="${this.imgSrc}" alt="@enkr1 | ENKR | Pang Jing Hui | Portfolio" class="swiper-lazy"/>` +
            `</picture>` +

            `<div class="portfolio-content">` +
            `<h1 class="portfolio-project_name">${this.projectName}</h1>` +

            `<div class="portfolio-description">` +
            `<span class="portfolio-category">${this.category}</span>` +
            `<p>${this.desc}</p>` +
            `<a target="_blank" href="${this.ridirectionPath}" class="cta">${this.buttonName}</a>` +
            `</div>` +
            `</div>` +

            // `<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>` +

            `</div>`;


        return item;
    }
}

var listOfItems = [];

listOfItems.push(
    new PortfolioItem(
        "Web Design & Development",
        "555 Beatbox Initiative",
        `
        555 Beatbox Initiative website is aimed for
        encouraging the beatboxers and non beatboxers to get involved in the
        community. Side note, this is one of the current web projects that I am currently developing on.
        `,
        "images/portfolio/555_website.png",
        "https://enkr1.github.io/555beatbox/",
        "view project"
    ),
    new PortfolioItem(
        "Web Design",
        "Redesign Yinen Crystals",
        `
        In 2019, for my UX/UI specialization module, I redesigned an existing Singapore commercial website and
        applied
        a grid system and optimised the graphics for web purposes.
        `,
        // The design of this website will be a solution to help users find relevant information using
        // principles like visual hierarchy, colours, typography and images.
        // The new design of the website provides some unique features to attract users to find it useful.
        "images/portfolio/portitem1.jpg",
        "https://xd.adobe.com/view/70da2996-2e62-4834-7d54-20ed619382b6-06eb/",
        "view project"
    ),
    new PortfolioItem(
        "Design",
        "Custom Shoes Design",
        `
        I designed many projects and I customised them as well. This is
        one of my favourite products. I do product design and sketching.
        `,
        "images/portfolio/portitem3.jpg",
        "https://www.instagram.com/p/B0YcuLVnnlu/",
        "view on Instagram"
    ),

);

// NOTE: For debugging purposes only.
// let jsonData = JSON.stringify(listOfItems, null, 2);
// console.log(jsonData);

class PortfolioItemsComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // this.innerHTML = "<div class='portfolio-list'>";
        for (let i = 0; i < listOfItems.length; i++) {
            this.innerHTML += listOfItems[i].display(i + 1);
        }
        // this.innerHTML += "</div>";
        // data-aos="slide-up" data-aos-delay="200"
        this.innerHTML = `
        <div class="swiper portfolio-items-swiper">
            <div class="swiper-wrapper">
                ${this.innerHTML}
            </div>
        </div>`;


        // <div class="swiper-pagination"></div>
        // <div class="swiper portfolio-items-swiper">
        // NOTE: Put at the end of the .swiper if you wanna use these
        // <div class="swiper-pagination"></div>
        // <div class="swiper-button-prev"></div>
        // <div class="swiper-button-next"></div>

        // <div class="swiper-scrollbar"></div>
    }
}


customElements.define('portfolio-items-component', PortfolioItemsComponent);


// Official site: https://swiperjs.com/get-started
// gh: https://github.com/nolimits4web/swiper/
const porfolioItemsSwiper = new Swiper('.portfolio-items-swiper', {
    grabCursor: true,
    spaceBetween: 10,
    centeredSlides: true,
    direction: "horizontal",
    slidesPerView: 1.1,
    // effect: "coverflow",
    // slidesPerView: (screen.width > 992) ? "auto" : 1.1, // TODO: Check if this is what causes the problem
    loop: true,
    lazy: true,
    mousewheel: false, // true is good for vertical
    freeMode: false, // scroll without section parting

    keyboard: {
        enabled: true,
    },

    hashNavigation: {
        watchState: true,
    },
    history: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: false,
        dynamicBullets: false,
        // renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + "</span>";
        // },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});
