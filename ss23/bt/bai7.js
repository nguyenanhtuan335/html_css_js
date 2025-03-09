let n = +prompt("Nhập số phần tử của mảng:");
let arr = [];

for (let i = 0; i < n; i++) {
    arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}:`);
}

let isFibonacci = true;

if (n < 1) {
    isFibonacci = false;
} else if (n === 1) {
    if (arr[0] !== 0) {
        isFibonacci = false;
    }
} else if (n === 2) {
    if (arr[0] !== 0 || arr[1] !== 1) {
        isFibonacci = false;
    }
} else {
    for (let i = 2; i < n; i++) {
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            isFibonacci = false;
            break;
        }
    }
}

if (isFibonacci) {
    console.log("Mảng là dãy Fibonacci!");
    console.log("Mảng của bạn:", arr);
} else {
    console.log("Mảng KHÔNG phải là dãy Fibonacci!");
    console.log("Mảng của bạn:", arr);
}