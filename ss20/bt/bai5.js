let a = +prompt("Mời bạn nhập số a:");
let b = +prompt("Mời bạn nhập số b:");
if (isNaN(a) || isNaN(b) || !Number.isInteger(Number(a)) || !Number.isInteger(Number(b))) {
    document.write(" Không hợp lệ");
} else {
    a = Number(a);
    b = Number(b);
    let result = 1;

    if (b >= 0) {
        for (let i = 0; i < b; i++) {
            result *= a;
        }
    } else {
        for (let i = 0; i < -b; i++) {
            result *= a;
        }
        result = 1 / result; 
    }

    document.write(` Kết quả: ${a} ^ ${b} = ${result}`);
}
