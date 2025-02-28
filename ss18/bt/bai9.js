
let hour = +prompt("Nhập giờ (0-23):");
let minute = +prompt("Nhập phút (0-59):");
let second = +prompt("Nhập giây (0-59):");
let period;
let hour12; 

if (
    isNaN(hour) || isNaN(minute) || isNaN(second) ||
    hour < 0 || hour > 23 || minute < 0 || minute > 59 || second < 0 || second > 59
) {
    document.write("Giá trị nhập không hợp lệ!");
} else {
    period = hour >= 12 ? "PM" : "AM";
    hour12 = hour % 12;
    if (hour12 === 0) {
        hour12 = 12;
    }

    let result = 
        (hour12 < 10 ? "0" : "") + hour12 + ":" +
        (minute < 10 ? "0" : "") + minute + ":" +
        (second < 10 ? "0" : "") + second + " " + period;

    document.write("Thời gian chuyển đổi: " + result);
}
