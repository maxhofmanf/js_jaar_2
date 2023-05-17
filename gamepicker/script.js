var games = [
    {
        "title": "Counter-Strike: Global Offensive",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Dota 2",
        "price": 0.00,
        "genre": "MOBA",
        "rating": 3
    },
    {
        "title": "Goose Goose Duck",
        "price": 4.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Apex Legends",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "PUBG: BATTLEGROUNDS",
        "price": 29.99,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Lost Ark",
        "price": 49.99,
        "genre": "Action",
        "rating": 1
    },
    {
        "title": "Grand Theft Auto V",
        "price": 29.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Call of Duty®: Modern Warfare® II | Warzone™ 2.0",
        "price": 19.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Team Fortress 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Rust",
        "price": 39.99,
        "genre": "Action",
        "rating": 5
    },
    {
        "title": "Unturned",
        "price": 0.00,
        "genre": "RPG",
        "rating": 1
    },
    {
        "title": "ELDEN RING",
        "price": 59.99,
        "genre": "RPG",
        "rating": 5
    },
    {
        "title": "ARK: Survival Evolved",
        "price": 10.00,
        "genre": "RPG",
        "rating": 1
    },
    {
        "title": "War Thunder",
        "price": 0.00,
        "genre": "Simulation",
        "rating": 2
    },
    {
        "title": "Sid Meier's Civilization VI",
        "price": 29.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Football Manager 2023",
        "price": 59.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Warframe",
        "price": 0.00,
        "genre": "Looter-shooter",
        "rating": 3
    },
    {
        "title": "EA SPORTS™ FIFA 23",
        "price": 59.99,
        "genre": "Sport",
        "rating": 1
    },
    {
        "title": "Destiny 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Red Dead Redemption 2",
        "price": 59.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Tom Clancy's Rainbow Six Siege",
        "price": 19.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "The Witcher 3: Wild Hunt",
        "price": 39.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Terraria",
        "price": 9.99,
        "genre": "Sandbox",
        "rating": 2
    },
    {
        "title": "Stardew Valley",
        "price": 14.99,
        "genre": "Sandbox",
        "rating": 1
    },
    {
        "title": "Left 4 Dead 2",
        "price": 9.99,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Don't Starve Together",
        "price": 5.09,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "MIR4",
        "price": 19.99,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "PAYDAY 2",
        "price": 9.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Path of Exile",
        "price": 0.00,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Project Zomboid",
        "price": 14.99,
        "genre": "Simulation",
        "rating": 4
    },
    {
        "title": "Valheim",
        "price": 19.99,
        "genre": "Sandbox",
        "rating": 5
    },
    {
        "title": "DayZ",
        "price": 44.99,
        "genre": "Simulation",
        "rating": 3
    }
]




let genre_array = []
function make_array(genre_array, games) {

    for (let item of games) {
        x = 0
        if (genre_array.length === 0) {
            genre_array.push(item['genre'])
        }
        for (const genre of genre_array) {
            if (genre === item['genre']) {
                x += 1
            }
        }
        if (x === 0) {
            genre_array.push(item['genre'])
        }
    }
}
make_array(genre_array, games)

function dropdownChange() {
    const dropdown = document.getElementById("myDropdown");
    const selectedGenre = dropdown.value;

    const gameContainers = document.getElementsByClassName("game_container");

    for (const container of gameContainers) {
        const genre = container.id;
        if (genre === selectedGenre) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    }
}


window.onload = function () {
    const boughtgames = [];

    document.querySelector('#shop').style.display = 'block';
    document.querySelector('#shopping_cart').style.display = 'none';
    let dropdown = document.getElementById("myDropdown");

    for (let genre of genre_array) {
        let new_dropdown_child = document.createElement('option');
        new_dropdown_child.value = genre;
        new_dropdown_child.href = 'javascript:filter("' + genre + '")';
        new_dropdown_child.textContent = genre;

        dropdown.appendChild(new_dropdown_child);
    }

    dropdown.addEventListener('change', dropdownChange);

    let ratingsDropdown = document.getElementById("myRatings");
    ratingsDropdown.addEventListener('change', ratingsFilterChange);
    for (let game of games) {

        let game_div = document.createElement('div');
        game_div.classList.add("game_container")
        game_div.setAttribute('id', `${game["genre"]}`)

        game_div.setAttribute('id', `${game["genre"]}`);
        game_div.setAttribute('data-rating', `${game["rating"]}`);

        let buy_button = document.createElement('button');
        buy_button.innerText = "+"
        buy_button.classList.add("buy_button");

        let specific_game = document.createElement('div');
        specific_game.classList.add("game");
        let game_title = document.createElement('p');
        game_title.classList.add("game_title");
        let game_genre = document.createElement('p');
        game_genre.classList.add("game_genre");
        let game_price = document.createElement('p');
        game_price.classList.add("game_price")

        game_title.textContent = ` ${game["title"]}`;
        game_genre.textContent = ` ${game["genre"]}`;
        if (game['price'] == 0) {
            game['price'] = "Free"
        } else {
            game['price'] = "€" + game["price"]
        }
        game_price.textContent = `${game["price"]} `;
        specific_game.appendChild(game_title);
        specific_game.appendChild(game_genre);

        specific_game.appendChild(game_price);
        buy_button.addEventListener('click', () => { shopping(boughtgames, games, game["title"]); });

        game_div.appendChild(buy_button)
        game_div.appendChild(specific_game);
        document.getElementById("games").appendChild(game_div)


        document.getElementById("myDropdown").classList.remove("show");

    }
}
function show_dropdown() {
    let dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

// window.onclick = function (event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdown_child = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdown_child.length; i++) {
//             var openDropdown = dropdown_child[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }
function filter(genre) {
    all_games = document.querySelectorAll('.game_container');
    game_container = document.querySelectorAll('.game_container');
    all_games.forEach(game => game.style.display = 'flex');
    filter_price = document.querySelector("#price_input");

    for (let game of all_games) {
        if (game['price'] <= filter_price) {
            game.style.display = 'none'
        } else {
            game.style.display = 'flex'
        }
        game_genre = game.querySelector('.game_genre').innerText
        if (game_genre !== genre) {
            game.style.display = 'none'
        } else if (game_genre == genre) {
            game.style.display = 'flex'
        }
    }
}
function shopping(boughtgames, games, title) {

    for (game of games) {
        if (game["title"] == title) {
            boughtgames.push(game);
        }
    }
    for (item of boughtgames) {
        if (item["price"] == "Free") {
            item["price"] = 0.00
        } else {
            if (typeof item["price"] === "string") {
                item["price"] = item["price"].replace("€", "");
            }


        }

    }
    dis_shopping_cart(boughtgames)
}
function dis_shopping_cart(boughtgames) {
    const boughtGamesDiv = document.querySelector(".bought_games");
    boughtGamesDiv.innerHTML = '';
    let totalprice = 0;

    for (let boughtgame of boughtgames) {
        const gameDiv = document.createElement("div");
        gameDiv.classList.add("boughtgame");

        const titlePara = document.createElement("p");
        titlePara.textContent = `Title: ${boughtgame.title}`;
        gameDiv.appendChild(titlePara);

        const pricePara = document.createElement("p");
        const price = parseFloat(boughtgame.price);
        pricePara.textContent = `Price: €${price.toFixed(2)}`;
        gameDiv.appendChild(pricePara);

        totalprice += price; // Add price to the total price

        boughtGamesDiv.appendChild(gameDiv);
    }

    // Create total price element and append it
    const totalpriceDiv = document.createElement("div");
    const totalpricePara = document.createElement("p");
    totalpricePara.textContent = `Total Price: €${totalprice.toFixed(2)}`;
    totalpriceDiv.appendChild(totalpricePara);

    boughtGamesDiv.appendChild(totalpriceDiv);

    console.log(totalprice);
}

function changePage() {
    let shopping_cart = document.querySelector('#shopping_cart');
    let shop = document.querySelector('#shop');

    if (shopping_cart.style.display === 'none') {
        shop.style.display = 'none';
        shopping_cart.style.display = 'block';
    } else {
        shopping_cart.style.display = 'none';
        shop.style.display = 'block';
    }
}
function ratingsFilterChange() {
    const dropdown = document.getElementById("myRatings");
    const selectedRating = parseInt(dropdown.value);

    const gameContainers = document.getElementsByClassName("game_container");

    for (const container of gameContainers) {
        const rating = parseInt(container.dataset.rating);

        if (selectedRating === 0 || rating <= selectedRating) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    }
}