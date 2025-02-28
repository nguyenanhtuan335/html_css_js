
let number = +prompt(" mời bạn nhập vào 1 số nguyên")
if (isNaN(number)) {
    document.write("Vui lòng nhập một số nguyên hợp lệ.");
} else {
    let result = (number % 2 === 0) ? "Số chẵn" : "Số lẻ";
    document.write("Kết quả: " + result);
}
