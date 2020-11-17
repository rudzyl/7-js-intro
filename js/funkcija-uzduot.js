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


function skaitmenuKiekisSkaiciuje(b) {
    if (typeof b !== 'number') {
        console.log('Pateikta netinkamo tipo reiksme');
        return false
    } else {
     /*for (let i = 0; i <= b.length; i++) {
        console.log(i);
    */
    return b.toString().length;
        
    }
}    
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN)); //???

console.log('----------------------------------');

function didziausiasSkaiciusSarase (list) {
    const kiekis = list.length;
    let didziausias = 0;

    if (typeof list !== 'array') {
        console.log('Pateiksta netinkamo tipo reiksme.');
    } else if (kiekis === 0) {
        console.log ('Pateikstas sarasas negali buti tuscias.');
    } else {
        
    }
}

console.log(didziausiasSkaiciusSarase([1]));
