let n = +prompt("Mời bạn nhập một số:");
let x = Math.sqrt(n);
let result = (Number.isInteger(x))
let text = Number.isInteger(x) ? `${n} là số chính phương`:`${n} không phải số chính phương`
document.write(text);
