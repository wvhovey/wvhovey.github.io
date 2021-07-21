function toggleCards() {
    document.getElementsByClassName("cards")[0].classList.add("single");
}

function toggleList() {
    document.getElementsByClassName("cards")[0].classList.remove("single");

}


function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}