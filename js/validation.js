// ============================
// BOOKING FORM VALIDATION
// ============================

const bookingForm =
  document.getElementById("booking-form");

if (bookingForm) {

  bookingForm.addEventListener(
    "submit",
    function (e) {

      e.preventDefault();

      const name =
        bookingForm
        .querySelector(
          'input[type="text"]'
        )
        .value
        .trim();

      const email =
        bookingForm
        .querySelector(
          'input[type="email"]'
        )
        .value
        .trim();

      const phone =
        bookingForm
        .querySelector(
          'input[type="tel"]'
        )
        .value
        .trim();

      const travelers =
        bookingForm
        .querySelector(
          'input[type="number"]'
        )
        .value;

      // Name Validation

      if (name.length < 3) {

        alert(
          "Please enter a valid name."
        );

        return;
      }

      // Email Validation

      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        !emailPattern.test(email)
      ) {

        alert(
          "Please enter a valid email."
        );

        return;
      }

      // Phone Validation

      const phonePattern =
        /^[0-9]{10}$/;

      if (
        !phonePattern.test(phone)
      ) {

        alert(
          "Please enter a valid 10-digit phone number."
        );

        return;
      }

      // Travelers Validation

      if (
        travelers <= 0
      ) {

        alert(
          "Number of travelers must be greater than 0."
        );

        return;
      }

      alert(
        "Booking enquiry submitted successfully! ✈️"
      );

      bookingForm.reset();
    }
  );
}
