let body = document.getElementsByTagName("body")[0];
body.style.maxWidth = '700px'
body.style.margin = "b"
const xbutton = [1, 7, 13, 19, 25, 29]
let color_array = ['orange', 'yellow', 'white']

let container = document.getElementById("container");
container.style.background = "grey"
container.style.width = "625px";
container.style.display = "center"
let count = 0;
function buttons() {

    for (y = 1; y <= 30; y++) {
        let button = document.createElement('button')
        button.setAttribute("id", `btn_${y}`)
        button.innerText = count += 1;
        button.value = 0
        let button_value = button.value
        button.style.margin = "28px";
        button.style.height = '48px';
        button.style.width = '68px';
        button.style.backgroundColor = "green";
        button.onclick = function () { coloring(button_value, button, y) }

        container.appendChild(button)
    }
}

function coloring(button_value, button, btn_id) {
    console.log(btn_id)


    if (button_value < color_array.length) {
        button.style.background = color_array[button_value]
        button_value = 1
        console.log(button_value)
        return button_value
    } else if (button_value == color_array.length) {
        button.style.background = "black"
        button.style.color = "white"
        button_value += 1
        console.log("black")
    } else if (button_value >= color_array.length) {
        button.remove()
    }

}

buttons()
