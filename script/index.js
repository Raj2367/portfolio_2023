function darkMode() {
    let body = document.body;
    body.classList.toggle("dark-mode");
    let button = document.getElementById("db");
    button.classList.toggle("fa-sun");
    button.classList.toggle("fa-moon");
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        if (!card.classList.contains("bg-dark")) {
            card.classList.add("text-white");
            card.classList.add("bg-dark");
        } else {
            card.classList.remove("text-white");
            card.classList.remove("bg-dark");
        }
    }
    let cardLinks = document.getElementsByClassName("card-link");
    for (let i = 0; i < cardLinks.length; i++) {
        let card = cardLinks[i];
        if (!card.classList.contains("text-white")) {
            card.classList.add("text-white");
        } else {
            card.classList.remove("text-white");
        }
    }
    let readMore = document.getElementById("read-more");
    if (!readMore.classList.contains("text-white")) {
        readMore.classList.add("text-white");
    } else {
        readMore.classList.remove("text-white");
    }
}