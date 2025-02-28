
let myName = prompt("Mời bạn nhập tên:");

if (myName === "ADMIN") {
    let password = prompt("Mời bạn nhập mật khẩu:");
    
    if (password === "TheMaster") {
        document.write("Welcome.");
    } else if (password === "" ) {
        document.write("Cancelled.");
    } else {
        document.write("Wrong password.");
    }
} else if (myName === "" ) {
    document.write("Cancelled.");
} else {
    document.write("I don’t know you.");
}
