AOS.init({
    duration: 700,
    once: true
});
const slider = document.getElementById('reviewsSlider');

// 1. Clone the content for a seamless loop
const items = slider.innerHTML;
slider.innerHTML += items; // Double the items

let scrollPos = 0;
const speed = 0.5; // Adjust speed here

animate();
function animate() {
    scrollPos += speed;
    
    // 2. Use a decimal variable to update the integer scrollLeft
    slider.scrollLeft = scrollPos;

    if (scrollPos >= slider.scrollWidth / 2) {
        scrollPos = 0;
        slider.scrollLeft = 0;
    }

    requestAnimationFrame(animate);
}


const section = document.querySelector('#services');

const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            section.classList.add('in-view');
            observer.unobserve(section);
        }
    },
    { threshold: 0.5 }
);

observer.observe(section);