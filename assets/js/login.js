function loading() {
    const getData = JSON.parse(localStorage.getItem('user'));

    if (getData) {
        window.location = 'my-account.html'
    }
  }


function getValue() {

    const userNameRegister = document.getElementById('register_username');
    const passwordRegister = document.getElementById('register_pwsd');
    


const showMessage = document.getElementById('show-message');

    if (userNameRegister.value.length <= 0 || passwordRegister.value.length <= 0) {
        showMessage.innerHTML = 'Vui lòng điền đầy đủ thông tin!'
    }

    const item = {
        userNameRegister: userNameRegister.value,
        passwordRegister: passwordRegister.value
    }

    localStorage.setItem('user', JSON.stringify(item));
    
    alert('Đăng Ký Thành Công vui lòng Đăng nhập!');


    userNameRegister.value = ''
    passwordRegister.value = ''
}


function login() {
    const userNameLogin= document.getElementById('login_username');
    const passwordLogin = document.getElementById('login_pwsd');
    
    const showMessage = document.getElementById('show-message-login');

    if (userNameLogin.value.length <= 0 || passwordLogin.value.length <= 0) {
        showMessage.innerHTML = 'Vui lòng điền đầy đủ thông tin!'
    }

    const getData = JSON.parse(localStorage.getItem('user'));

    if (getData) {
        if (userNameLogin.value === getData.userNameRegister &&
            passwordLogin.value === getData.passwordRegister
        ) {
            alert('Đăng Nhập Thành Công');
            window.location = 'my-account.html'
            }
    }

}

loading();