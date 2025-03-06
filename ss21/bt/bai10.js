let n = +prompt("Mời bạn nhập số lượng số nguyên tố cần hiển thị:");

if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
    alert("Dữ liệu không hợp lệ. Vui lòng nhập một số nguyên không âm.")
} else {
    let primes = []
    let num = 2
    while (primes.length < n) {
        let isPrime = true
        if (num < 2) {
            isPrime = false;
        } else {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            primes.push(num);
        }
        num++;
    }

    if (n === 0) {
        alert("Danh sách rỗng vì n = 0");
    } else {
        alert("Danh sách " + n + " số nguyên tố đầu tiên: " + primes.join(" "));
    }
}