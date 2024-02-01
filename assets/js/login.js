const loginBtn = document.querySelector(".login-btn");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const rememberMe = document.querySelector("#remember");

loginBtn.addEventListener("click", () => {
  checkUser();
});

function checkUser() {
  fetch("http://localhost:3000/authors")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((user) => {
        if (
          user.fullName === username.value &&
          user.password === password.value
        ) {
          if (rememberMe.checked) {
            localStorage.setItem("user", user.id);
          } else {
            sessionStorage.setItem("user", user.id);
          }
          alert("user found");
          window.location.href = "./create_blog.html?user=" + user.id;
        } else {
          console.log("user not found");
        }
      });
    });
}
