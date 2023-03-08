let body = document.getElementsByTagName("body")[0];
body.style.maxWidth = '700px'
body.style.margin = "b"
const xbutton = [1, 7, 13, 19, 25, 29]
let color_array = ['red', 'purple', 'blue', 'black']

let container = document.getElementById("container");
container.style.background = "grey"
container.style.width = "625px";
container.style.display = "center"
let count = 0;
function buttons() {
    for (y = 1; y <= 30; y++) {
        let button = document.createElement("button")
        button.innerText = count += 1;
        button.value = 1
        button.style.margin = "28px";
        button.style.height = '48px';
        button.style.width = '68px';
        button.style.backgroundColor = "green";
        button.onclick = function () { coloring(button) }

        container.appendChild(button)
    }
}

// const buttons = document.getElementsByTagName("button");
function coloring(button) {
    if (button.value == 1) {
        button.style.background = "red"
        button.value = 2
    } else if (button.value == 2) {
        button.style.background = "purple"
        button.value = 3
    } else if (button.value == 3) {
        button.style.background = "blue"
        button.value = 4
    } else if (button.value == 4) {
        button.style.background = "black"
        button.style.color = "white"
        button.value = 5
    } else if (button.value == 5) {
        button.remove()
    }

}

buttons()
