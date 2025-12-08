function toggleCard(clickedCard) {
    document.querySelectorAll('.card').forEach(card => {
        if (card !== clickedCard) {
            card.classList.remove('open');
        }
    });
    clickedCard.classList.toggle('open');
}
