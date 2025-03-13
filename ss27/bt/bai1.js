let a = +prompt("Mời bạn nhập vào số thứ nhất");
let b = +prompt("Mời bạn nhập vào số thứ hai");
let menu = `
    -------------MENU------------
    1. Cộng hai số
    2. Trừ hai số
    3. Nhân hai số
    4. Chia hai số
    5. Thoát
    -----------------------------
    Lựa chọn của bạn:
`;
let choice;
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            console.log(`Kết quả của phép cộng: ${sum(a, b)}`);
            break;
        case 2:
            console.log(`Kết quả của phép trừ: ${subtraction(a, b)}`);
            break;
        case 3:
            console.log(`Kết quả của phép nhân: ${multiplication(a, b)}`);
            break;
        case 4:
            console.log(`Kết quả của phép chia: ${division(a, b)}`);
            break;
        case 5:
            console.log("Cảm ơn bạn đã dùng chương trình !!!!!");
            break;
        default:
            console.log("Không hợp lệ vui lòng chọn lại !!!!");
            break;
    }
}

function sum(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b; 
}

function division(a, b) {
    if (b === 0) {
        return "Khong the chia cho 0";
    }
    return Math.round((a / b) * 100) / 100;
}