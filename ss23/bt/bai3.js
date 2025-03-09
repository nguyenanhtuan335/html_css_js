let n = +prompt(" nhập số phần tử cho mảng")
if (n < 0) {
    document.write("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
    document.write("Mảng không có phần tử");
} else {
    let arr = [];
    let soAm = 0;

    for (let i = 0; i < n; i++) {
        let num = +prompt(`Nhập phần tử thứ ${i + 1}:`)
        arr.push(num);
        if (num < 0) {
            soAm++;
        }
    }

    document.write("Mảng: [ " + arr.join(", ") + " ]<br>");
    document.write("Số lượng số nguyên âm: " + soAm);
}

