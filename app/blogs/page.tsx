"use client"

import { Terminal } from "@/components/terminal"
import Link from "next/link"

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
      <div className="hidden lg:block lg:w-1/2 p-8 lg:p-16 border-l border-border">
        <div className="h-full">
          <Terminal currentPath="blogs" />
        </div>
      </div>

      {/* Mobile Terminal (bottom) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-64 border-t border-border bg-background">
        <Terminal currentPath="blogs" />
      </div>
    </div>
  )
}
