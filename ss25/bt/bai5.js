let arr = [];
let n = +prompt("Bạn muốn nhập vào mảng bao nhiêu phần tử");
for (let i = 0; i < n; i++) {
    arr[i] = +prompt(` Mời bạn nhập vào phần tử thứ ${i + 1}`);
}
function checkNumber(arr) {
    let check = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0 || !Number.isInteger(arr[i])) {
            check++;
        }
    }
    if( check > 0) {
        return check;
    } else {
        return "Không có số nguyên dương trong mảng";
    }
}

let value = checkNumber(arr);
console.log(value);