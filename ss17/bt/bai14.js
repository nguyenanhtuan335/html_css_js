
let r = parseFloat(prompt("Nhập bán kính đáy hình trụ (r):"));
let h = parseFloat(prompt("Nhập chiều cao hình trụ (h):"));
const PI = Math.PI; 
let chuViDay = 2 * PI * r; 
let dienTichXungQuanh = 2 * PI * r * h; 
let dienTichToanPhan = dienTichXungQuanh + 2 * (PI * r * r); 
let theTich = PI * r * r * h; 

document.write("Chu vi đáy: " + chuViDay.toFixed(2) );
document.write("Diện tích xung quanh: " + dienTichXungQuanh.toFixed(2) );
document.write("Diện tích toàn phần: " + dienTichToanPhan.toFixed(2));
document.write("Thể tích hình trụ: " + theTich.toFixed(2));
