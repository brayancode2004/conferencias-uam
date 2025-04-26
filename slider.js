// --- SLIDER AUTOMÁTICO estilo "cinta infinita" ---
const slider = document.querySelector('.slider');

if (slider) {
  function autoScrollSlider() {
    slider.scrollLeft += 1; // mover 1 pixel a la derecha

    // Si pasó la mitad (las imágenes originales), saltamos al inicio
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft = 0;
    }
  }

  setInterval(autoScrollSlider, 20); // cada 20 milisegundos
}
