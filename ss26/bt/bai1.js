function filterNumbers() {
    let array = []; 

    for (let i = 0; i < 10; i++) {
        let number = prompt(`Mời bạn nhập số nguyên thứ ${i + 1}:`);
        
        if (!Number.isInteger(Number(number))) {
            console.log("Dữ liệu không hợp lệ");
            return "Dữ liệu không hợp lệ";
        }

        array.push(Number(number)); 
    }
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 10) {
            newArray.push(array[i]);
        }
    }

    if (newArray.length === 0) {
        console.log("Mảng không có phần tử nào");
        return "Mảng không có phần tử nào";
    } else {
        console.log(newArray);
        return newArray;
    }
}

filterNumbers();
