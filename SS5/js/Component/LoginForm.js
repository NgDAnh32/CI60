const $template = document.createElement('template');
$template.innerHTML=`
    <form class="login-form">
        <h2>Login account</h2>
        <input-wrapper class="name" placeholder="Name" error="" type="text"></input-wrapper>
        <input-wrapper class="password" placeholder="Password" error="" type="password"></input-wrapper>
        <button class="login-btn">Log In</button>
    </form>
`;

export default class LoginForm extends HTMLElement {
    constructor(){
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$loginForm = this.querySelector(".login-form");
        this.$name = this.querySelector(".name");
        this.$password = this.querySelector(".password");
    }

    connectedCallback(){
        this.$loginForm.onsubmit = (event)=>{
            event.preventDefault();
            
            this.$name.validate((value)=>{
                return value != '';
            }, "Invalid name");

            this.$password.validate((value)=>{
                return value != '';
            }, "Invalid password");
        }
    }
}

window.customElements.define("login-form", LoginForm);