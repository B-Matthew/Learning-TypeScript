function add(n1: number,n2:number) {
    return n1 + n2;
}

function printResult(num: number): void {  // void è un tipo di funzione che non ritorna nulla
    console.log('Result:' + num);
}

printResult(add(2,3));