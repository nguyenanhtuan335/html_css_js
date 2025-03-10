let numbers = []; 
let choice;
do {
    choice = +prompt(
        "Chọn chức năng:\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n" +
        "4. Tính tổng và trung bình cộng của các số dương trong mảng\n" +
        "5. Đảo ngược mảng\n" +
        "6. Kiểm tra mảng có đối xứng không\n" +
        "7. Thoát"
    );

    if (choice === 1) {
        let n = +prompt("Nhập số lượng phần tử của mảng:");
        numbers = [];
        for (let i = 0; i < n; i++) {
            numbers.push(+prompt(`Nhập phần tử thứ ${i + 1}:`));
        }
        console.log(numbers);
    } else if (choice === 2) {
        if (numbers.length === 0) {
            console.log("Mảng rỗng");
        } else {
            console.log(numbers);
        }
    } else if (choice === 3) {
        if (numbers.length === 0) {
            console.log("Mảng rỗng");
        } else {
            let max = numbers[0], index = 0;
            for (let i = 1; i < numbers.length; i++) {
                if (numbers[i] > max) {
                    max = numbers[i];
                    index = i;
                }
            }
            console.log(max, index);
        }
    } else if (choice === 4) {
        if (numbers.length === 0) {
            console.log("Mảng rỗng");
        } else {
            let sum = 0, count = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] > 0) {
                    sum += numbers[i];
                    count++;
                }
            }
            if (count === 0) {
                console.log("Không có số dương");
            } else {
                console.log(sum, (sum / count).toFixed(2));
            }
        }
    } else if (choice === 5) {
        if (numbers.length === 0) {
            console.log("Mảng rỗng");
        } else {
            let reversed = [];
            for (let i = numbers.length - 1; i >= 0; i--) {
                reversed.push(numbers[i]);
            }
            numbers = reversed;
            console.log(numbers);
        }
    } else if (choice === 6) {
        if (numbers.length === 0) {
            console.log("Mảng rỗng");
        } else {
            let isSymmetric = true;
            for (let i = 0; i < Math.floor(numbers.length / 2); i++) {
                if (numbers[i] !== numbers[numbers.length - 1 - i]) {
                    isSymmetric = false;
                    break;
                }
            }
            console.log(isSymmetric ? "Mảng đối xứng" : "Mảng không đối xứng");
        }
    } else if (choice === 7) {
        console.log("Thoát");
    } else {
        console.log("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);
