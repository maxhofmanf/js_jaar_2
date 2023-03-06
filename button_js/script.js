let body = document.getElementsByClassName("bgc")[0];

body.innerHTML += document.createElement = '<div id="panel">';

let panel = document.getElementById("panel");



panel.style.background = 'white';
panel.style.textAlign = "center";
panel.style.width = "360px";
panel.style.padding = "48px";
panel.style.margin = " 70px auto";

panel.innerHTML += document.createElement = '<button class="btn_style" id="red">red';
panel.innerHTML += document.createElement = '<button class="btn_style" id="blue">blue';
panel.innerHTML += document.createElement = '<button class="btn_style" id="green">green';

document.getElementById('red').addEventListener("click", function () { change_color('red'); })
document.getElementById('green').addEventListener("click", function () { change_color('green'); })
document.getElementById('blue').addEventListener("click", function () { change_color('blue'); })

function change_color(color) {
    if (color == 'red') {
        body.style.background = 'red';
    } else if (color == 'green') {
        body.style.background = 'green';

    } else if (color == 'blue') {
        body.style.background = 'blue';

    }
}

let button_color = ['red', 'green', 'blue'];
for (x = 0; x <= button_color.length; x++) {

    let btn_style = document.getElementById(button_color[x]);
    btn_style.style.padding = '10px 20px';
    btn_style.style.margin = '5px';
    btn_style.style.background = button_color[x];
}






