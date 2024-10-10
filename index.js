
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

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(lastScrollTop - scrollTop) <= delta)
            return;

        if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
            // Scroll Down
            primaryNavbar.classList.add('hide');
            secondaryNavbar.classList.remove('d-none');
            secondaryNavbar.classList.add('show');
        } else {
            // Scroll Up
            if (scrollTop + window.innerHeight < document.body.scrollHeight) {
                primaryNavbar.classList.remove('hide');
                secondaryNavbar.classList.remove('show');
                // Optionally add back the d-none after the transition
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