// for pirma uzduotis kaip parasyti jog tik vienas skaicius butu?
//0-0

const nuo = 0;
const iki = 0;
let sum = 0;

for (let nuo = 0; nuo <= iki ; nuo++) {
    sum = sum + nuo;
}
console.log(`skaiciu intervale tarp ${nuo} ir ${iki} suma ${sum}`)

//0-4

const nuo2 = 0;
const iki2 = 4;
let sum2 = 0;

for (let i = nuo2; i <= iki2; i++) {
    sum2 = sum2 + i;
}
console.log(`skaiciu intervale tarp ${nuo2} ir ${iki2} suma ${sum2}`);

// 0 - 100

const nuo1 = 0;
const iki1 = 100;
let sum1 = 0;

for (let i = nuo1; i <= iki1 ; i++) {
    sum1 = sum1 + i;
}
console.log(`skaiciu intervale tarp ${nuo1} ir ${iki1} suma ${sum1}`)

// 574 - 815

const nuo3 = 574;
const iki3 = 815;
let sum3 = 0;

for (let i = nuo3; i <= iki3; i++) {
    sum3 = sum3 + i;

}
console.log(`skaiciu intervale tarp ${nuo3} ir ${iki3} suma ${sum3}`)

// -50 - 50

const nuo4 = -50;
const iki4 = 50;
let sum4 = 0;

for (let i = nuo4; i <= iki4; i++) {
    sum4 = sum4 + i;

}
console.log(`skaiciu intervale tarp ${nuo4} ir ${iki4} suma ${sum4}`)

// -70 - 30

const nuo5 = -70;
const iki5 = 30;
let sum5 = 0;

for (let i = nuo5; i <= iki5; i++) {
    sum5 = sum5 + i;

}
console.log(`skaiciu intervale tarp ${nuo5} ir ${iki5} suma ${sum5}`);


//jei :
    //nuo > iki
    //nuo < iki

if ( nuo1 < iki1 ) {
    for  (let i = nuo1; i <= iki1 ; i++) {
        sum1 = sum1 + i;
    }
} else {
    for (let i = iki1; i <= nuo1 ; i++) {
        sum1 = sum1 + i;
    }
}

console.log('---------------------');


//for antra uzduotis

const randomZodis = 'abcdef';
let back = '';

for(let i = randomZodis.length - 1; i >= 0; i--) {
    const letter = randomZodis[i];
    back = back + letter;

}
console.log( randomZodis, ' -> ' , back);


const tekstas = 'redrum';
let isGalo = '';

for (let i = tekstas.length - 1; i >= 0; i--) {
    const raide = tekstas[i];
    isGalo = isGalo + raide;
    console.log(i, raide);

}
console.log (tekstas, '->' , isGalo);
 
console.log('-----------------------------');

//for trecia uzduotis
/*
const skaiciusNuo = 0;
const skaiciusIki = 11
const dalintiIs = 3;
let dalyba = 0;

for (let skaiciusNuo = 0; skaiciusNuo <= skaiciusIki; skaiciusNuo++) {
    dalyba = skaiciusNuo / dalintiIs;
    console.log(`${dalyba}`);

}
*/

const nuo11 = 0;
const iki11 = 11;
const daliklis = 3;

let kiekis = 0;

// % - matematinis operatorius, dalybos liekana

for (let i = nuo; i < iki11 ; i++) {
    if (i % daliklis === 0) {
        kiekis++;
    }
    
}
console.log(`Skaičių intervale tarp ${nuo11} ir ${iki11}, besidalijančių be liekanos iš ${daliklis} yra ${kiekis} vienetai.`);

