//spausdiname sveikaji skaiciu

console.log (4567890);

//du skaiciai vs desimtainis - kaip veikia ir koks yra kablelis 
console.log(3,14);
console.log(3.24);

//kaip spausdinamas tekstas?
console.log("labas rytas");
console.log('labas rytas');
console.log(1996);
console.log("Rudzile");
console.log('whats up!');

/*****************************************************************
//KINTAMIEJI
*****************************************************************/
/*
Iniciavimo budai:
    - const - default, tai musu pirmasis pasirinkimas
    - let - galima, tik jei yra reikalas keisti reiksme
    - var - nenaudotinas
*/
/*
Kintamuju tipai:
    skaiciai (number) - 3, 2020, 3.15, -7, -5.47
    tekstai (string) - "labas", 'ka tu?', ";)", 'simbolis'
    logines (boolean) - true, false
    sarasai (array) - []
    objektai (objects) - {}
*/

const pirmasSkaicius = 7;
const antrasSkaicius = 3;
const suma = pirmasSkaicius + antrasSkaicius;

console.log(suma);
console.log(pirmasSkaicius, '+' , antrasSkaicius, '=' , suma);


const vardas = 'rugile';
const amzius = 99;

console.log(vardas);
console.log(amzius);

//rugile yra 99 metu amziaus.

const sakinys = vardas + ' yra ' + amzius + ' metu amziaus. ';
console.log(sakinys);

//Rikis grauzia kaula.

const suo = 'Rikis';
const maistas = 'kaula';
const veiksmas = 'grauzia';

console.log(suo + ' ' + veiksmas + ' ' + maistas + '.');
const sakinys2 = suo + ' megstamas maistas yra ' + maistas + '.';

console.log(sakinys2);

// Chuck Norris (80)

const heroName = 'Chuck';
const heroLastname = 'Norris';
const birth = 1940;
const present = 2020;

const sakinys4 = (heroName + ' ' + heroLastname + ' ' + "(" + (present - birth) + ")");
console.log(sakinys4)

// Jo vardas: Chuck.

console.clear();

let pinigine = 7;
const sausis = 100;
const vasaris = 200;
const kovas = 70;

pinigine = pinigine + sausis;
console.log(pinigine);

pinigine = pinigine + vasaris;
console.log(pinigine);

pinigine = pinigine + kovas;
console.log(pinigine);




