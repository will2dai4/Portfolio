"use client"

import { Terminal } from "@/components/terminal"
import { TypingText } from "@/components/typing-text"
import Link from "next/link"

export default function Home() {
  return (
    <div className="h-screen flex overflow-hidden">
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
                  <li>→ <Link href="https://uwplanit.com" target="_blank" className="underline hover:text-primary/80 transition-colors">UWPlanit</Link>: Course graph & planner</li>
                  <li>→ <Link href="https://al-dente.site" target="_blank" className="underline hover:text-primary/80 transition-colors">AI Dente</Link>: AI-powered pantry manager</li>
                  <li>→ <Link href="https://github.com/will2dai4/RaiderStrike-Server" target="_blank" className="underline hover:text-primary/80 transition-colors">RaiderStrike</Link>: Multiplayer shooter game</li>
                </ul>
              </div>

              {/* Experiences */}
              <div className="space-y-2">
                <h2 className="text-lg text-primary">
                  $ cat <Link href="/experiences" className="underline hover:text-primary/80 transition-colors">experiences</Link>
                </h2>
                <ul className="space-y-1 text-muted-foreground pl-4">
                  <li>→ Full-stack development with Django, PostgreSQL, Next.js</li>
                  <li>→ Hackathon organizer & founder</li>
                  <li>→ Volunteer research at the University of Toronto</li>
                </ul>
              </div>

              {/* Courses */}
              <div className="space-y-2">
                <h2 className="text-lg text-primary">
                  $ cat <Link href="/courses" className="underline hover:text-primary/80 transition-colors">courses </Link>
                </h2>
                <ul className="space-y-1 text-muted-foreground pl-4">
                  <li>→ 2A: CS246E, CS245E, MATH239, STAT230, CLAS104</li>
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
                    href="https://x.com/William2Dai"
                    target="_blank"
                    className="text-terminal-green hover:text-primary transition-colors"
                  >
                    [X (Twitter)]
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
      <div className="hidden lg:block lg:w-1/2 p-8 lg:p-16 border-l border-border h-screen overflow-hidden">
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
