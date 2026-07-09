// ============================
// SEARCH FUNCTIONALITY
// ============================

const searchInput =
  document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

  const searchValue =
    searchInput.value.toLowerCase();

  // Destinations

  const destinationCards =
    document.querySelectorAll(
      ".destination-card"
    );

  destinationCards.forEach(card => {

    const destinationName =
      card.querySelector("h3")
      .textContent
      .toLowerCase();

    if (
      destinationName.includes(
        searchValue
      )
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  // Packages

  const packageCards =
    document.querySelectorAll(
      ".package-card"
    );

  packageCards.forEach(card => {

    const packageName =
      card.querySelector("h3")
      .textContent
      .toLowerCase();

    if (
      packageName.includes(
        searchValue
      )
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});