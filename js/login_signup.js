const tabs = document.querySelectorAll('.tab');
const formSlider = document.querySelector('.form_slider');
const loginForm = document.getElementById('login_form');
const signupForm = document.getElementById('signup_form');
const formWrapper = document.querySelector('.form_warpper');
// Expose measured heights globally so other code (or the console) can read them
window.loginHeight = 0;
window.signupHeight = 0;

function calHeight(){
  // Temporarily make both forms visible but keep their positions
  const originalLoginDisplay = loginForm.style.display;
  const originalSignupDisplay = signupForm.style.display;
  
  loginForm.style.display = 'block';
  loginForm.style.position = 'absolute';
  loginForm.style.visibility = 'hidden';
  
  signupForm.style.display = 'block';
  signupForm.style.position = 'absolute';
  signupForm.style.visibility = 'hidden';
  
  // Get height of both forms
  const loginHeight = loginForm.scrollHeight;
  const signupHeight = signupForm.scrollHeight;

  // Store measured heights globally
  window.loginHeight = loginHeight;
  window.signupHeight = signupHeight;
  
  // Restore original display states
  loginForm.style.display = originalLoginDisplay;
  signupForm.style.display = originalSignupDisplay;
  loginForm.style.position = '';
  signupForm.style.position = '';
  loginForm.style.visibility = '';
  signupForm.style.visibility = '';

  // For debugging
  console.log('Login height:', loginHeight);
  console.log('Signup height:', signupHeight);
}

// Measure heights on load
window.addEventListener('load', calHeight);

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
  formSlider.style.height = `${window.loginHeight}px`;
    } else {
      signupForm.classList.add('active');
      loginForm.classList.remove('active');
      formSlider.style.transform = 'translateX(-50%)';
  formSlider.style.height = `${window.signupHeight}px`;
    }
  
  });
});