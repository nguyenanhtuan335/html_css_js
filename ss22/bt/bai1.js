let number = 0
let sum = 0

for (let i = 0; i < 5; i++) {
    if (Number.isInteger(number)) {
        number = +prompt("Mời bạn nhập vào số ngẫu nhiên")
        if(number % 2 !== 0) {
            sum = sum + number
        }
    } else {
        alert("Dữ liệu không hợp lệ")
    }
}

alert(sum)