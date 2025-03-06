let arr = [6, 2, 8, 4, 10, 1, 7, 3, 9, 5];
console.log("Mảng ban đầu:", arr);
for (let i = 0; i < 9; i++) {  
    for (let j = 0; j < 9 - i; j++) { 
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log("Mảng sau khi sắp xếp:", arr);