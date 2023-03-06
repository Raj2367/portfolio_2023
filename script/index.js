function darkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    var button = document.getElementById("db");
    button.classList.toggle("fa-sun");
    button.classList.toggle("fa-moon");
    var articleContent = document.getElementById("article1");
    articleContent.classList.toggle("article");
    articleContent.classList.toggle("article-darkmode");
    articleContent = document.getElementById("article2");
    articleContent.classList.toggle("article");
    articleContent.classList.toggle("article-darkmode");
    articleContent = document.getElementById("article3");
    articleContent.classList.toggle("article");
    articleContent.classList.toggle("article-darkmode");
}