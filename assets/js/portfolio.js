window.addEventListener('load', () => {
  const carousels = document.querySelectorAll('.carousel');

  for (let i = 0; i < carousels.length; i++) {
    carousel(carousels[i]);
  }
});

function carousel(root) {
  const figure = root.querySelector('figure');
  const nav = root.querySelector('nav');
  const images = figure.children;
  const n = images.length;
  const gap = 40;
  const bfc = ('bfc' in root.dataset);
  const theta = 2 * Math.PI / n;
  let img = 0;

  setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));

  window.addEventListener('resize', () => setupCarousel(n, parseFloat(getComputedStyle(images[0]).width)));

  setupNavigation();

  function setupCarousel(n, s) {
    const apothem = s / (2 * Math.tan(Math.PI / n));
    figure.style.transformOrigin = `50% 50% ${-apothem}px`;

    for (let i = 0; i < n; i++) {
      
      images[i].style.padding = `${gap}px`;
    }
    
    for (let i = 1; i < n; i++) {
      
      images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
      images[i].style.transform = `rotateY(${i * theta}rad)`;
    }
    
    if (bfc) {
      for (let i = 0; i < n; i++) {
        // if (window.CP.shouldStopExecution(4)) break; if (window.CP.shouldStopExecution(3)) break;
        images[i].style.backfaceVisibility = 'hidden';
      }
    }
    turn(img);
  }

  function setupNavigation() {
    nav.addEventListener('click', onClick, true);

    function onClick(e) {
      e.stopPropagation();

      var t = e.target;
      if (t.tagName.toUpperCase() !== 'BUTTON')
        return;

      t.classList.contains("next") ? img++ : img--;

      turn(img);
    }

  }

  function turn(imageIndex) {
    figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
  }

}