// corrected the api.js file to call on both the contact endpoint and planet api

const PLANETS_API = "https://anurella.github.io/json/planets.json";
const FORM_ENDPOINT = "https://whitebricks.com/tsacademy.php";

// FETCH PLANETS
export const fetchPlanets = async () => {
  const response = await fetch(PLANETS_API);

  if (!response.ok) {
    throw new Error("Failed to fetch planets");
  }

  return response.json();
};

// SUBMIT CONTACT FORM
export const submitContactForm = async (formData) => {
  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to submit form");
  }

  return response.text();
};