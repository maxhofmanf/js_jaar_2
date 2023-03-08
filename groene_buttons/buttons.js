let body = document.getElementsByTagName("body")[0];
const xbutton = [1, 7, 13, 19, 25, 29]


let container = document.getElementById("container");
container.style.background = "grey"
container.style.width = "1000px";
let count = 0;
function buttons() {
    for (y = 1; y <= 30; y++) {
        let button = document.createElement("button")
        button.innerText = count += 1;
        button.style.margin = "28px";
        button.style.height = '48px';
        button.style.width = '68px';
        button.style.backgroundColor = "green";
        button.onclick = function () { button.style.background = "red" }

        container.appendChild(button)
    }
}

// const buttons = document.getElementsByTagName("button");


buttons()
