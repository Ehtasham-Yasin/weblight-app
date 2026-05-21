import React from "react";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const cursorRef = React.useRef(null);

  React.useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <main className="page">
      <div className="custom-cursor" ref={cursorRef}>
        ✦
      </div>
      <nav className="navbar">
        <img src="/logo.png" alt="Weblight Logo" className="brandLogo" />

        <div className="navPill">
          <button className="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span>Menu</span>
            <span className="hamburger">☰</span>
          </button>

          <div className={menuOpen ? "mobileMenu active" : "mobileMenu"}>
            <a href="#about">ABOUT</a>
            <a href="#work">WORK</a>
            <a href="#services">SERVICE</a>
            <a href="#pricing">PRICING</a>
            <a href="#benefits">BENEFITS</a>
            <a href="#contact">REACH OUT</a>

            <a href="#contact" className="mobileLogin">
              LOGIN <span>➜</span>
            </a>
          </div>

          <div className="desktopLinks">
            <a href="#about">ABOUT</a>
            <a href="#work">WORK</a>
            <a href="#services">SERVICE</a>
            <a href="#pricing">PRICING</a>
            <a href="#benefits">BENEFITS</a>
            <a href="#contact">REACH OUT</a>
          </div>
        </div>

        <a href="#contact" className="loginBtn">
          LOGIN <span>➜</span>
        </a>
      </nav>
      <section className="hero">
        <h1>
          WE DEVELOP,
          <br />
          YOU SHINE
        </h1>
        <p>LIGHT THE PATH TO YOUR SUCCESS</p>

        <div className="heroBtns">
          <button>View Work</button>
          <button className="outline">Book a Call</button>
        </div>
      </section>

      <section className="trusted">
        <p>TRUSTED BY</p>

        <div className="logoMarquee">
          <div className="logoTrack">
            {[
              "LinkedIn",
              "Behance",
              "Dribbble",
              "Instagram",
              "fiverr.",
              "Upwork",
              "99d",
              "LinkedIn",
              "Behance",
              "Dribbble",
              "Instagram",
              "fiverr.",
              "Upwork",
              "99d",
            ].map((logo, index) => (
              <span key={index}>{logo}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div>
          <h3>ABOUT ME</h3>

          <p>
            I am Ehtasham Yasin, a passionate Development Engineer, UI/UX
            Designer, and Front-End Developer focused on creating modern digital
            experiences that combine clean design with powerful functionality. I
            specialize in building responsive websites, landing pages, and
            user-friendly interfaces that help businesses grow online and
            establish a strong digital presence.
            <br />
            <br />
            With expertise in front-end technologies, responsive design systems,
            and modern UI/UX principles, I create solutions that are visually
            engaging, performance optimized, and tailored to client goals.
          </p>

          <a
            href="https://www.dropbox.com/scl/fi/db5f81sb6yv250rvgboo6/ehtasham_yasin_cv.pdf?rlkey=zbrjfjmhax9tprpojyc65pbf7&st=k5u4v2mg&dl=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View CV</button>
          </a>
        </div>

        <div className="profile">
          <img src="/profile.jpg" alt="Ehtasham Yasin" />
        </div>
      </section>

      <section className="section" id="work">
        <h3>SELECTED WORK</h3>

        <div className="workGrid">
          {[
            {
              title: "Portfolio Website",
              type: "React / Frontend",
              image: "/project1.png",
            },
            {
              title: "UI Dashboard",
              type: "UI/UX Design",
              image: "/project2.png",
            },
            {
              title: "Landing Page",
              type: "Web Design",
              image: "/project3.png",
            },
            {
              title: "Mobile App UI",
              type: "Figma Design",
              image: "/project4.png",
            },
          ].map((project) => (
            <div className="workCard" key={project.title}>
              <img src={project.image} alt={project.title} />
              <div className="workInfo">
                <p>{project.type}</p>
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
      </section>

      <section className="services" id="services">
        <p className="tag">SERVICES</p>
        <h2>DESIGNING DIGITAL EXPERIENCES THAT INSPIRE AND ENGAGE</h2>

        <div className="cards">
          {[
            "UI/UX Design",
            "Branding & Identity",
            "Web Design & Development",
            "Interaction Design",
            "Custom Integration",
            "Mobile App Design",
          ].map((s) => (
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
              <p>
                Great work, clean design, fast delivery and professional
                communication.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing" id="pricing">
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
          {[
            "Specialist-led Design",
            "Quick Delivery",
            "Endless Edits",
            "Agile & Extendable",
            "Stable Monthly Charge",
            "No Agreements",
          ].map((b) => (
            <div className="benefit" key={b}>
              <div className="circle">✓</div>
              <h4>{b}</h4>
              <p>Flexible service made for growing brands.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
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