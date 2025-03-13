let menu = `
    -------------MENU--------------
    1.Tính diện tích hình tròn.
    2.Tính chu vi hình tròn.
    3.Tính diện tích hình chữ nhật.
    4.Tính chu vi hình chữ nhật.
    5.Thoát.
    -------------------------------
    Lựa chọn của bạn:
`
let choice;
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            console.log(sHinhtron());
            break;
        case 2:
            console.log(cvHinhTron());
            break;
        case 3:
            console.log(cvHinhCN());
            break;
        case 4:
            console.log(sHinhCN());
            break;
        case 5:
            console.log("Thoát khỏi chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ !!!!");
            break;

    }
}

function sHinhtron(r) {
    r = +prompt("Mời bạn nhập vào bán kính");
    return (Math.PI * r * r).toFixed(2);
}

function cvHinhTron(r) {
    r = +prompt("Mời bạn nhập vào bán kính hình tròn");
    return (2 * Math.PI * r).toFixed(2);
}

function cvHinhCN(dai, rong) {
    dai = +prompt("chiều dài hình chữ nhật");
    rong = +prompt("Chiều rộng hình chữ nhật");
    return ((dai + rong) * 2).toFixed(2);
}

function sHinhCN(dai, rong) {
    dai = +prompt("chiều dài hình chữ nhật");
    rong = +prompt("Chiều rộng hình chữ nhật");
    return dai * rong;
}