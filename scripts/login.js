document.querySelector("form").addEventListener("submit", login)
let sign = JSON.parse(localStorage.getItem("users"));
function login(e) {
    e.preventDefault();
    let form = document.querySelector("form");
    let email = form.email.value;
    let password = form.password.value;

    let flag=false;
for (let i = 0; i < sign.length; i++) {
  if (email == sign[i].email && password == sign[i].password) {
    flag = true;
    break;
  } else {
    flag = false;
  }
}
if (flag == true) {
  alert("Login successful!");
//   window.location.href = "index.html";
} else {
  alert("Wrong credentials");
}
}

    
