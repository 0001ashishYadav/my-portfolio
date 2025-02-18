const popupToggleEl = document.getElementById("popupToggle");
console.log(popupToggleEl);

function popup() {
  popupToggleEl.classList.toggle("hidden");
}

const prgEl = document.getElementById("prg");

const textArr = [
  "Web Developer",
  " ",
  "Blogger",
  " ",
  "YouTuber",
  " ",
  "Freelancer",
  " ",
];

let i = 0;
setInterval(() => {
  if (i > textArr.length - 1) {
    i = 0;
  }

  prgEl.innerHTML = textArr[i];

  i += 1;
}, 1500);
