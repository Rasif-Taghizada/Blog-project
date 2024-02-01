const blogsContainer = document.querySelector(".blogs-container");

async function getBlogsData() {
  const res = await fetch("http://localhost:3000/blogs");
  const blogsData = await res.json();

  const blogsUsers = await Promise.all(
    blogsData.map(async (blog) => {
      const res = await fetch("http://localhost:3000/authors/" + blog.userId);
      const data = await res.json();
      return data;
    })
  );
  console.log(blogsData);
  console.log(blogsUsers);
  repeatBlog(blogsData, blogsUsers);
}
getBlogsData();

function repeatBlog(blogs, users) {
  blogsContainer.innerHTML = "";
  blogs.forEach((blog, index) => {
    const blogDate = new Date(blog.cratedAt).toLocaleDateString("en-EN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    blogsContainer.innerHTML += `
        <div class="blog-card">
            <div class="blog-content">
                <h3>${blog.title}</h3>
                <p>
                    ${blog.description.slice(0, 200).concat("...")}
                </p>
            </div>
            <div class="blog-about">
              <div class="like-comment">
                <div class="like-contet">
                  <i class="fa-regular fa-thumbs-up" onclick="likeBlog(this, '${
                    blog.id
                  }')"></i>
                  <span class="like-count">${blog.like}</span>
                </div>
              </div>
                <a href="#" class="read-btn">Read More</a>
                <div class="blog-date">${blogDate}</div>
                <div class="blog-author">
                    <img src="${users[index].photo}" alt="">
                    <span>${users[index].fullName}</span>
                </div>
            </div>
        </div>
    `;
  });
}

function likeBlog(elem, id) {
  let likeHTML = elem.nextElementSibling;
  let likeCount = Number(likeHTML.textContent);

  if (likeCount == 0) {
    likeCount++;
    console.log(likeCount);
    likeHTML.innerHTML = likeCount;
  }
  elem.classList.replace("fa-regular", "fa-solid");
  const blogData = {
    like: likeCount,
  };
  updateBlogData(id, blogData);
}

function updateBlogData(blogID, data) {
  fetch("http://localhost:3000/blogs/" + blogID, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
