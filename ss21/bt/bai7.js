let initialDeposit = +prompt("Nhập số tiền gửi ban đầu (VNĐ):")
let monthlyRate = +prompt("Nhập lãi suất tháng (%):") / 100
let months = +prompt("Nhập số tháng gửi:")

if (isNaN(initialDeposit) || isNaN(monthlyRate) || isNaN(months) || 
    initialDeposit <= 0 || monthlyRate < 0 || months <= 0) {
    console.log("Vui lòng nhập số hợp lệ và lớn hơn 0!")
} else {
    let totalAmount = initialDeposit
    for (let i = 1; i <= months; i++) {
        totalAmount = totalAmount * (1 + monthlyRate)
    }
    let interest = totalAmount - initialDeposit
    console.log(`Số tiền gửi ban đầu: ${initialDeposit.toLocaleString()} VNĐ`)
    console.log(`Lãi suất tháng: ${(monthlyRate * 100)}%`)
    console.log(`Số tháng gửi: ${months}`)
    console.log(`Tiền lãi: ${interest.toLocaleString('vi-VN')} VNĐ`)
    console.log(`Tổng tiền nhận được: ${totalAmount.toLocaleString('vi-VN')} VNĐ`)
}