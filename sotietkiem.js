class Sotietkiem {
    constructor(Ma, Loaitk, Hotenkh, ChungMND, Ngaygui, Sotien) {
        this.Ma = Ma;
        this.Loaitk = Loaitk;
        this.Hotenkh = Hotenkh;
        this.ChungMND = CanCCD;
        this.Ngaygui = Ngaygui;
        this.Sotien = Sotien;
    }
}
let danhSachSo = [];
function hienThiDanhSach() {
    let tbody = document.getElementById('bangDuLieu');
    tbody.innerHTML = '';
    for (let i = 0; i <danhSachSo.length; i++) {
        let so = danhSachSo[i];
        let row = `<tr>
        <td> ${so.Ma}</td>
        <td>${so.Loaitk}</td>
        <td>${so.Hotenkh}</td>
        <td>${so.ChungMND}</td>
        <td>${so.Ngaygui}</td>
        <td>${so.Sotien.toLocaleString('vi-VN')} VND</td>
        </tr>`;
        tbody.innerHTML += row;
    }

}
function themSoTietKiem(){
    let Ma, Loaitk, Hotenkh, ChungMND, Ngaygui, Sotien;
    while(true){
        Ma = prompt("Nhập mã sổ (tối đa 5 ký tự)");
        if(Ma === null)
            return;
        Ma = Ma.trim();
        if (Ma === ""||Ma.length>5){
            alert("Không được để trống và ko quá 5 kí tự");
            continue;
        }
        let isExist = danhSachSo.some(so=>so.Ma===Ma);
        if(isExist){
            alert("Mã số này đã tồn tại");
            continue;
        }
        break;
    }
    while (true){
        Loaitk = prompt("Nhập loại tiết kiêm,tối đa 10 kí tự");
        if (Loaitk === null)
            return;
        Loaitk = Loaitk.trim();
        if(Loaitk===""||Loaitk.length>10){
            alert("Không được để trống không được vượt quá 10 kí tự");
        }else break;
    }
    while (true){
        Hotenkh = prompt("Nhập vào họ tên khách hàng tối đa 30 kí tự");
        if (Hotenkh === null)
            return;
        Hotenkh = Hotenkh.trim();
        if (Hotenkh === ""||Hotenkh.length>30){
            alert("Không được để trống khong đc vượt quá 30 kí tự");
        }else break;
    }
    while (true){
      let CanCCDInput = prompt("Nhập số chứng minh nhân dân: chỉ đc nhập số");
      if (CanCCDInput === null)
          return;
      ChungMND = Number(CanCCDInput.trim());
      if (CanCCDInput.trim() === "" || isNaN(ChungMND) || ChungMND <=0){
          alert("Chứng minh thư phải là dãy số");
      }else break;
    }
    while (true){
        Ngaygui = prompt("nhập ngày tháng năm");
        if (Ngaygui === null)
            return;
        Ngaygui = Ngaygui.trim();
        let dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        if(!dateRegex.test(Ngaygui)){
            alert("nhập sai rồi nhập lại đi");
        }else break;
    }
    while (true){
        let tienInput = prompt("nhập số tiền gửi");
        if (tienInput === null)
            return;
        Sotien = Number(tienInput.trim());
        if (tienInput.trim() === "" || isNaN(Sotien) || Sotien<=0){
            alert("Số tiền phải lớn hơn 0");
        }else break;
    }
    let Somoi = new  Sotietkiem(Ma, Loaitk, Hotenkh, ChungMND, Ngaygui, Sotien);
    danhSachSo.push(Somoi);
    alert("thêm sổ thành công");
    hienThiDanhSach();
}
function xoaSoTietKiem() {
    if (danhSachSo.length === 0) {
        alert("Danh sách đang trống");
        return;
    }
    while (true) {
        let maCanXoa = prompt("Nhập Mã Sổ bạn muốn xóa:");
        if (maCanXoa === null) return;
        maCanXoa = maCanXoa.trim();
        let index = danhSachSo.findIndex(so => so.maSo === maCanXoa);

        if (index === -1) {
            alert("Mã sổ tiết kiệm nhập sai hoặc không có trong danh sách. Yêu cầu nhập lại!");
        } else {
            let confirmXoa = confirm(`Bạn có chắc chắn muốn xóa sổ tiết kiệm mã [${maCanXoa}] không?`);
            if (confirmXoa) {
                danhSachSo.splice(index, 1);
                alert("Đã xóa thành công!");
                hienThiDanhSach();
            }
            break;
        }
    }
}