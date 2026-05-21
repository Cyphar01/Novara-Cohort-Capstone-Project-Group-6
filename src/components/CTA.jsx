

function CTA() {
  
  return (
    <section className="planetaryFacts" id="Planetary-Facts">
      <div className="container">
        <h2>Planetary Facts at a Glance</h2>

        <p>
          Below is a comparative table of major planets in our solar system.
          The data highlights key physical<br /> properties used by astronomers and
          research worldwide.
        </p>

        <div>
          <table>
            <caption>
              Data about the planets of our solar system (Planetary facts taken
              from NASA)
            </caption>

            <tbody>
              <tr className="THrow">
                <th colSpan="4" className="THrow"></th>

                <th colSpan="2" className="THrow">
                  Name
                </th>

                <th colSpan="2" className="THrow">
                  Mass (10<sup>24</sup>kg)
                </th>

                <th colSpan="2" className="THrow">
                  Diameter (km)
                </th>

                <th colSpan="2" className="THrow">
                  Density (kg/m<sup>3</sup>)
                </th>

                <th colSpan="2" className="THrow">
                  Gravity (m/s<sup>2</sup>)
                </th>
              </tr>

              <tr>
                <th colSpan="4" rowSpan="4" className="THcol">
                  Terrestrial Planets
                </th>

                <td colSpan="2">Mercury</td>
                <td colSpan="2">0.330</td>
                <td colSpan="2">4,879</td>
                <td colSpan="2">5427</td>
                <td colSpan="2">3.7</td>
              </tr>

              <tr>
                <td colSpan="2">Venus</td>
                <td colSpan="2">4.87</td>
                <td colSpan="2">12,104</td>
                <td colSpan="2">5243</td>
                <td colSpan="2">8.9</td>
              </tr>

              <tr>
                <td colSpan="2">Earth</td>
                <td colSpan="2">5.97</td>
                <td colSpan="2">12,756</td>
                <td colSpan="2">5514</td>
                <td colSpan="2">9.8</td>
              </tr>

              <tr>
                <td colSpan="2">Mars</td>
                <td colSpan="2">0.642</td>
                <td colSpan="2">6,792</td>
                <td colSpan="2">3933</td>
                <td colSpan="2">3.7</td>
              </tr>

          
              <tr>
                <th colSpan="2" rowSpan="4" className="THcol">
                  Jovian Planets
                </th>

                <th colSpan="2" rowSpan="2" className="THcol">
                  Gas Giants
                </th>

                <td colSpan="2">Jupiter</td>
                <td colSpan="2">1898</td>
                <td colSpan="2">142,984</td>
                <td colSpan="2">1326</td>
                <td colSpan="2">23.1</td>
              </tr>

              <tr>
                <td colSpan="2">Saturn</td>
                <td colSpan="2">568</td>
                <td colSpan="2">120,536</td>
                <td colSpan="2">687</td>
                <td colSpan="2">9.0</td>
              </tr>

              <tr>
                <th colSpan="2" rowSpan="2" className="THcol">
                  Ice Giants
                </th>

                <td colSpan="2">Uranus</td>
                <td colSpan="2">86.8</td>
                <td colSpan="2">51,118</td>
                <td colSpan="2">1271</td>
                <td colSpan="2">8.7</td>
              </tr>

              <tr>
                <td colSpan="2">Neptune</td>
                <td colSpan="2">102</td>
                <td colSpan="2">49,528</td>
                <td colSpan="2">1638</td>
                <td colSpan="2">11.0</td>
              </tr>


              <tr>
                <th colSpan="4" className="THcol">
                  Dwarf Planets
                </th>

                <td colSpan="2">Pluto</td>
                <td colSpan="2">0.0146</td>
                <td colSpan="2">2,370</td>
                <td colSpan="2">2095</td>
                <td colSpan="2">0.7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default CTA;