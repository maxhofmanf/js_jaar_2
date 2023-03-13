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


function show(obj_array) {
    for (let y = 0; y < obj_array.length; y++) {

        for (const [key, value] of Object.entries(obj_array[y])) {
            document.write(`${key} = ${value} <br>`);
        }
    }
}

show(obj_array)

