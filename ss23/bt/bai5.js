let arr = [];
let n = +prompt("Bạn muốn nhập vào bao nhiêu phần tử");

if (n < 0) {
    console.log("Số lượng phần tử không được âm");
} else if (n === 0) {
    console.log("Mảng không tồn tại phần tử");
} else if (n > 0) {
    for (let i = 0; i < n; i++) {
        arr[i] = prompt(`Mời bạn nhập vào phần tử thứ ${i + 1}`);
    }
    let value = [];
    let check = 0;
    for (let i = 0; i < n; i++) {
        if (!isNaN(arr[i])) {
            check++;
        }
    }

    if (check === 0) {
        console.log("Không có phần tử nào là ký tự số");
    } else {
        console.log(check);
    }
}