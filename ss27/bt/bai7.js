let arr = [];
let n = +prompt("Mời bạn nhập vào số lượng phần tử");
for(let i = 0; i < n; i++) {
    arr[i] = +prompt("Mời bạn nhập");
}
function findMissingNumber(arr) {
    const n = arr.length + 1; 
    const expectedSum = (n * (n + 1)) / 2; 
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber());