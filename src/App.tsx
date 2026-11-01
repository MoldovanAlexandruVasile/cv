import { Education } from "./components/education/Education.tsx";
import { Experience } from "./components/experience/Experience.tsx";
import { Hero } from "./components/hero/Hero.tsx";
import { Footer } from "./components/layout/Footer.tsx";
import { Nav } from "./components/layout/Nav.tsx";
import { Projects } from "./components/projects/Projects.tsx";
import { Skills } from "./components/skills/Skills.tsx";
import { useDocumentLanguage } from "./hooks/useDocumentLanguage.ts";
import { useSkillFilter } from "./hooks/useSkillFilter.ts";
import { CONTAINER } from "./styles/ui.ts";

const App = () => {
  const { selected, toggle } = useSkillFilter();
  useDocumentLanguage();

  return (
    <>
      <Nav />
      <main className={CONTAINER}>
        <Hero />
        <Skills selected={selected} onSelect={toggle} />
        <Experience selected={selected} onSelect={toggle} />
        <Projects selected={selected} onSelect={toggle} />
        <Education />
      </main>
      <Footer />
    </>
  );
};

export default App;
