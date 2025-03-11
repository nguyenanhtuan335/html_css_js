let password = prompt("Nhập mật khẩu: ");
console.log(isStrongPassword(password));

function isStrongPassword(password) {

    if (password.length < 8){
        return false;
        
    } else if (!/[A-Z]/.test(password)) {
        return false;

    } else if (!/[a-z]/.test(password)) {
        return false;
    } else if (!/[0-9]/.test(password)){
        return false;
    }
    return true;
}

