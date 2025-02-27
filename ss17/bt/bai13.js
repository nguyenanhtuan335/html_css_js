let num1 = +prompt("Mời bạn nhập vào số tiền gửi:");
let num2 = +prompt("Mời bạn nhập vào số tháng gửi:");
let tienLai = 4.3 / 100; 
let result = (num1 * tienLai / 12) * num2; 
document.write("Số tiền lãi nhận được là: ",result + " VND");
