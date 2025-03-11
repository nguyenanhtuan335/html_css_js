let input = prompt("Nhập một chuỗi ký tự: ");
function capitalizeWords(str) {
    if (str === null || str === "") {
        return "Chuỗi không hợp lệ!";
    }
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) { 
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }
    return words.join(" ");
}
let result = capitalizeWords(input);
console.log(result);