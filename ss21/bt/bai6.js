let number = +prompt("Mời bạn nhập vào số bất kỳ")

if(Number.isInteger(number)) {
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            document.write(`${i} `)
        }
    }
} else {
    document.write("Số không hợp lệ")
}