type asAny = 'as-text' | 'as-number'; // posso usare type come variabile per combinare le unioni tra tipi, comodo nel caso ci sono 2 o più tipi da valorizzare
type Combine = number | string;

function add(
    n1: Combine,
    n2: Combine,
    resultConversion: asAny
    ) {  // i parametri sono flessibili a 2 tipizzazioni con la proprietà Union
    let result; 
    if (typeof n1 == 'number' && typeof n2 == 'number' || resultConversion=== 'as-number') {
        result = +n1 + +n2;
    }else {
        result = n1.toString() + n2.toString();
    }
    return result;
}

console.log(add('max','anna','as-text'));
console.log(add(10,30,'as-number'));
console.log(add('2','10', 'as-number'));
    

