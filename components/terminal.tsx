"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

interface TerminalProps {
  currentPath: string
}

interface CommandHistory {
  command: string
  output: string[]
}

export function Terminal({ currentPath }: TerminalProps) {
  // Load from session storage or initialize with welcome message
  const loadHistory = (): CommandHistory[] => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('terminal-history')
      if (saved) {
        try {
          return JSON.parse(saved)
        } catch (e) {
          // Fall back to default if parsing fails
        }
      }
    }
    return [
      {
        command: "",
        output: ["Welcome to William Dai's Portfolio Terminal", 'Type "help" for available commands', ""],
      },
    ]
  }

  const loadCommandHistory = (): string[] => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('terminal-command-history')
      if (saved) {
        try {
          return JSON.parse(saved)
        } catch (e) {
          // Fall back to empty array if parsing fails
        }
      }
    }
    return []
  }

  const [input, setInput] = useState("")
  const [history, setHistory] = useState<CommandHistory[]>(loadHistory)
  const [commandHistory, setCommandHistory] = useState<string[]>(loadCommandHistory)
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const commands: Record<string, { description: string; action: (args: string[]) => string[] }> = {
    help: {
      description: "Show available commands",
      action: () => [
        "Available commands:",
        "  help          - Show this help message",
        "  ls            - List available pages",
        "  cd <page>     - Navigate to a page",
        "  pwd           - Show current page",
        "  clear         - Clear terminal",
        "  whoami        - Display information about me",
        "  contact       - Show contact information",
        "  skills        - List technical skills",
        "",
      ],
    },
    ls: {
      description: "List available pages",
      action: () => ["home", "  projects", "  experiences", "  courses", ""],
    },
    cd: {
      description: "Navigate to a page",
      action: (args) => {
        if (args.length === 0) {
          router.push("/")
          return ["Navigating to home..."]
        }
        const page = args[0].toLowerCase()
        if (["home", "/", "~"].includes(page)) {
          router.push("/")
          return ["Navigating to home..."]
        } else if (page === "projects") {
          router.push("/projects")
          return ["Navigating to projects..."]
        } else if (page === "experiences") {
          router.push("/experiences")
          return ["Navigating to experiences..."]
        } else if (page === "blogs") {
          router.push("/blogs")
          return ["Navigating to blogs..."]
        } else if (page === "courses") {
          router.push("/courses")
          return ["Navigating to courses..."]
        } else {
          return [`cd: ${page}: No such page`, 'Try "ls" to see available pages', ""]
        }
      },
    },
    pwd: {
      description: "Show current page",
      action: () => [`/${currentPath}`, ""],
    },
    clear: {
      description: "Clear terminal",
      action: () => {
        setHistory([])
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('terminal-history', JSON.stringify([]))
        }
        return []
      },
    },
    whoami: {
      description: "Display information about me",
      action: () => [
        "William Dai",
        "Computer Science @ University of Waterloo",
        "Software Engineer",
        "Expected Graduation: 2028",
        "",
      ],
    },
    contact: {
      description: "Show contact information",
      action: () => [
        "Contact Information:",
        "  Email: william.dai@uwaterloo.ca",
        "  GitHub: github.com/will2dai4",
        "  LinkedIn: linkedin.com/in/william-dai-uw",
        "",
      ],
    },
    skills: {
      description: "List technical skills",
      action: () => [
        "Technical Skills:",
        "  Languages: Python, C++, C, Java, JavaScript",
        "  Frameworks: Django, Flask, Next.js, PostgreSQL",
        "  Tools: Linux/Unix, Git, Docker, AWS Lambda",
        "",
      ],
    },
  }

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim()
    if (!trimmedCmd) {
      setHistory((prev) => [...prev, { command: "", output: [] }])
      return
    }

    const [command, ...args] = trimmedCmd.split(" ")
    const commandLower = command.toLowerCase()

    if (commands[commandLower]) {
      const output = commands[commandLower].action(args)
      setHistory((prev) => [...prev, { command: trimmedCmd, output }])
    } else {
      setHistory((prev) => [
        ...prev,
        {
          command: trimmedCmd,
          output: [`Command not found: ${command}`, 'Type "help" for available commands', ""],
        },
      ])
    }

    setCommandHistory((prev) => [...prev, trimmedCmd])
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input)
      setInput("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setInput("")
        } else {
          setHistoryIndex(newIndex)
          setInput(commandHistory[newIndex])
        }
      }
    }
  }

  // Save history to session storage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('terminal-history', JSON.stringify(history))
    }
  }, [history])

  // Save command history to session storage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('terminal-command-history', JSON.stringify(commandHistory))
    }
  }, [commandHistory])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  return (
    <div
      className="h-full bg-card border border-border rounded-lg p-4 overflow-hidden flex flex-col"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-sm text-muted-foreground">terminal</span>
      </div>

      <div ref={terminalRef} className="flex-1 overflow-y-auto space-y-2 mb-4">
        {history.map((item, i) => (
          <div key={i}>
            {item.command && (
              <div className="flex gap-2">
                <span className="text-terminal-green">guest@portfolio:~$</span>
                <span className="text-foreground">{item.command}</span>
              </div>
            )}
            {item.output.map((line, j) => (
              <div key={j} className="text-muted-foreground pl-0">
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex gap-2 items-center">
        <span className="text-terminal-green whitespace-nowrap">guest@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none text-foreground"
          autoFocus
          spellCheck={false}
        />
      </div>
    </div>
  )
}
