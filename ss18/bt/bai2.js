let math = +prompt("Mời bạn nhập điểm môn Toán:");
let literature = +prompt("Mời bạn nhập điểm Văn:");
let english = +prompt("Mời bạn nhập điểm Anh:");

let result = (math + literature + english) / 3;

if (result >= 8.0) {
    document.write("Học sinh giỏi");
} else if (result >= 6.5 && result <= 7.9) {
    document.write("Học sinh khá");
} else if (result > 5.0 && result < 6.5) {
    document.write("Học sinh trung bình");
} else if ( result < 5.0) {
    document.write("Học sinh yếu");
}
