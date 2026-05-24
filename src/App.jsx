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
        </div>
      </section>

      <section className="services" id="services">
        <p className="tag">SERVICES</p>

        <h2>BUILDING DIGITAL EXPERIENCES THAT GROW BRANDS</h2>

        <div className="serviceGrid">
          {[
            {
              title: "FULL STACK DEVELOPMENT",
              image: "/service1.jpg",
              items: [
                "React.js",
                "Node.js",
                "MongoDB",
                "REST APIs",
                "Authentication",
                "Database Integration",
                "Responsive Apps",
                "Deployment",
              ],
            },
            {
              title: "FRONT-END DEVELOPMENT",
              image: "/service2.jpg",
              items: [
                "React Development",
                "Responsive Layouts",
                "Modern UI",
                "Animations",
                "Landing Pages",
                "Performance Optimization",
                "Interactive Design",
                "Clean Code",
              ],
            },
            {
              title: "UI/UX DESIGN",
              image: "/service3.jpg",
              items: [
                "Wireframing",
                "Figma Design",
                "User Experience",
                "Responsive Design",
                "Prototyping",
                "Design Systems",
                "Mobile UI",
                "Usability Testing",
              ],
            },
            {
              title: "BRANDING & IDENTITY",
              image: "/service4.jpg",
              items: [
                "Logo Design",
                "Visual Identity",
                "Brand Strategy",
                "Style Guides",
                "Typography",
                "Color Systems",
                "Creative Direction",
                "Social Assets",
              ],
            },
            {
              title: "WEB APPLICATIONS",
              image: "/service5.jpg",
              items: [
                "Dashboards",
                "Admin Panels",
                "SaaS Platforms",
                "Authentication",
                "API Integration",
                "CMS Systems",
                "Real-time Features",
                "Scalable Architecture",
              ],
            },
            {
              title: "MODERN WEB EXPERIENCES",
              image: "/service6.jpg",
              items: [
                "SEO Friendly",
                "Fast Performance",
                "Framer Motion",
                "Interactive UI",
                "Mobile First",
                "Modern Interfaces",
                "Creative Development",
                "Conversion Focused",
              ],
            },
          ].map((service) => (
            <div className="serviceCard" key={service.title}>
              <img src={service.image} alt={service.title} />

              <h3>{service.title}</h3>

              <div className="serviceItems">
                {service.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <img
          src="/logo-dark.png"
          alt="Weblight logo"
          className="testimonialLogo"
        />
        <h2>WHY OUR CLIENTS CHERISH US</h2>

        <p className="testimonialSub">
          EXPLORE THE STORIES THAT FUEL OUR PASSION, TOLD BY THOSE WHO INSPIRE OUR
          GREATEST WORK.
        </p>

        <div className="testimonialGrid">
          {[
            {
              name: "Danielle Tschudi",
              role: "Founder & CEO @Outshifter",
              text: "Weblight is that rare find in the design world, a name that should stand alone. They exceeded my expectations with professionalism, thoughtful responses, and punctual delivery.",
            },
            {
              name: "Flores, Juanita",
              role: "HR Director at Logics",
              text: "Weblight has been a game-changer for our brand. They provide a unique mix of creativity, fast delivery, and crystal clear communication.",
            },
            {
              name: "Salwa",
              role: "Head of Product at Zentry",
              text: "Working with the Weblight team has been a transformative experience. They quickly turned our initial ideas into compelling designs.",
            },
          ].map((item) => (
            <div className="testimonialCard" key={item.name}>
              <div className="clientTop">
                <div className="clientAvatar"></div>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                </div>
              </div>

              <p className="clientText">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        className="pricing" id="pricing">
        <p className="pricingTag">PRICING</p>

        <h2>MEMBER BENEFITS PLANS</h2>

        <p className="pricingSub">
          AFFORDABLE, CUSTOMIZED DESIGN SOLUTIONS THAT ELEVATE YOUR BRAND AND FIT YOUR BUDGET.
        </p>
        <div className="pricingLine" style={{ "--percent": "20%" }}>
          <input
            type="range"
            min="0"
            max="500"
            defaultValue="100"
            className="userSlider"
            onInput={(e) => {
              const value = e.target.value;
              const percent = `${(value / 500) * 100}%`;

              e.currentTarget.parentElement.style.setProperty("--percent", percent);

              document.getElementById("userCount").innerText = `${value} users`;
            }}
          />

          <span id="userCount">100 users</span>
        </div>
        <div className="priceGrid">
          {[
            {
              name: "Starter",
              price: "$199",
              note: "Best for startups & personal brands",
              button: "Subscribe Now",
              features: [
                "One project at a time",
                "Responsive frontend development",
                "Landing page design",
                "React / Next.js development",
                "Basic API integration",
                "Unlimited revisions",
                "2–4 days delivery",
                "Slack communication",
                "Deployment support",
              ],
            },
            {
              name: "Professional",
              price: "$399",
              note: "Perfect for growing businesses",
              button: "Subscribe Now",
              features: [
                "Two active projects at a time",
                "Full-stack web development",
                "Frontend + backend architecture",
                "REST API integration",
                "Authentication systems",
                "Admin dashboard development",
                "Database integration",
                "Unlimited revisions",
                "Priority Slack support",
                "3–7 days delivery",
                "Deployment & hosting support",
              ],
            },
            {
              name: "Enterprise",
              price: "$699",
              note: "Custom solutions for complex products",
              button: "Request Now",
              features: [
                "Custom SaaS platform development",
                "Scalable full-stack architecture",
                "Admin panels & CMS systems",
                "Real-time application features",
                "Advanced API integrations",
                "Cloud deployment & DevOps",
                "Team collaboration support",
                "Performance optimization",
                "UI/UX system design",
                "Long-term maintenance",
                "Dedicated project support",
              ],
            },
          ].map((plan) => (
            <div className="priceCard" key={plan.name}>
              <h4>{plan.name}</h4>
              <h3>
                from <span>{plan.price}</span>
                <small>/ month</small>
              </h3>
              <p>{plan.note}</p>

              <button>{plan.button} →</button>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>● {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits" id="benefits">
        <p className="benefitsTag">BENEFITS</p>

        <h2>MEMBER BENEFITS</h2>

        <p className="benefitsSub">
          EXPERIENCE LIMITLESS DESIGN POSSIBILITIES WITH WEB LIGHT. OUR MEMBERSHIP
          GUARANTEES EXCLUSIVE CREATIVITY AND PERSONALIZED SUPPORT, EVERY STEP OF THE WAY.
        </p>

        <div className="benefitGrid">
          {[
            {
              icon: "✎",
              title: "SPECIALIST-LED DESIGN",
              text: "IMPRESSIVE THOUGHTS VISUALIZED CREATIVELY BY OUR DESIGN PROFESSIONALS",
            },
            {
              icon: "✓",
              title: "QUICK DELIVERY",
              text: "INCREDIBLE DESIGNS CRAFTED FOR YOU, DELIVERED IN JUST A FEW DAYS",
            },
            {
              icon: "↻",
              title: "ENDLESS EDITS",
              text: "MODIFY, ADJUST, AND REFINE — LIMITLESS REVISIONS UNTIL IT'S RIGHT",
            },
            {
              icon: "⚙",
              title: "AGILE & EXTENDABLE",
              text: "UPGRADE, DOWNGRADE, OR STOP ANYTIME — YOU’RE ALWAYS IN CONTROL",
            },
            {
              icon: "⌯",
              title: "STABLE MONTHLY CHARGE",
              text: "SAME PRICE EVERY MONTH — NO SURPRISES, NO HIDDEN FEES",
            },
            {
              icon: "▮",
              title: "NO AGREEMENTS, NO TROUBLE",
              text: "STUNNING DESIGNS, NO FINE PRINT OR CONTRACTS",
            },
          ].map((b) => (
            <div className="benefit" key={b.title}>
              <div className="benefitIcon">{b.icon}</div>
              <h4>{b.title}</h4>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="faq" id="faq">
        {[
          {
            q: "Why choose Weblight?",
            a: "Weblight creates clean, modern and responsive digital experiences that help brands look professional and grow online.",
          },
          {
            q: "In which programs do you design?",
            a: "I design in Figma, Framer, Webflow, and also build websites using React, HTML, CSS and JavaScript.",
          },
          {
            q: "How do I manage my subscription?",
            a: "You can pause, cancel, upgrade or downgrade your plan anytime based on your design needs.",
          },
          {
            q: "What if I have only one design request?",
            a: "You can use a project based plan for one-time design or development work.",
          },
          {
            q: "How fast is the delivery?",
            a: "Most designs are delivered within 2–7 days depending on the project size.",
          },
          {
            q: "Is my data secure in Weblight?",
            a: "Yes, your project files, brand details and personal information are handled privately and securely.",
          },
        ].map((item) => (
          <details className="faqItem" key={item.q}>
            <summary>
              {item.q}
              <span>+</span>
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </section>
      <section className="contact" id="contact">
        <div className="contactInfo">
          <h3>Contact Information</h3>

          <p>Say something to start a live project.</p>

          <a href="mailto:ehtasham.yasin.dev@gmail.com">
            📧 ehtasham.yasin.dev@gmail.com
          </a>

          <span>📍 Innsbruck, Austria</span>
        </div>

        <form
          className="contactForm"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="87c80b05-232c-4d38-bea4-8d5958b1c82b"
          />

          <input
            name="firstName"
            placeholder="First Name"
            required
          />

          <input
            name="lastName"
            placeholder="Last Name"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </section>
      <div className="footerTop">
        <a
          href="https://www.linkedin.com/in/ehtasham-yasin/"
          target="_blank"
          rel="noreferrer"
        >
          <span>in</span>
          LinkedIn
          <b>→</b>
        </a>

        <a
          href="https://github.com/Ehtasham-Yasin"
          target="_blank"
          rel="noreferrer"
        >
          <span>⌘</span>
          GitHub
          <b>→</b>
        </a>

        <a
          href="https://dribbble.com/ehtasham-yasin"
          target="_blank"
          rel="noreferrer"
        >
          <span>◌</span>
          Dribbble
          <b>→</b>
        </a>

        <a
          href="https://www.behance.net/shani2malik24"
          target="_blank"
          rel="noreferrer"
        >
          <span>Bē</span>
          Behance
          <b>→</b>
        </a>
      </div>
    </main>
  );
}