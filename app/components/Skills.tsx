import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const logos = [
  { src: "/assets/languages/Boostrap.png", alt: "Bootstrap", label: "Bootstrap" },
  { src: "/assets/languages/CSS.png", alt: "CSS", label: "CSS" },
  { src: "/assets/languages/Distrobox.png", alt: "Distrobox", label: "Distrobox" },
  { src: "/assets/languages/Docker.png", alt: "Docker", label: "Docker" },
  { src: "/assets/languages/Git.png", alt: "Git", label: "Git" },
  { src: "/assets/languages/Github.png", alt: "GitHub", label: "GitHub" },
  { src: "/assets/languages/HTML.png", alt: "HTML", label: "HTML" },
  { src: "/assets/languages/Java.png", alt: "Java", label: "Java" },
  { src: "/assets/languages/JS.png", alt: "JavaScript", label: "JavaScript" },
  { src: "/assets/languages/Laravel.png", alt: "Laravel", label: "Laravel" },
  { src: "/assets/languages/Machine_Learning.png", alt: "Machine Learning", label: "Machine Learning" },
  { src: "/assets/languages/Opencode.png", alt: "OpenCode", label: "OpenCode" },
  { src: "/assets/languages/PHP.png", alt: "PHP", label: "PHP" },
  { src: "/assets/languages/Python.png", alt: "Python", label: "Python" },
  { src: "/assets/languages/Shadcn.png", alt: "Shadcn UI", label: "Shadcn UI" },
  { src: "/assets/languages/SQL.png", alt: "SQL", label: "SQL" },
  { src: "/assets/languages/Tailwind.png", alt: "Tailwind", label: "Tailwind" },
];

export default function Skills(): React.JSX.Element {
  return (
    <section id="skills" className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-white mb-8">Skills</h2>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {logos.map((logo, index) => (
              <AnimatedSection key={logo.src} delay={index * 50}>
                <div className="flex items-center gap-5 bg-white/5 rounded-2xl px-6 py-5 h-24">
                  <Image src={logo.src} alt={logo.alt} width={logo.src.includes("Opencode") ? 80 : 64} height={logo.src.includes("Opencode") ? 80 : 64} className="object-contain" />
                  <span className="text-white/90 text-base font-medium">{logo.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
