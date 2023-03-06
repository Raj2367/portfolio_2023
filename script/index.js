function darkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    var button = document.getElementById("db");
    button.classList.toggle("fa-sun");
    button.classList.toggle("fa-moon");
}