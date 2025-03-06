let number
let even = 0
let odd = 0

for (let i = 0; i < 5; i++) {
    number = +prompt("Mời bạn nhập số ngẫu nhiên")
    if(number % 2 === 0) {
        even++
    } else {
        odd++
    }
}

document.write(` Số lượng số chẵn là ${even} <br>`)
document.write(` Số lượng số lẻ là ${odd}`)