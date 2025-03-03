let string = prompt("Mời bạn nhập")

if(string.length < 0) {
    alert("Vui lòng bấm F5")
} else {
    if(string.includes(" ")) {
        alert("chuỗi chứa dấu cách")
    } else {
        alert("Chuỗi không chứa dấu cách")
    }
}