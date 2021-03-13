// Variables

const upCount = document.querySelector(".up");
const downCount = document.querySelector(".down")

// Event Listeners

upCount.addEventListener("click", upNum)
downCount.addEventListener("click", downNum)

// Functions

function upNum() {
    let posNum = document.getElementById("count");
    posNum.innerText++;
    if (posNum.innerText > 0) {
        posNum.style.color = "green"
    } else if(posNum.innerText == 0) {
        posNum.style.color = "white"
    }
}

function downNum() {
    let negNum = document.getElementById("count");
    negNum.innerText--;
    if (negNum.innerText < 0) {
        negNum.style.color = "red"
    } else if (negNum.innerText == 0) {
        negNum.style.color = "white"
    }
}
