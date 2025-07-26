const faders = document.querySelectorAll(".fade-in-on-scroll");

function handlescroll() {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handlescroll);
window.addEventListener('load', handlescroll);
console.log("script loaded and scroll event listener added");