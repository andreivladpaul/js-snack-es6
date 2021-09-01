/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
 */

let cats = [{
    name: 'gatto1',
    age: 5,
    gender: 'male',
    color: 'black'   },
{
    name: 'gatto2',
    age: 7,
    gender: 'female',
    color: 'black'    
},
{
    name: 'gatto3',
    age: 8,
    gender: 'male',
    color: 'black'    
},
{
    name: 'gatto4',
    age: 9,
    gender: 'male',
    color: 'black'   
},
{
    name: 'gatto5',
    age: 1,
    gender: 'female',
    color: 'black'     
}]

let nuovoArray = [];

function  array(array, a, b) {
    
    array.forEach(element => {
        if ((array.indexOf(element)) >= a && (array.indexOf(element)) <= b) {
            nuovoArray.push(element)
        }
    });
    console.log(nuovoArray)
    
}
    
array(cats, 1, 3);