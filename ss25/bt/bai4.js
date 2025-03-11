function isPrime(number) {
    if (!Number.isInteger(number) || number <= 1) {
        return false;
    }
    if (number === 2) {
        return true;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    return true;
}
let number = +prompt("Nhập một số nguyên dương để kiểm tra: ");
if (isPrime(number)) {
    console.log(`${number} là số nguyên tố`);
} else {
    console.log(`${number} không phải là số nguyên tố`);
}