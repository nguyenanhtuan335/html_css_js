let num = +prompt("Mời bạn nhập số bất kỳ");

if (num < 2 || isNaN(num) || !Number.isInteger(num)) {
    alert("Không phải số nguyên tố");
} else {
    let check = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            check = false;
            break;
        }
    }
    if (check) {
        alert(`${num} là số nguyên tố`);
    } else {
        alert(`${num} không phải số nguyên tố`);
    }
}