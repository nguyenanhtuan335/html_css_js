alert("ax^2 + bx + c = 0")
let num1 = +prompt("Nhập a")
let num2 = +prompt("Nhập b")
let num3 = +prompt("Nhập c")

if(num1 === 0) {
    let experiment = -num3/num2
    alert("Nghiệm của phương trình bậc nhất là: " + experiment.toFixed(2))
} else if(num1 != 0) {
    let delta = num2**2 -4*num1*num3
    if(delta > 0) {
        let x1 = ((-num2 + Math.sqrt(delta)) / 2*num1).toFixed(2)
        let x2 = ((-num2 - Math.sqrt(delta)) / 2*num1).toFixed(2)
        alert(` Phương trình có 2 nghiệm phân biệt x1 = ${x1}; x2 = ${x2}`)
    } else if(delta === 0) {
        let double_solution = (-num2 / 2*num1).toFixed(2)
        alert(`x1 = x2 = ${double_solution}`)
    } else {
        alert("Phương trình vô nghiệm")
    }
}