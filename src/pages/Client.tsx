import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

// Dummy data for clients
const clients = [
  { name: "Garware", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=100&h=80&q=80" },
  { name: "Century real", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=100&h=80&q=80" },
  { name: "NACIN,", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=100&h=80&q=80" },
  { name: "Sainik", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=facearea&w=100&h=80&q=80" },
  { name: "Woxsen", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=facearea&w=100&h=80&q=80" },
  { name: "Global mineral", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=facearea&w=100&h=80&q=80" },
  { name: "Sreenidhi", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=100&h=80&q=80" },
  { name: "CRPF dept.", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=facearea&w=100&h=80&q=80" },
  { name: "Airforce", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=100&h=80&q=80" },
  { name: "Airforce", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=100&h=80&q=80" },
  { name: "Rscape pvt ltd", img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=facearea&w=100&h=80&q=80" },
  { name: "TATA", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=facearea&w=100&h=80&q=80" },
  { name: "Sainik School", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=facearea&w=100&h=80&q=80" },
  { name: "MICHEZO", img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=100&h=80&q=80" },
  { name: "Great SportsTech", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=100&h=80&q=80" },
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