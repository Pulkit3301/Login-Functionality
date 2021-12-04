const form = document.getElementById("reg-form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const result = await fetch("/api/register", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      name,
      contact,
    }),
  }).then((res) => {
    res.json();
  });
  if (result.status === "ok") {
    alert("Success");
  } else {
    alert(resul.error);
  }
});
