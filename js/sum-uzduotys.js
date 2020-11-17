// for pirma uzduotis kaip parasyti jog tik vienas skaicius butu?

// 0 - 0
// 0 - 4
// 0 - 100
// 574 - 815
// -50 - 50
// -70 - 30

const nuo = 0;
const iki = 0;
let sum = 0;

for (let nuo = 0; nuo <= iki ; nuo++) {
    sum = sum + nuo;
    console.log(nuo);
}
console.log(`skaiciu intervale tarp ${nuo} ir ${iki} suma ${sum}`)

const nuo2 = 0;
const iki2 = 4;
let sum2 = 0;



const nuo1 = 0;
const iki1 = 100;
let sum1 = 0;

for (let i = nuo1; i <= iki1 ; i++) {
    sum1 = sum1 + i;
}
console.log(`skaiciu intervale tarp ${nuo1} ir ${iki1} suma ${sum1}`)

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

