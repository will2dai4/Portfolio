"use client"

import { Terminal } from "@/components/terminal"
import Link from "next/link"
import { useState } from "react"

interface Experience {
  position: string
  company: string
  startDate: string
  endDate: string
  description: string
  details: string[]
  tech: string[]
}

const experiences: Experience[] = [
  {
    position: "Software Engineering Intern",
    company: "Forbest Products",
    startDate: "2025-05",
    endDate: "2025-08",
    description: "Built a sales lead generating internal web application using Next.js, TypeScript, Django, PostgreSQL, and AWS Lambda.",
    details: [
      "Developed full-stack features using Next.js, TypeScript, Django, and PostgreSQL",
      "Implemented AWS Lambda functions for serverless backend processing",
      "Streamlined sales prospecting workflow and increased team productivity"
    ],
    tech: ["Next.js", "TypeScript", "Django", "PostgreSQL", "AWS Lambda"]
  }
]

export default function ExperiencesPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Filter experiences based on selected type and search query
  const filteredExperiences = experiences.filter(exp => {
    const matchesSearch = !searchQuery
      ? true
      : exp.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  // Format date range
  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate + "-01").toLocaleDateString("en-US", { month: "short", year: "numeric" })
    const end = endDate === "Present" ? "Present" : new Date(endDate + "-01").toLocaleDateString("en-US", { month: "short", year: "numeric" })
    return `${start} - ${end}`
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Content Area */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col">
        <div className="max-w-2xl space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Link href="/" className="text-terminal-green hover:text-primary transition-colors text-sm">
              ← cd ..
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-primary">$ cat experiences</h1>
              <p className="text-muted-foreground mt-2">Professional experiences and positions</p>
            </div>
          </div>

          {/* Search */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">Search by position, company, or description:</p>
            <input
              type="text"
              placeholder="e.g., Software Engineering Intern or Forbest..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-terminal-green focus:border-transparent"
            />
          </div>

          {/* Experiences List */}
          <div className="space-y-8">
            {filteredExperiences.map((experience, index) => (
              <div key={index} className="space-y-3 border-l-2 border-terminal-green pl-4 py-2">
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-xl font-bold text-foreground">{experience.position}</h2>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{formatDateRange(experience.startDate, experience.endDate)}</span>
                  </div>
                  <p className="text-muted-foreground">{experience.company}</p>
                  <p className="text-muted-foreground text-sm">{experience.description}</p>
                </div>

                <ul className="space-y-1 text-sm text-muted-foreground">
                  {experience.details.map((detail, i) => (
                    <li key={i}>→ {detail}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.tech.map((tech, i) => (
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
            <p>Experience listings updated regularly</p>
            <p className="text-xs mt-1">Check back for new experiences and updates</p>
          </div>
        </div>
      </div>

      {/* Right Terminal Area */}
      <div className="hidden lg:block lg:w-1/2 p-8 lg:p-16 border-l border-border h-screen overflow-hidden">
        <div className="h-full">
          <Terminal currentPath="experiences" />
        </div>
      </div>

      {/* Mobile Terminal (bottom) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-64 border-t border-border bg-background">
        <Terminal currentPath="experiences" />
      </div>
    </div>
  )
}

