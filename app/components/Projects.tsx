'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { featuredProjects, Project } from "@/app/data/projects"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import AnimatedSection from "./AnimatedSection"

const filters = [
  { id: "all", label: "All" },
  { id: "ai-ml", label: "AI/ML" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "nlp", label: "NLP" },
  { id: "webdev", label: "Web Dev" },
]

const filterMap: Record<string, string[]> = {
  "ai-ml": ["Machine Learning", "kNN", "Linear Regression", "Logistic Regression", "MLP", "Ensemble", "Boosting", "BERT", "MiniLM", "NLP", "Gradient Boosting", "OpenAI GPT-4o-mini", "OpenAI", "LLM", "RAG"],
  "fullstack": ["Full-Stack", "React.js", "React", "TypeScript", "FastAPI", "Laravel", "PHP", "VPS", "PostgreSQL", "Docker"],
  "nlp": ["NLP", "BERT", "MiniLM", "Text Preprocessing", "Text Representation", "Text Cleaning", "Tokenization", "TF-IDF", "Sentiment Analysis", "POS Tagging", "Question Answering", "Semantic Search", "LLM", "RAG", "OpenAI"],
  "webdev": ["FastAPI", "React", "React.js", "Laravel", "PHP", "E-Commerce", "MySQL", "Database Management", "Full-Stack", "PostgreSQL", "TypeScript", "Tailwind"],
}

/* ---------- GitHub Buttons ---------- */

function GithubIconButton({ url }: { url: string }) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-subtle hover:bg-subtle-hover border border-purple-500/30 hover:border-purple-500/60 transition"
      aria-label="GitHub Repository"
    >
      <svg
              className="w-5 h-5 text-foreground"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
    </Link>
  )
}

function GithubTextButton({ url }: { url: string }) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 px-4 py-2 h-10 rounded-lg bg-subtle hover:bg-subtle-hover border border-purple-500/30 hover:border-purple-500/60 transition text-sm"
      aria-label="View Repository"
    >
      <svg
              className="w-5 h-5 text-foreground flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
      View Repository
    </Link>
  )
}

/* ---------- Files Button ---------- */

function FilesIconButton({ files }: { files: { name: string; path: string }[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {files.map((file, idx) => (
        <a
          key={idx}
          href={file.path}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-subtle hover:bg-subtle-hover border border-blue-500/30 hover:border-blue-500/60 transition"
          aria-label={`View ${file.name}`}
          title={file.name}
        >
          <svg
            className="w-5 h-5 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </a>
      ))}
    </div>
  )
}

function FilesTextButton({ files }: { files: { name: string; path: string }[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {files.map((file, idx) => (
        <a
          key={idx}
          href={file.path}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 h-10 rounded-lg bg-subtle hover:bg-subtle-hover border border-blue-500/30 hover:border-blue-500/60 transition text-sm"
          aria-label={`View ${file.name}`}
        >
          <svg
            className="w-5 h-5 text-foreground flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          {file.name}
        </a>
      ))}
    </div>
  )
}

/* ---------- Component ---------- */

export default function Projects(): React.JSX.Element {
  const [active, setActive] = useState<Project | null>(null)
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = activeFilter === "all"
    ? featuredProjects
    : featuredProjects.filter(project => {
        const keywords = filterMap[activeFilter] || []
        return project.badges.some(badge => keywords.includes(badge))
      })

  return (
    <section id="lab" className="py-20 px-6">
      <AnimatedSection>
        <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
          Projects
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <div className="container mx-auto max-w-7xl mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeFilter === filter.id
                    ? "bg-purple-600 text-white"
                    : "bg-subtle text-text-muted hover:bg-subtle-hover"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <div className="container mx-auto max-w-7xl grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        {filteredProjects.map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 100}>
            <Card
              onClick={() => setActive(project)}
              className="cursor-pointer overflow-hidden bg-card-bg border border-card-border hover:-translate-y-1 hover:shadow-xl transition"
            >
              <div className="relative w-full h-60">
              <Image src={project.cover} alt={project.title} fill className="object-cover" />
            </div>

            <CardContent className="p-4 space-y-3 text-foreground">
              <h3 className="text-lg font-bold">{project.title}</h3>

              <p className="text-sm text-text-secondary line-clamp-3">
                {project.description}
              </p>

              {/* badges */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.badges.map((b, i) => (
                    <Badge key={i} className="bg-transparent border border-card-border text-foreground">
                    {b}
                  </Badge>
                ))}
              </div>

              {/* FRONT: icon only */}
              {(project.github || project.files) && (
                <div className="mt-4 flex items-center gap-3">
                  {project.github && (
                    <GithubIconButton url={project.github} />
                  )}
                  {project.files && (
                    <FilesIconButton files={project.files} />
                  )}
                </div>
              )}
            </CardContent>
            </Card>
          </AnimatedSection>
        ))}

      </div>

      {/* ================= MODAL ================= */}

      {active && (
        <div
          className="fixed inset-0 bg-modal-overlay z-50 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-card-bg w-full max-w-3xl max-h-[85vh] rounded-xl border border-card-border overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-y-auto">

              {/* header */}
              <div className="p-5 border-b border-card-border text-foreground max-h-[50vh] overflow-y-auto">
                <h2 className="text-2xl font-bold">{active.title}</h2>

                <p className="text-text-secondary mt-2 text-sm">
                  {active.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {active.badges.map((b, i) => (
                  <Badge key={i} className="bg-transparent border border-card-border text-foreground">
                      {b}
                    </Badge>
                  ))}
                </div>

                {/* POPUP: text + logo */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {active.github && (
                    <GithubTextButton url={active.github} />
                  )}

                  {active.files && (
                    <FilesTextButton files={active.files} />
                  )}
                </div>

                {active.link && (
                  <Link
                    href={active.link}
                    target="_blank"
                    className="inline-block mt-3 underline text-sm"
                  >
                    Open Project →
                  </Link>
                )}
              </div>

              {/* carousel */}
              <div className="p-5">
                <Carousel className="w-full relative">
                  <CarouselContent>
                    {active.images.map((img, i) => (
                      <CarouselItem key={i}>
                        <div className="relative w-full h-[380px]">
                          <Image
                            src={img}
                            alt=""
                            fill
                            className="object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {active.images.length > 1 && (
                    <>
                      <CarouselPrevious
                        className="
                          absolute left-3 top-1/2 -translate-y-1/2
                          h-12 w-12
                          bg-subtle hover:bg-subtle-hover
                          border border-border-light
                          z-10
                        "
                      />
                      <CarouselNext
                        className="
                          absolute right-3 top-1/2 -translate-y-1/2
                          h-12 w-12
                          bg-subtle hover:bg-subtle-hover
                          border border-border-light
                          z-10
                        "
                      />
                    </>
                  )}
                </Carousel>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  )
}