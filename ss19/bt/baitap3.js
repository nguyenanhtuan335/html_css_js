let choice = +prompt("Mời bạn chọn phương thức đổi tiền tệ 1.VND -> USD || 2.USD -> VND")
let card
let card2
let zin_card
switch (choice) { 
    case 1:
        card = +prompt("VND -> USD: ")
        zin_card = card / 23000
        alert(`VND -> USD: ${zin_card}`)
        break
    case 2:
        card2 = +prompt("USD -> VND")
        zin_card = card2 * 23000
        alert(`USD -> VND: ${zin_card}`)
        break
    default :
        alert("Vui lòn chọn lại phương thức chuyển đổi tiền tệ")
}