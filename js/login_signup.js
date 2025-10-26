const tabs = document.querySelectorAll('.tab');
const formSlider = document.querySelector('.form_slider');
const loginForm = document.getElementById('login_form');
const signupForm = document.getElementById('signup_form');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Chuyển active tab
    document.querySelector('.tab.active')?.classList.remove('active');
    tab.classList.add('active');

    // Hiển thị form tương ứng
    if (tab.id === "login_tab") {
      loginForm.classList.add('active');
      signupForm.classList.remove('active');
      formSlider.style.transform = 'translateX(0%)';
    } else {
      signupForm.classList.add('active');
      loginForm.classList.remove('active');
      formSlider.style.transform = 'translateX(-50%)';
    }
  });
});