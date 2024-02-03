const term = window.location.search;
console.log(term);
const search = new URLSearchParams(term);
const blogID = search.get("blogID");
getBlogData();

async function getBlogData() {
  const response = await fetch("http://localhost:3000/blogs/" + blogID);
  const blogData = await response.json();
  console.log(blogData);
}
