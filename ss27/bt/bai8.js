function PossibleNumber(Array) {
    if (!/^\d+$/.test(Array)) {
        console.log("Dữ liệu không hợp lệ");
        return "Dữ liệu không hợp lệ";
    }

    let newNumber = Array.split("").sort((a, b) => b - a).join("");
    console.log(newNumber);
    return newNumber;
}

// Nhập từ người dùng
let newArray = prompt("Nhập vào một số nguyên:");
PossibleNumber( newArray);
