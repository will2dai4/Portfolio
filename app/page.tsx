"use client"

import { Terminal } from "@/components/terminal"
import { TypingText } from "@/components/typing-text"
import Link from "next/link"
import { Icon } from "@iconify/react"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="h-screen flex">
      {/* Left Content Area */}
      <div className="w-full md:w-1/2 p-8 lg:p-16 flex flex-col lg:justify-center overflow-y-auto">
        <div className="max-w-2xl space-y-8">
          {/* Header with typing animation */}
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary">
              <TypingText
                text="William Dai"
                delay={80}
              />
            </h1>
            <p className="text-xl text-muted-foreground">SWE @ Shopify | Prev @ Fable Security</p>
            <p className="text-xl text-muted-foreground">CS @ University of Waterloo</p>
          </div>

          {/* Quick points */}
          <div className="space-y-4">

              {/* Experiences */}
              <div className="space-y-2">
                <h2 className="text-lg text-primary">
                  $ cat <Link href="/experiences" className="underline hover:text-primary/80 transition-colors">experiences</Link>
                </h2>
                <ul className="space-y-1 text-muted-foreground pl-4">
                  <li>→ Full-stack development with Django, PostgreSQL, React</li>
                  <li>→ Hackathon organizer & founder</li>
                  <li>→ Volunteer research at the University of Toronto</li>
                </ul>
              </div>

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

              {/* Courses */}
              <div className="space-y-2">
                <h2 className="text-lg text-primary">
                  $ cat <Link href="/courses" className="underline hover:text-primary/80 transition-colors">courses </Link>
                </h2>
                <ul className="space-y-1 text-muted-foreground pl-4">
                  <li>→ 2B: CS240E, CS241, CS251, STAT231, AMATH250</li>
                </ul>
              </div>

              {/* Links */}
              <div className="space-y-2 pt-4">
                <h2 className="text-lg text-primary">$ cat links</h2>
                <div className="flex flex-wrap gap-4 pl-4">
                  <Link
                    href="https://drive.google.com/file/d/1KZaKkeq6mtF_Tp4oZ4jDHLOm1auuwWJx/view?usp=sharing"
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
      <div className="hidden md:block md:w-1/2 p-8 lg:p-16 h-screen overflow-hidden">
        <div className="h-full">
          <Terminal currentPath="" />
        </div>
      </div>
    </div>
  )
}
