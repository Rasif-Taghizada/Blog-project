const createBlogBtn = document.querySelector(".create-btn");
const allBlogsPage = document.querySelector(".all-blogs > a");
const form = document.querySelector("form");
allBlogsPage.href = "../../index.html";

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
    likes: [
      
    ],
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
