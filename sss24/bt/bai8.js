let str = "";
let choice;

do {
    choice = +prompt(
        "Chọn chức năng:\n" +
        "1. Nhập chuỗi ký tự\n" +
        "2. Hiển thị chuỗi ký tự\n" +
        "3. Tìm từ con trùng lặp và số lần xuất hiện\n" +
        "4. Tìm từ có độ dài lớn nhất và nhỏ nhất\n" +
        "5. Tìm ký tự xuất hiện nhiều nhất\n" +
        "6. Chuyển đổi chuỗi sang snake_case\n" +
        "7. Thoát"
    );

    if (choice === 1) {
        str = prompt("Nhập chuỗi:");
    } else if (choice === 2) {
        console.log("Chuỗi hiện tại:", str || "Chưa có chuỗi");
    } else if (choice === 3) {
        let words = str.toLowerCase().match(/\b\w+\b/g);
        let wordCount = {};
        words.forEach(word => wordCount[word] = (wordCount[word] || 0) + 1);
        console.log("Từ con trùng lặp:", wordCount);
    } else if (choice === 4) {
        let words = str.match(/\b\w+\b/g);
        if (words) {
            let longest = words.reduce((a, b) => (a.length > b.length ? a : b));
            let shortest = words.reduce((a, b) => (a.length < b.length ? a : b));
            console.log("Từ dài nhất:", longest);
            console.log("Từ ngắn nhất:", shortest);
        } else {
            console.log("Không có từ nào trong chuỗi.");
        }
    } else if (choice === 5) {
        let charCount = {};
        for (let char of str.replace(/\s+/g, '')) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        let maxCount = Math.max(...Object.values(charCount));
        let maxChars = Object.keys(charCount).filter(char => charCount[char] === maxCount);
        console.log("Ký tự xuất hiện nhiều nhất:", maxChars.join(", "), "với", maxCount, "lần");
    } else if (choice === 6) {
        let snakeCase = str.toLowerCase().trim().replace(/\s+/g, "_");
        console.log("Chuỗi dạng snake_case:", snakeCase);
    } else if (choice === 7) {
        console.log("Thoát chương trình");
    } else {
        console.log("Lựa chọn không hợp lệ");
    }
} while (choice !== 7);
