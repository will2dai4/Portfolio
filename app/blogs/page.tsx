"use client"

import { Terminal } from "@/components/terminal"
import Link from "next/link"
import { useState } from "react"

const blogs = [
  {
    title: "Building a Terminal-Themed Portfolio",
    date: "2025-01-15",
    preview: "How I created an interactive terminal experience for my portfolio site using Next.js and TypeScript...",
    tags: ["Next.js", "TypeScript", "Web Design"],
  },
  {
    title: "My Journey at University of Waterloo",
    date: "2024-12-10",
    preview: "Reflections on my first year studying Computer Science at UWaterloo and the lessons learned...",
    tags: ["Education", "Personal"],
  },
  {
    title: "Organizing YRHacks 2024",
    date: "2024-05-20",
    preview:
      "Behind the scenes of organizing Ontario's largest high-school-run hackathon and managing sponsor relationships...",
    tags: ["Hackathons", "Leadership"],
  },
]

export default function BlogsPage() {
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
              <h1 className="text-4xl font-bold text-primary">$ cat blogs/*</h1>
              <p className="text-muted-foreground mt-2">Thoughts, experiences, and technical writings</p>
            </div>
          </div>

          {/* Blogs List */}
          <div className="space-y-6">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="space-y-2 border-l-2 border-terminal-green pl-4 py-2 hover:border-primary transition-colors cursor-pointer"
              >
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-xl font-bold text-foreground">{blog.title}</h2>
                    <time className="text-xs text-muted-foreground whitespace-nowrap">{blog.date}</time>
                  </div>
                  <p className="text-muted-foreground text-sm">{blog.preview}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-muted text-terminal-green rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Coming soon message */}
          <div className="pt-8 text-sm text-muted-foreground border-t border-border">
            <p>$ echo "More posts coming soon..."</p>
            <p className="text-xs mt-1 pl-4">→ Currently working on new content</p>
          </div>
        </div>
      </div>

      {/* Right Terminal Area */}
      <div className="hidden lg:block lg:w-1/2 p-8 lg:p-16 border-l border-border h-screen overflow-hidden">
        <div className="h-full">
          <Terminal currentPath="blogs" />
        </div>
      </div>

      {/* Mobile Terminal (right slide-out) */}
      <div className="lg:hidden">
        <div
          className={`fixed inset-y-0 right-0 z-40 w-80 max-w-[85vw] border-l border-border bg-background transform transition-transform duration-300 ${isTerminalOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="h-full p-4 overflow-hidden">
            <Terminal currentPath="blogs" />
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
