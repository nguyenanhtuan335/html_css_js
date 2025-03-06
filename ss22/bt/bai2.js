let input = prompt("Mời bạn nhập một số bất kỳ:");
let inputNumber = Number(input);
let numbers = [2, 5, 7, 4, 1, 8, 6];
let check = -1; 
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === inputNumber) {
        check++; 
        break; 
    }
}
if (check) {
    console.log(" chúc bạn may mắn lần sau");
} else {
    console.log("bingo");
}
