let str = "Màu sắc thay đổi";
for (let i = 0; i < 10; i++) {
    let color = '#';
    const letters = '0123456789ABCDEF';
    for (let j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    const style = `color: ${color}; font-weight: bold;`;
    console.log(`%c${str}`, style);
}