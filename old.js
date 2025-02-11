document.addEventListener('DOMContentLoaded', function() {
    const bar = document.getElementById("bar");
    const close = document.getElementById("close");
    const navbar = document.getElementById("navbar");

    console.log(bar, close, navbar); // Pastikan elemen ditemukan

    if (bar) {
        bar.addEventListener('click', () => {
            navbar.classList.add('active');
        });
    }
    if (close) {
        close.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    }
})
    