let btnQuyDoi = document.getElementById("quyDoi");
btnQuyDoi.onclick=function(){
    let tienUsd  = document.getElementById("soTienUSD").value;
    let ketqua = document.getElementById("ketQua");
    tienUsd = Number(tienUsd);
    let result = 0 ; 
    result = tienUsd * 23500;
    // Sử dụng NumberFormat để định dạng số tiền
    let formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });
    let formattedResult = formatter.format(result);
    ketqua.innerText = "So tien sau khi quy doi: " + formattedResult; 
}