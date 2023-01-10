const dataLogin = {
  username: "hafidz1997",
  password: "Kopi.123",
};

function login(e) {
  let loginForm = document.getElementById("loginForm"),
    username = document.getElementById("username").value,
    password = document.getElementById("password").value,
    errUsername = document.getElementById("errUsername"),
    errPassword = document.getElementById("errPassword"),
    isValid = loginForm.checkValidity();

  if (isValid) {
    e.preventDefault();
    errUsername.innerHTML = "";
    errPassword.innerHTML = "";

    if (username !== dataLogin.username) {
      errUsername.innerHTML =
        '<small class="text-danger font-weight-bold">Username Salah</small>';
    }
    if (password !== dataLogin.password) {
      errPassword.innerHTML =
        '<small class="text-danger font-weight-bold">Password Salah</small>';
    }
    if (username === dataLogin.username && password === dataLogin.password) {
      //   loginForm.submit();
      window.location.href = "home.html";
      console.log("texssdadasdsa");
    }
  } else {
    errUsername.innerHTML = "";
    errPassword.innerHTML = "";
    return false;
  }
}

function showPass() {
  let password = document.getElementById("password");

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
