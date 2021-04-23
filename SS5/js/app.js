import InputWrapper from "./Component/InputWrapper.js"
import RegisterForm from "./Component/RegisterForm.js"
import LoginForm from "./Component/LoginForm.js"

function hello (name){
    return "xin chào" + name;
}

//callback
function saySomething(cb){
    let name= "Ngọc Trinh";
    console.log(cb(name));
}
saySomething(function(name){
    return "mèo méo meo mèo meo" + name;
});