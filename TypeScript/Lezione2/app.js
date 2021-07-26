function add(n1, n2, resultConversion) {
    var result;
    if (typeof n1 == 'number' && typeof n2 == 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
console.log(add('max', 'anna', 'as-text'));
console.log(add(10, 30, 'as-number'));
console.log(add('2', '10', 'as-number'));
