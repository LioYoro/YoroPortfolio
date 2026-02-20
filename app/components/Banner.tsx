"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = ["Backend Developer", "Laravel & PHP Developer", "AI & ML Enthusiast"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTypingSpeed(100); // Reset typing speed
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
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          {/* Left side - Text content */}
          {/* Right side - Character image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
            <div className="relative">
              {/* greeting removed per user's request */}
              <div className="relative">
                <Image
                  src="/assets/ID PICTURE - YORO.jpg"
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
            {/* desktop greeting removed per user's request */}
            <div className="">
                <p className="text-2xl">BSIT | Full-stack & AI</p>
              <h1 className="text-4xl lg:text-5xl tracking-tight font-semibold text-white leading-tight">
                Building backend systems, integrating AI,
                <br /> and delivering practical solutions.
              </h1>
              <p className="text-md text-white/80">
                Dedicated BSIT student and developer focused on backend development, databases, and AI integrations.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3 pt-15 text-center lg:text-left">
            <p className="text-4xl text-white font-bold">
            I&apos;m a {displayedText}
            <span className="animate-pulse">|</span>
          </p>
            <p className="text-lg lg:text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span>Open to OJT and collaboration —</span>
            <a href="https://github.com/LioYoro" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">GitHub</a>
            <span className="text-white/70">•</span>
            <a href="mailto:yoroleo10@gmail.com" className="text-white/70">yoroleo10@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
