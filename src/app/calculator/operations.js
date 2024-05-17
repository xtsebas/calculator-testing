function sum(first, second){
    return int(first) + int(second);
};

function sub(first, second){
    return int(first) - int(second);
};  

function mul(first, second){    
    return int(first) * int(second);
};

function div(first, second){    
    return int(first) / int(second);
};

function int(value){    
    return parseInt(value);
};

function toggleSign(number) {
    return -number;
};

function isEqual(first, second) {
    return first === second;
};

export { sum, sub, mul, div, toggleSign, isEqual };