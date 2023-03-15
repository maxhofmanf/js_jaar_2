const obj_array = [{
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
},
{
    "voornaam": "Masud",
    "achternaam": "Mohammed",
    "nationaliteit": "Iraans",
    "leeftijd": 37,
    "gewicht": 79
},
{
    "voornaam": "Marie",
    "achternaam": "Visser",
    "nationaliteit": "Belgische",
    "leeftijd": 42,
    "gewicht": 69
},
{
    "voornaam": "Abdullah",
    "achternaam": "Öcalan",
    "nationaliteit": "Turks",
    "leeftijd": 73,
    "gewicht": 85
},
{
    "voornaam": "Bjorn",
    "achternaam": "Hakke",
    "nationaliteit": "Zweeds",
    "leeftijd": 18,
    "gewicht": 71
},
{
    "voornaam": "Jouke",
    "achternaam": "Dijkstra",
    "nationaliteit": "Fries",
    "leeftijd": 29,
    "gewicht": 82
},
{
    "voornaam": "Bo",
    "achternaam": "Wáng",
    "nationaliteit": "Chinees",
    "leeftijd": 38,
    "gewicht": 65
}]
document.addEventListener('DOMContentLoaded', function () {
    const age_input_submit = document.getElementById("age_input_submit")
    if (age_input_submit) {
        age_input_submit.addEventListener('click', function () {
            const age_input = document.getElementById("age_input").value
            show(obj_array, age_input);
        });
    }
})

function show(obj_array, age_input) {
    for (let y = 0; y < obj_array.length; y++) {
        if (obj_array[y].leeftijd >= age_input) {
            for (const [key, value] of Object.entries(obj_array[y])) {
                document.write(key + ' : ' + value + "<br>")
            }
            document.write("<br>")
        }

    }
}
