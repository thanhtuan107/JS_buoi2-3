let btnTinh = document.getElementById("tinh");
btnTinh.onclick = function(){
    let dai = document.getElementById("chieuDai").value;
    let rong = document.getElementById("chieuRong").value;
    dai = Number(dai);
    rong = Number(rong);
    let P,S = 0;
    P =( dai + rong )*2;
    S = dai*rong;

    let xuatS = document.getElementById("xuatDt");
    let xuatP = document.getElementById("xuatCv");

    xuatS.innerText = "Dien tich: " + S;
    xuatP.innerText = "Chu vi: " + P;
}