const kiek = 6;

for (let i = 3; i <= kiek; i++) {
    //logika
    console.log('labas rytas', i);

}

console.log('pabaiga');

console.log('---------');

/*Jei kas menesi zmogus uzdirba 5000, tai kiek jis uzdirba per metus?
*/

const alga = 5000;
const menesiu = 12;
const pajamos = 0;



for (let i=1; i <= menesiu; i++) {
    console.log(`${i}) ${alga * i} pinigu.`);

}


console.log('--------------');

/*
parasyti skaicius nuo 8 iki 4.
*/

for (let i = 8; i >= 4 ; i--) {
    console.log(i);

}
console.log('---------');

/*
isvardinti ciferblato skaicuos nuo dotos valandos iki galo.
*/

const valanda = 3;
const max = 12;

for (let val = valanda; val <= max; val++) {
    console.log(val + ' val ');
}

console.log('-------');

const miestai = ['Amerika', 'Kanada', 'Indija', 'Rusija', 'Kinija'];

for (let i=0; i < miestai.length; i++) {
    const miestoPavadinimas = miestai[i];
    console.log(`Aplankiau: ${miestai[i]}.`);
}

console.log('-----------');

const abc = ['a', 'b', 'c', 'd', 'e'];

console.log(abc);

for (let pozicija = abc.length - 1; pozicija >= 0; pozicija--) {
console.log(abc[pozicija]);

}

console.clear();

const text = 'ka tu?';

for (let i = 0; i<text.length; i++) {
    console.log(text[i]);
}

console.log(text.length);

console.log('-----------------');

/*kaip spausdinti kas antra simboli su ciklu?*/


const zodis = 'pomidoras';
const step = 2;
const pirmosRaidesPozicija = step - 1;
let rez = '';

for (let i = pirmosRaidesPozicija; i<zodis.length; i = i + step) {
    const raide = zodis[i];
    rez = rez + raide;
}

console.log(rez);



