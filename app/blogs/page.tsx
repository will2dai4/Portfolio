"use client"

import { Terminal } from "@/components/terminal"
import Link from "next/link"
import Footer from "@/components/footer"
const blogs = [
  {
    title: "Coming soon...",
    date: "",
    preview: "",
    tags: [],
  }
]

export default function BlogsPage() {
  return (
    <div className="h-screen flex">
      {/* Left Content Area */}
      <div className="w-full md:w-1/2 p-8 lg:p-16 flex flex-col overflow-y-auto">
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

          <Footer /> 
        </div>
      </div>

      {/* Right Terminal Area */}
      <div className="hidden md:block md:w-1/2 p-8 lg:p-16 h-screen overflow-hidden">
        <div className="h-full">
          <Terminal currentPath="blogs" />
        </div>
      </div>
    </div>
  )
}
