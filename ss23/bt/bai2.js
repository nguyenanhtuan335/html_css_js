
let arr = [];
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
    arr.push(num);
}

if (arr.length === 0) {
    document.write("Không có số lớn nhất");
} else {
    let maxNumber = arr[0];
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
            maxIndex = i;
        }
    }
    document.write("Số lớn nhất: " + maxNumber +"<br" );
    document.write("Vị trí: " + maxIndex +"<br" );
}
