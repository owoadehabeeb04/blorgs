const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');

const select = document.querySelector('.select');
const login = document.querySelector('.logins');

hamburger.addEventListener('click', function() {
    select.style.display = 'inline-flex'
    login.style.display = 'inline-flex'
    close.style.display = 'inline-flex'
    hamburger.style.display = 'none'
})
close.addEventListener('click', function(){
    select.style.display = 'none'
    login.style.display = 'none'
    close.style.display = 'none'
    hamburger.style.display = 'inline-flex'
})



