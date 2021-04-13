import hangHoa from "./hanghoa.js"
export default class khoHang{
    listHanghoa;
    sum = 0;
    constructor(listHanghoa){
        this.listHanghoa = listHanghoa;
    }
    nhaphangHoa(data){
        if(data instanceof hangHoa){
            this.listHanghoa.push(data);
        }
        else {
            console.log("du lieu kkhong hop le!");
        }
    }
    banHang(id){
        let viTri = -1;
        for(let  i = 0; i < this.listHanghoa.length; i++){
            if(this.listHanghoa[i].dinhDanh === id){
                this.sum += this.listHanghoa[i].giaThanh;
                viTri = i;
                break;
            }
        }
        if(viTri == -1) {
            console.log("khong có mặt hàng này");
        }
        else{
            this.listHanghoa.splice(viTri,1);
        }

    }
    doanhThu(){
        console.log(this.sum);
    }
}