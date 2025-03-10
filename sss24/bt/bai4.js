let number = [];
let choice;

do {
    choice = +prompt(
        "Chọn chức năng:\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n" +
        "5. Tính trung bình cộng các phần tử của một hàng cụ thể\n" +
        "6. Đảo ngược các hàng trong mảng\n" +
        "7. Thoát"
    );

    if (choice === 1) {
        let rows = +prompt("Nhập số hàng:");
        let cols = +prompt("Nhập số cột:");
        number = [];
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                row.push(+prompt(`Nhập phần tử [${i}][${j}]:`));
            }
            number.push(row);
        }
        console.log(number);
    } else if (choice === 2) {
        if (number.length === 0) {
            console.log("Mảng rỗng");
        } else {
            for (let i = 0; i < number.length; i++) {
                console.log(number[i].join(" "));
            }
        }
    } else if (choice === 3) {
        if (number.length === 0) {
            console.log("Mảng rỗng");
        } else {
            let sum = 0;
            for (let i = 0; i < number.length; i++) {
                for (let j = 0; j < number[i].length; j++) {
                    sum += number[i][j];
                }
            }
            console.log(sum);
        }
    } else if (choice === 4) {
        if (number.length === 0) {
            console.log("Mảng rỗng");
        } else {
            let max = number[0][0], rowIndex = 0, colIndex = 0;
            for (let i = 0; i < number.length; i++) {
                for (let j = 0; j < number[i].length; j++) {
                    if (number[i][j] > max) {
                        max = number[i][j];
                        rowIndex = i;
                        colIndex = j;
                    }
                }
            }
            console.log(max, `[${rowIndex}][${colIndex}]`);
        }
    } else if (choice === 5) {
        if (number.length === 0) {
            console.log("Mảng rỗng");
        } else {
            let rowNum = +prompt("Nhập số hàng cần tính trung bình:");
            if (rowNum < 0 || rowNum >= number.length) {
                console.log("Số hàng không hợp lệ");
            } else {
                let sum = 0;
                for (let j = 0; j < number[rowNum].length; j++) {
                    sum += number[rowNum][j];
                }
                console.log(sum / number[rowNum].length);
            }
        }
    } else if (choice === 6) {
        if (number.length === 0) {
            console.log("Mảng rỗng");
        } else {
            for (let i = 0; i < number.length; i++) {
                number[i].reverse();
            }
            console.log(number);
        }
    } else if (choice === 7) {
        console.log("Thoát");
    } else {
        console.log("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);
