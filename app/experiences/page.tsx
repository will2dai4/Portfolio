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
    company: "Forbest Product Co.",
    startDate: "2025-05",
    endDate: "2025-08",
    description: "Designed and developed a full-stack application to automate and streamline sales prospecting.",
    details: [
      "Designed and developed a full-stack app to automate and streamline sales prospecting and increase outreach by 10x.",
      "Built a POC and subsequently an end-to-end version using a Django, PostgreSQL, HTTP API, and Next.js.",
      "Received positive feedback from sales teams on the functionality of the applications and increased sales calls by 24%."
    ],
    tech: ["Next.js", "TypeScript", "Django", "PostgreSQL", "HTTP API", "AWS Lambda"]
  },
  {
    position: "Web Designer Contractor",
    company: "TCE Machinery",
    startDate: "2025-02",
    endDate: "2025-03",
    description: "Designed and developed the website for TCE Machinery using the Shopify store.",
    details: [
      "Designed and developed the website for TCE Machinery using the Shopify store",
      "Implemented features using Shopify's Liquid and Liquid Theme Editor",
      "Managed SEO and increased website traffic by 100% and sales by 22%"
    ],
    tech: ["Shopify", "JavaScript", "Liquid", "Liquid Theme Editor"]
  },
  {
    position: "Outreach Executive",
    company: "YRHacks 2024 Hackathon",
    startDate: "2023-09",
    endDate: "2024-05",
    description: "Organized Canada's largest high school hackathon, focusing on logistics and outreach.",
    details: [
      "Organized Canada's largest high school hackathon (450+ hackers, 7+ sponsors) managing logistics and outreach."
    ],
    tech: []
  },
  {
    position: "Founder and President",
    company: "Equinox Coding: SpringHacks 2023 & WinterHacks 2024",
    startDate: "2022-11",
    endDate: "2024-02",
    description: "Led organization of two virtual hackathons, overseeing finances, marketing, and partnerships.",
    details: [
      "Manage finances, marketing and lead a team to organize 2 vitual hackathons mid- and post-COVID.",
      "Managed outreach of sponsors and participants to arrange $8000+ in prizes, with 120+ participants."
    ],
    tech: []
  },
  {
    position: "Summer Lab Volunteer",
    company: "University of Toronto, Department of Computer Science",
    startDate: "2022-05",
    endDate: "2022-08",
    description: "Supported academic publishing efforts within the algorithms research group.",
    details: [
      "Proofread and formatted Professor Allan Borodin's book Online and Other Myopic Algorithms.",
      "Corrected errors and provided suggestions to save 60+ hours in the proofreading step."
    ],
    tech: []
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
              placeholder="e.g., Software Engineering..."
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

