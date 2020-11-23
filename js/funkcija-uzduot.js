function tusciaFunkcija () {
    return false;
}

console.log(tusciaFunkcija());
console.log(tusciaFunkcija(5));
console.log(tusciaFunkcija('sdfghj'));

function daugyba(ska, skb) {
    //imput validation
    // jeigu a nera skaicius, rodom klaida
    if (typeof a !== 'number') {
        console.log('ERROR: pirmoji reiksme nera skaciaus tipo');
        return false;
    }
    if (typeof b !== 'number') {
        console.log('ERROR: antroji reiksme nera skaciaus tipo');
        return false;
    }
    // jeigu b nera skaicius, rodom klaida
    //function logic
    const sum = ska * skb;

    //funcion result
    return sum;

}
console.log(daugyba(2, 4));
console.log(daugyba(5, 4));
console.log(daugyba(2, 5));

console.log('-----------------------------------');

function skaitmenuKiekisSkaiciuje(b) {
    if (typeof b !== 'number') {
        return 'Pateikta netinkamo tipo reiksme'
    } else if ('' + b === 'NaN') {
        return 'Pateikta netinkamo tipo reiksme'
    }
    else {
     /*const textB = '' + b;
     const size = textB.length;
     return size;
    */
    return b.toString().length;
        
    }
}   
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd')); 
console.log(skaitmenuKiekisSkaiciuje(NaN)); 

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));


console.log('----------------------------------');

function didziausiasSkaiciusSarase (list) {
    const kiekis = list.length;
    let didziausias = 0;

    if (typeof list !== 'object') {
        return'Pateiksta netinkamo tipo reiksme.';
    } else if (kiekis === 0) {
        return 'Pateikstas sarasas negali buti tuscias.';
    } 
    
        let biggestNumber = -Infinity;
        for (i = 1;  i < kiekis; i++) {
            const num = list[i];

        if (num > biggestNumber) {
            biggestNumber = num;
        }
    }

    return biggestNumber;
}
console.log(didziausiasSkaiciusSarase([]),'->');
console.log(didziausiasSkaiciusSarase('pomidoras'));

console.log(didziausiasSkaiciusSarase([1]), '->', 1);
console.log(didziausiasSkaiciusSarase([1]),'->', 77);
console.log(didziausiasSkaiciusSarase([1, 2, 3]),'->', 3);
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]),'->', 78);
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]),'->', 69);
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]),'->', -1);

console.log('--------------------------------');

function isrinktiRaides (text, step) {
    // imput validation
    if (typeof text !== 'string') {
        return 'error'
    }
    if (typeof step !== 'number' ) {
        return 'error'
    }
    if (step > text.length) {
        return 'error'
    }
    if (step === 0) {
        return 'error'

    }
    const size = text.length;

    //logic
    let rez = '';
    const firstLetterPosition = step - 1;
    for (let i = firstLetterPosition; i < size; i+= step) {
        if (i % step === step - 1) {
            rez = rez + text[i];
        }
        

    }

    //post logic validation

    //return
    return rez;
}

console.log(isrinktiRaides(1561, 2));
console.log(isrinktiRaides('1561', '2'));
console.log(isrinktiRaides('abc', 4));
console.log(isrinktiRaides('abc', 0));
console.log(isrinktiRaides('abc', 3, '->',));

console.log(isrinktiRaides('abcdefg', 2), '->', 'bdf');
console.log(isrinktiRaides('abcdefghijkl', 3), '->', 'cfil');


// dalyba, kaip suapvalinti skaiciu iki tam tikros vietos po kablelio

function numComma (numberr, position) {
    //return parseFloat(numberr.toFixed(position));
    let ats = numberr;
    ats = numberr * (10 ** position);
    ats = Math.floor(ats);
    ats /= 10 ** position;

    return ats;
}

const num = 3.4567;
const rez = numComma(num, 2);

console.log(rez, '->' , 3.46);






console.log('_____________________________________________');


function pazymiuVidurkis(list) {
    let sum = 0;
    const kiekis = list.length;

    for (let i = 0; i < kiekis; i++) {
        sum = sum + list[i];
    }

    const vidurkis = sum / kiekis;

    if (kiekis === 0) {
        console.log('neturi pazymiu');
    } else {
        console.log(`Vidurkis: ${vidurkis}`);
    }
}
pazymiuVidurkis ([5, 7, 8, 4, 6]);
pazymiuVidurkis ([6, 6, 6, 6, 7]);
pazymiuVidurkis ([]);
pazymiuVidurkis ([2, 2, 2, 2, 2, 4]);

function kvadratu(base) {
    let pakelta = base * base;
   // console.log(`${base} -> ${pakelta}`);

   return pakelta
}
console.log (kvadratu(2));
console.log (kvadratu(5));
console.log (kvadratu(-2));

function norimasLaipsnis (sk, laipsnis) {
    let rez = 1;
    for (let i = 0; i < laipsnis; i++) {
        rez = rez * sk;
    }
    return rez;
}
const kubu = norimasLaipsnis(2, 3);
console.log(kubu , '->' , 8);
const du10 = norimasLaipsnis(2, 10);
console.log(du10 , '->' , 1024);
const minus = norimasLaipsnis(-5, 3);
console.log(minus , '->' , 125);