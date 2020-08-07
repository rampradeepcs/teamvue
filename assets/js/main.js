//Calculate Return of Investment Range Sider
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}

window.onload = function(){
  $("body, html").scrollTop(0);
  if(this.scrollY > 100) {
    header[0].classList.add("header-white-bg");
  }
};

var header = document.getElementsByTagName("header");
window.onscroll = function(){
  if(this.scrollY > 50) {
    header[0].classList.add("header-white-bg");
  } else {
    header[0].classList.remove("header-white-bg");
  }
};