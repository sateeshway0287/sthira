import React from "react";

const services = [
  {
    title: "New Property Consultations",
    description: "Expert advice on buying new properties, from site visits to market analysis.",
    icon: "🏡",
  },
  {
    title: "Legal Document Verification",
    description: "We review and verify legal property documents for a safe and trusted transaction.",
    icon: "📑",
  },
  {
    title: "Secure Property Management",
    description: "Ongoing support for property maintenance, trusted vendor recommendations, and legal safety.",
    icon: "🔒",
  },
  {
    title: "Post-Sale Support",
    description: "Continued partnership for repairs, insurance, and documentation—even after the deal is closed.",
    icon: "🤝",
  },
];

export default function App() {
  return (
    <div style={{fontFamily: "Arial, sans-serif", background: "#f8f8ff", minHeight: "100vh", padding: "0"}}>
      <header style={{
        background: "#003366",
        color: "#fff",
        padding: "2rem 0",
        textAlign: "center"
      }}>
        <h1 style={{margin: 0, fontSize: "2.5rem"}}>Sthira Real-Estate Consultation</h1>
        <p style={{fontSize: "1.25rem", marginTop: "0.5rem"}}>Property peace-of-mind, from search to post-sale support</p>
      </header>

      <main style={{maxWidth: 900, margin: "2rem auto", padding: "1.5rem", background: "#fff", borderRadius: 12, boxShadow: "0 4px 24px #00336622"}}>
        <h2 style={{textAlign: "center", marginBottom: "2rem"}}>Our Core Services</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center"}}>
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "#f2f6fc",
                border: "1px solid #dde6ef",
                borderRadius: 8,
                padding: "1.5rem",
                minWidth: 220,
                flex: "1 1 220px",
                textAlign: "center",
                boxShadow: "0 2px 8px #00336609",
              }}
            >
              <div style={{fontSize: "2.5rem", marginBottom: 12}}>{service.icon}</div>
              <h3 style={{margin: "0.5rem 0 0.5rem"}}>{service.title}</h3>
              <p style={{fontSize: "1rem", color: "#333"}}>{service.description}</p>
            </div>
          ))}
        </div>

        <section style={{marginTop: "2.5rem", textAlign: "center"}}>
          <h2>Why Choose Us?</h2>
          <p>
            <b>Trust, transparency, and long-term support</b>—our experts work for your peace of mind.
            We partner with you from first property search to legal closure and beyond.
          </p>
        </section>

        <section style={{marginTop: "2.5rem", textAlign: "center"}}>
          <h2>Ready for a Consultation?</h2>
          <p>Contact us today for a free, no-obligation call about your property goals.</p>
          <a
            href="mailto:youremail@example.com"
            style={{
              display: "inline-block",
              marginTop: 16,
              background: "#003366",
              color: "#fff",
              textDecoration: "none",
              padding: "0.75rem 2rem",
              borderRadius: 5,
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            Book My Free Consultation
          </a>
        </section>
      </main>
    </div>
  );
}
