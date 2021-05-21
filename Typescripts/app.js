function comb(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combine = comb(30, 25);
console.log(combine);
var combine1 = comb('Max', 'Ama');
console.log(combine1);
