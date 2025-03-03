let month = +prompt("Mời bạn nhập vào tháng")
if (month > 0) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert(`Tháng ${month} có 31 ngày`)
            break
        case 4:
        case 6:
        case 9:
        case 11:
            alert(`Tháng ${month} có 30 ngày`)
            break
    }
} else if (month > 13) {
    alert("Tháng không hợp lệ")
}