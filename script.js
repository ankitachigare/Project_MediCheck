// Add background color when scrolling
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.getElementById("year").textContent = new Date().getFullYear();

  // Counter animation
$(document).ready(function() {
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        console.log("Checking visibility for:", el, rect);
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function startCounterIfVisible() {
        $('.stat-number').each(function() {
            if (isElementInViewport(this) && !$(this).hasClass('counted')) {
                $(this).addClass('counted');
                var $this = $(this);
                var countTo = parseInt($this.attr('data-count'));

                $({ countNum: 0 }).animate(
                    { countNum: countTo },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    }
                );
            }
        });
    }

    // Run counter on load and scroll
    $(window).on('load scroll', startCounterIfVisible);
});


// testimonial 
let track = document.querySelector('.slider-track');
    let cardWidth = document.querySelector('.testimonial-card').offsetWidth;
    let index = 0;

    function nextSlide() {
        if (index < track.children.length - 1) {
            index++;
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        }
    }

    function prevSlide() {
        if (index > 0) {
            index--;
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        }
    }

    // Auto-slide every 3 seconds
    setInterval(() => {
        if (index < track.children.length - 1) {
            nextSlide();
        } else {
            index = 0;
            track.style.transform = `translateX(0)`;
        }
    }, 3000);