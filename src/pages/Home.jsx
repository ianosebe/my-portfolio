import Hero from '../components/Hero';
import About from '../components/About';
import SkillsSection from '../components/SkillsSection';
import ProjectSection from '../components/ProjectsSection';
import ContactsSection from '../components/ContactsSection';

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <Hero />
      <About />
      <ProjectSection />
      <SkillsSection />
      <ContactsSection />
    </main>
  );
}
