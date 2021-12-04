const form = document.getElementById("login");
const btn = document.getElementById("reg-btn");
btn.addEventListener("click", () => {
  window.location = "./index.html";
});
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const result = await fetch("/api/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => {
    return res.json();
  });
  console.log(result);
  if (result.status === "ok") {
    console.log("Got The token", result.data);
    localStorage.setItem("JWT Token", result.data);
    alert("Success");
    window.location = "./dashboard.html";
  } else {
    alert(result.error);
  }
});
