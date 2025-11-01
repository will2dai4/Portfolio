"use client"

import { Terminal } from "@/components/terminal"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import { useState } from "react"

interface Course {
  code: string
  name: string
  description: string
  term: string
}

const courses: Course[] = [
  // Fall 2025 - 2A
  {
    code: "CS 245E",
    name: "Logic & Computation (Enrich)",
    description: "Formal logic, propositional calculus, predicate calculus, and computational logic.",
    term: "2A"
  },
  {
    code: "CS 246E",
    name: "Obj-Oriented Soft Dev (Enrich)",
    description: "Advanced OOP concepts, design patterns, SOLID principles, and software architecture.",
    term: "2A"
  },
  {
    code: "MATH 239",
    name: "Intro Combinatorics",
    description: "Counting methods, generating functions, recurrence relations, and graph theory basics.",
    term: "2A"
  },
  {
    code: "STAT 230",
    name: "Probability",
    description: "Probability distributions, random variables, expectation, and variance.",
    term: "2A"
  },
  {
    code: "CLAS 104",
    name: "Classical Mythology",
    description: "Study of classical myths and their influence on literature and culture.",
    term: "2A"
  },
  // Winter 2025 - 1B
  {
    code: "CS 146",
    name: "Algo Dsgn & Data Abstrac (Adv)",
    description: "Advanced algorithm design, data structures, and complexity analysis.",
    term: "1B"
  },
  {
    code: "CS 136L",
    name: "Tools & Tech for Software Dev",
    description: "Software development tools, version control, and development environments.",
    term: "1B"
  },
  {
    code: "MATH 138",
    name: "Calculus 2 (Honours)",
    description: "Advanced calculus including integration, sequences, series, and differential equations.",
    term: "1B"
  },
  {
    code: "MATH 136",
    name: "Linear Algebra 1 (Honours)",
    description: "Systems of linear equations, vector spaces, matrices, and linear transformations.",
    term: "1B"
  },
  {
    code: "MUSIC 110",
    name: "How Music Matters",
    description: "Understanding the role and impact of music in society and culture.",
    term: "1B"
  },
  {
    code: "COMMST 225",
    name: "Interviewing",
    description: "Interview skills, communication strategies, and professional presentation.",
    term: "1B"
  },
  {
    code: "PD 11",
    name: "Technical Report Writing",
    description: "Writing technical reports and professional communication in technical contexts.",
    term: "1B"
  },
  {
    code: "COOP 1",
    name: "Co-operative Work Term",
    description: "First co-operative work term.",
    term: "1B"
  },
  {
    code: "PD 1",
    name: "Career Fundamentals",
    description: "Introduction to co-op, career planning, and professional development skills.",
    term: "1B"
  },
  // Fall 2024 - 1A
  {
    code: "CS 135",
    name: "Designing Functional Programs",
    description: "Functional programming with Racket, recursion, and data structures.",
    term: "1A"
  },
  {
    code: "MATH 137",
    name: "Calculus 1 (Honours)",
    description: "Limits, continuity, derivatives, and applications of differential calculus.",
    term: "1A"
  },
  {
    code: "MATH 135",
    name: "Algebra (Honours)",
    description: "Abstract algebra, number theory, and mathematical proofs.",
    term: "1A"
  },
  {
    code: "COMMST 223",
    name: "Public Speaking",
    description: "Effective communication and public speaking skills.",
    term: "1A"
  },
  {
    code: "AFM 101",
    name: "Intro Financial Accounting",
    description: "Introduction to financial accounting principles and financial statements.",
    term: "1A"
  },
  {
    code: "MTHEL 99",
    name: "First-Year Math Readiness",
    description: "Preparation course for university-level mathematics.",
    term: "1A"
  }
]

export default function CoursesPage() {
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null)
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)

  // Extract subject from course code (e.g., "CS 245E" -> "CS")
  const getSubject = (code: string): string => {
    const match = code.match(/^([A-Z]+)/)
    return match ? match[1] : ""
  }

  // Get unique terms
  const terms = Array.from(new Set(courses.map(c => c.term))).sort().reverse()
  
  // Get unique subjects
  const subjects = Array.from(new Set(courses.map(c => getSubject(c.code)))).sort()

  // Filter courses based on selected term, subject, and search query
  const filteredCourses = courses.filter(course => {
    const matchesTerm = !selectedTerm || course.term === selectedTerm
    const matchesSubject = !selectedSubject || getSubject(course.code) === selectedSubject
    const matchesSearch = !searchQuery || 
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTerm && matchesSubject && matchesSearch
  })

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Content Area */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 overflow-y-auto">
        <div className="max-w-2xl space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Link href="/" className="text-terminal-green hover:text-primary transition-colors text-sm inline-block">
              ← cd ..
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-primary">$ ls courses/</h1>
              <p className="text-muted-foreground mt-2">Courses taken at University of Waterloo</p>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Search by course code or name:</p>
              <input
                type="text"
                placeholder="e.g., CS246E or Object-Oriented..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 bg-muted border border-border rounded focus:outline-none focus:ring-2 focus:ring-terminal-green focus:border-transparent"
              />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Filter by subject:</p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedSubject === null ? "default" : "outline"}
                  className="cursor-pointer hover:bg-terminal-green/20"
                  onClick={() => setSelectedSubject(null)}
                >
                  All
                </Badge>
                {subjects.map((subject) => (
                  <Badge
                    key={subject}
                    variant={selectedSubject === subject ? "default" : "outline"}
                    className="cursor-pointer hover:bg-terminal-green/20"
                    onClick={() => setSelectedSubject(selectedSubject === subject ? null : subject)}
                  >
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Filter by term:</p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedTerm === null ? "default" : "outline"}
                  className="cursor-pointer hover:bg-terminal-green/20"
                  onClick={() => setSelectedTerm(null)}
                >
                  All
                </Badge>
                {terms.map((term) => (
                  <Badge
                    key={term}
                    variant={selectedTerm === term ? "default" : "outline"}
                    className="cursor-pointer hover:bg-terminal-green/20"
                    onClick={() => setSelectedTerm(selectedTerm === term ? null : term)}
                  >
                    {term}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Courses List */}
          <div className="grid gap-4">
            {filteredCourses.map((course, index) => (
              <Card key={index} className="p-4 border-terminal-green/20 hover:border-terminal-green transition-colors">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-bold text-foreground">{course.code}</h3>
                    <Badge className="bg-terminal-green/20 text-terminal-green border-none">
                      {course.term}
                    </Badge>
                  </div>
                  <h4 className="text-muted-foreground font-semibold">{course.name}</h4>
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <Footer /> 
        </div>
      </div>

      {/* Right Terminal Area */}
      <div className="hidden lg:block lg:w-1/2 p-8 lg:p-16 border-l border-border h-screen overflow-hidden">
        <div className="h-full">
          <Terminal currentPath="courses" />
        </div>
      </div>

      {/* Mobile Terminal (right slide-out) */}
      <div className="lg:hidden">
        <div
          className={`fixed inset-y-0 right-0 z-40 w-80 max-w-[85vw] border-l border-border bg-background transform transition-transform duration-300 ${isTerminalOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="h-full p-4 overflow-hidden">
            <Terminal currentPath="courses" />
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

