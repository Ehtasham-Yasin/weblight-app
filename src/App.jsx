import "./App.css";

export default function App() {
  return (
    <main className="page">
      <nav className="navbar">
        <div className="logo">WEBLIGHT</div>
        <div className="navLinks">
          <a>Home</a>
          <a>About</a>
          <a>Work</a>
          <a>Services</a>
          <a>Pricing</a>
          <a>Contact</a>
        </div>
        <button className="navBtn">Book a Call</button>
      </nav>

      <section className="hero">
        <h1>WE DEVELOP,<br />YOU SHINE</h1>
        <p>LIGHT THE PATH TO YOUR SUCCESS</p>
        <div className="heroBtns">
          <button>View Work</button>
          <button className="outline">Book a Call</button>
        </div>
      </section>

      <section className="trusted">
        <p>TRUSTED BY</p>
        <div>
          <span>Upwork</span>
          <span>fiverr.</span>
          <span>Calendly</span>
          <span>Freelancer</span>
        </div>
      </section>

      <section className="about">
        <div>
          <h3>ABOUT ME</h3>
          <p>
            Hi, I am a designer and developer. I create clean websites,
            modern UI designs, landing pages, and digital experiences that help
            brands grow online.
          </p>
          <button>View CV</button>
        </div>
        <div className="profile"></div>
      </section>

      <section className="section">
        <h3>SELECTED WORK</h3>
        <div className="workGrid">
          {["Project 1", "Project 2", "Project 3", "Project 4"].map((item) => (
            <div className="workCard" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="services">
        <p className="tag">SERVICES</p>
        <h2>DESIGNING DIGITAL EXPERIENCES THAT INSPIRE AND ENGAGE</h2>
        <div className="cards">
          {["UI/UX Design", "Branding & Identity", "Web Design & Development", "Interaction Design", "Custom Integration", "Mobile App Design"].map((s) => (
            <div className="card" key={s}>
              <h4>{s}</h4>
              <p>Modern, responsive and user-friendly digital solution.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>WHAT OUR CLIENTS LOVE ABOUT US</h2>
        <div className="cards">
          {["Prisha Janki", "Sara", "Lola Duke"].map((name) => (
            <div className="card" key={name}>
              <h4>{name}</h4>
              <p>Great work, clean design, fast delivery and professional communication.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing">
        <p className="tag">PRICING</p>
        <h2>MEMBER BENEFITS PLANS</h2>
        <div className="priceGrid">
          {[
            ["Standard", "$99"],
            ["Pro", "$299"],
            ["Project Based", "$499"],
          ].map(([name, price]) => (
            <div className="priceCard" key={name}>
              <h4>{name}</h4>
              <h3>from {price}</h3>
              <button>Select Plan</button>
              <ul>
                <li>Custom design</li>
                <li>Responsive layout</li>
                <li>Quick delivery</li>
                <li>Support included</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits">
        <p className="tag">BENEFITS</p>
        <h2>MEMBER BENEFITS</h2>
        <div className="benefitGrid">
          {["Specialist-led Design", "Quick Delivery", "Endless Edits", "Agile & Extendable", "Stable Monthly Charge", "No Agreements"].map((b) => (
            <div className="benefit" key={b}>
              <div className="circle">✓</div>
              <h4>{b}</h4>
              <p>Flexible service made for growing brands.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <div>
          <h3>Contact Information</h3>
          <p>Say something to start a live project.</p>
          <p>📧 hello@weblight.com</p>
          <p>📍 Innsbruck, Austria</p>
        </div>
        <form>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="Email" />
          <input placeholder="Phone Number" />
          <textarea placeholder="Message"></textarea>
          <button>Send Message</button>
        </form>
      </section>

      <footer>
        <h2>WEBLIGHT</h2>
        <p>We develop, you shine.</p>
      </footer>
    </main>
  );
}