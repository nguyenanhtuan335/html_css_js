let menu = `
    -------------MENU--------------
    1. Nhập danh sách sinh viên
    2. Hiển thị danh sách sinh viên
    3. Tìm sinh viên theo tên
    4. Xóa sinh viên khỏi danh sách
    5. Thoát
    -------------------------------
    Lựa chọn của bạn:
`;
let choice;
let arr = [];
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let numberSv;
            nhapSv();
            break;
        case 2:
            displayDS();
            break;
        case 3:
            timSV();
            break;
        case 4:
            break;
        case 5:
            console.log("Đang thoát khỏi chương trình !!!!!!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ !!!!");
            break;
    }
}

function nhapSv() {
    numberSv = +prompt("Bạn muốn thêm vào danh sách bao nhiêu sinh viên");
    arr = [];
    for (let i = 0; i < numberSv; i++) {
        arr[i] = prompt(`Mời bạn nhập vào sinh viên thứ ${i + 1}`);
    }
}

function displayDS() {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function timSV() {
    let searchName = prompt("Nhập tên sinh viên bạn muốn tìm");
    let coult = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().includes(searchName.toLowerCase())) {
            console.log(`Sinh viên được tìm theo yêu cầu: ${arr[i]}`);
            coult ++;
            break;
        }
    }
    if (coult === 0) {
        console.log("Sinh viên không tồn tại trong danh sách");
    }
}

function xoaSV() {
    let deleteName = prompt("Nhập tên sinh viên bạn muốn xóa");
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().includes(deleteName.toLowerCase())) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        let deletedStudent = arr.splice(index, 1);
        console.log(`Đã xóa sinh viên: ${deletedStudent[0]}`);
    } else {
        console.log("Sinh viên không tồn tại trong danh sách");
    }
}