const detailsBtn = document.getElementById("details-btn");
const token = localStorage.getItem("JWT Token");
const btn = document.getElementById("login-btn");
const tag = document.getElementById("user-name");
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
btn.addEventListener("click", () => {
  localStorage.removeItem("JWT Token");
  window.location = "./login.html";
});
detailsBtn.addEventListener("click", () => {
  tag.innerText = `Welcome Mr. ${parseJwt(token).username}`;
});
