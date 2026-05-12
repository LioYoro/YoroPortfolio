"use client";

import Image from "next/image";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const certificates = [
  {
    id: 1,
    title: "CompTIA ITF+",
    issuer: "CompTIA",
    date: "December 16, 2022",
    description: "Provides a solid introduction to key IT concepts such as computers, software, networking, and security. Ideal for beginners or those shifting into the tech field.",
    image: "/assets/certificates/comptia.png",
    pdf: "/comptia.pdf",
  },
  {
    id: 2,
    title: "Pearson Database Certification",
    issuer: "Pearson",
    date: "May 15, 2024",
    description: "Validates foundational knowledge in database concepts, including data management, SQL basics, and database design principles.",
    image: "/assets/certificates/database.png",
    pdf: "/databasecert.pdf",
  },
  {
    id: 3,
    title: "AI for Industry",
    issuer: "AI Singapore",
    date: "May 20, 2025",
    description: "Demonstrates foundational knowledge in artificial intelligence, including machine learning concepts, data-driven problem solving, and real-world AI applications.",
    image: "/assets/certificates/aisingapore.png",
    pdf: "/yoroAiSingapore.pdf",
  },
  {
    id: 4,
    title: "Wadhwani Employability Skills",
    issuer: "Wadhwani Foundation",
    date: "May 1, 2026",
    description: "Comprehensive training bridging technical knowledge and workplace readiness across 15 key competencies including communication, professionalism, customer centricity, problem-solving, adaptability, teamwork, innovation, and financial literacy. Completed JobReady and JobRise courses with scenario-based simulations and AI-powered learning.",
    image: "/assets/certificates/wadhwani.png",
    pdf: "/wadhwani.pdf",
  },
];

export default function Experience(): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      title: "EDUCATION",
      content: (
        <div>
          <h4 className="font-semibold">Bachelor of Science in Information Technology</h4>
          <p className="text-sm text-white/80">José Rizal University</p>
          <p className="text-sm text-white/70 mt-2">2022 - Present</p>
        </div>
      ),
      icon: "/logo/Jose_Rizal_University_seal.svg.png",
    },
    {
      id: 2,
      title: "CERTIFICATIONS",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image src={cert.image} alt={cert.title} fill className="object-contain" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{cert.title}</h4>
                  <p className="text-xs text-white/60">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
              <p className="text-xs text-white/70 mb-3">{cert.description}</p>
              <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-xs hover:text-blue-300 transition-colors">
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      ),
      icon: "/cards/card-2.png",
    },
  ];

  return (
    <section id="experience" className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 text-center">Experiences</h2>
        </AnimatedSection>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.id} className="bg-linear-to-r from-slate-950 via-blue-950 to-slate-950 backdrop-blur-sm rounded-xl p-4 border-t-3 border-blue-700">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-lg">
                      <Image src={item.icon} alt={item.title} width={48} height={48} className="object-contain" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <div className="text-white/60">{isOpen ? "−" : "+"}</div>
                </button>

                <div className={`mt-4 text-white/80 transition-max-height duration-300 overflow-hidden ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}>
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

