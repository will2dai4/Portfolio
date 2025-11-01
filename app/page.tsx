"use client"

import { Terminal } from "@/components/terminal"
import { TypingText } from "@/components/typing-text"
import { useState } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"
import Footer from "@/components/footer"

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  return (
    <div className="h-screen flex">
      {/* Left Content Area */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col lg:justify-center overflow-y-auto">
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
                    href="https://drive.google.com/file/d/1v7Do_SXtoKddGJR62cIPM0MPUSUmmAxw/view?usp=sharing"
                    target="_blank"
                    className="inline-block w-7 h-7 text-terminal-green hover:text-primary transition-colors"
                    aria-label="Resume"
                  >
                    <Icon icon="line-md:file" width="28" height="28" />
                  </Link>
                  <Link
                    href="https://github.com/will2dai4"
                    target="_blank"
                    className="inline-block w-7 h-7 text-terminal-green hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Icon icon="line-md:github" width="28" height="28" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/william-dai-uw"
                    target="_blank"
                    className="inline-block w-7 h-7 text-terminal-green hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Icon icon="line-md:linkedin" width="28" height="28" />
                  </Link>
                  <Link
                    href="https://x.com/William2Dai"
                    target="_blank"
                    className="inline-block w-7 h-7 text-terminal-green hover:text-primary transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <Icon icon="line-md:twitter-x-alt" width="28" height="28" />
                  </Link>
                  <Link
                    href="mailto:william.dai@uwaterloo.ca"
                    className="inline-block w-7 h-7 text-terminal-green hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <Icon icon="line-md:email" width="28" height="28" />
                  </Link>
                </div>
              </div>
              <Footer />
          </div>
        </div>
      </div>

      {/* Right Terminal Area */}
      <div className="hidden lg:block lg:w-1/2 p-8 lg:p-16 border-l border-border h-screen overflow-hidden">
        <div className="h-full">
          <Terminal currentPath="" />
        </div>
      </div>

      {/* Mobile Terminal (right slide-out) */}
      <div className="lg:hidden">
        <div
          className={`fixed inset-y-0 right-0 z-40 w-80 max-w-[85vw] border-l border-border bg-background transform transition-transform duration-300 ${isTerminalOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="h-full p-4 overflow-hidden">
            <Terminal currentPath="" />
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
