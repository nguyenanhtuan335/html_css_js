let day1 = prompt(" mởi bạn nhập ngày tháng năm thứ nhất theo định dạng  YYYY-MM-DD ");
let day2 = prompt(" mởi bạn nhập ngày tháng năm thứ hai  theo định dạng  YYYY-MM-DD ");
let result1 =new Date(day1); 
let result2 =new Date(day2); 
let totalDay = Math.abs(result1 -result2 ) / (24*60*60*1000)
document.write (" độ chênh lệch ngày là ",total);