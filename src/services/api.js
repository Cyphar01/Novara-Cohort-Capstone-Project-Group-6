export const fetchPlanets = async () => {
  const response = await fetch(
    "https://anurella.github.io/json/planets.json"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch planets");
  }

  return response.json();
};