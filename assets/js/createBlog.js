const params = window.location.search;
const userID = new URLSearchParams(params).get("user");
const userProfileImage = document.querySelector(".user-profile > img");
const userProfileName = document.querySelector(".user-profile > p");
const createBlogBtn = document.querySelector(".create-btn");
const allBlogsPage = document.querySelector(".all-blogs > a");
const form = document.querySelector("form");

allBlogsPage.href = "../../index.html?user=" + userID;
async function getUser() {
  const response = await fetch("http://localhost:3000/authors/" + userID);
  const userData = await response.json();
  userProfileImage.src = userData.photo;
  userProfileName.innerText = userData.fullName;
}

getUser();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  createBlog();
});

async function createBlog() {
  const blogData = {
    userId: userID,
    title: form.querySelector(".title").value,
    description: form.querySelector(".description").value,
    cratedAt: new Date(),
  };

  fetch("http://localhost:3000/blogs", {
    method: "POST",
    body: JSON.stringify(blogData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => console.log(res));
  window.location.href = "../../index.html";
}
