const searchBtn = document.getElementById("searchBtn");
const countryInput = document.getElementById("countryInput");
const mealContainer = document.getElementById("mealContainer");

// fetch meals by 
async function fetchMeals(country) {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
    const data = await res.json();

    // Clear old items
    mealContainer.innerHTML = "";

    if (data.meals) {
      data.meals.forEach(meal => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <h3>${meal.strMeal}</h3>
        `;

        mealContainer.appendChild(card);
      });
    } else {
      mealContainer.innerHTML = `<p>No meals found for "${country}". Try another country.</p>`;
    }
  } catch (error) {
    console.error("Error fetching meals:", error);
    mealContainer.innerHTML = `<p>Something went wrong. Please try again.</p>`;
  }
}

// Event for click button
searchBtn.addEventListener("click", () => {
  const country = countryInput.value.trim();
  if (country) {
    fetchMeals(country);
  }
});

// Enter key
countryInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    searchBtn.click();
}
});