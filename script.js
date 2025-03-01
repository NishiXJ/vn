// Mengontrol audio
const audio = document.getElementById('background-music');

// Memastikan audio diputar otomatis saat halaman dimuat
window.addEventListener('load', () => {
    audio.play();
});
