"use client"

import { useState } from "react"
import { Terminal } from "@/components/terminal"
import { TypingText } from "@/components/typing-text"
import Link from "next/link"

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  return (
    <div className="min-h-screen flex">
      {/* Left Content Area */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
        <div className="max-w-2xl space-y-8">
          {/* Header with typing animation */}
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary">
              <TypingText
                text="William Dai"
                delay={80}
                onComplete={() => setTimeout(() => setShowContent(true), 300)}
              />
            </h1>
            {showContent && (
              <>
                <p className="text-xl text-muted-foreground">University of Waterloo</p>
                <p className="text-xl text-terminal-green">Software Engineer</p>
              </>
            )}
          </div>

          {/* Quick points */}
          {showContent && (
            <div className="space-y-4 animate-in fade-in duration-500">
              <div className="space-y-2">
                <h2 className="text-lg text-primary">$ cat experience.txt</h2>
                <ul className="space-y-1 text-muted-foreground pl-4">
                  <li>→ Full-stack development with Django, PostgreSQL, Next.js</li>
                  <li>→ Built automation tools increasing sales outreach by 10x</li>
                  <li>→ Web design & SEO optimization</li>
                  <li>→ Hackathon organizer & founder</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg text-primary">$ ls projects/</h2>
                <ul className="space-y-1 text-muted-foreground pl-4">
                  <li>→ aMolecuwar: Educational chemistry game (Godot, Python)</li>
                  <li>→ RaiderStrike-Server: Multiplayer shooter server (Java)</li>
                  <li>→ Various full-stack web applications</li>
                </ul>
              </div>

              {/* Links */}
              <div className="space-y-2 pt-4">
                <h2 className="text-lg text-primary">$ cat links.txt</h2>
                <div className="flex flex-wrap gap-4 pl-4">
                  <Link
                    href="https://github.com/will2dai4"
                    target="_blank"
                    className="text-terminal-green hover:text-primary transition-colors"
                  >
                    [GitHub]
                  </Link>
                  <Link
                    href="https://linkedin.com/in/william-dai-uw"
                    target="_blank"
                    className="text-terminal-green hover:text-primary transition-colors"
                  >
                    [LinkedIn]
                  </Link>
                  <Link
                    href="mailto:william.dai@uwaterloo.ca"
                    className="text-terminal-green hover:text-primary transition-colors"
                  >
                    [Email]
                  </Link>
                </div>
              </div>

              {/* Terminal hint */}
              <div className="pt-8 text-sm text-muted-foreground">
                <p>💡 Try the terminal on the right →</p>
                <p className="text-xs mt-1">Type "help" to see available commands</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Terminal Area */}
      <div className="hidden lg:block lg:w-1/2 p-8 lg:p-16 border-l border-border">
        <div className="h-full">
          <Terminal currentPath="" />
        </div>
      </div>

      {/* Mobile Terminal (bottom) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-64 border-t border-border bg-background">
        <Terminal currentPath="" />
      </div>
    </div>
  )
}
