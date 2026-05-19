"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Banner(): React.JSX.Element {
  const texts = ["Backend Developer", "Laravel & PHP Developer", "AI & ML Enthusiast"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTypingSpeed(100);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 lg:pt-32 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
              <div className="relative">
                <div className="relative">
                  <Image
                    src="/assets/1x1 Pic - White Background.png"
                    alt="Leonardo Antero SP. Yoro"
                    width={300}
                    height={300}
                    className="max-w-md relative rounded-full"
                    style={{ width: "auto", height: "auto" }}
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-6 text-center lg:text-left lg:pl-16">
              <div>
                <p className="text-2xl text-foreground">BSIT | Full-stack & AI</p>
                <h1 className="text-4xl lg:text-5xl tracking-tight font-semibold text-foreground leading-tight">
                  Building backend systems, integrating AI,
                  <br /> and delivering practical solutions.
                </h1>
                <p className="text-md text-text-secondary">
                  Dedicated BSIT student and developer focused on backend development, databases, and AI integrations.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="space-y-3 pt-15 text-center lg:text-left">
            <p className="text-4xl text-foreground font-bold">
              I&apos;m a {displayedText}
              <span className="animate-pulse">|</span>
            </p>
            <p className="text-lg lg:text-xl text-text-secondary tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span>Open to OJT and collaboration —</span>
              <a href="https://github.com/LioYoro" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">GitHub</a>
              <span className="text-text-muted">•</span>
              <a href="mailto:yoroleo10@gmail.com" className="text-text-muted">yoroleo10@gmail.com</a>
            </p>
            <div className="pt-4">
              <a
                href="/YORO, LEONARDO ANTERO - BSIT  - RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}