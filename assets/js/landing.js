// HOMEPAGE ANIMATION
!function () {
  // populate landing page wall with document's html
  document.getElementById("wall").innerText = document.getElementsByTagName("main")[0].innerHTML;
  // remove noscript tag if JS enabled
  document.getElementById("ns").style.display = "none";
  // remove device rotate if in landscape
  function resize() {
    let scr = document.getElementById("landscape");
    innerWidth > innerHeight ? scr.style.display = "none" : scr.style.display = "flex";
  }
  window.addEventListener("resize", resize);
  resize();
  // run loading animation
  const ldr = document.getElementById("loader");
  const y = document.getElementById("counter");
  y.animate([{ color: 'lightgray' }, { color: 'darkgray' }], { duration: 3000, iterations: 1 });
  let x = 10;
  const w = setInterval(() => {
    y.innerText = x;
    if (x < 100) x += 2;
    else {
      clearInterval(w);
      ldr.style.opacity = "0";
      setTimeout(() => { ldr.remove(); whois() }, 300);
    }
  }, 50);
  // run whois text animation
  async function whois() {
    let t = document.getElementById("my-spec");
    let u = `FULL-STACK DEVELOPER @ SD IT SOLUTIONS `;
    let n = -1;
    const int = setInterval(() => {
      let c = u.charAt(n);
      n === u.length ? clearInterval(int) : n++;
      c === ' ' ? t.innerHTML += '<span>&nbsp;</span>' : t.innerHTML += c;
    }, 80);
  }
}();