import { useEffect, useState } from "react";
import PlanetCard from "./PlanetCard";
import { fetchPlanets } from "../services/api";

function PlanetSection() {
  const [planets, setPlanets] = useState([]);

  const customImages = {
    Mercury:
      "https://images.pexels.com/photos/30596216/pexels-photo-30596216.jpeg",

    Venus:
      "https://images.pexels.com/photos/20337604/pexels-photo-20337604.jpeg",

    Earth:
      "https://images.pexels.com/photos/20376394/pexels-photo-20376394.jpeg",

    Mars:
      "https://images.pexels.com/photos/12498801/pexels-photo-12498801.jpeg",

    Jupiter:
      "https://images.pexels.com/photos/13229275/pexels-photo-13229275.png",

    Saturn:
      "https://images.pexels.com/photos/20376399/pexels-photo-20376399.jpeg",

    Uranus:
      "https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg",

    Neptune:
      "https://images.pexels.com/photos/20376405/pexels-photo-20376405.jpeg",

    Pluto:
      "https://images.pexels.com/photos/20376406/pexels-photo-20376406.jpeg",
  };

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const data = await fetchPlanets();

        const updated = data.map((item) => ({
          ...item,
          image: customImages[item.planet],
        }));

        setPlanets(updated);
      } catch (error) {
        console.log(error);
      }
    };

    getPlanets();
  }, []);

  return (
    <section className="planet-section"  id="planet-section">
      <h2>Visualizing the Differences Between Planets</h2>

      <p>
        Each planet in our solar system has unique physical characteristics. 
        Visual comparisons help highlight how vastly different terrestrial planets are from gas giants and ice giants
      </p>
<div className="planet-grid">
  {planets.map((planet, index) => (
    <div
      key={index}
      className={planet.planet === "Pluto" ? "pluto" : ""}
    >
      <PlanetCard planet={planet} />
    </div>
  ))}
</div>
    </section>
  );
}

export default PlanetSection;