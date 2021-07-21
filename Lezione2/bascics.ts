function add(n1: number, n2: number, print: boolean, phrase: string) {     // la funzione passa solo se i parametri rispecchiano i tipi assegnati
    const result = n1 + n2;
    if (print) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1= 5;
const number2= 2.5;
const printResult = true;
const resultPhrase =  'Result is: '
add(number1, number2, printResult, resultPhrase );

// è possibile assegnare tipizzazioni alle variabili in modo da esser certi che il valore non possa esser diverso dalla tipizzazione: 
// let number1: number;
//  number = '5'; darà errore perchè ho dichiarato la tipizzazione della variabile, la tipizzazione viene anche dichiarata implicitamente con const string1 = 'ciao';

//core types: 

// number : compresi numeri decimali etc     string  : stringhe di testo     boolean: true or false / 0 or 1    object : {age:20}   array : [1,2,3,4,]  
//  tuple: è un array fixed a tot elementi specifici        enum: Crea degli oggetti numerati con nome assegnato     any: qualsiasi


        

