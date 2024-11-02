let btnTong2KySo = document.getElementById("tong2KySo");
btnTong2KySo.onclick = function(){
    let number = document.getElementById("so2ChuSo").value;
    number = Number(number);

    let total2ChuSo = 0;
    let hangDonvi = 0;
    let hangChuc = 0;

    hangChuc = Math.floor(number/10);
    hangDonvi = number % 10;

    total2ChuSo = hangChuc + hangDonvi; 

    let ketQuaTong = document.getElementById("ketQuaTong2KySo");

    ketQuaTong.innerText = "Ket qua Tong 2 chu so: " + total2ChuSo;




}