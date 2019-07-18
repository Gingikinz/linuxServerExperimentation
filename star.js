import { starships } from './assets/starships.js';

//console.log(starships)

const shipContainer = document.querySelector('#container')

function cardMaker(x) {

x.forEach(starship => {
let card = document.createElement('figure')
card.className = 'card'
    card.addEventListener( 'click', () =>  {
        card.classList.toggle('flipped');})
let fig = document.createElement('figure')
fig.className = 'card__face card__face--front'
let cap = document.createElement('figcaption')
let img = document.createElement('img')
img.src = `/assets/simg/${starship.name}.png`
cap.textContent = starship.name
fig.appendChild(img)
fig.appendChild(cap)
card.appendChild(fig)
let back = document.createElement('figure')
back.className = 'card__face card__face--back'
let shipName = document.createElement('h2')
let shipModel = document.createElement('p')
let shipClass = document.createElement('p')
let shipCrew = document.createElement('p')
let shipDrive = document.createElement('p')
shipName.textContent = starship.name
shipModel.textContent = `Model: ${starship.model}`
shipClass.textContent = `Class: ${starship.starship_class}`
shipCrew.textContent = `Crew: ${starship.crew}`
shipDrive.textContent = `Hyperdrive rating: ${starship.hyperdrive_rating}`
back.appendChild(shipName)
back.appendChild(shipModel)
back.appendChild(shipClass)
back.appendChild(shipCrew)
back.appendChild(shipDrive)

card.appendChild(back)
shipContainer.appendChild(card)

});
};

cardMaker(starships)


class newShip {
    constructor(name, model, ship_class, crew, hdr) {
        this.name = name;
        this.model = model;
        this.starship_class = ship_class;
        this.crew = crew;
        this.hyperdrive_rating = hdr;
    }
}

let ent = new newShip("Enterprise", "Constitution", "Cruiser", "250", "<10")
let ser = new newShip("Serenity", "Firefly", "Class B Medium Transport", "5", "Unknown")
let and = new newShip("Andromeda Ascendant", "Glorious Heritage", "Large Battlecruiser", "4500", "Slipstream Navigation")
let pro = new newShip("Prometheus", "X-303", "Tau'ri Cruiser", "115", "Asguard Hyperdrive")

const fed = [
    ent,
    ser,
    and,
    pro
]

//looking for iteration of arrays: need to add filter-map-reduce.
//ie the harry potter project: sort by something.

let bon = document.createElement("button");
bon.innerHTML = "Another Spaceship?";

var location = document.getElementById("newCardButton")
location.appendChild(bon)

bon.addEventListener('click', () => {
    alert("Let's break canon, shall we?")
    cardMaker(fed)
    
    //if count === 4:
    //have this do one spaceship at a time.
});