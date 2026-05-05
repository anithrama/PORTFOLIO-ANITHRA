import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Marquee from 'react-fast-marquee';
import CountUp from 'react-countup';
import Tilt from 'react-parallax-tilt';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaPhoneAlt, 
  FaServer, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, 
  FaPython, FaGitAlt, FaLaptopCode, FaCode, FaRocket, FaPaintBrush 
} from 'react-icons/fa';

import { 
  personalInfo, summary, experience, education, 
  projects, skills, certifications
} from './data';

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
  <div className="flex flex-col items-center gap-2 p-2 text-text-dim hover:text-accent hover:-translate-y-1 transition-all duration-300 min-w-[70px] cursor-none">
    <div className="text-[40px] drop-shadow-md text-accent-secondary">{iconMap[name]}</div>
    <span className="text-xs font-mono text-center mt-1">{name}</span>
  </div>
);

const SectionHeader = ({ title }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center mb-10"
  >
    <h2 className="text-text-light text-[clamp(26px,5vw,32px)] font-semibold whitespace-nowrap">{title}</h2>
    <div className="block h-[1px] w-[300px] bg-bg-lightest ml-5 max-[768px]:w-[100px]"></div>
  </motion.div>
);

// --- Custom Cursor ---
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const updateHoverState = (e) => {
      const target = e.target;
      const isHoverable = target.closest('a') || target.closest('button') || target.closest('.hover-trigger');
      setIsHovering(!!isHoverable);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hovering' : ''} hidden md:block`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

// --- Safe Components ---
const SafeTypeAnimation = TypeAnimation.default || TypeAnimation.TypeAnimation || TypeAnimation;
const SafeCountUp = CountUp.default || CountUp;
const SafeMarquee = Marquee.default || Marquee;
const SafeTilt = Tilt.default || Tilt;

// --- Page Components ---

const Home = () => (
  <motion.section 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.8 }}
    className="min-h-[calc(100vh-150px)] flex flex-col justify-center items-start max-w-[1200px] mx-auto py-10" 
  >
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="flex-1 w-full z-10">

        
        <p className="text-accent font-mono mb-3">Hi, my name is</p>
        <h1 className="text-[clamp(40px,8vw,80px)] font-bold leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent animate-text-gradient pb-2">{personalInfo.name}.</h1>
        
        <h2 className="text-[clamp(24px,5vw,50px)] font-bold leading-[1.2] text-text-dim mb-6 min-h-[60px] md:min-h-[120px]">
          <SafeTypeAnimation
            sequence={[
              'I build things for the web.',
              1000,
              'I am a Web Developer.',
              1000,
              'I am a Python Enthusiast.',
              1000,
              'I build Full Stack Solutions.',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-accent-secondary"
          />
        </h2>
        
        <p className="text-text-dim max-w-[600px] text-lg mb-10 leading-relaxed">{summary}</p>
        
        <div className="flex flex-wrap items-center gap-6 max-[480px]:flex-col max-[480px]:items-start">
          <Link to="/projects" className="hover-trigger inline-block text-bg-dark bg-accent border border-accent rounded px-7 py-4 font-bold text-base leading-none transition-all duration-300 hover:bg-transparent hover:text-accent hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">View My Work</Link>
          <a href={`mailto:${personalInfo.email}`} className="hover-trigger inline-block text-accent bg-transparent border border-accent rounded px-7 py-4 font-mono text-base leading-none transition-all duration-300 hover:bg-accent-tint">Contact Me</a>
          <div className="flex gap-5 text-text-light text-2xl ml-auto md:ml-4 mt-4 md:mt-0">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover-trigger hover:text-accent hover:-translate-y-1 transition-all duration-300"><FaGithub /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover-trigger hover:text-accent hover:-translate-y-1 transition-all duration-300"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Right Image/Avatar */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex-1 w-full max-w-[280px] md:max-w-[400px] relative z-10 block mt-10 md:mt-0"
      >
        <div className="relative w-full aspect-square rounded-full flex items-center justify-center p-2">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent animate-[spin_10s_linear_infinite] opacity-50"></div>
          <div className="absolute inset-2 rounded-full border border-accent-secondary animate-[spin_15s_linear_infinite_reverse] opacity-30"></div>
          <div className="w-full h-full rounded-full bg-glass-bg border border-accent/30 overflow-hidden flex items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(16,185,129,0.2)]">
            <img src={`${import.meta.env.BASE_URL}web_dev_avatar.png`} alt="Web Developer Avatar" className="w-[120%] h-[120%] object-cover opacity-90 scale-110" />
          </div>
        </div>
      </motion.div>
    </div>

    {/* Animated Stats */}
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/5 z-10">
      {[
        { label: 'Projects Completed', value: 4, suffix: '+' },
        { label: 'Internships', value: 2, suffix: '+' },
        { label: 'Certifications', value: 3, suffix: '+' }
      ].map((stat, i) => (
        <div key={i} className="flex flex-col items-center md:items-start p-4 glass-panel rounded-xl border border-white/5 hover:border-accent/30 transition-colors">
          <span className="text-4xl font-bold text-text-light mb-2">
            <SafeCountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />{stat.suffix}
          </span>
          <span className="text-text-dim text-sm font-mono">{stat.label}</span>
        </div>
      ))}
    </div>
    
    {/* Tech Marquee */}
    <div className="w-full mt-16 z-10">
      <p className="text-text-dim font-mono text-sm mb-4">Core Technologies</p>
      <div className="glass-panel py-4 rounded-xl border border-white/5 overflow-hidden">
        <SafeMarquee gradient={false} speed={40} className="overflow-hidden">
          {[...skills.programming, ...skills.webTechnologies, ...skills.database].map((tech, i) => (
            <div key={i} className="flex items-center gap-2 mx-8 text-text-light/80 hover:text-accent transition-colors">
              <span className="text-2xl text-accent-secondary">{iconMap[tech] || <FaCode />}</span>
              <span className="font-mono text-sm">{tech}</span>
            </div>
          ))}
        </SafeMarquee>
      </div>
    </div>
  </motion.section>
);

const About = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="py-[30px] pb-[100px] max-w-[1000px] mx-auto z-10 relative"
  >
    <SectionHeader title="About Me" />
    <div className="grid grid-cols-[3fr_2fr] gap-[50px] max-[768px]:grid-cols-1">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-text-dim text-lg mb-8 leading-relaxed">I am a highly motivated Web Developer based in Kerala, with a strong foundation in modern frontend and backend technologies. I enjoy building dynamic applications, integrating databases, and designing sleek user interfaces.</p>
        
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-6 text-text-light flex items-center gap-2">
            <FaCode className="text-accent" /> Technical Expertise
          </h3>
          
          <div className="space-y-6">
            {/* Animated Progress Bars for top skills */}
            {[
              { name: 'Python / Django', val: 85 },
              { name: 'React / JavaScript', val: 80 },
              { name: 'HTML / CSS', val: 90 },
              { name: 'MySQL / Database', val: 75 }
            ].map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm font-mono mb-2">
                  <span className="text-text-light">{skill.name}</span>
                  <span className="text-accent">{skill.val}%</span>
                </div>
                <div className="w-full h-2 bg-bg-lightest rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.val}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-accent to-accent-secondary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h4 className="text-text-light mb-4 text-base">Other Tools</h4>
            <div className="flex flex-wrap gap-4">
              {skills.tools.map(s => <SkillIcon key={s} name={s} />)}
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="glass-panel p-8 rounded-xl border border-white/5">
          <h3 className="text-xl font-semibold mb-6 text-text-light flex items-center gap-2">
            <FaLaptopCode className="text-accent-secondary" /> Education Journey
          </h3>
          <div className="border-l-2 border-accent/20 pl-5 space-y-8">
            {education.map((edu, i) => (
              <div key={`edu-${i}`} className="relative">
                <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                <div>
                  <span className="inline-block px-2 py-1 bg-accent/10 text-accent font-mono text-xs rounded mb-2">{edu.date}</span>
                  <h4 className="text-text-light font-medium text-lg leading-tight mb-1">{edu.degree}</h4>
                  <p className="text-text-dim text-sm">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
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
    className="py-[30px] pb-[100px] max-w-[1000px] mx-auto z-10 relative"
  >
    <SectionHeader title="Professional Experience" />
    <div className="flex flex-col gap-8">
      {experience.map((exp, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group glass-panel p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.2)]"
        >
          <div className="flex justify-between items-start mb-6 pb-6 border-b border-white/5 max-[480px]:flex-col gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-text-light group-hover:text-accent transition-colors">{exp.role}</h3>
              <p className="text-accent-secondary font-mono mt-2">{exp.company}</p>
            </div>
            <span className="px-3 py-1 bg-white/5 rounded-full font-mono text-sm text-text-dim whitespace-nowrap">{exp.date}</span>
          </div>
          <ul className="grid gap-3">
            {exp.details.map((detail, j) => (
              <li key={j} className="flex items-start gap-3 text-text-dim leading-relaxed">
                <span className="text-accent mt-1">▹</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const Services = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="py-[30px] pb-[100px] max-w-[1000px] mx-auto z-10 relative"
  >
    <SectionHeader title="What I Do" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: "Frontend Development", icon: <FaPaintBrush />, desc: "Creating responsive, interactive, and beautiful user interfaces using React, HTML, CSS, and modern styling libraries." },
        { title: "Backend Solutions", icon: <FaServer />, desc: "Building robust, scalable REST APIs and server-side logic using Python and the Django framework." },
        { title: "Database Management", icon: <FaDatabase />, desc: "Designing and optimizing database schemas, writing efficient queries, and integrating MySQL with web applications." }
      ].map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="hover-trigger glass-panel p-8 rounded-xl border border-white/5 hover:border-accent-secondary group transition-all duration-500 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="text-4xl text-accent mb-6 group-hover:text-accent-secondary transition-colors duration-500 group-hover:scale-110 transform origin-left">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-text-light mb-4 relative z-10">{service.title}</h3>
          <p className="text-text-dim text-sm leading-relaxed relative z-10">{service.desc}</p>
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
    className="py-[30px] pb-[100px] max-w-[1000px] mx-auto z-10 relative"
  >
    <SectionHeader title="Featured Projects" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <SafeTilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full">
            <div className="group glass-panel p-8 h-full flex flex-col rounded-xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
              
              <div className="flex justify-between items-center mb-6 relative z-10">
                <FaRocket className="text-3xl text-accent-secondary" />
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="hover-trigger text-text-dim hover:text-accent p-2 transition-colors">
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-text-light mb-4 group-hover:text-accent transition-colors relative z-10">{project.title}</h3>
              
              <div className="text-text-dim text-sm mb-8 flex-grow relative z-10">
                <ul className="space-y-2">
                  {project.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-accent text-xs mt-1">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <ul className="flex flex-wrap gap-2 font-mono text-xs text-accent-tertiary relative z-10">
                {project.tech.map((tech, j) => (
                  <li key={j} className="bg-accent-tertiary/10 px-3 py-1 rounded-full">{tech}</li>
                ))}
              </ul>
            </div>
          </SafeTilt>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const Certifications = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="py-[30px] pb-[100px] max-w-[1000px] mx-auto z-10 relative"
  >
    <SectionHeader title="Certifications" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {certifications.map((cert, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="hover-trigger group glass-panel overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(16,185,129,0.3)] hover:border-accent rounded-xl flex flex-col h-full border border-white/5"
        >
          <div className="w-full h-[200px] overflow-hidden bg-bg-lightest relative rounded-t-xl flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-80 z-10"></div>
             {cert.image ? (
               <img 
                 src={`${import.meta.env.BASE_URL}${cert.image.replace(/^\//, '')}`} 
                 alt={cert.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                 onError={(e) => { e.currentTarget.style.display = 'none'; }}
               />
             ) : null}
             <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <span className="font-mono text-xs font-bold text-accent px-2 py-1 bg-bg-dark/80 rounded w-fit mb-2 backdrop-blur-sm border border-accent/20">{cert.date}</span>
             </div>
          </div>
          <div className="p-6 flex flex-col flex-grow bg-glass-bg">
            <h3 className="text-xl font-bold text-text-light mb-2 group-hover:text-accent-secondary transition-colors">{cert.title}</h3>
            <p className="text-text-dim text-sm font-mono">{cert.provider}</p>
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
    className="py-[30px] pb-[100px] max-w-[600px] mx-auto text-center mb-24 z-10 relative"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-panel p-12 rounded-2xl border border-accent/20 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary"></div>
      
      <p className="text-accent font-mono text-[16px] block mb-4">What's Next?</p>
      <h2 className="text-[clamp(40px,5vw,60px)] text-text-light mb-6 font-bold">Get In Touch</h2>
      <p className="text-text-dim text-[18px] mb-10 leading-relaxed">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <a href={`mailto:${personalInfo.email}`} className="hover-trigger inline-block text-bg-dark bg-accent rounded px-10 py-5 font-bold text-lg transition-all duration-300 hover:bg-transparent hover:text-accent border-2 border-accent shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] animate-pulse-glow">
        Say Hello
      </a>
      
      <div className="mt-12 text-text-dim/80 space-y-4 font-mono text-sm">
        <p className="flex items-center justify-center gap-3"><FaPhoneAlt className="text-accent" /> {personalInfo.phone}</p>
        <p className="flex items-center justify-center gap-3"><FaEnvelope className="text-accent-secondary" /> {personalInfo.email}</p>
        <p className="mt-4 opacity-70">{personalInfo.location}</p>
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
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="bg-bg-dark text-text-light font-sans selection:bg-accent/20 selection:text-text-light relative min-h-screen">
      <CustomCursor />
      <ScrollToTop />
      
      {/* Background Elements */}
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3 hidden md:block"></div>
      </div>

      <div className="px-[150px] max-[1080px]:px-[100px] max-[768px]:px-[30px] max-[480px]:px-[15px] relative z-10 overflow-hidden">

        <nav className={`fixed top-0 left-0 w-full px-[50px] py-[25px] flex items-center z-[100] transition-all duration-300 bg-transparent ${scrolled ? 'py-[15px] bg-[#0d0b14e6] backdrop-blur-[16px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] border-b border-white/5 max-[768px]:py-2.5 max-[768px]:px-[15px]' : ''} max-[768px]:p-[15px] max-[768px]:flex-col max-[768px]:max-w-full`}>
          <div className="w-full max-w-[1400px] mx-auto flex justify-center items-center">
            <ul className="flex flex-row gap-2 max-[768px]:w-full max-[768px]:overflow-x-auto max-[768px]:justify-start max-[768px]:pb-2 max-[768px]:scrollbar-hide max-[480px]:gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || (item.path === '/' && location.pathname === '');
                return (
                  <li key={item.name} className="relative">
                    <NavLink 
                      to={item.path} 
                      className={`hover-trigger font-mono text-[13px] text-text-light px-5 py-2.5 rounded transition-colors duration-300 flex items-center justify-center uppercase tracking-[1px] hover:text-accent max-[768px]:px-2 max-[768px]:py-2 max-[768px]:text-[10px] max-[768px]:tracking-normal max-[480px]:text-[9px] max-[480px]:px-1.5 ${isActive ? 'text-accent' : ''}`}
                      end={item.path === '/'}
                    >
                      {item.name}
                    </NavLink>
                    {isActive && (
                      <motion.div 
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
                      />
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>

        <main style={{ paddingTop: '120px', minHeight: '80vh' }}>
          <AnimatedRoutes />
        </main>

        <footer className="text-center py-[40px] text-text-dim font-mono text-[13px] border-t border-white/5 mt-10 relative z-10">
          <div className="flex justify-center gap-6 mb-6">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover-trigger text-text-dim text-2xl hover:text-accent transition-colors"><FaGithub /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover-trigger text-text-dim text-2xl hover:text-accent transition-colors"><FaLinkedin /></a>
          </div>
          <p className="mb-2">Designed & Built with <span className="text-accent">♥</span></p>
          <p className="mt-2 text-text-dim/60">Contact: <a href={`mailto:${personalInfo.email}`} className="hover-trigger hover:text-accent transition-colors">{personalInfo.email}</a></p>
          <p className="mt-4 text-text-dim/40">&copy; {new Date().getFullYear()} {personalInfo.name}</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
