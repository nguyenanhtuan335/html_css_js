let number =+prompt(" mời bạn nhập vào 1 số nguyên dương");
let sum = 0;

if (number > 0 && Number.isInteger(number)) {
    for (let i = 1; i <= number; i++) {
        sum += i; 
    }
    alert(`Tổng các số nguyên từ 1 đến ${number} là: ${sum}`);
} else {
    alert("Dữ liệu bạn nhập không hợp lệ. Vui lòng nhập một số nguyên dương.");
}
