import infoContainer from "./infoContainer.js"


const $template = document.createElement('template');
$template.innerHTML = `
    <div class= "info-list">
        
    </div>
    
`;
export default class infoList extends HTMLElement {
    constructor (){
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$list = this.querySelector('.info-list') 
    }
    static get observedAttributes(){
        return['infos'];
    }

    attributeChangedCallback(attrName, oldValue , newValue){
        if(attrName= 'infos'){
            // console.log(newValue);
            let data = JSON.parse(newValue);
            
            for (let infoData of data){
                let $infoContainer = new infoContainer();
                $infoContainer.setAttribute('id',infoData.id);
                $infoContainer.setAttribute('name',infoData.name);
                $infoContainer.setAttribute('gender', infoData.gender);
                $infoContainer.setAttribute('image',infoData.avatar);
                $infoContainer.setAttribute('country',infoData.country);
                $infoContainer.setAttribute('phoneNumber',infoData.phoneNumber);
                $infoContainer.setAttribute('favorites',infoData.favorites);

                this.$list.appendChild($infoContainer);
            }
        }
    }
}
window.customElements.define('info-list',infoList)