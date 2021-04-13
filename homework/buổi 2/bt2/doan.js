import hangHoa from "./hanghoa.js"
export default class doAn extends hangHoa{
    vi;
    constructor(dinhDanh,tenMatHang,giaThanh,nhaSanXuat,ngayNhap,vi){
        super(dinhDanh,tenMatHang,giaThanh,nhaSanXuat,2,ngayNhap);
        this.vi = vi;
    }
}