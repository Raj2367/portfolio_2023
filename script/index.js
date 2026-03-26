function darkMode() {
  const body = document.body;
  const isDark = body.classList.toggle("dark-mode");

  let button = document.getElementById("db");
  button.classList.toggle("fa-sun");
  button.classList.toggle("fa-moon");
  //theme
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
(function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", "dark");
  }
})();
