/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 */

let squadre = [
    { nome: 'Milan', punti: 0, falliSubiti: 0 },
    { nome: 'Inter', punti: 0, falliSubiti: 0 },
    { nome: 'Lazio', punti: 0, falliSubiti: 0 }
];



//Generare numeri random al posto degli 0 nelle proprietà:
//Punti fatti e falli subiti.

 function getRandomNumber(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

for (let i = 0; i < squadre.length; i++) {
    if (squadre[i].punti == 0) {
        squadre[i].punti = getRandomNumber(0, 30);
    } 
    
    if (squadre[i].falliSubiti == 0) {
        squadre[i].falliSubiti = getRandomNumber(0, 30);
    } 
}

console.log(squadre) 

//usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console

 let listaSquadre = [];

for (let i = 0; i < squadre.length; i++) {
     let {nome, falliSubiti} = squadre[i];
     
    listaSquadre.push({nome, falliSubiti})
}

console.log(listaSquadre); 