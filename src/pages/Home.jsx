import Hero from '../components/Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Certificate from './Certificate';
import Contacts from './Contacts';

export default function Home() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certificate />
      <Contacts />
    </main>
  );
}
