const button = document.querySelector("#button")
const number = document.querySelector("#number")

button.addEventListener("click", () => {
    number.innerHTML = parseInt(number.innerHTML)+1
})