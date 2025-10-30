"use client"

import { Terminal } from "@/components/terminal"
import Link from "next/link"
import { useState } from "react"

const projects = [
  {
    name: "aMolecuwar",
    description: "Chemistry-related game built with the Godot Engine using OOP and Networking for Hack The 6ix",
    details: [
      "Proof of concept designed to teach chemistry and other subjects by 'gamifying' education",
      "Created to increase engagement in student education, particularly for short-attention-span learners",
    ],
    tech: ["Godot", "Python"],
    date: "Aug 2024",
  },
  {
    name: "RaiderStrike-Server",
    description: "Round-by-round multiplayer top-down perspective shooter game server",
    details: [
      "Incorporated server-client interactions, OOP, multi-threading, and sockets",
      "Created a fully functional server with real-time player-to-environment and player-to-player interactions",
    ],
    tech: ["Java", "Networking", "Multi-threading"],
    date: "Dec 2022 - Jan 2023",
  },
  {
    name: "Sales Prospecting App",
    description: "Full-stack application to automate and streamline sales prospecting",
    details: [
      "Built POC and end-to-end version using Django, PostgreSQL, HTTP API, and Next.js",
      "Increased sales outreach by 10x and sales calls by 24%",
      "Received positive feedback from sales teams",
    ],
    tech: ["Django", "PostgreSQL", "Next.js", "HTTP API"],
    date: "May 2025 - Aug 2025",
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
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="pt-8 text-sm text-muted-foreground border-t border-border">
            <p>More projects coming soon...</p>
            <p className="text-xs mt-1">Check out my GitHub for additional work</p>
          </div>
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
