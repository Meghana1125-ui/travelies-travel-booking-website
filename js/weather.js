// ============================
// WEATHER SECTION
// ============================

const weatherData = {
  Goa: {
    temp: "30°C",
    condition: "Sunny ☀️"
  },

  Bali: {
    temp: "28°C",
    condition: "Cloudy ☁️"
  },

  Paris: {
    temp: "22°C",
    condition: "Rainy 🌧️"
  }
};

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const weatherCards =
      document.querySelectorAll(
        ".weather-card"
      );

    weatherCards.forEach(card => {

      const city =
        card.querySelector("h3")
        ?.textContent
        ?.trim();

      if (
        city &&
        weatherData[city]
      ) {

        card.innerHTML += `
          <p><strong>Temperature:</strong>
          ${weatherData[city].temp}</p>

          <p><strong>Condition:</strong>
          ${weatherData[city].condition}</p>
        `;
      }
    });
  }
);