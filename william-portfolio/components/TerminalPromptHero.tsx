'use client';

import { useState, useEffect } from 'react';

export default function TerminalPromptHero() {
  const [showCommand, setShowCommand] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowCommand(true), 500);
    const timer2 = setTimeout(() => setShowOutput(true), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* Terminal prompt */}
      <div className="font-mono text-sm text-muted">
        <span className="text-accent">william@portfolio</span>
        <span className="text-muted">:</span>
        <span className="text-blue-400">~/portfolio</span>
        <span className="text-muted"> $ </span>
        {showCommand && (
          <>
            <span>whoami</span>
            <span className="terminal-caret ml-1">|</span>
          </>
        )}
      </div>

      {/* Output */}
      {showOutput && (
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-foreground leading-none">
            William Dai
          </h1>
          <p className="text-xl text-muted">
            software engineer · cs @ uWaterloo
          </p>
        </div>
      )}
    </div>
  );
}
