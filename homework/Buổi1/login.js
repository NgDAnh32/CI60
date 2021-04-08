function check(){
    let $Username = document.getElementById('Username');
    let $Password = document.getElementById('Password');
    if($Username.value == ""){
        alert("Input your Username");
    }
    else if ($Password.value == "" ){
        alert('Input your Password')
    }
    else {
        alert ('Sign in successfully')
    }
}
