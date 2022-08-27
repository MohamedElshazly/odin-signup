const pwd = document.querySelector('#user-password');
const confirm_pwd = document.querySelector('#confirm-password'); 
let password = '';
let confirm_password = '';

pwd.addEventListener('input', () => {
    password = pwd.value;
    if(password == confirm_password){
        console.log("here")
        document.documentElement.style.setProperty('--content-visibility', 'none');
        document.documentElement.style.setProperty('--indicator', '✓');
        document.documentElement.style.setProperty('--indicatorColor', 'green');      
    }
    else{
        document.documentElement.style.setProperty('--content-visibility', 'inline-block');
        document.documentElement.style.setProperty('--indicator', '✖');
        document.documentElement.style.setProperty('--indicatorColor', 'red');   
    }
})

confirm_pwd.addEventListener('input', () => {
    confirm_password = confirm_pwd.value;
    if(password == confirm_password){
        console.log("here")
        document.documentElement.style.setProperty('--content-visibility', 'none');
        document.documentElement.style.setProperty('--indicator', '✓');
        document.documentElement.style.setProperty('--indicatorColor', 'green');   
    }
    else{
        document.documentElement.style.setProperty('--content-visibility', 'inline-block');
        document.documentElement.style.setProperty('--indicator', '✖');
        document.documentElement.style.setProperty('--indicatorColor', 'red');   
    }
})