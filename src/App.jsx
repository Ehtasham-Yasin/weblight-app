import "./App.css";
import React from "react";

export default function App() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }

        .page {
          background: #022f25;
          color: #efffd1;
          font-family: Arial, sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .container {
          width: min(100% - 32px, 1200px);
          margin: 0 auto;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 32px 0;
        }

        .logo {
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 700;
        }

        .nav-links {
          display: flex;
          gap: 32px;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 18px;
        }

        .hero {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 80px 0;
        }

        .hero h1 {
          font-size: clamp(46px, 9vw, 100px);
          line-height: 1.05;
          margin: 0;
        }

        .hero p {
          color: #d9ff81;
          letter-spacing: 4px;
          font-size: clamp(14px, 2vw, 22px);
          margin-top: 30px;
        }

        .buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 50px;
          flex-wrap: wrap;
        }

        button {
          padding: 16px 36px;
          border-radius: 40px;
          font-weight: 700;
          cursor: pointer;
          border: none;
        }

        .btn-light {
          background: white;
          color: #022f25;
        }

        .btn-outline {
          background: transparent;
          border: 1px solid white;
          color: white;
        }

        .about {
          background: #d9ff81;
          color: #022f25;
          border-radius: 32px;
          padding: clamp(28px, 6vw, 60px);
          margin: 60px auto;
        }

        .about h2 {
          font-size: clamp(28px, 5vw, 44px);
        }

        .about p {
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.8;
          max-width: 720px;
        }

        .section-title {
          text-align: center;
          font-size: clamp(30px, 5vw, 48px);
          margin: 70px 0 40px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .card {
          background: #0d4537;
          min-height: 250px;
          border-radius: 24px;
          padding: 28px;
        }

        .card h3 {
          margin-top: 0;
        }

        .contact {
          background: #0d4537;
          border-radius: 32px;
          padding: clamp(28px, 6vw, 60px);
          margin: 70px auto;
        }

        input, textarea {
          width: 100%;
          padding: 18px;
          margin-bottom: 20px;
          border-radius: 12px;
          border: none;
          font-size: 16px;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }

          nav {
            flex-direction: column;
            gap: 20px;
          }

          .nav-links {
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .hero {
            min-height: 70vh;
            padding: 60px 0;
          }

          .buttons {
            flex-direction: column;
            width: 100%;
          }

          button {
            width: 100%;
          }

          .nav-links a {
            font-size: 15px;
          }
        }
      `}</style>

      <main className="page">
        <div className="container">
          <nav>
            <div className="logo">WEBLIGHT</div>

            <div className="nav-links">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Work</a>
              <a href="#">Contact</a>
            </div>
          </nav>

          <section className="hero">
            <h1>
              WE DEVELOP,
              <br />
              YOU SHINE
            </h1>

            <p>LIGHT THE PATH TO YOUR SUCCESS</p>

            <div className="buttons">
              <button className="btn-light">VIEW WORK</button>
              <button className="btn-outline">BOOK A CALL</button>
            </div>
          </section>

          <section className="about">
            <h2>ABOUT ME</h2>
            <p>
              I help businesses create modern digital experiences with clean UI,
              responsive design and beautiful development solutions.
            </p>
            <button className="btn-outline">VIEW CV</button>
          </section>

          <h2 className="section-title">SELECTED WORK</h2>

          <section className="grid">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </section>

          <h2 className="section-title">SERVICES</h2>

          <section className="grid">
            <div className="card">
              <h3>UI/UX DESIGN</h3>
              <p>Beautiful interfaces and modern digital experiences.</p>
            </div>

            <div className="card">
              <h3>WEB DEVELOPMENT</h3>
              <p>Responsive websites and landing pages with clean code.</p>
            </div>

            <div className="card">
              <h3>BRANDING</h3>
              <p>Strong visual identity and modern brand systems.</p>
            </div>
          </section>

          <section className="contact">
            <h2>CONTACT</h2>

            <input placeholder="Your Name" />
            <input placeholder="Your Email" />
            <textarea rows="6" placeholder="Message"></textarea>

            <button className="btn-light">SEND MESSAGE</button>
          </section>
        </div>
      </main>
    </>
  );
}