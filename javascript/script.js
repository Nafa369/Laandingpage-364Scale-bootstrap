const faders = document.querySelectorAll(".fade-in-on-scroll");
let lastScrollTop = window.scrollY;

function handlescroll(){
    const currentScroll = window.scrollY;

    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        // memunculkan elemen ketika 20% masuk viewport
        // hilangkan ketika keluar dari vieqwport
    const isVisible = (rect.top < window.innerHeight * 0.8) && (rect.bottom > window.innerHeight * 0.2) ;

        if (isVisible) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible')
        }
    });
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}
// Throtle function untuk optimal performance
function throtle(func, limit){
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRAn = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}
// event listener throtle
window.addEventListener('scroll', throtle(handlescroll, 100));
window.addEventListener('load', handlescroll);