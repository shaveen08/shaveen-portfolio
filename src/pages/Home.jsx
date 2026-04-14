import "../styles/Home.css";

import ProjectUiUxCard from "../components/ProjectUiUxCard";
import ProjectComponent from "../components/ProjectDevCard";

import uiuxProjects from "../data/uiuxProjects.json";
import frontendProjects from "../data/frontendProjects.json";
import shaveenProfile from "../assets/img/profile-picture.png";
import { HugeiconsIcon } from "@hugeicons/react";

import htmlIcon from "../assets/icons/html-icon.svg";
import cssIcon from "../assets/icons/css-icon.svg";
import javaScriptIcon from "../assets/icons/javascipt-icon.svg";
import reactIcon from "../assets/icons/react-icon.svg";
import figmaIcon from "../assets/icons/figma-icon.svg";
import photoshopIcon from "../assets/icons/photoshop-icon.svg";
import illustratorIcon from "../assets/icons/illustrator-icon.svg";

import {
  Mailbox01Icon,
  Download01Icon,
  ArrowUpRight01Icon,
  CallIcon,
  Location01Icon,
  Email,
  GithubIcon,
  Moon02Icon,
  Sun01Icon,
  Behance01Icon,
} from "@hugeicons/core-free-icons";
import { useEffect, useState } from "react";

// ── Data ─────────────────────────────────────────────────────────────────────

const skillIcons = [
  { src: htmlIcon, label: "HTML" },
  { src: cssIcon, label: "CSS" },
  { src: javaScriptIcon, label: "JavaScript" },
  { src: reactIcon, label: "React" },
  { src: figmaIcon, label: "Figma" },
  { src: photoshopIcon, label: "Photoshop" },
  { src: illustratorIcon, label: "Illustrator" },
];

const contactItems = [
  {
    icon: <HugeiconsIcon icon={Email} color="#ea580c" size={20} />,
    title: "Email",
    info: "shaveen9384@gmail.com",
    href: "mailto:shaveen9384@gmail.com",
  },
  {
    icon: <HugeiconsIcon icon={CallIcon} color="#ea580c" size={20} />,
    title: "Phone",
    info: "+91 93606 74856",
    href: "tel:+919360674856",
  },
  {
    icon: <HugeiconsIcon icon={Location01Icon} color="#ea580c" size={20} />,
    title: "Location",
    info: "Chennai, Tamil Nadu, India",
    href: null,
  },
  {
    icon: <HugeiconsIcon icon={GithubIcon} color="#ea580c" size={20} />,
    title: "GitHub",
    info: "https://github.com/shaveen08",
    href: "https://github.com/shaveen08",
  },
  {
    icon: <HugeiconsIcon icon={Behance01Icon} color="#ea580c" size={20} />,
    title: "GitHub",
    info: "https://www.behance.net/shaveenkumar4",
    href: "https://www.behance.net/shaveenkumar4",
  },
];

const stats = [
  { num: "14+", label: "Months experience" },
  { num: "10+", label: "Projects shipped" },
  { num: "3+", label: "Case studies" },
  { num: "2", label: "Degrees earned" },
];

const timelineItems = [
  {
    emoji: "💼",
    title: "UI/UX Designer — ThirdI Technologies Pvt. Ltd.",
    sub: "Designed web & mobile interfaces, conducted user research, and built wireframes and prototypes in Figma.",
    date: "2023 – Present",
  },
  {
    emoji: "🎓",
    title: "MCA — University of Madras",
    sub: "Master of Computer Applications. Advanced study in software engineering, databases, and system design.",
    date: "2021 – 2023",
  },
  {
    emoji: "📚",
    title: "MERN Stack Certification — FITA Academy",
    sub: "Hands-on training in MongoDB, Express, React, and Node.js.",
    date: "In Progress",
  },
];

const skillBlocks = [
  {
    category: "Frontend",
    pills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "REST APIs", "Fetch API"],
  },
  {
    category: "Design",
    pills: ["Figma", "Photoshop", "Illustrator", "Wireframing", "Prototyping"],
  },
  {
    category: "UX Practice",
    pills: ["User Research", "Usability Testing", "WCAG / A11y", "Journey Mapping", "Information Architecture"],
  },
  {
    category: "Dev Tools",
    pills: ["Git & GitHub", "GitHub Pages", "VS Code", "npm"],
  },
  {
    category: "Currently Learning",
    pills: ["Node.js", "MongoDB", "Express.js", "MERN Stack"],
  },
  {
    category: "Soft Skills",
    pills: ["Design thinking", "Cross-functional collab", "Attention to detail", "Communication"],
  },
];

// ── Home Component ────────────────────────────────────────────────────────────

const Home = () => {
  const [activeTab, setActiveTab] = useState("uiux");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [backTopVisible, setBackTopVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  // Sync theme to <html> and localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Back-to-top visibility
  useEffect(() => {
    const onScroll = () => setBackTopVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }
    alert(`Thanks ${name}! Your message has been sent. I'll get back to you soon.`);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="home-container">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <header className="profile-header" id="home">
        <div className="profile-content">

          <div className="availability-badge">
            <span className="pulse-dot" />
            Open to work
          </div>

          <div className="profile-info">
            <h1 className="title">
              Hi, I'm Shaveen —{" "}
              <span className="highlight">UI/UX Designer</span>
              {" & "}
              <span className="highlight">Frontend Dev</span>
            </h1>
            <p className="desc">
              1+ year crafting user-centred web &amp; mobile interfaces — from wireframes to
              working code. I bridge the gap between design and engineering.
            </p>
          </div>

          {/* Skill icons */}
          <div className="skills">
            {skillIcons.map(({ src, label }) => (
              <div className="icon-frame" key={label} title={label}>
                <img src={src} alt={label} />
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="cta-buttons">
            <button className="btn primary" onClick={() => scrollTo("contact")}>
              Hire Me <HugeiconsIcon icon={Mailbox01Icon} size={18} />
            </button>
            <button className="btn secondary">
              Download CV <HugeiconsIcon icon={Download01Icon} size={18} />
            </button>
          </div>
        </div>

        {/* Profile image */}
        <div className="profile-image">
          <img src={shaveenProfile} alt="Shaveen Kumar" />
        </div>
      </header>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section className="about-section" id="about">
        <div className="about-grid">

          {/* Left — bio + stats */}
          <div>
            <p className="section-label">About Me</p>
            <h2 className="section-title">Designing with purpose,<br />building with code</h2>
            <p className="about-text" style={{ marginTop: 16 }}>
              I'm a UI/UX Designer and Frontend Developer based in Chennai, India. With 14 months
              of professional experience at ThirdI Technologies, I specialise in creating
              user-centred digital products that feel as good as they look.
            </p>
            <p className="about-text" style={{ marginTop: 12 }}>
              Holding an MCA from the University of Madras and currently completing my MERN Stack
              certification, I love sitting at the intersection of design thinking and engineering precision.
            </p>

            <div className="stats-grid">
              {stats.map(({ num, label }) => (
                <div className="stat-card" key={label}>
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — timeline */}
          <div>
            <p className="section-label">Experience &amp; Education</p>
            <div className="timeline">
              {timelineItems.map(({ emoji, title, sub, date }) => (
                <div className="timeline-item" key={title}>
                  <div className="tl-dot">{emoji}</div>
                  <div>
                    <div className="tl-title">{title}</div>
                    <div className="tl-sub">{sub}</div>
                    <div className="tl-date">{date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────── */}
      <section className="project-container" id="projects">
        <header className="header-container">
          <p className="section-label">Work</p>
          <h3 className="title">Projects &amp; Case Studies</h3>
          <p className="desc">Real-world projects showcasing my design process and frontend skills.</p>
        </header>

        {/* Tab bar */}
        <section className="projects-tab-bar">
          <div
            className={`tab ${activeTab === "uiux" ? "active" : ""}`}
            onClick={() => setActiveTab("uiux")}
          >
            UI/UX Design Projects
          </div>
          <div
            className={`tab ${activeTab === "frontend" ? "active" : ""}`}
            onClick={() => setActiveTab("frontend")}
          >
            Frontend Projects
          </div>
        </section>

        {activeTab === "uiux" && (
          <div className="project-grid">
            {uiuxProjects.map((project) => (
              <ProjectUiUxCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {activeTab === "frontend" && (
          <div className="project-grid">
            {frontendProjects.map((project) => (
              <ProjectComponent key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>

      {/* ── SKILLS ────────────────────────────────────────────── */}
      <section className="skills-section" id="skills">
        <p className="section-label">Toolkit</p>
        <h3 className="title">Skills &amp; Technologies</h3>
        <p className="desc" style={{ marginBottom: 32 }}>
          A blend of design tools and frontend technologies I use to bring ideas to life.
        </p>
        <div className="skills-block-grid">
          {skillBlocks.map(({ category, pills }) => (
            <div className="skill-block" key={category}>
              <div className="skill-block-title">{category}</div>
              <div className="skill-pills">
                {pills.map((pill) => (
                  <span className="skill-pill" key={pill}>{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────── */}
      <section className="contact-container" id="contact">

        {/* Left — header + quick links */}
        <div className="contact-us-header">
          <div className="header-container">
            <p className="section-label">Contact</p>
            <h3 className="title">Get in Touch</h3>
            <p className="desc">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>

          <div className="quick-contact-link">
            {contactItems.map(({ icon, title, info, href }) => (
              <div
                className="contact-info"
                key={title}
                onClick={() => href && window.open(href, href.startsWith("mailto") || href.startsWith("tel") ? "_self" : "_blank")}
                style={{ cursor: href ? "pointer" : "default" }}
              >
                <div className="contact-info-header">
                  <div className="icon-frame">{icon}</div>
                  <div className="contact-details">
                    <h4>{title}</h4>
                    <p>{info}</p>
                  </div>
                </div>
                {href && (
                  <div className="direct-link">
                    <HugeiconsIcon icon={ArrowUpRight01Icon} color="#ea580c" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-us-body">
          <div className="contact-us-form">
            <h4 className="form-title">Send a Message</h4>
            <p className="form-sub">I usually respond within 24 hours.</p>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleFormChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or opportunity…"
                  value={formData.message}
                  onChange={handleFormChange}
                />
              </div>
              <div className="submit-btn">
                <button type="submit">Send Message →</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ── BACK TO TOP ───────────────────────────────────────── */}
      <button
        className={`back-top-btn ${backTopVisible ? "visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>

      {/* ── THEME TOGGLE ──────────────────────────────────────── */}
      <button
        className="theme-toggle-float"
        onClick={() => setDarkMode((d) => !d)}
        aria-label="Toggle theme"
        title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <HugeiconsIcon icon={Sun01Icon} color="#fff" /> : <HugeiconsIcon icon={Moon02Icon} />}
      </button>

    </div>
  );
};

export default Home;