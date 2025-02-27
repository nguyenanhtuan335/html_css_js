// Nhập bán kính hình cầu từ người dùng
let r = parseFloat(prompt("Nhập bán kính hình cầu (r):"));

const PI = Math.PI; // Giá trị số PI

// Tính toán các giá trị
let theTich = (4 / 3) * PI * Math.pow(r, 3); // Thể tích hình cầu
let dienTichBeMat = 4 * PI * Math.pow(r, 2); // Diện tích bề mặt
let chuViLonNhat = 2 * PI * r; // Chu vi lớn nhất (chu vi đường tròn lớn nhất trên mặt cầu)

// Hiển thị kết quả
document.write("Thể tích hình cầu: " + theTich.toFixed(2) + " đơn vị³<br>");
document.write("Diện tích bề mặt: " + dienTichBeMat.toFixed(2) + " đơn vị²<br>");
document.write("Chu vi lớn nhất: " + chuViLonNhat.toFixed(2) + " đơn vị<br>");
