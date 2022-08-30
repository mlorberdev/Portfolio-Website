!function () {
  // Populate landing page wall with document's html
  document.getElementById("wall").innerText = document.getElementsByTagName("main")[0].innerHTML;

  // Remove noscript tag if JS enabled
  document.getElementById("ns").style.display = "none";

  // Remove device rotate if in landscape
  function resize() {
    let scr = document.getElementById("landscape");
    innerWidth > innerHeight ? scr.style.display = "none" : scr.style.display = "flex";
  }
  window.addEventListener("resize", () => { resize(); scroll() });
  resize();

  // Run loading animation
  const ldr = document.getElementById("loader");
  const y = document.getElementById("counter");
  let x = 10;
  const w = setInterval(() => {
    y.innerText = `${x}%`;
    if (x < 100) x += 2;
    else {
      clearInterval(w);
      ldr.style.opacity = "0";
      setTimeout(() => { ldr.remove() }, 300);
    }
  }, 50);

  // Set scroll into view positions for navs and observer
  function scroll() {
    const articles = document.querySelectorAll("article");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => document.getElementsByName(entry.target.id)[0].style.borderBottom = entry.isIntersecting ? "1px solid var(--accent)" : "0px solid var(--accent)");
    }, { root: null, rootMargin: '0px', threshold: 1 });
    articles.forEach(article => observer.observe(article));
  } scroll();

}();