function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b !== 0){
        return a / b;
    }else{
        return "infinite";
    }
}

function log10(a) {
  return Math.log(a) / Math.LN10;
}
