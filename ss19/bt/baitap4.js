let number = +prompt("Mời bạn nhập vào một số bất kỳ")

if(number % 3 === 0 && number % 5 === 0) {
    alert(`Số ${number} chia hết cho cả 3 và 5`)
} 
if(number % 3 !== 0 && number % 5 !== 0) {
    alert(`Số ${number} không cho hết cho cả 3 và 5`)
}