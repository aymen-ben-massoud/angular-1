// function show() {
//   let charging = document.getElementById("photohomepage");

//   charging.classList.add("photohomepage2");

//   window.addEventListener("onload", show);
// }

function sc() {
  window.onscroll = (eo) => {
    let curate = document.getElementById("curate");
    if (window.scrollY >= 400) {
      curate.classList.add("move");
    }
    if (window.scrollY >= 650) {
      let lasttr = document.getElementById("lasttr");
      lasttr.classList.add("move2");
    }
  };
}
