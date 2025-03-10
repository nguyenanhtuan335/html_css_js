let numbers = [];

do {
    let choice = +prompt(
        "Chọn chức năng:\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm các phần tử chẵn và lẻ\n" +
        "4. Tính trung bình cộng của mảng\n" +
        "5. Xóa phần tử tại vị trí chỉ định\n" +
        "6. Tìm phần tử lớn thứ hai trong mảng\n" +
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
            let chan = [], le = [];
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] % 2 === 0) {
                    chan.push(numbers[i]);
                } else {
                    le.push(numbers[i]);
                }
            }
            console.log(`Số chẵn: ${chan.length > 0 ? chan.join(", ") : "Không có số chẵn"}`);
            console.log(`Số lẻ: ${le.length > 0 ? le.join(", ") : "Không có số lẻ"}`);
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
            let avg = sum / numbers.length;
            console.log(`Trung bình cộng của mảng: ${avg.toFixed(2)}`);
        }
    } 
    
    else if (choice === 5) {
        if (numbers.length === 0) {
            console.log("Mảng rỗng, vui lòng nhập mảng trước.");
        } else {
            let index = +prompt("Nhập vị trí muốn xóa:");
            if (index >= 0 && index < numbers.length) {
                numbers.splice(index, 1);
                console.log("Mảng sau khi xóa phần tử:", numbers);
            } else {
                console.log("Vị trí không hợp lệ.");
            }
        }
    } 
    
    else if (choice === 6) {
        if (numbers.length < 2) {
            console.log("Không có đủ phần tử để tìm số lớn thứ hai.");
        } else {
            let max = Math.max(...numbers);
            let secondMax = -Infinity;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] > secondMax && numbers[i] < max) {
                    secondMax = numbers[i];
                }
            }
            if (secondMax === -Infinity) {
                console.log("Không có số lớn thứ hai.");
            } else {
                console.log(`Số lớn thứ hai trong mảng là: ${secondMax}`);
            }
        }
    } 
    
    else if (choice === 7) {
        console.log("Thoát chương trình.");
        break;
    } 
    
    else {
        console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
    }

} while (true);
