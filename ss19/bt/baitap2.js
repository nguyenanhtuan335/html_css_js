let character = prompt("Mời bạn nhập vào một kí tự")

if(character.length > 1) {
    alert("Không phải là chữ cái")
} else if(character >= "a" && character <= "z" || character >= "A" && character <= "Z") {
    alert(`Ký tự ${character} là chữ cái`)
} else {
    alert("Không phải chữ cái")
}