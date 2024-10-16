document.addEventListener('DOMContentLoaded', function () {
    const primaryNavbar = document.getElementById('primaryNavbar');
    const secondaryNavbar = document.getElementById('secondaryNavbar');
    let lastScrollTop = 0;
    const delta = 5;
    const navbarHeight = primaryNavbar.offsetHeight;
    let ticking = false;

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Navbar scrolling function
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(lastScrollTop - scrollTop) <= delta) return;

        if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
            // Scrolling down: hide primary, show secondary navbar
            primaryNavbar.classList.add('hide');
            secondaryNavbar.classList.remove('d-none');
            secondaryNavbar.classList.add('show');
        } else if (scrollTop + window.innerHeight < document.body.scrollHeight) {
            // Scrolling up and not yet at the top
            if (scrollTop < navbarHeight) {
                primaryNavbar.classList.remove('hide');
                secondaryNavbar.classList.remove('show');
                setTimeout(() => {
                    if (!secondaryNavbar.classList.contains('show')) {
                        secondaryNavbar.classList.add('d-none');
                    }
                }, 300); // Match the CSS transition duration
            }
        }

        lastScrollTop = scrollTop;
    }
});



// banner swiper start
let swiper = new Swiper(".mySwiper", {
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// banner swiper end

// initialize toltips 
document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});


// hover change img 
document.querySelectorAll('.hover_arrival_img').forEach(pics => {
    const img = pics.querySelector('.show_arrival_img');
    const originalImage = img.getAttribute('src');
    const hoverImage = img.getAttribute('data-hover');

    // Change image on hover
    pics.addEventListener('mouseenter', () => {
        img.setAttribute('src', hoverImage);
    });

    pics.addEventListener('mouseleave', () => {
        img.setAttribute('src', originalImage);
    });
});

// popular swiper 
const popularSwiper = new Swiper(".mySwiper2", {
    slidesPerView: 6,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        1024: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 5,
        }
    }
});


// jwellery swiper 
let jewellerySwiper = new Swiper(".mySwiper3", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// arrival 

const arrivaSwiper = new Swiper(".mySwiper4", {
    slidesPerView: 6,
    spaceBetween: 10,
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        1024: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 5,
        }
    }
});