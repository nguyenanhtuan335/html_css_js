let array = [1,4,7,8,3];
let sumOdd = 0;
let sumEven = 0 ;
for( let i = 0 ; i < array.length ; i++){
   (array[i]%2===0)?sumEven += array [i] : sumOdd += array[i]
}
console.log(` Tổng các số chẵn là : ${sumEven}`);
console.log(` Tổng các số lẻ là : ${sumOdd}`);