
let btn = document.getElementById("trungBinh");
btn.onclick=function(){
    let num1 = document.getElementById("soThu1").value;
    let num2 = document.getElementById("soThu2").value;
    let num3 = document.getElementById("soThu3").value;
    let num4 = document.getElementById("soThu4").value;
    let num5 = document.getElementById("soThu5").value;
    num1=Number(num1);
    num2=Number(num2);
    num3=Number(num3);
    num4=Number(num4);
    num5=Number(num5);
    let result = document.getElementById("xuatTrungBinh");
    let total = 0;
    total = ( num1 + num2 + num3 + num4  + num5 )/5 ;
    result.innerText= "Trung bình cộng là: " + total;
} 