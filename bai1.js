
let btnTotal = document.getElementById("tinhLuong");
btnTotal.onclick=function(){
    let soNgayLam = document.getElementById("ngayLam").value;
    let Luong = document.getElementById("Luong").value;
    let result  =document.getElementById("xuatLuong");
    Luong=Number(Luong);
    soNgayLam=Number(soNgayLam);
    let total = 0;
    total = Luong*soNgayLam;
    result.innerText= "Tổng lương của nhân viên này là: " + total;
} 