let arr = [0, 1, false, 2, "", 3, null, 4, undefined, 5, NaN, "hello"];
console.log("Mảng ban đầu:", arr);

let filteredArr = [];
for(let value of arr) {
    if(value) {
        filteredArr.push(value);
    }
}

console.log("Mảng sau khi loại bỏ falsy:", filteredArr);