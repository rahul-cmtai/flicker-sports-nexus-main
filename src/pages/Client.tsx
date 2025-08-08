import React from "react";
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import airforceAcademyBangalore from '/assets/clients/airforce-academy-bangalore.png';
import airforceAcademyHyderabad from '/assets/clients/airforce-academy-hyderabad.jpg';
import centuryRealEstate from '/assets/clients/century-real-estate-holding-pvt-ltd.png';
import crpfDeptJammu from '/assets/clients/crpf-dept-jammu.jpg';
import garwareTechnicalFibres from '/assets/clients/garware-technical-fibres-ltd.jpg';
import greatSportsTech from '/assets/clients/great-sports-tech-limited.jpg';
import mechezoSports from '/assets/clients/mechezo-sports-pvt-ltd.jpg';
import sainikSchoolSambalpur from '/assets/clients/sainik-school-sambalpur-logo.jpg';
import sreenidhiDeccanFootball from '/assets/clients/sreenidhi-deccan-football-club-pvt-ltd-hyderabad.png';
import tataJamshedpur from '/assets/clients/tata-jamshedpur.jpg';
import woxsenUniversity from '/assets/clients/woxsen-university-hyderabad.jpg';

// Real client data with actual images (all available files)
const clients = [
  { name: "Air Force Academy Bangalore", img: '/assets/clients/airforce-academy-bangalore.png' },
  { name: "Air Force Academy Hyderabad", img: '/assets/clients/airforce-academy-hyderabad.jpg' },
  { name: "Century Real Estate Holding Pvt Ltd", img: '/assets/clients/century-real-estate-holding-pvt-ltd.png' },
  { name: "CRPF Department Jammu", img: '/assets/clients/crpf-dept-jammu.jpg' },
  { name: "Garware Technical Fibres Ltd", img: '/assets/clients/garware-technical-fibres-ltd.jpg' },
  { name: "Great Sports Tech Limited", img: '/assets/clients/great-sports-tech-limited.jpg' },
  { name: "Mechezo Sports Pvt Ltd", img: '/assets/clients/mechezo-sports-pvt-ltd.jpg' },
  { name: "Sainik School Sambalpur", img: '/assets/clients/sainik-school-sambalpur-logo.jpg' },
  { name: "Sreenidhi Deccan Football Club Pvt Ltd Hyderabad", img: '/assets/clients/sreenidhi-deccan-football-club-pvt-ltd-hyderabad.png' },
  { name: "Tata Jamshedpur", img: '/assets/clients/tata-jamshedpur.jpg' },
  { name: "Woxsen University Hyderabad", img: '/assets/clients/woxsen-university-hyderabad.jpg' },
  { name: "School Of Kings", img: '/assets/clients/IMG-20250808-WA0010.jpg' },
  { name: "National College Institute", img: '/assets/clients/IMG-20250808-WA0011.jpg' },
  { name: "Lovely Professional University Punjab", img: '/assets/clients/IMG-20250808-WA0012.jpg' },
  { name: "LPU University", img: '/assets/clients/IMG-20250808-WA0013.jpg' }
];

const Client = () => {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: "60vh", padding: "2rem 0" }}>
        <h2 style={{ fontWeight: 700, marginBottom: "2rem", marginLeft: "1rem" }}>OUR CLIENTS</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          {clients.map((client, idx) => (
            <div
              key={idx}
              style={{
                width: 170,
                minHeight: 200,
                background: "#fff",
                borderRadius: 8,
                boxShadow: "0 2px 8px #0001",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
              }}
            >
              <img
                src={client.img}
                alt={client.name}
                style={{ maxWidth: 100, maxHeight: 80, marginBottom: 16, objectFit: "contain" }}
                onError={e => (e.currentTarget.src = "https://via.placeholder.com/100x80?text=No+Image")}
              />
              <span style={{ fontWeight: 600, textAlign: "center" }}>{client.name}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Client;