// ============================
// PACKAGE MODAL FUNCTIONALITY
// ============================

const modal =
  document.getElementById("package-modal");

const modalTitle =
  document.getElementById("modal-title");

const modalDescription =
  document.getElementById("modal-description");

const closeBtn =
  document.querySelector(".close-btn");

const viewButtons =
  document.querySelectorAll(".view-details-btn");

viewButtons.forEach(button => {

  button.addEventListener("click", () => {

    const card =
      button.closest(".package-card");

    const title =
      card.querySelector("h3").textContent;

    const description =
      card.querySelector("p").textContent;

    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.style.display = "flex";
  });

});

if (closeBtn) {

  closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

  });

}

window.addEventListener("click", (e) => {

  if (e.target === modal) {

    modal.style.display = "none";

  }

});
