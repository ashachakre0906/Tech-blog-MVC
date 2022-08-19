const signout = async () => {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
    alert("logout successful");
  } else {
    alert("unable to logout");
  }
};

document.querySelector("#log-out").addEventListener("click", signout);
