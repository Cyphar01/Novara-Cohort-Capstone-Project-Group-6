import React from 'react';

function CTA() {
  const styles = {
    section: {
      padding: '80px 0',
      backgroundColor: '#ffffff',
      fontFamily: '"Segoe UI", Roboto, Arial, sans-serif',
      color: '#333',
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 20px',
    },
    heading: {
      color: '#2b59c3', // Matches the design's heading blue
      fontSize: '1.8rem',
      fontWeight: '700',
      marginBottom: '8px',
      textAlign: 'left',
    },
    subText: {
      fontSize: '0.9rem',
      color: '#4b5563',
      lineHeight: '1.5',
      marginBottom: '40px',
      textAlign: 'left',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '10px',
      border: '1px solid #d1d5db',
    },
    caption: {
      textAlign: 'left',
      fontWeight: '600',
      color: '#111827',
      padding: '10px 0',
      fontSize: '0.85rem',
    },
    headerRow: {
      backgroundColor: '#2b59c3', // The specific royal blue from Figma
      color: 'white',
      fontWeight: '600',
      fontSize: '0.8rem',
      textAlign: 'center',
      border: '1px solid #ffffff',
      padding: '12px 8px',
    },
    categoryCell: {
      backgroundColor: '#dbeafe', // The light blue/grey background for groups
      color: '#111827',
      fontWeight: '600',
      fontSize: '0.8rem',
      textAlign: 'center',
      border: '1px solid #93c5fd',
      padding: '10px',
    },
    dataCell: {
      padding: '12px',
      textAlign: 'center',
      border: '1px solid #e5e7eb',
      fontSize: '0.85rem',
      backgroundColor: '#ffffff',
    }
  };

  return (
    <section style={styles.section} id="Planetary-Facts">
      <div style={styles.container}>
        <h2 style={styles.heading}>Planetary Facts at a Glance</h2>

        <p style={styles.subText}>
          Below is a comparative table of major planets in our solar system.
          The data highlights key physical properties used by astronomers and
          researchers worldwide.
        </p>

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <caption style={styles.caption}>
              Data about the planets of our solar system (Source: NASA)
            </caption>

            <thead>
              <tr>
                <th colSpan="4" style={styles.headerRow}>Group</th>
                <th colSpan="2" style={styles.headerRow}>Name</th>
                <th colSpan="2" style={styles.headerRow}>Mass (10<sup>24</sup> kg)</th>
                <th colSpan="2" style={styles.headerRow}>Diameter (km)</th>
                <th colSpan="2" style={styles.headerRow}>Density (kg/m<sup>3</sup>)</th>
                <th colSpan="2" style={styles.headerRow}>Gravity (m/s<sup>2</sup>)</th>
              </tr>
            </thead>

            <tbody>
              {/* Terrestrial Planets */}
              <tr>
                <th colSpan="4" rowSpan="4" style={styles.categoryCell}>Terrestrial Planets</th>
                <td colSpan="2" style={styles.dataCell}>Mercury</td>
                <td colSpan="2" style={styles.dataCell}>0.330</td>
                <td colSpan="2" style={styles.dataCell}>4,879</td>
                <td colSpan="2" style={styles.dataCell}>5,427</td>
                <td colSpan="2" style={styles.dataCell}>3.7</td>
              </tr>
      
              <tr>
                <td colSpan="2" style={styles.dataCell}>Venus</td>
                <td colSpan="2" style={styles.dataCell}>4.87</td>
                <td colSpan="2" style={styles.dataCell}>12,104</td>
                <td colSpan="2" style={styles.dataCell}>5,243</td>
                <td colSpan="2" style={styles.dataCell}>8.9</td>
              </tr>
        
              <tr>
                <td colSpan="2" style={styles.dataCell}>Earth</td>
                <td colSpan="2" style={styles.dataCell}>5.97</td>
                <td colSpan="2" style={styles.dataCell}>12,756</td>
                <td colSpan="2" style={styles.dataCell}>5,514</td>
                <td colSpan="2" style={styles.dataCell}>9.8</td>
              </tr>
      
              <tr>
                <td colSpan="2" style={styles.dataCell}>Mars</td>
                <td colSpan="2" style={styles.dataCell}>0.642</td>
                <td colSpan="2" style={styles.dataCell}>6,792</td>
                <td colSpan="2" style={styles.dataCell}>3,933</td>
                <td colSpan="2" style={styles.dataCell}>3.7</td>
              </tr>

              {/* Jovian Planets */}
              <tr>
                <th colSpan="2" rowSpan="4" style={styles.categoryCell}>Jovian Planets</th>
                <th colSpan="2" rowSpan="2" style={styles.categoryCell}>Gas Giants</th>
                <td colSpan="2" style={styles.dataCell}>Jupiter</td>
                <td colSpan="2" style={styles.dataCell}>1,898</td>
                <td colSpan="2" style={styles.dataCell}>142,984</td>
                <td colSpan="2" style={styles.dataCell}>1,326</td>
                <td colSpan="2" style={styles.dataCell}>23.1</td>
              </tr>
           
              <tr>
                <td colSpan="2" style={styles.dataCell}>Saturn</td>
                <td colSpan="2" style={styles.dataCell}>568</td>
                <td colSpan="2" style={styles.dataCell}>120,536</td>
                <td colSpan="2" style={styles.dataCell}>687</td>
                <td colSpan="2" style={styles.dataCell}>9.0</td>
              </tr>
           
              <tr>
                <th colSpan="2" rowSpan="2" style={styles.categoryCell}>Ice Giants</th>
                <td colSpan="2" style={styles.dataCell}>Uranus</td>
                <td colSpan="2" style={styles.dataCell}>86.8</td>
                <td colSpan="2" style={styles.dataCell}>51,118</td>
                <td colSpan="2" style={styles.dataCell}>1,271</td>
                <td colSpan="2" style={styles.dataCell}>8.7</td>
              </tr>
      
              <tr>
                <td colSpan="2" style={styles.dataCell}>Neptune</td>
                <td colSpan="2" style={styles.dataCell}>102</td>
                <td colSpan="2" style={styles.dataCell}>49,528</td>
                <td colSpan="2" style={styles.dataCell}>1,638</td>
                <td colSpan="2" style={styles.dataCell}>11.0</td>
              </tr>

              {/* Dwarf Planets */}
              <tr>
                <th colSpan="4" style={styles.categoryCell}>Dwarf Planets</th>
                <td colSpan="2" style={styles.dataCell}>Pluto</td>
                <td colSpan="2" style={styles.dataCell}>0.0146</td>
                <td colSpan="2" style={styles.dataCell}>2,370</td>
                <td colSpan="2" style={styles.dataCell}>2,095</td>
                <td colSpan="2" style={styles.dataCell}>0.7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default CTA;