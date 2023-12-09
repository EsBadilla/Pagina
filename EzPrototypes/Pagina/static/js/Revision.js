window.onload = function() {
    var boton = document.getElementById('Boton');
    var imagen = document.getElementById('Foto');
    if(navigator.userAgent == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" || navigator.userAgent == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 OPR/104.0.0.0" || navigator.userAgent == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0")
    {imagen.style.display = 'block'}
    else{boton.style.display = 'block'}
  };

document.addEventListener('DOMContentLoaded', function si () {
    const zoomContainer = document.querySelector('.zoom-container');
    const no1 = document.getElementById('zoom-img-1');
    const no2 = document.getElementById('zoom-img-2');
    const no3 = document.getElementById('zoom-img-3');
    const no4 = document.getElementById('zoom-img-4');

    zoomContainer.addEventListener('click', function () {
        no1.classList.toggle('zoomed');
        no2.classList.toggle('disappear');
        no3.classList.toggle('disappear');
        no4.classList.toggle('disappear');
    });
});

document.addEventListener('DOMContentLoaded', function si () {
    const zoomContainer = document.querySelector('.zoom-container-1');
    const no1 = document.getElementById('zoom-img-1');
    const no2 = document.getElementById('zoom-img-2');
    const no3 = document.getElementById('zoom-img-3');
    const no4 = document.getElementById('zoom-img-4');

    zoomContainer.addEventListener('click', function () {
        no2.classList.toggle('zoomed');
        no1.classList.toggle('disappear');
        no3.classList.toggle('disappear');
        no4.classList.toggle('disappear');
    });
});

document.addEventListener('DOMContentLoaded', function si () {
    const zoomContainer = document.querySelector('.zoom-container-2');
    const no1 = document.getElementById('zoom-img-1');
    const no2 = document.getElementById('zoom-img-2');
    const no3 = document.getElementById('zoom-img-3');
    const no4 = document.getElementById('zoom-img-4');

    zoomContainer.addEventListener('click', function () {
        no3.classList.toggle('zoomed');
        no1.classList.toggle('disappear');
        no2.classList.toggle('disappear');
        no4.classList.toggle('disappear');
    });
});

document.addEventListener('DOMContentLoaded', function si () {
    const zoomContainer = document.querySelector('.zoom-container-3');
    const no1 = document.getElementById('zoom-img-1');
    const no2 = document.getElementById('zoom-img-2');
    const no3 = document.getElementById('zoom-img-3');
    const no4 = document.getElementById('zoom-img-4');

    zoomContainer.addEventListener('click', function () {
        no4.classList.toggle('zoomed');
        no1.classList.toggle('disappear');
        no2.classList.toggle('disappear');
        no3.classList.toggle('disappear');
    });
});