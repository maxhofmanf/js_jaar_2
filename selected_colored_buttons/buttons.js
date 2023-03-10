let body = document.getElementsByTagName("body")[0];
body.style.maxWidth = '700px'
body.style.margin = "b"
let color_array = ["blue", "white", "yellow"]

let container = document.getElementById("container");
container.style.background = "grey"
container.style.width = "625px";
container.style.display = "center"
let count = 0;
function buttons() {

    for (y = 1; y <= 30; y++) {
        let button = document.createElement('button')
        button.setAttribute("id", `btn_${y}`)
        button.value = 0
        button.innerText = count += 1;
        button.style.margin = "28px";
        button.style.height = '48px';
        button.style.width = '68px';
        button.style.background = "green";

        button.onclick = function () { coloring(button, color_array) }

        container.appendChild(button)
    }
}


function coloring(button, color_array) {
    let x = 0

    if (button.style.background == "green") {
        button.style.background = color_array[0]
    } else if (button.style.background == color_array[color_array.length - 1]) {
        button.style.background = "black"
        button.style.color = "white"
    } else if (button.style.background == "black") {
        button.remove()
    } else {
        while (x <= (color_array.length)) {
            if (button.style.background == color_array[x]) {
                x++

                button.style.background = color_array[x]
                break;
            }
            x++
        }


    }
}
buttons()