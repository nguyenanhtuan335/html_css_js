let arr = []; 

while (true) {
    console.log("\n================== MENU ===================");
    console.log("1. Nhập số phần tử cần nhập và giá trị các phần tử");
    console.log("2. In ra giá trị các phần tử đang quản lý");
    console.log("3. In ra giá trị các phần tử chẵn và tính tổng");
    console.log("4. In ra giá trị lớn nhất và nhỏ nhất trong mảng");
    console.log("5. In ra các phần tử là số nguyên tố trong mảng và tính tổng");
    console.log("6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó");
    console.log("7. Thêm một phần tử vào vị trí chỉ định");
    console.log("8. Thoát");
    console.log("============================================");
    let choice = +prompt("Lựa chọn của bạn: ");
    switch (choice) {
        case 1:
            let n = +prompt("Nhập số phần tử của mảng:");
            arr = [];
            for (let i = 0; i < n; i++) {
                arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}:`);
            }
            console.log("Đã nhập mảng thành công!");
            break;
        case 2:
            if (arr.length === 0) {
                console.log("Mảng rỗng!");
            } else {
                console.log("Các phần tử trong mảng:", arr);
            }
            break;

        case 3:
            if (arr.length === 0) {
                console.log("Mảng rỗng!");
            } else {
                let evenNumbers = [];
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 === 0) {
                        evenNumbers.push(arr[i]);
                        sum += arr[i];
                    }
                }
                console.log("Các số chẵn:", evenNumbers);
                console.log("Tổng các số chẵn:", sum);
            }
            break;

        case 4:
            if (arr.length === 0) {
                console.log("Mảng rỗng!");
            } else {
                let max = arr[0];
                let min = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) max = arr[i];
                    if (arr[i] < min) min = arr[i];
                }
                console.log("Giá trị lớn nhất:", max);
                console.log("Giá trị nhỏ nhất:", min);
            }
            break;

        case 5:
            if (arr.length === 0) {
                console.log("Mảng rỗng!");
            } else {
                let primes = [];
                let sumPrimes = 0;
                for (let i = 0; i < arr.length; i++) {
                    let isPrime = true;
                    if (arr[i] < 2) isPrime = false;
                    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                        if (arr[i] % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                    if (isPrime) {
                        primes.push(arr[i]);
                        sumPrimes += arr[i];
                    }
                }
                console.log("Các số nguyên tố:", primes);
                console.log("Tổng các số nguyên tố:", sumPrimes);
            }
            break;

        case 6: 
            if (arr.length === 0) {
                console.log("Mảng rỗng!");
            } else {
                let num = +prompt("Nhập số cần tìm:");
                let count = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === num) count++;
                }
                console.log(`Số ${num} xuất hiện ${count} lần trong mảng`);
            }
            break;

        case 7: 
            let value = +prompt("Nhập giá trị cần thêm:");
            let position = +prompt("Nhập vị trí cần thêm (0 đến " + arr.length + "):");
            if (position < 0 || position > arr.length) {
                console.log("Vị trí không hợp lệ!");
            } else {
                for (let i = arr.length; i > position; i--) {
                    arr[i] = arr[i - 1];
                }
                arr[position] = value;
                console.log("Đã thêm thành công! Mảng mới:", arr);
            }
            break;

        case 8: 
            console.log("Tạm biệt!");
            process.exit(); 
            break;

        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn từ 1-8");
    }
}