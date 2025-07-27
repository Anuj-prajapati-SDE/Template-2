gsap.registerPlugin(ScrollTrigger);

// Hero animation
gsap.from(".hero-upper-content h1", {
  duration: 1,
  y: 150,
  opacity: 0,
  stagger: 0.2
});

// Text section animation
gsap.from(".text-container-1 p", {
  duration: 1,
  paddingTop: "60px",
  opacity: 0, 
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".text-section",     
    start: "top 90%",
    end: "500px center",
    scrub: 3,     
  }
});

// Card animation timeline
const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".card-animation-section",     
    start: "1% start",
    end: "bottom 15%",
    pin: true,
    scrub: 3,     
  }
});

// Image cards animation timeline
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".image-cards-animation-section",     
    start: "1% start",
    end: "bottom 15%",
    pin: true,
    markers: true,
    scrub: 3,     
  }
});

// Card animations
tl1.from(".card-container #card1", {
   x: "450%",
   rotate: "35deg",
   ease: "power3.out",
})
.from(".card-container #card2", {
   x: "450%",
   rotate: "55deg",
   ease: "power3.out", 
})
.from(".card-container #card3", {
   x: "450%",
   rotate: "75deg",
   ease: "power3.out",
})
.from(".card-container #card4", {
   x: "450%",
   rotate: "75deg",
   ease: "power3.out",
})
.to(".text-animation-container", {
  top: "-100%"
})
.from(".text-animation-item p", {
  paddingTop: "50px",
  opacity: 0,
  stagger: 0.2
});

// Image cards movement
tl2.to(".image-cards-container", {
  x: "-50%",
});

// Frame animation timeline (fixed syntax errors)
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".frame-animation-section",
    start: "top top",
    scrub: 2, // Fixed typo: was "scurb"
    end: "bottom 25%",
    // markers: true,
    pin: true, 
  }
});

tl3.to("#frame1 img", {
  top: "0%",
  zIndex: 1
})
.to("#frame1 img", {
  scale: 0.95,
})
.to("#frame2 img", {
  top: "0%",
  zIndex: 2
})
.to("#frame2 img", { // Fixed missing dot
  scale: 0.95,
})
.to("#frame3 img", {
  top: "0%",
  zIndex: 3
})
.to("#frame3 img", {
  scale: 0.95,
});

// Enhanced Slider Functionality with better autoplay
function initSlider() {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slider-item');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const dots = document.querySelectorAll('.dot');
    
    if (!sliderTrack || !slides.length) {
        console.log("Slider elements not found");
        return;
    }
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoplayInterval;
    let isAutoplayPaused = false;
    
    function updateSlider() {
        const translateX = -currentSlide * (100 / totalSlides);
        sliderTrack.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }
    
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlider();
    }
    
    function startAutoplay() {
        if (!isAutoplayPaused) {
            autoplayInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        }
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    function pauseAutoplay() {
        isAutoplayPaused = true;
        stopAutoplay();
    }
    
    function resumeAutoplay() {
        isAutoplayPaused = false;
        startAutoplay();
    }
    
    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            pauseAutoplay();
            setTimeout(resumeAutoplay, 5000); // Resume after 5 seconds
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            pauseAutoplay();
            setTimeout(resumeAutoplay, 5000); // Resume after 5 seconds
        });
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            pauseAutoplay();
            setTimeout(resumeAutoplay, 5000); // Resume after 5 seconds
        });
    });
    
    // Pause autoplay on hover
    const sliderContainer = document.querySelector('.slider-wrapper');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', pauseAutoplay);
        sliderContainer.addEventListener('mouseleave', resumeAutoplay);
    }
    
    // Pause autoplay when page is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pauseAutoplay();
        } else {
            resumeAutoplay();
        }
    });
    
    // Initialize
    updateSlider();
    startAutoplay();
    
    console.log("Slider initialized successfully");
}

// Wait for DOM content to load before initializing
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing components...");
    
    try {
        // Initialize slider without dependency on loco()
        initSlider();
        console.log("Slider initialization completed");
    } catch (error) {
        console.error("Error initializing slider:", error);
    }
    
    // Initialize ScrollTrigger refresh
    ScrollTrigger.refresh();
});

// Handle window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});