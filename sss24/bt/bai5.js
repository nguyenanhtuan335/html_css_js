let number = [];
let choice;

do {
    choice = +prompt(
        "Chọn chức năng:\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tính tổng đường chéo chính\n" +
        "5. Tính tổng đường chéo phụ\n" +
        "6. Tính trung bình cộng hàng hoặc cột\n" +
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
        if (number.length === 0 || number.length !== number[0].length) {
            console.log("Không thể tính đường chéo chính");
        } else {
            let sum = 0;
            for (let i = 0; i < number.length; i++) {
                sum += number[i][i];
            }
            console.log(sum);
        }
    } else if (choice === 5) {
        if (number.length === 0 || number.length !== number[0].length) {
            console.log("Không thể tính đường chéo phụ");
        } else {
            let sum = 0;
            for (let i = 0; i < number.length; i++) {
                sum += number[i][number.length - 1 - i];
            }
            console.log(sum);
        }
    } else if (choice === 6) {
        if (number.length === 0) {
            console.log("Mảng rỗng");
        } else {
            let type = prompt("Bạn muốn tính trung bình cộng của hàng (h) hay cột (c)?");
            if (type === "h") {
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
            } else if (type === "c") {
                let colNum = +prompt("Nhập số cột cần tính trung bình:");
                if (colNum < 0 || colNum >= number[0].length) {
                    console.log("Số cột không hợp lệ");
                } else {
                    let sum = 0, count = 0;
                    for (let i = 0; i < number.length; i++) {
                        sum += number[i][colNum];
                        count++;
                    }
                    console.log(sum / count);
                }
            } else {
                console.log("Lựa chọn không hợp lệ");
            }
        }
    } else if (choice === 7) {
        console.log("Thoát");
    } else {
        console.log("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);
