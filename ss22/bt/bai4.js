let str = prompt("Mời bạn nhập");
let max;
let arr = str.split("").map(Number);
for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
        alert("Dãy số không hợp lệ");
    } else {
        max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        console.log(` Số ${max} là số lớn nhất trong dãy số`);
    }
}