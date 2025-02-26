let number1 = +prompt(" mời bạn nhập số thứ nhất ");
let number2 = +prompt(" mời bạn nhập số thứ hai ");
let result = Math.floor(Math.random(number1,number2) * (number2 - number1) ) + number1;
document.write("Số bất kì trong 2 số là  : ",result);