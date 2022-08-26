window.onload = function () {
  let d = document.getElementsByTagName("main")[0].innerHTML;
  let l = document.getElementById("wall-l");
  l.innerText = d;
  
  const ldr = document.getElementById("loader");
  const y = document.getElementById("counter");
  let x = 10;
  const w = setInterval(() => {
    y.innerText = x + "%";
    if (x < 100) x += 2;
    else {
      clearInterval(w);
      ldr.style.opacity = "0";
      setTimeout(() => { ldr.remove(); whois() }, 300);
    }
  }, 50);

  function whois() {

    let t = document.getElementById("my-spec");
    let u = `FULL-STACK DEVELOPER & EDUCATOR `;
    let n = -1;

    const int = setInterval(() => {
      let c = u.charAt(n);
      n === u.length ? clearInterval(int) : n++;
      c === ' ' ? t.innerHTML += '<span>&nbsp;</span>' : t.innerHTML += c;
    }, 80);
  }

}