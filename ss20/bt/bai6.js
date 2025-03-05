let number = +prompt("Mời bạn nhập 1 số nguyên:");

if (isNaN(number) || !Number.isInteger(number) || number < 2) {
    document.write(" Số không hợp lệ. Vui lòng nhập số nguyên ≥ 2.");
} else {
    let isPrime = true; 

    for (let i = 2; i <= Math.sqrt(number); i++) { 
        if (number % i === 0) {
            isPrime = false; 
            break;
        }
    }
    if (isPrime) {
        document.write(` ${number} là số nguyên tố.`);
    } else {
        document.write(` ${number} không phải là số nguyên tố.`);
    }
}
