import Image from "next/image";

const logos = [
  { src: "/assets/languages/Boostrap.png", alt: "Bootstrap", label: "Bootstrap" },
  { src: "/assets/languages/CSS.png", alt: "CSS", label: "CSS" },
  { src: "/assets/languages/HTML.png", alt: "HTML", label: "HTML" },
  { src: "/assets/languages/JS.png", alt: "JavaScript", label: "JavaScript" },
  { src: "/assets/languages/Java.png", alt: "Java", label: "Java" },
  { src: "/assets/languages/Laravel.png", alt: "Laravel", label: "Laravel" },
  { src: "/assets/languages/Python.png", alt: "Python", label: "Python" },
  { src: "/assets/languages/PHP.png", alt: "PHP", label: "PHP" },
  { src: "/assets/languages/Machine_Learning.png", alt: "Machine Learning", label: "Machine Learning" },
  { src: "/assets/languages/SQL.png", alt: "SQL", label: "SQL" },
  { src: "/assets/languages/Git.png", alt: "Git", label: "Git" },
  { src: "/assets/languages/Github.png", alt: "GitHub", label: "GitHub" },
  { src: "/assets/languages/Tailwind.png", alt: "Tailwind", label: "Tailwind" },
  { src: "/assets/languages/Shadcn.png", alt: "Shadcn UI", label: "Shadcn UI" },
];

export default function Skills(): React.JSX.Element {
  return (
    <section id="skills" className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {logos.map((logo) => (
            <div key={logo.src} className="flex items-center gap-5 bg-white/5 rounded-2xl px-6 py-5 h-24">
              <Image src={logo.src} alt={logo.alt} width={64} height={64} className="object-contain" />
              <span className="text-white/90 text-base font-medium">{logo.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
