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
  window.addEventListener("load", () => {
    document.getElementById("ldr").remove();
    document.getElementById("enter").style.display = "block";
  });

  // Close load screen and enter site
  document.getElementById("enter").addEventListener("click", () => document.getElementById("loader").remove());

  // Set scroll into view positions for navs and observers
  function scroll() {
    const articles = document.querySelectorAll("article");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => document.getElementsByName(entry.target.id)[0].style.borderBottom = entry.isIntersecting ? "1px solid #555" : "0px solid #555");
    }, { root: null, rootMargin: '0px', threshold: 1 });
    articles.forEach(article => observer.observe(article));
  } scroll();

}();