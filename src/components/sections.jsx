import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { GlowCard, MagneticButton } from './ui'
import { Timeline } from './timeline'
import profileImage from '../assets/profile.png'

// ============ Hero Section ============
export function Hero({ typedText, scrollTo }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>
        </motion.div>

        <div className="hero-title-wrapper">
          <div className="overflow-hidden">
            <motion.h1
              className="hero-title"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0, 0.2, 1] }}
            >
              Hi, I'm <span className="gradient-text">Saagnik</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.p
              className="hero-subtitle"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0, 0.2, 1] }}
            >
              AI/ML Engineer
            </motion.p>
          </div>
        </div>

        <motion.p
          className="hero-typed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {typedText}<span className="cursor"></span>
        </motion.p>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Building intelligent systems with deep learning, LLMs, and computer vision.
          <br />B.Tech CSE Student at JGEC • Open to Internships
        </motion.p>

        <motion.div
          className="hero-nav"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {['About', 'Experience', 'Skills', 'Projects'].map((item, i) => (
            <motion.button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="hero-nav-link"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <span className="hero-nav-text">{item}</span>
            </motion.button>
          ))}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-resume-btn"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span>Resume</span>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollTo('about')}
      >
        <span className="scroll-text">Scroll Down</span>
        <motion.div
          className="scroll-arrow"
          animate={{ opacity: [1, 0.3, 1], y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}

// ============ About Section ============
export function About() {
  return (
    <section id="about" className="section">
      <div className="section-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </motion.div>

        <div className="about-grid">
          <GlowCard className="about-card">
            <div className="about-image">
              <img src={profileImage} alt="About Me" className="about-profile-img" />
              <div className="image-border" />
            </div>
          </GlowCard>

          <div className="about-text">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Hey! 👋 I'm an aspiring <span className="highlight">AI/ML Engineer</span> passionate
              about building intelligent systems that solve real-world problems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Currently pursuing <span className="highlight">B.Tech in Computer Science</span> at
              Jalpaiguri Government Engineering College (2022-2026). I've completed multiple
              <span className="highlight"> Coursera certifications</span> in ML, Deep Learning, and NLP,
              building hands-on expertise through personal projects and continuous learning.
            </motion.p>

            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat">
                <span className="stat-number">3rd</span>
                <span className="stat-label">Year Student</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============ Experience Section ============
const experienceData = [
  {
    title: "2025",
    content: (
      <div className="exp-card">
        <h3 className="exp-role">Project Manager Intern</h3>
        <p className="exp-company">Pehchaan The Street School (Trust)</p>
        <span className="exp-duration">Jun 2025 - Aug 2025 · 3 months</span>
        <p className="exp-desc">
          Led project planning and coordination for educational initiatives. Managed timelines,
          collaborated with cross-functional teams, and ensured successful delivery of community-focused programs.
        </p>
        <div className="exp-skills">
          <span className="exp-skill-tag">Project Planning</span>
          <span className="exp-skill-tag">Team Coordination</span>
          <span className="exp-skill-tag">Leadership</span>
        </div>
      </div>
    )
  },
  {
    title: "2024",
    content: (
      <div className="exp-card">
        <h3 className="exp-role">Social Media Marketing Intern</h3>
        <p className="exp-company">Codefeast</p>
        <span className="exp-duration">Sep 2024 - Dec 2024 · 4 months · Remote</span>
        <p className="exp-desc">
          Developed and executed social media strategies to boost brand visibility. Analyzed engagement metrics,
          created content calendars, and optimized campaigns for maximum reach.
        </p>
        <div className="exp-skills">
          <span className="exp-skill-tag">Content Strategy</span>
          <span className="exp-skill-tag">Analytics</span>
          <span className="exp-skill-tag">Digital Marketing</span>
        </div>
      </div>
    )
  }
]

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience</h2>
          <div className="section-line" />
        </motion.div>

        <div className="experience-wrapper">
          <Timeline data={experienceData} />
        </div>
      </div>
    </section>
  )
}

// ============ Skills Section ============
const skills = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Hugging Face', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
  { name: 'Kaggle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg' },
  { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
]

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Tools</h2>
          <div className="section-line" />
        </motion.div>

        <div className="skills-logos-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-logo-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============ Projects Section ============
const techLogos = {
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  'Matplotlib': 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg',
  'Seaborn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Jupyter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg'
}

const projects = [
  {
    title: "Titanic Survival Analysis",
    desc: "Analyzed passenger data to understand survival patterns. I cleaned complex raw data, handled missing values, and created visualizations to reveal how factors like gender and class affected survival rates.",
    tech: ["Python", "Pandas", "NumPy", "Seaborn"],
    link: "https://github.com/Saagnik-Mondal/Data-Cleaning-and-Analysis"
  },
  {
    title: "NYC Taxi Trends",
    desc: "Investigated NYC taxi trip data to uncover urban travel patterns. I cleaned and processed the dataset to remove anomalies, then analyzed how rush hours and trip durations vary throughout the week.",
    tech: ["Python", "Pandas", "Matplotlib", "Jupyter"],
    link: "https://github.com/Saagnik-Mondal/NYC-Taxi-Data-Wrangling"
  }
]

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-content">
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line" />
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="project-number">0{i + 1}</span>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-footer">
                  <div className="project-tech">
                    {project.tech.map(t => (
                      <div key={t} className="project-tech-icon" title={t}>
                        <img src={techLogos[t]} alt={t} />
                      </div>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
                    <span>View</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H10M17 7V14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/Saagnik-Mondal" target="_blank" rel="noopener noreferrer" className="more-link">
            View All Projects on GitHub
            <span className="arrow">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ============ Contact Section ============
export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-content center">
        <motion.div
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line" />
        </motion.div>

        <motion.h3
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Build Something <span className="gradient-text">Amazing</span>
        </motion.h3>

        <motion.p
          className="contact-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I'm currently open to new opportunities and interesting projects.
          Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <MagneticButton
            href="mailto:sm2744@cse.jgec.ac.in"
            className="contact-btn"
          >
            <span>Say Hello</span>
            <span className="btn-emoji">👋</span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
