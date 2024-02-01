const userProfileName = document.querySelector(".user-profile >p");
const userProfileImage = document.querySelector(".user-profile > img.user-img");
const localStorageID = localStorage.getItem("user");
console.log(localStorageID);

function getUser() {
  fetch("http://localhost:3000/authors/" + localStorageID)
    .then((res) => res.json())
    .then((user) => {
      userProfileName.innerText = user.fullName;
      userProfileImage.src = user.photo;
    });
}
getUser();
