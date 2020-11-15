/*KINTAMUJU INICIAVIMAS*/

//Pirmoji uzduotis

const pirmasSkaicius = 1;
console.log(pirmasSkaicius);

const antrasSkaicius = 2;
console.log(antrasSkaicius);

const treciasSkaicius = 3;
console.log(treciasSkaicius);

//Antroji uzduotis

const feline = 'kate';
console.log(feline);

const canine = "suo";
console.log(canine);

const homoSapien = 'zmogus';
console.log(homoSapien);

//Trecioji uzduotis

const zitosPazymiai = [4, 5, 8, 9, 10];
console.log(zitosPazymiai);

const martynoPazymiai = [10, 7, 9, 8, 10];
console.log(martynoPazymiai);

const vaidosPazymiai = [7, 8, 6, 9, 7];
console.log(vaidosPazymiai);

//Ketvirtoji uzduotis

const salys = ['Amerika', 'Kanada', 'Indija', 'Rusija', 'Kinija'];
console.log(salys);

const miestai = ["Vilnius, Tokijas, Milnas, Paryzius, Londonas"];
console.log(miestai);

const kaulai = ['slaunikaulis, dubinkaulis, sonkaulis, blauzdikaulis, zastikaulis']
console.log(kaulai);


/*VEIKSMAI SU KINTAMAISIAIS*/

//Pirmoji uzduotis

const suma = pirmasSkaicius + antrasSkaicius + treciasSkaicius;
console.log(suma);

//Antroji uzduotis

const tekstas = feline + ' ' + canine + ' ' + homoSapien;

console.log(tekstas);
//Trecioji uzduotis

let suma1 = 0;
suma1 = suma1 + zitosPazymiai [0];
suma1 = suma1 - zitosPazymiai [1];
suma1 = suma1 + zitosPazymiai [2];
suma1 = suma1 - zitosPazymiai [3];
suma1 = suma1 + zitosPazymiai [4];
console.log(suma1);

//Geresnis budas
// 

let suma2 = 0;
suma2 = suma2 + martynoPazymiai [0];
suma2 = suma2 - martynoPazymiai [1];
suma2 = suma2 + martynoPazymiai [2];
suma2 = suma2 - martynoPazymiai [3];
suma2 = suma2 + martynoPazymiai [4];
console.log(suma2);

let suma3 = 0;
suma3 = suma3 + vaidosPazymiai [0];
suma3 = suma3 - vaidosPazymiai [1];
suma3 = suma3 + vaidosPazymiai [2];
suma3 = suma3 - vaidosPazymiai [3];
suma3 = suma3 + vaidosPazymiai [4];
console.log(suma3);

//Ketvirtoji uzduotis

/*const salys = ['Amerika, Kanada, Indija, Rusija, Kinija'];
console.log(salys);

const kaulai = ['slaunikaulis, dubinkaulis, sonkaulis, blauzdikaulis, zastikaulis']
console.log(kaulai);
*/

//Pirmas variantas
/*let allSalys = '';

allSalys = allSalys + salys[0];
console.log(allSalys);
*/
let allSalys = '';

allSalys = allSalys + salys[0];
allSalys = allSalys + ', ' + salys[1];
allSalys = allSalys + ', ' + salys[2];
allSalys = allSalys + ', ' + salys[3];
allSalys = allSalys + ', ' + salys[4];

console.log(allSalys);

console.log('--------------------------------------');

// namu darbai 2020.11.15
const skaicius1 = 10;
const skaicius2 = 5;

//if pirma uzduotis

if (skaicius1 > skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (skaicius1 < skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (skaicius1 === skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (skaicius1 !== skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (skaicius1 >= skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (skaicius1 <= skaicius2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('--------------------------------');

//if antra uzduotis

const zodis1 = 'galva';
const zodis2 = 'uodaga';

if (zodis1 > zodis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (zodis1 < zodis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (zodis1 === zodis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (zodis1 !== zodis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (zodis1 >= zodis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (zodis1 <= zodis2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('----------------------------------------');

//if trecia tas pats? nesupratau ar gerai darau..

const raides = ['a', 'b', 'c', 'd', 'e', 'f'];
const skaitmenys = [1, 2, 3];

if (raides.length > skaitmenys.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (raides.length < skaitmenys.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (raides.length === skaitmenys.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (raides.length !== skaitmenys.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (raides.length >= skaitmenys.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

if (raides.length <= skaitmenys.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar karta');
}

console.log('------------------------------');

// for pirma uzduotis kaip parasyti jog tik vienas skaicius butu?

const nuo = 0;
const iki = 0;
let sum = 0;

for (let nuo = 0; nuo <= iki ; nuo++) {
    sum = sum + nuo;
    console.log(nuo);
}

const nuo1 = 0;
const iki1 = 4;
let sum1 = 0;

for (let nuo1 = 0; nuo1 <= iki1 ; nuo1++) {
    sum1 = sum1 + nuo1;
    console.log(sum1);
}

console.log('---------------------');


//for antra uzduotis

const randomZodis = 'abcdef';

for(let i = randomZodis.length - 1; i >= 0; i--) {
    console.log(randomZodis[i]);

}
 
console.log('-----------------------------');

//for trecia uzduotis

const pirmiSkai = [0,1,2,3,4,5,6,7,8,9,10,11];

for (let i = 0; i <= pirmiSkai.length; i++) {
    console.log(i);

}