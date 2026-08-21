import { useEffect, useState } from 'react';
import profilePhoto from './assets/Profile.jpg';
import smartVillageImage from './assets/smart-village.png';

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from 'react-icons/fa';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
  const handleScroll = () => {
    const button = document.querySelector('.back-to-top');

    if (button) {
      button.classList.toggle('show', window.scrollY > 400);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-content">
          <h2 className="logo">My Portfolio</h2>

          <div className={`nav-links ${menuOpen ? 'menu-open' : ''}`}>
  <a href="#home" onClick={() => setMenuOpen(false)}>
    Home
  </a>

  <a href="#about" onClick={() => setMenuOpen(false)}>
    About
  </a>

  <a href="#projects" onClick={() => setMenuOpen(false)}>
    Projects
  </a>

  <a href="#contact" onClick={() => setMenuOpen(false)}>
    Contact
  </a>
</div>

<button
  className="menu-button"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation menu"
>
  ☰
</button>
        </div>
      </nav>

     {/* Hero Section */}
<section id="home" className="hero">
  <div className="container hero-content">

    <div className="hero-text-content">
      <p className="hero-small">Hello, I'm</p>

      <h1>Rushikesh Potphode</h1>

      <h2>Student & Web Developer</h2>

      <p className="hero-description">
        I enjoy creating modern, responsive and user-friendly
        websites and applications. I love learning new technologies
        and turning ideas into real projects.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn primary-btn">
          View My Projects
        </a>

        <a href="#contact" className="btn secondary-btn">
          Contact Me
        </a>
      </div>

      {/* Social Links */}
<div className="social-links">

  <a
    href="https://github.com/RushxCode"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://www.instagram.com/rushikesh_61/"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="mailto:rushikeshpotphode335@email.com"
    aria-label="Email"
  >
    <FaEnvelope />
  </a>

</div>
</div>
    {/* Profile Photo */}
<div className="profile-container">
  <div className="profile-decoration decoration-one"></div>
  <div className="profile-decoration decoration-two"></div>

  <div className="profile-circle">
    <img
      src={profilePhoto}
      alt="Rushikesh Potphode"
      className="profile-photo"
    />
  </div>
</div>
</div>
</section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>

          <p>
            I'm a student interested in web development and technology.
            I enjoy building useful and responsive projects.
          </p>
        </div>
      </section>

      {/* Projects Section */}
     {/* Skills Section */}
<section id="skills" className="section skills-section">
  <div className="container">
    <div className="section-heading">
      <p className="section-label">What I Know</p>
      <h2>My Skills</h2>
      <p>
        Technologies and tools I am learning and using to build
        modern and responsive projects.
      </p>
    </div>

    <div className="skills-grid">

      <div className="skill-card">
        <div className="skill-icon">🌐</div>
        <h3>HTML</h3>
        <p>Building structured and accessible web pages.</p>
        <div className="skill-tag">Web Development</div>
      </div>

      <div className="skill-card">
        <div className="skill-icon">🎨</div>
        <h3>CSS</h3>
        <p>Creating responsive and attractive designs.</p>
        <div className="skill-tag">UI & Responsive Design</div>
      </div>

      <div className="skill-card">
        <div className="skill-icon">⚡</div>
        <h3>JavaScript</h3>
        <p>Adding interactive features to websites.</p>
        <div className="skill-tag">Programming</div>
      </div>

      <div className="skill-card">
        <div className="skill-icon">☕</div>
        <h3>Core Java</h3>
        <p>
          Java development: building applications and efficient
          back-end systems.
        </p>
        <div className="skill-tag">Programming</div>
      </div>

      <div className="skill-card">
        <div className="skill-icon">💻</div>
        <h3>C Programming</h3>
        <p>Logic building and core algorithmic development in C.</p>
        <div className="skill-tag">Programming</div>
      </div>

      <div className="skill-card">
        <div className="skill-icon">🔧</div>
        <h3>Git & GitHub</h3>
        <p>Managing and maintaining project code.</p>
        <div className="skill-tag">Version Control</div>
      </div>

    </div>
  </div>
</section>
{/* Projects Section */}
<section id="projects" className="section projects-section">
  <div className="container">

    <div className="section-heading">
      <p className="section-label">My Work</p>
      <h2>My Projects</h2>
      <p>
        A few projects I have built while learning and exploring
        web development.
      </p>
    </div>

    <div className="projects-grid">

      {/* Smart Village */}
      <div className="project-card featured-project">

        <img
          src={smartVillageImage}
          alt="Smart Village Project"
          className="project-image"
        />

        <div className="project-content">
          <span className="project-label">Featured Project</span>

          <h3>Smart Village</h3>

          <p>
            A responsive digital village management system with
            citizen management, authentication, complaints,
            alerts and other village management features.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>JavaScript</span>
            <span>Express</span>
          </div>

          <div className="project-buttons">
            <button className="btn primary-btn">
              View Project
            </button>

            <button className="btn secondary-btn">
              Details
            </button>
          </div>
        </div>

      </div>


      {/* My Portfolio */}
      <div className="project-card">

        <div className="project-placeholder">
          My Portfolio
        </div>

        <div className="project-content">

          <span className="project-label">Personal Project</span>

          <h3>My Portfolio</h3>

          <p>
            A responsive personal portfolio website created to
            showcase my skills, projects and learning journey.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-buttons">
            <button className="btn primary-btn">
              Current Project
            </button>
          </div>

        </div>

      </div>

    </div>
  </div>
</section>
      {/* Contact Section */}
<section id="contact" className="section contact-section">
  <div className="container">

    <div className="section-heading">
      <p className="section-label">Get In Touch</p>
      <h2>Contact Me</h2>
      <p>
        Feel free to connect with me through any of the platforms below.
      </p>
    </div>

    <div className="contact-cards">

      {/* Email */}
      <a
        href="mailto:rushikeshpotphode335@email.com"
        className="contact-card"
      >
        <FaEnvelope className="contact-icon" />
        <div>
          <h3>Email</h3>
          <p>rushikeshpotphode335@email.com</p>
        </div>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/RushxCode"
        target="_blank"
        rel="noreferrer"
        className="contact-card"
      >
        <FaGithub className="contact-icon" />
        <div>
          <h3>GitHub</h3>
          <p>View my projects</p>
        </div>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
        className="contact-card"
      >
        <FaLinkedin className="contact-icon" />
        <div>
          <h3>LinkedIn</h3>
          <p>Connect with me</p>
        </div>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/rushikesh_potphode09"
        target="_blank"
        rel="noreferrer"
        className="contact-card"
      >
        <FaInstagram className="contact-icon" />
        <div>
          <h3>Instagram</h3>
          <p>@rushikesh_61</p>
        </div>
      </a>

    </div>
  </div>
</section>
<button
  className="back-to-top"
  onClick={scrollToTop}
  aria-label="Back to top"
>
  ↑
</button>
            {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p>© 2026 Rushikesh Potphode. All rights reserved.</p>

          <p className="footer-tech">
            Built with React
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
