let a = +prompt("Mời bạn nhập vào số a");
let b = +prompt("Mời bạn nhập vào số b");
let sum = (function (a, b) {
    if(isNaN(a) || isNaN(b) || Number.isInteger(a) || Number.isInteger(b)) {
        return "Dữ liệu không hợp lệ"
    }
    return a + b;
})(a, b);
console.log(sum);