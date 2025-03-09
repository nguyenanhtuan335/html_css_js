
let arr = [1, 22, 12, 8, 7, 9];
let inputNumber = +prompt(" nhập chuỗi số để kiểm tra");
let count = 0;


let arr10 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === inputNumber) {
        count++;
    }
    if (arr[i] > 10) {
        arr10.push(arr[i]);
    }
}
document.write("Mảng ban đầu: ");
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i]);
    if (i < arr.length - 1) {
        document.write(", ");
    }
}
document.write("<br>");

if (count > 0) {
    document.write(`Số ${inputNumber} xuất hiện ${count} lần trong mảng.<br>`);
} else {
    document.write(`Số ${inputNumber} không xuất hiện trong mảng.<br>`);
}

if (arr10.length > 0) {
    document.write("Các số lớn hơn 10 trong mảng: ");
    for (let i = 0; i < arr10.length; i++) {
        document.write(arr10[i]);
        if (i < arr10.length - 1) {
            document.write(", ");
        }
    }
} else {
    document.write("Không có số nào lớn hơn 10.");
}
