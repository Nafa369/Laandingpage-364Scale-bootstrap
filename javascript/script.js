const faders = document.querySelectorAll(".fade-in-on-scroll");

function handlescroll() {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (
            rect.top < window.innerHeight && 
            rect.bottom > 0
        ) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', handlescroll);
window.addEventListener('load', handlescroll);