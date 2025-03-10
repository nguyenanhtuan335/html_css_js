let numbers = [];
let choice;

do {
    choice = +prompt(
        "Chọn chức năng:\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất và nhỏ nhất\n" +
        "4. Tính tổng các phần tử\n" +
        "5. Tìm số lần xuất hiện của một phần tử\n" +
        "6. Sắp xếp mảng tăng dần\n" +
        "7. Thoát"
    );

    if (choice === 1) {
        let n = +prompt("Nhập số lượng phần tử của mảng:");
        numbers = [];
        for (let i = 0; i < n; i++) {
            numbers.push(+prompt(`Nhập phần tử thứ ${i + 1}:`));
        }
        console.log("Mảng đã nhập:", numbers);
    } 
    
    else if (choice === 2) {
        if (numbers.length === 0) {
            console.log("Mảng rỗng, vui lòng nhập mảng trước.");
        } else {
            console.log("Mảng hiện tại:", numbers);
        }
    } 
    
    else if (choice === 3) {
        if (numbers.length === 0) {
            console.log("Mảng rỗng, vui lòng nhập mảng trước.");
        } else {
            let min = numbers[0];
            let max = numbers[0];
            for (let i = 1; i < numbers.length; i++) {
                if (numbers[i] < min) min = numbers[i];
                if (numbers[i] > max) max = numbers[i];
            }
            console.log(`Phần tử nhỏ nhất: ${min}, Phần tử lớn nhất: ${max}`);
        }
    } 
    
    else if (choice === 4) {
        if (numbers.length === 0) {
            console.log("Mảng rỗng, vui lòng nhập mảng trước.");
        } else {
            let sum = 0;
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            console.log(`Tổng các phần tử trong mảng: ${sum}`);
        }
    } 
    
    else if (choice === 5) {
        if (numbers.length === 0) {
            console.log("Mảng rỗng, vui lòng nhập mảng trước.");
        } else {
            let value = +prompt("Nhập số cần tìm số lần xuất hiện:");
            let count = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] === value) count++;
            }
            console.log(`Số ${value} xuất hiện ${count} lần trong mảng.`);
        }
    } 
    
    else if (choice === 6) {
        if (numbers.length === 0) {
            console.log("Mảng rỗng, vui lòng nhập mảng trước.");
        } else {
            for (let i = 0; i < numbers.length - 1; i++) {
                for (let j = i + 1; j < numbers.length; j++) {
                    if (numbers[i] > numbers[j]) {
                        let temp = numbers[i];
                        numbers[i] = numbers[j];
                        numbers[j] = temp;
                    }
                }
            }
            console.log("Mảng sau khi sắp xếp tăng dần:", numbers);
        }
    } 
    
    else if (choice === 7) {
        console.log("Thoát chương trình.");
    } 
    
    else {
        console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }

} while (choice !== 7);
