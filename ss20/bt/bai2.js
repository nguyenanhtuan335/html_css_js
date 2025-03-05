let number = +prompt(" mời bạn nhập 1 số nguyên dương");
let sum = "";
if (number > 0 && Number.isInteger(number)) {
    for (let i = 1; i <= number; i++) {
        if(i%5==0){
         sum = sum + i + "," + " "; 
        }
    }
    document.write(`các số chia hết cho 5 khoảng từ 1 đến n là  ${number} là: ${sum}`);
} else {
    document.write(" số liệu bạn nhập không hợp lệ");
}
