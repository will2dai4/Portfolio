'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import TechTag from './TechTag';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  blurb: string;
  tech: string[];
  href?: string;
  repo?: string;
}

export default function ProjectCard({ title, blurb, tech, href, repo }: ProjectCardProps) {
  return (
    <motion.div 
      className="p-6 border border-border rounded-lg bg-background"
      whileHover={{ 
        y: -4, 
        boxShadow: 'var(--shadow)',
        transition: { duration: 0.2 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted leading-relaxed">{blurb}</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <TechTag key={item}>{item}</TechTag>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          {repo && (
            <Button href={repo} variant="ghost" size="sm">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
          {href && (
            <Button href={href} variant="default" size="sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
