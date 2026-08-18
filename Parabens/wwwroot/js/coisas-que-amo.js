const cards =
    document.querySelectorAll(".love-card");


cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("open");

    });

});