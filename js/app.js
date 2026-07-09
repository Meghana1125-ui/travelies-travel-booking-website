// ============================
// LOADER
// ============================

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }
});



// ============================
// BOOK TRIP BUTTON
// ============================

const bookBtn =
document.querySelector("#package-modal .modal-content button");

if (bookBtn) {
  bookBtn.addEventListener("click", () => {

    let trips =
      JSON.parse(localStorage.getItem("bookedTrips")) || [];

    trips.push({
      name: "Goa Beach Escape",
      image: "images/packages/goa-package.png",
      description: "3 Days / 2 Nights"
    });

    localStorage.setItem(
      "bookedTrips",
      JSON.stringify(trips)
    );

    alert("Trip Booked Successfully!");
  });
}

// ============================
// BACK TO TOP
// ============================

const backToTop =
document.getElementById("backToTop");

if (backToTop) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }

  });

  backToTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

  backToTop.style.display = "none";
}

// ============================
// HERO BUTTONS
// ============================

const exploreBtn =
document.getElementById("explore-btn");

if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {

    document.getElementById("packages")
      ?.scrollIntoView({
        behavior: "smooth"
      });

  });
}

const contactBtn =
document.getElementById("contact-btn");

if (contactBtn) {
  contactBtn.addEventListener("click", () => {

    document.getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth"
      });

  });
}

// ============================
// SMOOTH NAVIGATION
// ============================

document
  .querySelectorAll('nav a[href^="#"]')
  .forEach(link => {

    link.addEventListener("click", function (e) {

      e.preventDefault();

      const target =
        document.querySelector(
          this.getAttribute("href")
        );

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }

    });

  });

console.log("Travelies Loaded Successfully");

function sendMessage(event){

    event.preventDefault();

    const toast =
    document.getElementById("toast");

    if(!toast) return;

    toast.innerHTML =
    "✈️ Message Sent Successfully!";

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

    document.querySelector(".contact-form").reset();
}

function subscribeNewsletter(){

    const email =
    document.getElementById("newsletterEmail").value;

    if(email === ""){
        return;
    }

    if(!email.includes("@")){
        return;
    }

    document.getElementById("newsletterEmail").value = "";

    const toast =
    document.getElementById("toast");

    toast.innerHTML =
    "📩 Successfully Subscribed!";

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});

document.querySelectorAll(".faq-item").forEach(item => {

    item.addEventListener("click", () => {

        document
        .querySelectorAll(".faq-item")
        .forEach(faq => {

            if(faq !== item){
                faq.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});

const reviews = [

{
    image:"images/testimonials/customer-1.jpg",
    name:"Rahul Sharma",
    trip:"Goa Beach Escape",
    text:"Travelies made our dream vacation effortless."
},

{
    image:"images/testimonials/customer-2.jpg",
    name:"Priya Patel",
    trip:"Bali Adventure",
    text:"Amazing packages and excellent customer support."
},

{
    image:"images/testimonials/customer-3.jpg",
    name:"Anjali Verma",
    trip:"Paris Getaway",
    text:"Best travel booking experience I've ever had."
}

];

let currentReview = 0;

function updateReview(){

   console.log(
        reviews[currentReview].image
    );


    document.getElementById("reviewImg").src =
    reviews[currentReview].image;

    document.getElementById("reviewText").innerText =
    reviews[currentReview].text;

    document.getElementById("reviewName").innerText =
    reviews[currentReview].name;

    document.getElementById("reviewTrip").innerText =
    reviews[currentReview].trip;
}
function prevReview(){

    currentReview--;

    if(currentReview < 0){
        currentReview = reviews.length - 1;
    }

    updateReview();
}

updateReview();

function nextReview(){

    currentReview++;

    if(currentReview >= reviews.length){
        currentReview = 0;
    }

    updateReview();
}


document.querySelectorAll(".book-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        document
        .getElementById("booking")
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});

// ============================
// BOOK PACKAGE
// ============================

function bookPackage(destination){

    const destinationSelect =
    document.getElementById("destination");

    if(destinationSelect){
        destinationSelect.value =
        destination;
    }

    document
    .getElementById("booking")
    .scrollIntoView({
        behavior:"smooth"
    });
}


// ============================
// SUBMIT BOOKING
// ============================

function submitBooking(event){

    event.preventDefault();

    const destination =
    document.getElementById("destination").value;

    let trips =
    JSON.parse(localStorage.getItem("bookedTrips")) || [];

    trips.push({
        destination: destination,
        image: getDestinationImage(destination)
    });

    localStorage.setItem(
        "bookedTrips",
        JSON.stringify(trips)
    );
    

    updateTripCount();


    const toast =
    document.getElementById("toast");

    toast.innerHTML =
    "✈️ Booking Request Submitted!";

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

    document
    .querySelector(".booking-form")
    .reset();
}

function getDestinationImage(destination){

    const images = {
        "Goa":"images/destinations/goa.jpeg",
        "Bali":"images/destinations/bali.jpeg",
        "Paris":"images/destinations/paris.jpeg",
        "Dubai":"images/destinations/dubai.jpeg",
        "Maldives":"images/destinations/maldives.jpeg",
        "Switzerland":"images/destinations/switzerland.jpeg"
    };

    return images[destination] || "images/default.jpg";
}


// ============================
// TRIP COUNT
// ============================

function updateTripCount(){

    const trips =
    JSON.parse(
        localStorage.getItem(
            "bookedTrips"
        )
    ) || [];

    const tripCount =
    document.getElementById(
        "trip-count"
    );

    if(tripCount){
        tripCount.innerText =
        trips.length;
    }
}

updateTripCount();

const menuBtn =
document.getElementById("menu-btn");

const navMenu =
document.querySelector(".nav-menu");

const navActions =
document.querySelector(".nav-actions");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navMenu.classList.toggle("active");
        navActions.classList.toggle("active");

        menuBtn.textContent =
        navMenu.classList.contains("active")
        ? "✖"
        : "☰";
    });
}


