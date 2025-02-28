
//if ( animal === "dog"){
   // document.write(" gâu gâu gâu...!!!");
//} else if(animal === "cat"){
   // document.write(" meo meo meo ...!!!");
//} else if (animal === " duck") {
  //  document.write(" quạc quạc quạc...!!1");
//} else if ( animal === " snake") {
 // document.write(" phì phì phì...!!");
//} else {
 // document.write(" Con vật chưa có trong thư viện của chúng tôi");
//}
let animal = prompt(" mời bạn nhập vào con vật bạn yêu thích");
switch (animal){
 case "dog":
    document.write(" gâu gâu gâu...!!!");
    break;
case "cat":
    document.write(" meo meo meo...!!!");
    break;
case "duck":
    document.write(" quạc quạc quạc...!!!");
    break;
default:
    document.write(" con vật bạn chọn không có trong thư viện");
break;
}