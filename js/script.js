console.log("Dzień dobry żuczki!");

let buttonElement = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let toggleWord = document.querySelector(".js-toggleWord");

buttonElement.addEventListener("click", () => {
    body.classList.toggle("lightTheme");
    toggleWord.innerText = body.classList.contains("lightTheme") ? "czarne" : "szare";
});
