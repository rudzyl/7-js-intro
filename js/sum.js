
function suvestis(pirmas, antras) {
    const suma = pirmas + antras;
    console.log(`${pirmas} + ${antras} = ${suma}`);
}

suvestis(2, 3);
suvestis(5, 10);
suvestis(-9, 8);

function pazymiuVidurkis(list) {
    let suma1 = 0;
    const kiekis = list.length;

    for (let i = 0; i < kiekis; i++) {
        const pazymys = list[i];
        suma1 = suma1 + pazymys;
    }

    const vidurkis = suma1 / kiekis;

    if (kiekis === 0) {
        console.log('Neturi pazymiu...');
    } else {
        console.log(`Vidurkis: ${vidurkis}`);
    }

}

pazymiuVidurkis([3, 5, 7, 8, 9]);
pazymiuVidurkis([6, 8, 9, 4]);
pazymiuVidurkis([2, 3, 5, 4]);
pazymiuVidurkis([]);
pazymiuVidurkis([10, 10, 10, 10, 9]);

function kvadratu(skaitmuo) {
    const pakelimas = skaitmuo * skaitmuo;
    //console.log(`${skaitmuo} -> ${pakelimas}`);

    return pakelimas;
}

console.log(kvadratu(2));
console.log(kvadratu(3));
console.log(kvadratu(5));

function kubu(num) {
    const kubas = num * num * num;
    //console.log(`Pakelta kubu ${kubas}`);

    return kubas;
}

console.log(kubu(3));
console.log(kubu(8));
console.log(kubu(-3));

function laipsnis(base, power) {
    // retur base ** power;
    let rez = 1;
    for (let i = 0; i < power; i++) {
        rez = rez * base;
    }

    return rez;

}

const kubas2 = laipsnis(2, 3);
console.log(kubas2, '->' , 8);

const du10 = laipsnis(2, 10);
console.log(du10, '->' , 1024);

const minus5 = laipsnis(-5, 3);
console.log(minus5, '->' , -125);

function faktorialas(n) {
    let rez = 1;
    for (let i = 1; i <= n; i++) {
        rez = rez * i;

    }
    return rez;

}

const f0 = faktorialas(0);
const f1 = faktorialas(1);
const f2 = faktorialas(2);
const f3 = faktorialas(3);
const f4 = faktorialas(4);
const f5 = faktorialas(5);

console.log(f0, '->' , 1); //0 * 1
console.log(f1, '->' , 1); //1 * 1
console.log(f2, '->' , 2); //1 * 2
console.log(f3, '->' , 6); //2 * 3
console.log(f4, '->' , 24);//6 * 4
console.log(f5, '->' , 120);//24 * 5
