window.addEventListener('DOMContentLoaded', () =>{
    let login = document.querySelector('.login'),
    password = document.querySelector('.password'),
    enter = document.querySelector('.enter');
    function getUser(){
        console.log('Логин пользователя: ' + login.value);
        console.log('Пароль пользователя: ' + password.value);
    }
    enter.addEventListener('click', getUser);
});