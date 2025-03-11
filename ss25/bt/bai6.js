let input = prompt("Nhập một chuỗi ký tự để kiểm tra: ");
function isPalindrome(str) {
    if (str === null || str === "") {
        return false;
    }
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
if (isPalindrome(input)) {
    console.log(`"${input}" là chuỗi đối xứng`);
} else {
    console.log(`"${input}" không phải là chuỗi đối xứng`);
}