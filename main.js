/* BAUJAHR  SELECT */
const baujahr = document.querySelector("#baujahr");
const baujahrOptions = [];

for (let i = 1950; i <= 2023; i++) {
  baujahrOptions.push(i);
}

baujahrOptions.map((el) => {
  let opt = document.createElement("option");
  opt.value = el;
  opt.innerHTML = el;
  baujahr.append(opt);
});

/* WARMWASSER VERBRAUCH SELECT */
const warmwasser = document.querySelector("#warmwasserverbrauch");
const warmwasserOptions = [];

for (let i = 40; i <= 100; i++) {
  warmwasserOptions.push(i);
}

warmwasserOptions.map((el) => {
  let opt = document.createElement("option");
  opt.value = el;
  opt.innerHTML = el;
  warmwasser.append(opt);
});

/* SLIDER  */
const slider = document.querySelector(".slider-container__list");
const imgs = Array.from(slider.children);

const prevBtn = document.querySelector(".chevron-left");
const nextBtn = document.querySelector(".chevron-right");

const sliderNav = document.querySelector(".slider-nav");
const dots = Array.from(sliderNav.children);

/* GET THE WIDTH OF THE IMAGE */
const imgWidth = imgs[0].getBoundingClientRect().width;

/* ARRANGE IMAGES NEXT TO EACHOTHER */
function setImagePosition(img, i) {
  img.style.left = imgWidth * i + "px";
}

imgs.forEach(setImagePosition);

window.addEventListener("resize", (e) => {
  imgs.forEach(setImagePosition);
});

/* CLICK LISTENERS */
function moveToImg(list, currentSlide, targetSlide) {
  list.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current");
  targetSlide.classList.add("current");
}

function updateDots(currentDot, targetDot) {
  currentDot.classList.remove("current-dot");
  targetDot.classList.add("current-dot");
}

function hideShowArrows(imgs, prevBtn, nextBtn, targetIndex) {
  if (targetIndex === 0) {
    prevBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
  } else if (targetIndex === imgs.length - 1) {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
  } else {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  }
}

nextBtn.addEventListener("click", (e) => {
  const currentSlide = slider.querySelector(".current");
  const nextSlide = currentSlide.nextElementSibling;

  if (!nextSlide) return;
  moveToImg(slider, currentSlide, nextSlide);

  const currentDot = sliderNav.querySelector(".current-dot");
  const targetDot = currentDot.nextElementSibling;
  updateDots(currentDot, targetDot);

  const targetIndex = imgs.findIndex((img) => img === nextSlide);
  hideShowArrows(imgs, prevBtn, nextBtn, targetIndex);
});

prevBtn.addEventListener("click", (e) => {
  const currentSlide = slider.querySelector(".current");
  const prevSlide = currentSlide.previousElementSibling;
  if (!prevSlide) return;
  moveToImg(slider, currentSlide, prevSlide);

  const currentDot = sliderNav.querySelector(".current-dot");
  const targetDot = currentDot.nextElementSibling;
  updateDots(currentDot, targetDot);

  const targetIndex = imgs.findIndex((img) => img === prevSlide);
  hideShowArrows(imgs, prevBtn, nextBtn, targetIndex);
});

function updateDots(currentDot, targetDot) {
  currentDot.classList.remove("current-dot");
  targetDot.classList.add("current-dot");
}
/* SWITH IMAGES WHEN CLICKING ON SLIDER NAV DOTS */
sliderNav.addEventListener("click", (e) => {
  /* WHICH DOT WAS CLICKED ? */
  const targetDot = e.target.closest("span");
  if (!targetDot) return;

  const currentImg = slider.querySelector(".current");
  const currentDot = sliderNav.querySelector(".current-dot");

  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetImg = imgs[targetIndex];

  if (!targetIndex) return;
  moveToImg(slider, currentImg, targetImg);
  updateDots(currentDot, targetDot);
  hideShowArrows(imgs, prevBtn, nextBtn, targetIndex);
});

/* AUTOLOOP SLIDER */
function autoPlay() {
  const currentSlide = slider.querySelector(".current");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = sliderNav.querySelector(".current-dot");

  if (!nextSlide) {
    moveToImg(slider, currentSlide, imgs[0]);
    updateDots(currentDot, targetDot);
  } else nextBtn.click();
}

setInterval(() => {
  autoPlay();
}, 3000);
