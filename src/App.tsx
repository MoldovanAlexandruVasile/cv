import { useState } from "react";
import { Experience } from "./components/Experience.tsx";
import { Hero } from "./components/Hero.tsx";
import { Nav } from "./components/Nav.tsx";
import { Projects } from "./components/Projects.tsx";
import { Skills } from "./components/Skills.tsx";
import { Studies } from "./components/Studies.tsx";
import { profile } from "./data/cv.ts";

export default function App() {
  // One selected skill highlights every role and project that uses it.
  const [skill, setSkill] = useState<string | null>(null);
  const toggleSkill = (s: string) => setSkill((cur) => (cur === s ? null : s));

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills selected={skill} onSelect={toggleSkill} />
        <Experience selected={skill} onSelect={toggleSkill} />
        <Projects selected={skill} onSelect={toggleSkill} />
        <Studies />
      </main>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name} ·{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </footer>
    </>
  );
}
