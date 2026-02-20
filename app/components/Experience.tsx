"use client";

import Image from "next/image";
import { useState } from "react";

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
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">CompTIA ITF+ (Information Technology Fundamentals) — Certified Candidate</h4>
            <p className="text-sm text-white/70">December 16, 2022</p>
            <p className="text-sm text-white/80 mt-2">
              This certification provides a solid introduction to key IT concepts such as computers, software, networking, and security. It’s ideal for beginners or those shifting into the tech field, helping them build essential technical skills. It also serves as a stepping stone toward more advanced certifications and IT roles.
            </p>
            <a href="/comptia.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm block mt-2">View certificate (PDF)</a>
          </div>
          <div>
            <h4 className="font-semibold">Pearson Database Certification — Exam Passer</h4>
            <p className="text-sm text-white/70">May 15, 2024</p>
            <p className="text-sm text-white/80 mt-2">
              A certification that validates foundational knowledge in database concepts, including data management, SQL basics, and database design principles. Demonstrates the ability to understand and work with core database structures, preparing learners for more advanced data or IT-related roles.
            </p>
            <a href="/databasecert.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm block mt-2">View certificate (PDF)</a>
          </div>
        </div>
      ),
      icon: "/cards/card-2.png",
    },
  ];

  return (
    <section id="experience" className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 text-center">Experiences</h2>

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

                <div className={`mt-4 text-white/80 transition-max-height duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}>
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

