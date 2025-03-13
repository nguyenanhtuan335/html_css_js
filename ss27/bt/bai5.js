let arr = [];
let number = +prompt("Bạn muốn nhập bao nhiêu phần tử vào mảng");
for (let i = 0; i < number; i++) {
    arr[i] = +prompt(`Mời bạn nhập vào phần tử thứ ${i + 1}`);
}

let n = +prompt("Bạn muốn tạo mảng con có bao nhiêu phần tử");

function splitArray(arr, n) {
    if (!Array.isArray(arr) || !Number.isInteger(n) || n <= 0) {
        return "Tham số không hợp lệ";
    }
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}

console.log(splitArray(arr, n));