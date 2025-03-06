let number = prompt("Hãy nhập một chuỗi dãy số:");

if (isNaN(parseInt(number))) {
    document.write("Dãy số không hợp lệ");
} else {
    document.write("Dãy số hợp lệ <br>");
    
    let reversedArray = number.split("").reverse().join("");
    document.write("Chuỗi đảo ngược: " + reversedArray + "<br>");

    let maxDigit = Math.max(...number.split("").map(Number));
    document.write(maxDigit + " là số lớn nhất trong dãy số");
}
