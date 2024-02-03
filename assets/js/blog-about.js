const term = window.location.search;
const search = new URLSearchParams(term);
const blogID = search.get("blogID");
let currentPageBlogTitle;
//* constans
const blogAboutTitle = document.querySelector(".post-title");
const blogPostContent = document.querySelector(".post-content");
const popularBlogsLists = document.querySelector(".topic-list");
const similarBlogsLists = document.querySelector(".similar-blogs");
const userEvents = document.querySelector(".user-events");
getBlogData();

async function getBlogData() {
  const response = await fetch("http://localhost:3000/blogs/" + blogID);
  const blogData = await response.json();
  console.log(blogData);

  blogAboutTitle.innerText = blogData.title;
  blogPostContent.innerText = blogData.description;
  currentPageBlogTitle = blogData.title;
  if (blogData.userId === userID) {
    userEvents.classList.add("show");
    const editBtn = document.querySelector(".edit-btn");
    const deleteBtn = document.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
      deleteBlog(blogData.id);
    });
    editBtn.addEventListener("click", function () {
      editBlog(blogData.id);
    });
  }
}

async function popularBlogs() {
  const res = await fetch("http://localhost:3000/blogs");
  const blogs = await res.json();

  const sorted = blogs.sort((a, b) => b.likes.length - a.likes.length);
  sorted.forEach((blog, index) => {
    if (index < 5) {
      popularBlogsLists.innerHTML += `
        <li class="topic"><a href="/blog-about.html?blogID=${blog.id}">${blog.title}</a></li>
      `;
    }
  });

  let titleWithArray = currentPageBlogTitle.split(" ");
  let count = 0;
  let result = blogs.filter((blog) => {
    titleWithArray.forEach((titleTerm) => {
      if (
        blog.title.toLowerCase().includes(titleTerm.toLowerCase()) &&
        blog.id !== blogID
      ) {
        count++;
      }
    });
    if (count > 1) {
      count = 0;
      return blog;
    }
  });
  //* current page blog title with array format
  result.forEach((item) => {
    similarBlogsLists.innerHTML += `
        <li class="similar-blog">
            <a href="./blog-about.html?blogID=${item.id}" class="blog-link">${item.title}</a>
          </li>
      `;
  });
}
popularBlogs();

function deleteBlog(id) {
  fetch("http://localhost:3000/blogs/" + id, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  window.location.href = "/index.html";
}

function editBlog(id) {
  window.location.href = "/create_blog.html?blogID=" + id;
}
