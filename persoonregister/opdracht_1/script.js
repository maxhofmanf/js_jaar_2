const obj_array = {
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
}

function show(obj_array) {
    x = 0
    for (const [key, value] of Object.entries(obj_array)) {
        document.write(`${key} = ${value} <br>`);
    }
}

show(obj_array)