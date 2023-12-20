export function addition(a, b) {
    return `${a} + ${b} = ${a + b}`;
}

export function subtract(a, b) {
    return `${a} - ${b} = ${a - b}`;
}

export function multiply(a, b) {
    return `${a} * ${b} = ${a * b}`;
}

export function divide(a, b) {
    if(b != 0) {
        return `${a} : ${b} = ${a / b}`;
    } else  {
        return "Division par zéro impossible !";
    }
}