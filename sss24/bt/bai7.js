let str = "";
let choice;

do {
    choice = +prompt(
        "Chọn chức năng:\n" +
        "1. Nhập chuỗi\n" +
        "2. Hiển thị chuỗi\n" +
        "3. Loại bỏ khoảng trắng ở đầu và cuối chuỗi\n" +
        "4. Đảo ngược chuỗi ký tự\n" +
        "5. Đếm số lượng từ trong chuỗi\n" +
        "6. Tìm kiếm và thay thế ký tự\n" +
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
        str = str.trim();
        console.log("Chuỗi sau khi loại bỏ khoảng trắng:", str);
    } else if (choice === 4) {
        let reversedStr = str.split("").reverse().join("");
        console.log("Chuỗi đảo ngược:", reversedStr);
    } else if (choice === 5) {
        let words = str.trim().split(/\s+/);
        console.log("Số lượng từ trong chuỗi:", words.length);
    } else if (choice === 6) {
        let charToFind = prompt("Nhập ký tự cần tìm:");
        if (str.includes(charToFind)) {
            let charToReplace = prompt(`Nhập ký tự thay thế cho '${charToFind}':`);
            str = str.replaceAll(charToFind, charToReplace);
            console.log("Chuỗi sau khi thay thế:", str);
        } else {
            console.log("Không tìm thấy ký tự trong chuỗi.");
        }
    } else if (choice === 7) {
        console.log("Thoát chương trình");
    } else {
        console.log("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);
