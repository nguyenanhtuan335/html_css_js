let user = prompt("Nhập vào các chuỗi");
let arr = userInput ? userInput.split(",").map(item => item.trim()) : [];
function filterArray(array) {
    if (!Array.isArray(array)) {
        console.log("Dữ liệu không hợp lệ");
        return "Dữ liệu không hợp lệ";
    }
    if (array.length === 0) {
        console.log("Mảng không có phần tử nào");
        return "Mảng không có phần tử nào";
    }
    let newArray = array.filter(item => item.length > 5);
console.log(newArray);
}
filterArray(arr);
