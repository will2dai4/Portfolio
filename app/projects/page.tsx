"use client"

import { Terminal } from "@/components/terminal"
import Link from "next/link"
import { useState } from "react"
import Footer from "@/components/footer"

const projects = [
  {
    name: "UWPlanit",
    description: "Full-stack course planning platform with interactive dependency graph",
    details: [
      "Built a full-stack course planning platform with an interactive graph (D3.js) of 3,000+ course dependencies",
      "Designed a type-safe tRPC API and normalized PostgreSQL schema with migrations and fuzzy search (Fuse.js)",
      "Deployed the web app with a fully integrated CI/CD pipeline, garning 4k users in the first day",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Auth0", "tRPC", "D3.js", "Fuse.js"],
    date: "May 2025 - Oct 2025",
    links: {
      github: "https://github.com/will2dai4/UWPlanit",
      demo: "https://uwplanit.com",
    },
  },
  {
    name: "AI Dente",
    description: "AI-powered pantry manager with recipe creation and smart inventory tracking",
    details: [
      "Built a full-stack AI-powered pantry manager with recipe creation, with JWT and SMS verification via Twilio",
      "Designed a PostgreSQL + Drizzle ORM backend with structured logging (Pino), and Swagger documentation",
      "Deployed a containerized microservice architecture using Docker, Nginx, and Cloudflare with SSL",
    ],
    tech: ["TypeScript", "Node.js", "Express", "PostgreSQL", "Docker", "Drizzle ORM", "Nginx", "Cloudflare"],
    date: "Sep 2025 - Oct 2025",
    links: {
      github: "https://github.com/al-dente-ai/al-dente",
      demo: "https://al-dente.site",
    },
  },
  {
    name: "Molecuwar",
    description: "Chemistry-related educational game built with the Godot Engine",
    details: [
      "Built a Chemistry-related game with the Godot Engine using OOP and Networking for Hack The 6ix",
      "Proof of concept designed to teach chemistry and other subjects by 'gamifying' education",
      "Created an app designed to increase engagement in student education, particularly for short-attention-span learners",
    ],
    tech: ["Godot", "Python"],
    date: "Aug 2024",
    links: {
      github: "https://github.com/will2dai4/Molecuwar",
      demo: null,
    },
  },
  {
    name: "RaiderStrike",
    description: "Round-by-round multiplayer top-down perspective shooter game server",
    details: [
      "Designed and implemented a round-by-round multiplayer top-down perspective shooter game",
      "Incorporated server-client interactions, OOP, multi-threading, and sockets to build the server",
      "Created a fully functional server with real-time player-to-environment and player-to-player interactions",
    ],
    tech: ["Java", "Networking", "Multi-threading"],
    date: "Dec 2022 - Jan 2023",
    links: {
      github: "https://github.com/will2dai4/RaiderStrike-Server",
      demo: null,
    },
  },
]

export default function ProjectsPage() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  return (
    <div className="h-screen flex">
      {/* Left Content Area */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col overflow-y-auto">
        <div className="max-w-2xl space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Link href="/" className="text-terminal-green hover:text-primary transition-colors text-sm">
              ← cd ..
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-primary">$ ls projects/</h1>
              <p className="text-muted-foreground mt-2">A collection of my work and experiments</p>
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="space-y-3 border-l-2 border-terminal-green pl-4 py-2">
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-xl font-bold text-foreground">{project.name}</h2>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{project.date}</span>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                <ul className="space-y-1 text-sm text-muted-foreground">
                  {project.details.map((detail, i) => (
                    <li key={i}>→ {detail}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-muted text-terminal-green rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links Section */}
                {(project.links.github || project.links.demo) && (
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-terminal-green hover:text-primary transition-colors flex items-center gap-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </Link>
                    )}
                    {project.links.demo && (
                      <Link
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-terminal-green hover:text-primary transition-colors flex items-center gap-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Live Demo
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <Footer /> 
        </div>
      </div>

      {/* Right Terminal Area */}
      <div className="hidden lg:block lg:w-1/2 p-8 lg:p-16 border-l border-border h-screen overflow-hidden">
        <div className="h-full">
          <Terminal currentPath="projects" />
        </div>
      </div>

      {/* Mobile Terminal (right slide-out) */}
      <div className="lg:hidden">
        <div
          className={`fixed inset-y-0 right-0 z-40 w-80 max-w-[85vw] border-l border-border bg-background transform transition-transform duration-300 ${isTerminalOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="h-full p-4 overflow-hidden">
            <Terminal currentPath="projects" />
          </div>
        </div>

        <button
          aria-label={isTerminalOpen ? "Close terminal" : "Open terminal"}
          onClick={() => setIsTerminalOpen(!isTerminalOpen)}
          className="fixed z-50 right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border border-border bg-background/80 backdrop-blur px-2 py-2 shadow hover:bg-muted transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-muted-foreground">
            {isTerminalOpen ? (
              <path fillRule="evenodd" d="M8.47 4.47a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06L14.94 12 8.47 5.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M15.53 4.47a.75.75 0 0 1 0 1.06L9.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06l7-7a.75.75 0 0 1 1.06 0z" clipRule="evenodd" />
            )}
          </svg>
        </button>
      </div>
    </div>
  )
}
