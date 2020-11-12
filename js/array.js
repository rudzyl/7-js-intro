/*
Saraso tipo kintamieji:
    sinonimai: sarasas, masyvas, arejai, array, matrica*
    inicijuojama su lauztiniais sklausteliais
    viduje gali buti ivairiu tipu reiksmiu, bet rekomenduotina, kad butu tik vieno tipo reiksmes.
*/

//Pazymiai
//petriukoPazymiai = 2, 10, 7, 5, 2, 9, 7;

const petriukoPazymiai = [2, 10, 7, 5, 10];
console.log(petriukoPazymiai);

//kaip suskaiciuoti pazymiu vidurki?
let suma = 0;
suma = suma + petriukoPazymiai [0];
suma = suma + petriukoPazymiai [1];
suma = suma + petriukoPazymiai [2];
suma = suma + petriukoPazymiai [3];
suma = suma + petriukoPazymiai [4];

const kiekis = petriukoPazymiai.length;
const vidurkis = suma / kiekis;

console.log(vidurkis);


