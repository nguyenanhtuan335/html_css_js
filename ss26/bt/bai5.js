
let nguoiDung = prompt("Nhập vào 10 số nguyên");
let arr = userInput ? userInput.split(",").map(item => Number(item.trim())) : [];

function findMaxNumber(array) {
    if (!Array.isArray(array) || array.some(item => isNaN(item) || !Number.isInteger(item))) {
        console.log("Dữ liệu không hợp lệ");
        return "Dữ liệu không hợp lệ";
    }

    if (array.length === 0) {
        console.log("Mảng không có phần tử nào");
        return "Mảng không có phần tử nào";
    }

    let maxNumber = Math.max(...array);
    let position = array.indexOf(maxNumber);

    console.log(`max = ${maxNumber}`);
    console.log(`position: ${position}`);
}
findMaxNumber(arr);
