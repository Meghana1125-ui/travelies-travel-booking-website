// ============================
// WISHLIST FUNCTIONALITY
// ============================

let wishlist =
  JSON.parse(
    localStorage.getItem("wishlist")
  ) || [];

const wishlistCount =
  document.getElementById("wishlist-count");

function updateWishlistCount() {

  if (wishlistCount) {
    wishlistCount.textContent =
      wishlist.length;
  }
}

const wishlistButtons =
  document.querySelectorAll(
    ".package-card button:last-child"
  );

wishlistButtons.forEach(button => {

  button.addEventListener("click", () => {

    const card =
      button.closest(".package-card");

    const packageName =
      card.querySelector("h3").textContent;

    const packageImage =
      card.querySelector("img").src;

    const packageDescription =
      card.querySelector("p").textContent;

    const alreadyExists =
      wishlist.some(
        item => item.name === packageName
      );

    if (!alreadyExists) {

   const destinationMap = {
    "Goa Beach Escape":"Goa",
    "Bali Adventure":"Bali",
    "Paris Getaway":"Paris",
    "Dubai Luxury Tour":"Dubai",
    "Maldives Honeymoon":"Maldives",
    "Switzerland Explorer":"Switzerland"
};

const packageData = {
    name: packageName,
    destination:
    destinationMap[packageName],
    image: packageImage,
    description: packageDescription
};

      wishlist.push(packageData);

      localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
      );

      updateWishlistCount();

      showToast(
        packageName +
        " added to Wishlist ❤️"
      );

    } else {

      showToast(
        "Already in Wishlist ❤️"
      );
    }
  });
});

function showToast(message) {

  const toast =
    document.createElement("div");

  toast.className = "toast";

  toast.textContent =
    message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2500);
}

updateWishlistCount();

function updateTripCount(){

    const trips =
    JSON.parse(
        localStorage.getItem("bookedTrips")
    ) || [];

    const tripCount =
    document.getElementById("trip-count");

    if(tripCount){
        tripCount.innerText = trips.length;
    }
}

window.addEventListener("DOMContentLoaded", () => {
    updateTripCount();
});