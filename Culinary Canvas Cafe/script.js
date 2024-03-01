let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    SearchForm.classList.remove('active');
    shoopingCart.classList.remove('active');
    LoginForm.classList.remove('active');
   
}

function applyCoupon() {
    // Your coupon code application logic goes here
    alert('Coupon applied successfully!');
  }
  
  document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Your payment processing logic goes here
    alert('Payment successful!');
  });

  
  