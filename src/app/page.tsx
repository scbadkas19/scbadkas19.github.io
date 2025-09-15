import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Projects from '../components/home/Projects';
import Experience from '../components/home/Experience';
import Certifications from '../components/home/Certifications';
import Skills from '../components/home/Skills';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      
      <Projects />
      <Experience />      
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}


