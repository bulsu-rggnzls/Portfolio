import IntroOverlay from './components/layout/IntroOverlay';
import Navbar from './components/layout/Navbar';
import { Hero } from './features/hero';
import { Projects } from './features/projects';
import { Skills } from './features/skills';
import { Education } from './features/education';
import { Certifications } from './features/certifications';
import { Contact } from './features/contact';

export default function App() {
  return (
    <>
      <IntroOverlay />
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
