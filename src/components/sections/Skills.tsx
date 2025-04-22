
import SectionHeading from "../ui/section-heading";
import { Monitor, Database, Code, Cloud } from "lucide-react";

const skills = [
  { name: "JavaScript (ES6+)", icon: <Code className="w-5 h-5 text-violet-500" /> },
  { name: "TypeScript", icon: <Code className="w-5 h-5 text-violet-500" /> },
  { name: "React", icon: <Monitor className="w-5 h-5 text-blue-500" /> },
  { name: "Next.js", icon: <Monitor className="w-5 h-5 text-black" /> },
  { name: "TailwindCSS", icon: <Monitor className="w-5 h-5 text-cyan-500" /> },
  { name: "Node.js", icon: <Database className="w-5 h-5 text-green-600" /> },
  { name: "Express", icon: <Database className="w-5 h-5 text-yellow-500" /> },
  { name: "MongoDB", icon: <Database className="w-5 h-5 text-emerald-600" /> },
  { name: "PostgreSQL", icon: <Database className="w-5 h-5 text-sky-700" /> },
  { name: "GraphQL", icon: <Cloud className="w-5 h-5 text-pink-500" /> },
  { name: "AWS", icon: <Cloud className="w-5 h-5 text-orange-500" /> },
  { name: "Docker", icon: <Cloud className="w-5 h-5 text-blue-400" /> },
];

const Skills = () => (
  <section id="skills" className="py-16 md:py-24 bg-secondary/40">
    <div className="container">
      <SectionHeading
        title="Skills & Technologies"
        subtitle="Technologies & tools I work with"
        className="text-center"
      />

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-2xl mx-auto animate-fade-in">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-card rounded-lg shadow p-4 border border-muted hover-scale"
          >
            <span>{skill.icon}</span>
            <span className="font-medium text-muted-foreground">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
