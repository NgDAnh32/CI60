import hangHoa from "./hanghoa.js"
export default class quanAo extends hangHoa{
    xuatSu;
    chatLieu;
    constructor(dinhDanh,tenMatHang,giaThanh,nhaSanXuat,ngayNhap,xuatSu,chatLieu){
        super(dinhDanh,tenMatHang,giaThanh,nhaSanXuat,5,ngayNhap);
        this.xuatSu = xuatSu;
        this.chatLieu = chatLieu;
    }
}