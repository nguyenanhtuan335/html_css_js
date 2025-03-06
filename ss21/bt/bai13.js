let star = "**********"
let spact = "          "
for (let i = 10; i > 0; i--) {
    document.write(star.substring(0, i) + "<br>")
}

for (let i = 0; i < 10; i++) {
    document.write(star.substring(0, i))
    document.write("<br>")
}