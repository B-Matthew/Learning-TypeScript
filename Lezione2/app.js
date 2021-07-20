function add(n1, n2, print, phrase) {
    var result = n1 + n2;
    if (print) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.5;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
// è possibile assegnare tipizzazioni alle variabili in modo da esser certi che il valore non possa esser diverso dalla tipizzazione: 
// let number1: number;
//  number = '5'; darà errore perchè ho dichiarato la tipizzazione della variabile, la tipizzazione viene anche dichiarata implicitamente con const string1 = 'ciao';
//core types: 
// number : compresi numeri decimali etc     string  : stringhe di testo     boolean: true or false / 0 or 1
