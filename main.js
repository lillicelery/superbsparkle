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

const observerOptions = {
    threshold: [0.1, 1.0]
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0) scale(1)";
        }
        else{
            entry.target.style.opacity = "0.5";
            entry.target.style.transform = "translateY(50px) scale(0.1)";
        }
});
}, observerOptions);

document.querySelectorAll('.service-item').forEach(item => {
    item.style.opacity = "0.9";
    item.style.transform = "translateY(50px) scale(0.1)";
    observer.observe(item);
});