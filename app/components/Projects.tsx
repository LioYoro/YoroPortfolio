'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Project {
  id: number
  title: string
  description: string
  cover: string
  images: string[]
  link?: string
  github?: string
  badges: string[]
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Academic Resource & Knowledge (ARK)",
    badges: ["AI", "GPT", "BERT", "Database", "Full-Stack", "VPS"],
    description:
      "Full-stack AI-powered academic library platform. Contributed to backend and frontend development, integrating GPT for semantic search and BERT (MiniLM) for standard query processing to improve retrieval accuracy beyond traditional SQL matching. Implemented email notification workflows and a book recommendation module, supported database design and interface integration, and handled production deployment using a Hostinger domain and Hosting VPS (KVM) server.",
    cover: "/projects/ark/HEXTECH-ARK-LOGO-WHITE.jpeg",
    images: [
      "/projects/ark/1.png",
      "/projects/ark/2.png",
      "/projects/ark/3.png",
      "/projects/ark/4.png",
      "/projects/ark/5.png",
      "/projects/ark/6.png",
      "/projects/ark/7.png",
      "/projects/ark/8.png",
    ],
    github: "https://github.com/LioYoro/HexTech-ARK_Library_System",
  },
  {
    id: 2,
    title: "Waste2Wealth",
    badges: ["Vanilla PHP", "E-Commerce", "Recycling", "MySQL", "Database Management", "SDG-Focused"],
    description: "PHP platform for trading recyclable waste. I handled the full stack development, including frontend design and database management, ensuring the platform is fully scalable and responsive. Users can track the status of all bottles to be sold, with prices per kilo dynamically set based on research and economic trends, providing accurate and fair valuation for recyclable materials. On the admin side, statuses can be updated as ‘On the Way for Pickup’, ‘Pending for Pickup’, or ‘Completed’, enabling efficient management of transactions and smooth coordination between sellers and recyclers. The platform emphasizes efficiency, sustainability, and a seamless user experience for all stakeholders.",
    cover: "/projects/w2w/W2W.jpg",
    images: [
      "/projects/w2w/1.png",
      "/projects/w2w/2.PNG",
      "/projects/w2w/4.PNG",
    ],
    github: "https://github.com/LioYoro/Waste2Wealth",
  },
]

/* ---------- GitHub Buttons ---------- */

function GithubIconButton({ url }: { url: string }) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/60 transition"
      aria-label="GitHub Repository"
    >
      <svg
              className="w-5 h-5 text-white"
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
      className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/60 transition text-sm"
      aria-label="View Repository"
    >
      <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
      View Repository
    </Link>
  )
}

/* ---------- Component ---------- */

export default function Projects(): React.JSX.Element {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="lab" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-white mb-10 text-center">
        Projects
      </h2>

      <div className="container mx-auto max-w-7xl grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        {featuredProjects.map((project) => (
          <Card
            key={project.id}
            onClick={() => setActive(project)}
            className="cursor-pointer overflow-hidden bg-zinc-900 border border-zinc-800 hover:-translate-y-1 hover:shadow-xl transition"
          >
            <div className="relative w-full h-60">
              <Image src={project.cover} alt={project.title} fill className="object-cover" />
            </div>

            <CardContent className="p-4 space-y-3 text-white">
              <h3 className="text-lg font-bold">{project.title}</h3>

              <p className="text-sm text-white/70 line-clamp-3">
                {project.description}
              </p>

              {/* badges */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.badges.map((b, i) => (
                  <Badge key={i} className="bg-transparent border border-zinc-500">
                    {b}
                  </Badge>
                ))}
              </div>

              {/* FRONT: icon only */}
              {project.github && (
                <div className="pt-2">
                  <GithubIconButton url={project.github} />
                </div>
              )}
            </CardContent>
          </Card>
        ))}

      </div>

      {/* ================= MODAL ================= */}

      {active && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-zinc-900 w-full max-w-3xl max-h-[85vh] rounded-xl border border-zinc-700 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-y-auto">

              {/* header */}
              <div className="p-5 border-b border-zinc-700 text-white">
                <h2 className="text-2xl font-bold">{active.title}</h2>

                <p className="text-white/70 mt-2 text-sm">
                  {active.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {active.badges.map((b, i) => (
                    <Badge key={i} className="bg-transparent border border-zinc-500">
                      {b}
                    </Badge>
                  ))}
                </div>

                {/* POPUP: text + logo */}
                {active.github && (
                  <GithubTextButton url={active.github} />
                )}

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
                          bg-black/60 hover:bg-black/80
                          border border-white/20
                          z-10
                        "
                      />
                      <CarouselNext
                        className="
                          absolute right-3 top-1/2 -translate-y-1/2
                          h-12 w-12
                          bg-black/60 hover:bg-black/80
                          border border-white/20
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