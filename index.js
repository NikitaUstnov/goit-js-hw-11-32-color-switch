const startSwichcolorBtnRef = document.querySelector('[data-action="start"]');
const stopSwichcolorBtnRef = document.querySelector('[data-action="stop"]');
const body = document.querySelector("body");

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

startSwichcolorBtnRef.addEventListener("click", () => {
  intervalId = setInterval(() => {
    const randomArrayIndex = randomIntegerFromInterval(0, colors.length - 1);
    body.style.background = colors[randomArrayIndex];
  }, 1000);

  startSwichcolorBtnRef.disabled = true;
});

stopSwichcolorBtnRef.addEventListener("click", () => {
  clearInterval(intervalId);
  startSwichcolorBtnRef.disabled = false;
});
