for (let i = 100; i < 1000; i++) {
    if (i === Math.pow(Math.floor(i/100), 3) + Math.pow(Math.floor((i%100)/10), 3) + Math.pow(i%10, 3)) {
        console.log(i);
    }
}