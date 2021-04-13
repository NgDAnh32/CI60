import hangHoa from "./hanghoa.js"
import doAn from "./doan.js"
import doGiaDung from "./giadung.js"
import khoHang from "./khohang.js"
import quanAo from "./quanao.js"
let table = new doGiaDung(100,"bàn gỗ",200,"Kim Đan","22/10");
let ao = new quanAo(101,"Áo ba lỗ",100,"Văn Phú","23/10");
let hambuger = new doAn(102,"Hambuger",300,"KFC","26/10");
let listKhoHang = new khoHang([table,hambuger]);
console.log(listKhoHang); 
listKhoHang.nhaphangHoa(ao);
listKhoHang.banHang(100);
listKhoHang.banHang(102);
listKhoHang.doanhThu();
