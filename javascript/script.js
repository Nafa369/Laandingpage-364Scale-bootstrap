// mengambil semua elemen yang punya class fade in on scroll dan fade in scrol x
const faders = document.querySelectorAll(".fade-in-on-scroll, .fade-in-scroll-x");
// menyimpan posisi scroll
let lastScrollTop = window.scrollY;
// untuk cek elemen mana yang sedang terlihat di viewport
function handlescroll(){
    const currentScroll = window.scrollY;
    // ambil posisi dan ukuran elemen relatif terhadap viewport
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        // memunculkan elemen ketika 20% masuk viewport
        // hilangkan ketika keluar dari vieqwport
    const isVisible = (rect.top < window.innerHeight * 0.8) && (rect.bottom > window.innerHeight * 0.25); //

    // meembuat animasi fade secara halus
        if (isVisible) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible')
        }
    });
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}; //function handscroll

// Throtle function untuk optimal performance agar fungsi tidak terlalu sering di panggil dan memberatkan performa
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
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }; // else clear time out
    }; //return function
}; //function throtle

// event listener throtle
window.addEventListener('scroll', throtle(handlescroll, 100));
window.addEventListener('load', handlescroll);