const params = window.location.search;
const urlID = new URLSearchParams(params).get("blogID");
const blogID = CryptoJS.AES.decrypt(urlID, "mastercode").toString(
  CryptoJS.enc.Utf8
);
console.log(blogID);
if (blogID) {
  getBlogData();
}

async function getBlogData() {
  const res = await fetch("http://localhost:3000/blogs/" + blogID);
  const blogData = await res.json();
  console.log(blogData);
}
