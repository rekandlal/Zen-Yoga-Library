document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const difficultySelect = document.getElementById("difficulty-filter");
  const poseCards = document.querySelectorAll(".pose-card");

  function filterPoses() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedDifficulty = difficultySelect.value.toLowerCase();

    poseCards.forEach((card) => {
      const cardParent = card.parentElement;
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      const description = card
        .querySelector(".card-text")
        .textContent.toLowerCase();
      const difficulty = cardParent.dataset.difficulty;

      const matchesSearch =
        !searchTerm ||
        title.includes(searchTerm) ||
        description.includes(searchTerm);

      const matchesDifficulty =
        !selectedDifficulty || difficulty === selectedDifficulty;

      cardParent.style.display =
        matchesSearch && matchesDifficulty ? "block" : "none";
    });

    // Hide category titles if no poses are visible in that category
    document.querySelectorAll(".category-title").forEach((title) => {
      const nextRow = title.nextElementSibling;
      const visiblePoses = nextRow.querySelectorAll(
        '.col-12[style="display: block"]'
      );
      title.style.display = visiblePoses.length > 0 ? "block" : "none";
    });
  }

  searchInput.addEventListener("input", filterPoses);
  difficultySelect.addEventListener("change", filterPoses);
});
