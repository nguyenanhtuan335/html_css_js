
let number1 = Math.abs(-5.5); 
document.write(" giá trị tuyệt đối là :", number1); // Kết quả: 5.5, vì giá trị tuyệt đối của -5.5 là 5.5

let number2 = Math.abs(10);
document.write(" giá trị tuyệt đối là:", number2); // Kết quả: 10, vì 10 đã là số dương nên không thay đổi

// Sử dụng Math.ceil() - Làm tròn lên
let number3 = Math.ceil(4.4);
document.write("số 4.4 làm tròn lên số :", number3); // Kết quả: 5, vì Math.ceil() làm tròn lên số nguyên gần nhất

let number4 = Math.ceil(5.8);
document.write("số 5.8 làm tròn lên số :", number4); // Kết quả: 6, vì làm tròn lên số nguyên gần nhất

// Sử dụng Math.floor() - Làm tròn xuống
let  number5 = Math.floor(5.7);
document.write(" số 5.7 làm tròn xuống):",  number5); // Kết quả: 5, vì Math.floor() làm tròn xuống số nguyên gần nhất

let  number6 = Math.floor(6.1);
document.write(" số 6.1 làm tròn xuống:",  number6); // Kết quả: 6, vì làm tròn xuống số nguyên gần nhất

// Sử dụng Math.round() - Làm tròn đến số nguyên gần nhất
let  number7 = Math.round(10.1);
document.write(" số 10.1 :\n",  number7); // Kết quả: 10, vì 10.1 gần 10 hơn

let  number8 = Math.round(20.6);
document.write(" số 10.1:",  number8); // Kết quả: 21, vì 20.6 gần 21 hơn (làm tròn lên từ 0.5 trở lên)
