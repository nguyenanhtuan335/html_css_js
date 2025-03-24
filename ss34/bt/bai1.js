function register() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let check = true;

    document.getElementById('emailError').textContent = "";
    document.getElementById('passwordError').textContent = "";
    document.getElementById('confirmPasswordError').textContent = "";

    if (email === "") {
        document.getElementById('emailError').textContent = "Email không được để trống";
        check = false;
    }
    if (password === "") {
        document.getElementById('passwordError').textContent = "Password không được để trống";
        check = false;
    }
    if (confirmPassword === "") {
        document.getElementById('confirmPasswordError').textContent = "Confirm Password không được để trống";
        check = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Mật khẩu không khớp";
        check = false;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let findUser = users.find((item) => item.email === email);
    if (findUser) {
        alert("Email đã tồn tại");
        return;
    }

    if (check) {
        users.push({ email: email, password: password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Đăng ký thành công!");
        window.location.href = "./bai3.html"; 
        document.getElementById("registerForm").reset();
    }
}

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    register();
});