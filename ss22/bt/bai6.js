const arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
console.log("Mảng có sẵn:", arr);
let number = parseInt(prompt("Nhập số nguyên cần đếm:"));
let count = 0;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] === number) {
        count++;
    }
}
console.log(`Số ${number} xuất hiện ${count} lần trong mảng.`);
