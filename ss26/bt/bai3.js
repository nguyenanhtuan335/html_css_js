let user = prompt("Nhập vào danh sách email");
let arr = userInput ? userInput.split(",").map(item => item.trim()) : [];

function filterEmails(array) {
    if (!Array.isArray(array)) {
        console.log("Dữ liệu không hợp lệ");
        return "Dữ liệu không hợp lệ";
    }

    if (array.length === 0) {
        console.log("Mảng không có phần tử nào");
        return "Mảng không có phần tử nào";
    }

    let newEmails = array.filter(email => email.includes("@") && !email.includes(" "));

    return newEmails.length > 0 ? console.log(newEmails) : console.log(" dữ liệu không hợp lệ ");
}

filterEmails(arr);
