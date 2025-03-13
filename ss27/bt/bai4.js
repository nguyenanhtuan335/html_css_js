let menu = `
    ------------MENU------------
    1. Nhập danh sách số nguyên.
    2. Tính trung bình các số.
    3. Tìm số chẵn lớn nhất.
    4. Tìm số lẻ nhỏ nhất.
    5. Thoát.
    -----------------------------
    Lựa chọn của bạn:
`;
let choice;
let arr = [];
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            danhSach();
            break;
        case 2:
            console.log(tcb());
            break;
        case 3:
            console.log(soChanMax());
            break;
        case 4:
            console.log(soLeMin());
            break;
        case 5:
            console.log("Thoát khỏi chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ !!!!");
            break;
    }
}

function danhSach() {
    let n = +prompt("Bạn muốn nhập bao nhiêu số nguyên vào mảng");
    arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt(`Mời bạn nhập vào số nguyên thứ ${i + 1}`);
    }
}

function tcb() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let tcbSum = sum / arr.length;
    return tcbSum;
}

function soChanMax() {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            if (arr[i] % 2 === 0) {
                max = arr[i];
            }
        }
    }
    return max;
}

function soLeMin() {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            if (arr[i] % 2 !== 0) {
                min = arr[i];
            }
        }
    }
    return min;
}