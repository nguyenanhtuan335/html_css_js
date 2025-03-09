
let n = parseInt(prompt("Nhập số phần tử của mảng:"));
if (n < 0) {
    document.write("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
    document.write("Không có ký tự số");
} else {
    let arr = [];
    let digitChars = [];

    for (let i = 0; i < n; i++) {
        let char = prompt(`Nhập ký tự thứ ${i + 1}:`);
        arr.push(char);
        if (!isNaN(char) && char.trim() !== "") {
            digitChars.push(char);
        }
    }
    document.write("Mảng: [ " + arr.map(ch => `'${ch}'`).join(", ") + " ]<br>");

    if (digitChars.length > 0) {
        document.write(digitChars.join(" "));
    } else {
        document.write("Không có ký tự số");
    }
}
