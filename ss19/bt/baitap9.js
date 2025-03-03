// 1. Nối chuỗi: "javascript" + 5
let result1 = "javascript" + 5;
console.log("Result 1:", result1); 
// Kết quả: "javascript5"
// Giải thích: Toán tử + giữa chuỗi và số thực hiện nối chuỗi, 5 được chuyển thành "5".

// 2. Trừ chuỗi không phải số: "javascript" - 1
let result2 = "javascript" - 1;
console.log("Result 2:", result2); 
// Kết quả: NaN
// Giải thích: Toán tử - thực hiện phép trừ số học, "javascript" không chuyển thành số được nên trả về NaN.

// 3. Nối chuỗi: "3" + 2
let result3 = "3" + 2;
console.log("Result 3:", result3); 
// Kết quả: "32"
// Giải thích: Toán tử + giữa chuỗi và số thực hiện nối chuỗi, 2 được chuyển thành "2".

// 4. Trừ số dạng chuỗi: "5" - 4
let result4 = "5" - 4;
console.log("Result 4:", result4); 
// Kết quả: 1
// Giải thích: Toán tử - ép kiểu "5" thành số 5, sau đó thực hiện 5 - 4 = 1.

// 5. Kiểm tra NaN với isNaN: isNaN("123")
let result5 = isNaN("123");
console.log("Result 5:", result5); 
// Kết quả: false
// Giải thích: "123" chuyển thành số 123 hợp lệ, nên không phải NaN.

// 6. Kiểm tra NaN với isNaN: isNaN("hello")
let result6 = isNaN("hello");
console.log("Result 6:", result6); 
// Kết quả: true
// Giải thích: "hello" không chuyển thành số được (Number("hello") = NaN), nên isNaN trả về true.

// 7. Kiểm tra nghiêm ngặt NaN: Number.isNaN("123")
let result7 = Number.isNaN("123");
console.log("Result 7:", result7); 
// Kết quả: false
// Giải thích: Number.isNaN không ép kiểu, "123" là chuỗi, không phải NaN, nên trả về false.

// 8. Kiểm tra nghiêm ngặt NaN: Number.isNaN(NaN)
let result8 = Number.isNaN(NaN);
console.log("Result 8:", result8); 
// Kết quả: true
// Giải thích: Number.isNaN chỉ trả về true khi giá trị là NaN, ở đây NaN chính là NaN.