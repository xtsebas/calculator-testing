function sum(first, second){
    const result = first + second;
    if (result.toString().length > 9) {
        return result.toFixed(9);
    }
    return result;
};
function sub(first, second){
    const result = first - second;
    if (result.toString().length > 9) {
        return result.toFixed(9);
    }
    return result;
};  

function mul(first, second){    
    const result = first * second;
    if (result.toString().length > 9) {
        return result.toFixed(9);
    }
    return result;
};

function div(first, second){    
    const result = first / second;
    if (result.toString().length > 9) {
        return result.toFixed(9);
    }
    return result;
};

function toggleSign(number) {
    const result = -number;
    if (result.toString().length > 9) {
        return result.toFixed(9);
    }
    return result;
};

function isEqual(first, second) {
    return first === second;
};


/*console.log(sum(1, 2)); // 3
console.log(sub(1, 2)); // -1
console.log(mul(1, 2)); // 2
console.log(div(1, 2)); // 0.5
console.log(toggleSign(1)); // -1
console.log(isEqual(1, 2)); // false*/

export { sum, sub, mul, div, toggleSign, isEqual };