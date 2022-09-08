!function () {
  // Populate landing page wall with document's html
  document.getElementById("wall").innerText = document.getElementsByTagName("html")[0].innerHTML;

  // Remove noscript tag if JS enabled
  document.getElementById("ns").style.display = "none";

  // Remove device rotate if in landscape
  function resize() {
    let scr = document.getElementById("landscape");
    innerWidth > innerHeight ? scr.style.display = "none" : scr.style.display = "flex";
  } resize();
  window.addEventListener("resize", () => { resize(); scroll() });

  // Run loading animation
  let bg = 0;
  const ldr = document.getElementById("loader");
  ldr.style.opacity = 0;
  const int = setInterval(() => {
    ldr.style.backgroundImage = `url("./assets/images/a${bg}.webp")`;
    bg === 9 ? bg = 0 : bg++;
  }, 100);
  setInterval(() => {
    clearInterval(int);
  }, 10000);
  setTimeout(() => {
    ldr.remove();
    const wal = document.getElementById("wall");
    wal.style.color = "var(--accent)";
    wal.style.transform = "perspective(2000px) rotateY(90deg)";
    document.getElementById("scrolldown").style.visibility = "visible";
  }, 10000);

  // Set scroll into view positions for navs and observers
  function scroll() {
    const articles = document.querySelectorAll("article");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => document.getElementsByName(entry.target.id)[0].style.borderBottom = entry.isIntersecting ? "1px solid #555" : "0px solid #555");
    }, { root: null, rootMargin: '0px', threshold: 1 });
    articles.forEach(article => observer.observe(article));
  } scroll();

}();