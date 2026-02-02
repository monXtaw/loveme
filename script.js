const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const resultContainerNo = document.querySelector(".result-container-no");
const gifResult = document.querySelector(".gif-result");
const gifNoResult = document.querySelector(".gif-result-no");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// /change the postion of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifNoResult.play();
  }, 3000);
});

// yes button functionality

noBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  const timeoutId = setTimeout(() => {
    resultContainerNo.style.display = "inherit";
    gifNoResult.play();
  }, 3000);

});
