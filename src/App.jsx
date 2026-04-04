import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaPhoneAlt, FaServer, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaPython, FaGitAlt, FaLaptopCode } from 'react-icons/fa';

const iconMap = {
  "Python": <FaPython />,
  "JavaScript": <FaJs />,
  "HTML": <FaHtml5 />,
  "CSS": <FaCss3Alt />,
  "React": <FaReact />,
  "Angular": <FaAngular />,
  "Django": <FaServer />,
  "REST API": <FaServer />,
  "MySQL": <FaDatabase />,
  "Git": <FaGitAlt />,
  "GitHub": <FaGithub />,
  "VS Code": <FaLaptopCode />,
  "Google Colab": <FaLaptopCode />,
  "MySQL Workbench": <FaDatabase />
};

const SkillIcon = ({ name }) => (
  <div className="flex flex-col items-center gap-2 p-2 text-text-dim hover:text-accent hover:-translate-y-1 transition-all duration-300 min-w-[70px]">
    <div className="text-[40px] drop-shadow-md">{iconMap[name]}</div>
    <span className="text-xs font-mono text-center mt-1">{name}</span>
  </div>
);
import { 
  personalInfo, summary, experience, education, 
  projects, skills, certifications
} from './data';

const SectionHeader = ({ title }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-center mb-10"
  >
    <h2 className="text-text-light text-[clamp(26px,5vw,32px)] font-semibold whitespace-nowrap">{title}</h2>
    <div className="block h-[1px] w-[300px] bg-bg-lightest ml-5 max-[768px]:w-[100px]"></div>
  </motion.div>
);

// --- Page Components ---

const Home = () => (
  <motion.section 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.8 }}
    className="min-h-[calc(100vh-150px)] flex flex-col justify-center items-start max-w-[1000px] mx-auto" 
  >
    <div className="w-full">
      <p className="text-accent font-mono mb-5">Hi, my name is</p>
      <h1 className="text-[clamp(40px,8vw,80px)] font-bold leading-[1.1] text-text-light">{personalInfo.name}.</h1>
      <h2 className="text-[clamp(40px,8vw,80px)] font-bold leading-[1.1] text-text-dim mb-8">I build things for the web.</h2>
      <p className="text-text-dim max-w-[600px] text-xl mb-12">{summary}</p>
      
      <div className="flex items-center gap-8 max-[480px]:flex-col max-[480px]:items-start">
        <Link to="/projects" className="inline-block text-accent bg-transparent border border-accent rounded px-7 py-5 font-mono text-base leading-none transition-all duration-300 hover:bg-accent-tint">Check out my work</Link>
        <div className="flex gap-5 text-text-light text-2xl">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all duration-300"><FaGithub /></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent hover:-translate-y-1 transition-all duration-300"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  </motion.section>
);

const About = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="py-[30px] pb-[100px] max-w-[1000px] mx-auto"
  >
    <SectionHeader title="About Me" />
    <div className="grid grid-cols-[3fr_2fr] gap-[50px] max-[768px]:grid-cols-1">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-text-dim text-lg mb-4">I am a highly motivated Web Developer based in Kerala, with a strong foundation in modern frontend and backend technologies. I enjoy building dynamic applications, integrating databases, and designing sleek user interfaces.</p>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-text-light">Technical Arsenal</h3>
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-text-light mb-4 text-base">Languages & Frameworks</h4>
              <div className="flex flex-wrap gap-4">
                {[...skills.programming, ...skills.webTechnologies].map(s => <SkillIcon key={s} name={s} />)}
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-text-light mb-4 text-base">Tools & Database</h4>
              <div className="flex flex-wrap gap-4">
                {[...skills.database, ...skills.tools].map(s => <SkillIcon key={s} name={s} />)}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-xl font-semibold mb-4 text-text-light">Education</h3>
        <div className="mt-5 border-l-2 border-bg-lightest pl-5">
          {education.map((edu, i) => (
            <div key={`edu-${i}`} className="relative mb-7 last:mb-0">
              <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]"></div>
              <div>
                <span className="font-mono text-[13px] text-accent">{edu.date}</span>
                <h4 className="text-text-light my-1">{edu.degree}</h4>
                <p className="text-text-dim text-sm">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-4 mt-8 text-text-light">Certifications</h3>
        <div className="mt-5 border-l-2 border-bg-lightest pl-5">
          {certifications.map((cert, i) => (
            <div key={`cert-${i}`} className="relative mb-7 last:mb-0">
              <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]"></div>
              <div>
                <span className="font-mono text-[13px] text-accent">{cert.date}</span>
                <h4 className="text-text-light my-1">{cert.title}</h4>
                <p className="text-text-dim text-sm">{cert.provider}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);

const Experience = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="py-[30px] pb-[100px] max-w-[1000px] mx-auto"
  >
    <SectionHeader title="Where I've Worked" />
    <div className="flex flex-col gap-5">
      {experience.map((exp, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass-panel p-[30px] transition-all duration-300 hover:-translate-y-1 hover:border-accent"
        >
          <div className="flex justify-between items-start mb-5 border-b border-bg-lightest pb-4 max-[480px]:flex-col">
            <div>
              <h3 className="text-xl font-semibold text-text-light">{exp.role}</h3>
              <p className="text-accent text-[18px] mt-1">{exp.company}</p>
            </div>
            <span className="font-mono text-sm text-text-dim max-[480px]:mt-2.5">{exp.date}</span>
          </div>
          <ul className="pl-5 list-none">
            {exp.details.map((detail, j) => (
              <li key={j} className="relative text-text-dim mb-2.5 before:content-['▹'] before:absolute before:-left-5 before:text-accent">{detail}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const Projects = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="py-[30px] pb-[100px] max-w-[1000px] mx-auto"
  >
    <SectionHeader title="Some Things I've Built" />
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
      {projects.map((project, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="group glass-panel p-[30px] h-full flex transition-all duration-300 hover:-translate-y-1 hover:border-accent"
        >
          <div className="flex flex-col justify-between w-full">
            <div>
              <p className="text-accent font-mono text-[13px] mb-2.5">Featured Project</p>
              <h3 className="text-text-light text-2xl mb-5 group-hover:text-accent transition-all duration-300">{project.title}</h3>
              <div className="text-text-dim text-[15px]">
                <ul className="pl-5 list-disc">
                  {project.details.map((detail, j) => <li key={j} className="mb-1">{detail}</li>)}
                </ul>
              </div>
            </div>
            <div>
              <ul className="flex flex-wrap gap-2.5 mt-5 font-mono text-xs text-text-dim">
                {project.tech.map((tech, j) => <li key={j}>{tech}</li>)}
              </ul>
              <div className="mt-5 flex gap-4">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label="External Link" className="text-text-light text-xl hover:text-accent transition-colors duration-300">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const Contact = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="py-[30px] pb-[100px] max-w-[600px] mx-auto text-center mb-24"
  >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <p className="text-accent font-mono text-[16px] block mb-2.5">What's Next?</p>
      <h2 className="text-[clamp(40px,5vw,60px)] text-text-light mb-5 font-bold">Get In Touch</h2>
      <p className="text-text-dim text-[18px] mb-12">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <a href={`mailto:${personalInfo.email}`} className="inline-block text-accent bg-transparent border border-accent rounded px-7 py-5 font-mono text-base leading-none transition-all duration-300 hover:bg-accent-tint">
        Say Hello
      </a>
      
      <div className="mt-12 text-text-dim space-y-4">
        <p className="flex items-center justify-center gap-2"><FaPhoneAlt className="text-accent" /> {personalInfo.phone}</p>
        <p className="flex items-center justify-center gap-2"><FaEnvelope className="text-accent" /> {personalInfo.email}</p>
        <p>{personalInfo.location}</p>
      </div>
    </motion.div>
  </motion.section>
);

// --- Layout component ---
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="bg-bg-dark text-text-light font-sans selection:bg-accent-tint selection:text-text-light">
      <Router>
        <ScrollToTop />
        <div className="px-[150px] max-[1080px]:px-[100px] max-[768px]:px-[50px] max-[480px]:px-[25px]">
          <div className="bg-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
          </div>

          <nav className={`fixed top-0 left-0 w-full px-[50px] py-[25px] flex items-center z-[100] transition-all duration-300 bg-transparent ${scrolled ? 'py-[15px] bg-[#161224d9] backdrop-blur-[16px] shadow-[0_10px_30px_-10px_rgba(2,12,27,0.8)] border-b border-[rgba(192,132,252,0.2)] max-[768px]:py-2.5 max-[768px]:px-[15px]' : ''} max-[768px]:p-[15px] max-[768px]:flex-row max-[768px]:max-w-full`}>
            <div className="w-full max-w-[1400px] mx-auto flex justify-end items-center max-[768px]:justify-end">
              <ul className="flex flex-row gap-5 max-[768px]:gap-2 max-[768px]:w-full max-[768px]:justify-end max-[480px]:gap-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink 
                      to={item.path} 
                      className={({ isActive }) => `font-mono text-[13px] text-text-light px-5 py-2.5 rounded transition-all duration-300 flex items-center justify-center uppercase tracking-[1px] hover:bg-accent-tint hover:text-accent max-[768px]:px-3 max-[768px]:py-2 max-[768px]:text-[11px] max-[768px]:tracking-normal max-[480px]:text-[9px] max-[480px]:px-1 max-[480px]:py-2 ${isActive ? 'bg-accent-tint !text-accent' : ''}`}
                      end={item.path === '/'}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <main style={{ paddingTop: '100px', minHeight: '80vh' }}>
            <AnimatedRoutes />
          </main>

          <footer className="text-center py-[30px] text-text-dim font-mono text-[13px]">
            <div className="hidden max-[768px]:flex justify-center gap-5 mb-[15px]">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-text-light text-xl hover:text-accent transition-colors"><FaGithub /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-text-light text-xl hover:text-accent transition-colors"><FaLinkedin /></a>
            </div>
            <p>Built with React Router, Framer Motion & Tailwind CSS</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} {personalInfo.name}</p>
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
