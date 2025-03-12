
let user = prompt("Nhập vào các chuỗi ngày (YYYY-MM-DD)");
let arr = userInput ? userInput.split(",").map(item => item.trim()) : [];

function formatDates(array) {
    if (!Array.isArray(array)) {
        console.log("Dữ liệu không hợp lệ");
        return "Dữ liệu không hợp lệ";
    }

    if (array.length === 0) {
        console.log("Mảng không có phần tử nào");
        return "Mảng không có phần tử nào";
    }

    let formattedDates = array.map(date => {
        let parts = date.split("-");
        return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : null;
    }).filter(date => date !== null);

    return formattedDates.length > 0 ? console.log(formattedDates) : console.log("Dữ liệu không hợp lệ");
}

formatDates(arr);
