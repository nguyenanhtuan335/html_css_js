let arr = [];
let number;

do {
    number = +prompt("Bạn muốn nhập bao nhiêu phần tử vào mảng (số dương):");
} while (isNaN(number) || number <= 0);

for (let i = 0; i < number; i++) {
    let input;
    do {
        input = +prompt(`Mời bạn nhập vào phần tử thứ ${i + 1}`);
    } while (isNaN(input));
    arr[i] = input;
}
function isArithmeticSequence(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) {
        return false;
    }
    
    let d = arr[1] - arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== d) {
            return false;
        }
    }
    return true;
}
let result = isArithmeticSequence(arr);
alert(`Mảng ${arr.join(", ")} ${result ? "là" : "không phải là"} dãy số cộng`);