let user = prompt("Nhập vào từ 10 đến 20 số nguyên");
let arr = userInput ? userInput.split(",").map(item => Number(item.trim())) : [];

function kiemTra(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function Primes(array) {
    if (!Array.isArray(array)) {
        console.log("Dữ liệu không hợp lệ");
        return "Dữ liệu không hợp lệ";
    }

    if (array.length < 10 || array.length > 20) {
        console.log("Số lượng phần tử không hợp lệ");
        return "Số lượng phần tử không hợp lệ";
    }

    let newArray = array.filter(num => isPrime(num) && num % 2 !== 0);

    return newArray.length > 0 ? console.log(newArray) : console.log("Dữ liệu không hợp lệ");
}
Primes(arr);
