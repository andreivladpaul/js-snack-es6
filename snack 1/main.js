/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera */


let bici = [{
    nome: 'Atala',
    peso: 50
},
{
    nome: 'Xeris',
    peso: 70  
}];

let biciLeggera = bici[0];
const {nome, peso} = biciLeggera;


for (let i = 0; i < bici.length; i++) {
    
    if (bici[1].peso < biciLeggera.peso) {
        biciLeggera = bici[i].peso;
    

    };
};
console.log(nome, peso);
console.log(`La bici più leggera è ${biciLeggera['nome']} con peso ${biciLeggera['peso']}`); 

//BONUS------------------------------------------------------------------------------------

let leggera = (array) => {
    let piùLeggera = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[1].peso < piùLeggera.peso) {
            piùLeggera = array[i].peso;
        };
    };
    
    console.log(piùLeggera);
};

leggera(bici);