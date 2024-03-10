const toggleIcon = document.getElementById("toggleIcon");
const nav = document.getElementById("menu");

toggleIcon.addEventListener("click", function () {
  const icon = toggleIcon.querySelector("i");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }

  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
