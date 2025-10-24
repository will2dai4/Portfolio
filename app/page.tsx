"use client"

import { Terminal } from "@/components/terminal"
import { TypingText } from "@/components/typing-text"
import Link from "next/link"

export default function Home() {
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
              />
            </h1>
            <p className="text-xl text-muted-foreground">CS @ University of Waterloo</p>
          </div>

          {/* Quick points */}
          <div className="space-y-4">
              {/* Projects */}
              <div className="space-y-2">
                <h2 className="text-lg text-primary">
                  $ cat <Link href="/projects" className="underline hover:text-primary/80 transition-colors">projects</Link>
                </h2>
                <ul className="space-y-1 text-muted-foreground pl-4">
                  <li>→ UWPlanit: Course graph & planner</li>
                  <li>→ Ai Dente: AI-powered pantry manager</li>
                  <li>→ Molecuwar: Educational chemistry game</li>
                  <li>→ RaiderStrike: Multiplayer shooter game</li>
                </ul>
              </div>

              {/* Experiences */}
              <div className="space-y-2">
                <h2 className="text-lg text-primary">
                  $ cat <Link href="/experiences" className="underline hover:text-primary/80 transition-colors">experiences</Link>
                </h2>
                <ul className="space-y-1 text-muted-foreground pl-4">
                  <li>→ Full-stack development with Django, PostgreSQL, Next.js</li>
                  <li>→ Built automation tools increasing sales outreach by 10x</li>
                  <li>→ Hackathon organizer & founder</li>
                </ul>
              </div>

              {/* Links */}
              <div className="space-y-2 pt-4">
                <h2 className="text-lg text-primary">$ cat links</h2>
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
                <p>Try the terminal on the right →</p>
                <p className="text-xs mt-1">Type "help" to see available commands</p>
              </div>
          </div>
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
