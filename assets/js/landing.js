window.onload = function () {
  let d = document.getElementsByTagName("main")[0].innerHTML;
  let l = document.getElementById("wall-l");
  l.innerText = d;

  let t = document.getElementById("my-spec");
  let u = `FULL-STACK DEVELOPER & EDUCATOR `;
  let n = -1;
  
  const int = setInterval(() => {
    let c = u.charAt(n);
    n === u.length ? clearInterval(int) : n++;
    c === ' ' ? t.innerHTML += '<span>&nbsp;</span>' : t.innerHTML += c;
  }, 80);
}