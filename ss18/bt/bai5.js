let number = +prompt(" mời bạn nhập số năm kinh nghiệm");
if (number < 1) {
    document.write(" mới vào nghề ");
} else if (number >=1 && number <=3) {
    document.write(" nhân vien có kinh nghiệm");
} else if (number >=4 && number <=6) {
    document.write(" chuyên viên ");
} else if (number > 6) {
    document.write(" quản lý ");
}