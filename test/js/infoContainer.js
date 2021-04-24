const $template = document.createElement('template');
$template.innerHTML = `
<div id="infoContainer">
        <div id="info-image"></div>
        <div id="info-name"></div>
        <div id="info-gender"></div>
        <div id="info-country"></div>   
        <div id="info-phoneNumber"></div>
        <div id="info-favorites"></div>
    </div>
`
export default class infoContainer extends HTMLElement {
    constructor(){
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$name=this.querySelector('.info-name')
        this.$image=this.querySelector('.info-image')
        this.$gender=this.querySelector('.info-gender')
        this.$country=this.querySelector('.info-country')
        this.$phoneNumber=this.querySelector('.info-phoneNumber')
        this.$favorites=this.querySelector('.info-favorites')

    }
    // định nghĩa thuộc tính của thẻ
    static get observedAttributes(){
        return ['name','image','gender' , 'country','phoneNumber','favorites'];
    }
    // chạy khi giá trị của thuộc tính (được định nghĩa ở trên ) thay đổi
    attributeChangedCallback(attrName , oldValue , newValue){
        // console.log("thuộc tính " + attrName + ":"+newValue);
        if(attrName == 'name'){
            this.$name.innerHTML = newValue;
        }else if(attrName == 'image') {
            this.$country.style.backgroundImage = `url('${newValue}')`;
        }else if(attrName == 'gender'){
            this.$gender.innerHTML = newValue 
        }else if(attrName== 'country'){   
            this.$country.innerHTML = newValue;
            
        }else if(attrName== 'phoneNumber'){   
            this.$phoneNumber.innerHTML = newValue;
        }else if(attrName== 'favorites'){   
            this.$favorites.innerHTML = newValue;
        }
    }
// được chạy khi lần đầu tiên xuất hiện trên trang web
}
window.customElements.define('infoContainer',infoContainer)