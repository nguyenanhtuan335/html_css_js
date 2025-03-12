let userInput = prompt("Nhập vào 10 số nguyên, cách nhau bởi dấu phẩy:");
let arr = userInput ? userInput.split(",").map(item => Number(item.trim())) : [];

function Numbers(array) {
    if (!Array.isArray(array)) {
        console.log("Dữ liệu không hợp lệ");
        return "Dữ liệu không hợp lệ";
    }

    if (array.length === 0) {
        console.log("Mảng không có phần tử nào");
        return "Mảng không có phần tử nào";
    }

    let newArray = array.map(num => num ** 2).filter(num => num % 2 === 0);

    return newArray.length > 0 ? console.log(newArray) : console.log("Dữ liệu không hợp lệ");
}

Numbers(arr);
