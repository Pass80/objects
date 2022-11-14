console.log('=======1===========');

function fahrrad() {
    console.log(this.name);
}

let name = 'Canyon';
let obj1 = { name: 'Merida', fahrrad: fahrrad };
let obj2 = { name: 'Scott', fahrrad: fahrrad };

fahrrad();
obj1.fahrrad();
obj2.fahrrad();

console.log('=======2===========');
let myMusic = [
    {
        artist: 'The Beatles',
        title: 'Abbey Road',
        release_year: 1969,
        medium: ['LP', 'CD', 'MC', 'Download'],
        gold: true,
    },
    {
        artist: 'Pink Floyd',
        title: 'Dark Side of the Moon',
        release_year: 1978,
        medium: ['CS', 'CD', 'LP', 'Download'],
        gold: true,
    },
    {
        artist: 'Led Zeppelin',
        title: 'Led Zeppelin IV',
        release_year: 1971,
        medium: ['CS', 'LP', 'Download'],
        gold: true,
    },
    {
        artist: 'Metallica',
        title: 'Kill ’Em All und Ride the Lightning',
        release_year: 1983,
        medium: ['LP', 'CD', 'MC', 'Download'],
        gold: true,
    },
];

const display = document.getElementById('display');
let article = '<article>';
let div = '';
myMusic.forEach((obj) => {
    div += `<div><p>${obj.artist}</p><p>${obj.title}</p><p>${obj.medium}</p><p>${obj.release_year}</p></div>`;
});

article = div + '</article>';
display.innerHTML = article;

let olderThan1975 = myMusic.filter((obj) => obj.release_year <= 1975);
console.log(olderThan1975);

console.log('=======3===========');

let studentData = [
    {
        name: 'Alex',
        age: 23,
        coop: false,
        address: {
            street: 'Don Valley Business Park',
            city: 'Toronto',
            postalCode: 'ONM3C3E5',
        },
        emails: ['alex69@gmail.com', 'alex123@yahoo.com'],
    },
    {
        name: 'Sandra',
        age: 22,
        coop: true,
        address: {
            street: '34 Lawrence Ave',
            city: 'Toronto',
            postalCode: 'ONM3C0E5',
        },
        emails: ['sandra@gmail.com', 'sandra@yahoo.com'],
    },
];

studentData.forEach((obj) => {
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.coop);
    console.log(obj.emails);
});
studentData[0].showDetails = function () {
    console.log(this.name);
    console.log(this.coop);
    console.log(this.address.city);
    console.log(this.emails);
};
studentData[1].showDetails = function () {
    console.log(this.name);
    console.log(this.coop);
    console.log(this.address.city);
    console.log(this.emails);
};
studentData[0].showDetails();
studentData[1].showDetails();

console.log('=======4===========');
let edelMetallPreise = [
    { name: 'Gold', preiseGramEuro: 42.91, veranderung: '+0.12%' },
    { name: 'Silber', preiseGramEuro: 0.51, veranderung: '+1.02%' },
    { name: 'Platin', preiseGramEuro: 25.74, veranderung: '+0.41%' },
    { name: 'Palladium', preiseGramEuro: 50.93, veranderung: '0.00%' },
    { name: 'Rhodium', preiseGramEuro: 160.12, veranderung: '-0.10%' },
    { name: 'Iridium', preiseGramEuro: 42.84, veranderung: '0.00%' },
    { name: 'Ruthenium', preiseGramEuro: 7.36, veranderung: '0.00%' },
    { name: 'Rhenium', preiseGramEuro: 37.22, veranderung: '-0.53%' },
    { name: 'Osmium', preiseGramEuro: 11.54, veranderung: '0.00%' },
];

let metalArray1 = [];
edelMetallPreise.forEach((element) => {
    metalArray1.push(element.name);
});
console.log(metalArray1);

[];
let metalArray2 = edelMetallPreise.map((element) => element.name);
console.log(metalArray2);

let priceArray1 = [];
edelMetallPreise.forEach((element) => {
    priceArray1.push(element.preiseGramEuro);
});
console.log(priceArray1);

let priceArray2 = edelMetallPreise.map((element) => element.preiseGramEuro);
console.log(priceArray2);

let veränerungArray1 = [];
edelMetallPreise.forEach((element) => {
    veränerungArray1.push(element.veranderung);
});
console.log(veränerungArray1);

let veränerungArray2 = edelMetallPreise.map((element) => element.veranderung);
console.log(veränerungArray2);

let teurerAls50 = edelMetallPreise.filter((element) => {
    if (element.preiseGramEuro >= 50) {
        return element.preiseGramEuro;
    } else return;
});

console.log(teurerAls50);

const table = document.getElementById('table');

const createTable = () => {
    let tr = '';
    table.innerHTML = '<tr>';
    for (key in edelMetallPreise[0]) {
        tr += `<th>${key}</th>`;
    }
    table.innerHTML += `${tr} </tr>`;

    for (element of edelMetallPreise) {
        table.innerHTML += `<tr><td>${element.name}</td><td>${element.preiseGramEuro}</td><td>${element.veranderung}</td></tr> `;
    }
};

createTable();

console.log('=======5===========');
const singers = [
    {
        name: 'The Beatles',
        country: 'United Kingdom',
        period_active: { start: 1960, end: 1970 },
        genre: 'Rock / Pop',
    },
    {
        name: 'Elvis Presley',
        country: 'United States',
        period_active: { start: 1954, end: 1977 },
        genre: 'Rock and roll',
    },
    {
        name: 'Michael Jackson',
        country: 'United States',
        period_active: { start: 1964, end: 2009 },
        genre: 'Pop / Rock / Dance / Soul / R&B',
    },
    {
        name: 'Elton John',
        country: 'United Kingdom',
        period_active: { start: 1964, end: 'present' },
        genre: 'Pop / Rock',
    },
    {
        name: 'Madonna',
        country: 'United States',
        period_active: { start: 1979, end: 'present' },
        genre: 'Pop / Dance / Electronica',
    },
    {
        name: 'Led Zeppelin',
        country: 'United Kingdom',
        period_active: { start: 1968, end: 1980 },
        genre: 'Hard rock / Blues rock / Folk rock',
    },
    {
        name: 'Rihanna',
        country: 'United States',
        period_active: { start: 2005, end: 'present' },
        genre: 'R&B / Pop / Dance / Hip-hop',
    },
    {
        name: 'Pink Floyd',
        country: 'United Kingdom',
        period_active: { start: 1965, end: 1996, extra: 2014 },
        genre: 'Progressive rock / Psychedelic rock',
    },
];

const alphabeticalOrderedArray = singers.sort(function (a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});

console.log(alphabeticalOrderedArray);
