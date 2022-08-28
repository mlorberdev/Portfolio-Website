window.addEventListener('load', () => {
  const c = document.getElementById("carousel");
  const fig = c.querySelector('figure');
  const nav = c.querySelector('nav');
  const images = fig.children;
  const n = images.length;
  const t = 2 * Math.PI / n;
  let index = 0;

  window.addEventListener('resize', setupCarousel);

  function setupCarousel() {

    let gap = innerWidth > 768 ? 40 : 20;
    const apothem = parseFloat(getComputedStyle(images[0]).width) / (2 * Math.tan(Math.PI / n));
    fig.style.transformOrigin = `50% 50% ${-apothem}px`;

    for (let i = 0; i < n; i++) {
      images[i].addEventListener("click", openProject);
      images[i].style.padding = `${gap}px`;
      if (i > 0) {
        images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
        images[i].style.transform = `rotateY(${i * t}rad)`;
      }
    }
  } setupCarousel();

  void function setupNavigation() {
    nav.addEventListener('click', (e) => {
      e.target.classList.contains("next") ? index++ : index--;
      fig.style.transform = `rotateY(${index * -t}rad)`;
    });
  }();

  function openProject() {
    console.log(this.src);
  }

});