let user = prompt("Nhập vào danh sách số, cách nhau bởi dấu phẩy:");
let arr = userInput ? userInput.split(",").map(item => Number(item.trim())) : [];

function isPrime(num) {
    if (num < 2 || !Number.isInteger(num)) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function filterPrimeNumbers(array) {
    if (!Array.isArray(array)) {
        console.log("Dữ liệu không hợp lệ");
        return "Dữ liệu không hợp lệ";
    }
    if (array.length === 0) {
        console.log("Mảng không có phần tử nào");
        return "Mảng không có phần tử nào";
    }
    let primeNumbers = array.filter(num => isPrime(num));

    return primeNumbers.length > 0 ? console.log(primeNumbers) : console.log("Mảng không có số nguyên tố");
}
filterPrimeNumbers(arr);
