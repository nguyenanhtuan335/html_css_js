let str = "";
let choice;

do {
    choice = +prompt(
        "Chọn chức năng:\n" +
        "1. Nhập chuỗi\n" +
        "2. Hiển thị chuỗi\n" +
        "3. Tính độ dài của chuỗi\n" +
        "4. Đếm số lần xuất hiện của một ký tự\n" +
        "5. Kiểm tra chuỗi có đối xứng không\n" +
        "6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ\n" +
        "7. Thoát"
    );

    if (choice === 1) {
        str = prompt("Nhập chuỗi:");
    } else if (choice === 2) {
        if (str === "") {
            console.log("Chuỗi rỗng");
        } else {
            console.log("Chuỗi hiện tại:", str);
        }
    } else if (choice === 3) {
        console.log("Độ dài của chuỗi:", str.length);
    } else if (choice === 4) {
        if (str === "") {
            console.log("Chuỗi rỗng");
        } else {
            let charToFind = prompt("Nhập ký tự cần đếm:");
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] === charToFind) {
                    count++;
                }
            }
            console.log(`Ký tự '${charToFind}' xuất hiện ${count} lần`);
        }
    } else if (choice === 5) {
        let reversedStr = str.split("").reverse().join("");
        if (str === reversedStr) {
            console.log("Chuỗi là chuỗi đối xứng");
        } else {
            console.log("Chuỗi không phải là chuỗi đối xứng");
        }
    } else if (choice === 6) {
        let words = str.split(" ");
        for (let i = 0; i < words.length; i++) {
            if (words[i].length > 0) {
                words[i] = words[i][0].toUpperCase() + words[i].slice(1);
            }
        }
        str = words.join(" ");
        console.log("Chuỗi sau khi chuyển đổi:", str);
    } else if (choice === 7) {
        console.log("Thoát chương trình");
    } else {
        console.log("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);
