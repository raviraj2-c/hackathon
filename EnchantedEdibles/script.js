let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    SearchForm.classList.remove('active');
    shoopingCart.classList.remove('active');
    LoginForm.classList.remove('active');
   
}