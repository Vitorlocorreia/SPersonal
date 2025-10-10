<script>
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".sobre-card");

  function revelarCards() {
    const triggerBottom = window.innerHeight * 0.9;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add("aparecer");
      } else {
        card.classList.remove("aparecer");
      }
    });
  }

  window.addEventListener("scroll", revelarCards);
  revelarCards(); // para verificar ao carregar a página também
});
</script>
