let a = +prompt(" mời bạn nhập vào số a");
let b = +prompt(" mời bạn nhập váo số b");
let c = +prompt(" mời bạn nhập vào số c ");
let delTa = a*b-4*a*c;
let x1 = (-b+Math.sqrt(delTa))/(2*a);
let x2 = (-b-Math.sqrt(delTa))/(2*a);
document.write(" kết quả delTa là : ",delTa);
document.write(" kết quả x1 là : ",x1);
document.write(" kết quả x2 là : ",x2);
