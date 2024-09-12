//LOGIN & REGISTRATION PAGE

  const loginBtn = document.querySelector("#loginBtn");
  const regBtn = document.querySelector("#regBtn");
  const loginForm = document.querySelector(".login-content");
  const regForm = document.querySelector(".reg-content");
  const wrapper = document.querySelector(".wrapper");
  const closeBtn = document.querySelectorAll(".close-btn");
  const bottomLogin = document.querySelector(".log-in");
  const bottomSignup = document.querySelector(".sign-up");

  // FUNCTION TO DISPLAY THE LOGIN PAGE AND HIDE THE REGISTRATION PAGE
  loginBtn.addEventListener("click", function() {
    loginForm.style.display = "block";
    regForm.style.display = "none";
    wrapper.style.display = "block";
  });

  // FUNCTION TO DISPLAY THE REGISTRATION PAGE AND HIDE THE LOGIN PAGE
  regBtn.addEventListener("click", function() {
    loginForm.style.display = "none";
    regForm.style.display = "block";
    wrapper.style.display = "block";
  });

  // CLOSE BUTTON
  closeBtn.forEach(btn => {
    btn.addEventListener("click", function() {
      loginForm.style.display = "none";
      regForm.style.display = "none";
      wrapper.style.display = "none";
    });
  });
  
  // ALREADY HAVE AN ACCOUNT? LOGIN
  bottomLogin.addEventListener("click", function() {
    loginForm.style.display = "block";
    regForm.style.display = "none";
    wrapper.style.display = "block";
  });
  
  // DON'T HAVE AN ACCOUNT? SIGNUP
  bottomSignup.addEventListener("click", function() {
    loginForm.style.display = "none";
    regForm.style.display = "block";
    wrapper.style.display = "block";
  });