let str = prompt("Mời bạn nhập vào một chuỗi bất kỳ:");
let search = prompt("Mời bạn nhập vào ký tự cần tìm kiếm:");
let check = -1;

for (let i = 0; i < str.length; i++) {
    if (str[i] === search) {
        check++;
        break; 
    }
}
if (check==-1) {
    document.write(" không tại ký tự cần tìm kiếm!");
} else {
    document.write("  tồn tại ký tự cần tìm kiếm!");
}
