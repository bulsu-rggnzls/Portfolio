import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
