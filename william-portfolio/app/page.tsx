import { Github, Linkedin, FileText } from 'lucide-react';
import Section from '@/components/Section';
import TerminalFrame from '@/components/TerminalFrame';
import TerminalPromptHero from '@/components/TerminalPromptHero';
import ProjectCard from '@/components/ProjectCard';
import ExperienceItem from '@/components/ExperienceItem';
import IconLink from '@/components/IconLink';
import TechTag from '@/components/TechTag';
import PageTransition from '@/components/PageTransition';

// Import content
import projects from '@/content/projects.json';
import experiences from '@/content/experiences.json';
import links from '@/content/links.json';

export default function Home() {
  // Show top 2-3 projects and experiences for highlights
  const topProjects = projects.slice(0, 2);
  const topExperiences = experiences.slice(0, 2);

  return (
    <PageTransition>
      <div className="space-y-16">
      {/* Hero Section */}
      <Section className="pt-16">
        <TerminalFrame>
          <TerminalPromptHero />
        </TerminalFrame>
      </Section>

      {/* About Section */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
          <p className="text-muted leading-relaxed mb-4">
            Computer science student at the University of Waterloo with a passion for building scalable systems and infrastructure. 
            I enjoy working on problems at the intersection of systems engineering and quantitative development.
          </p>
          <p className="text-muted leading-relaxed">
            Currently exploring opportunities in high-frequency trading, distributed systems, and machine learning infrastructure.
          </p>
        </div>
      </Section>

      {/* Focus Areas */}
      <Section>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Focus Areas</h2>
          <div className="flex flex-wrap gap-3">
            <TechTag>Systems</TechTag>
            <TechTag>Infrastructure</TechTag>
            <TechTag>Markets</TechTag>
            <TechTag>Performance</TechTag>
            <TechTag>Distributed Systems</TechTag>
          </div>
        </div>
      </Section>

      {/* Project Highlights */}
      <Section>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Featured Projects</h2>
            <a href="/projects" className="text-accent hover:text-accent/80 transition-colors text-sm">
              View all →
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {topProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </Section>

      {/* Experience Highlights */}
      <Section>
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Recent Experience</h2>
            <a href="/experiences" className="text-accent hover:text-accent/80 transition-colors text-sm">
              View all →
            </a>
          </div>
          <div className="space-y-8">
            {topExperiences.map((experience, index) => (
              <div key={index} className="pb-8 border-b border-border last:border-b-0 last:pb-0">
                <ExperienceItem {...experience} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Quick Links */}
      <Section>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Connect</h2>
          <div className="flex items-center gap-4">
            {links.linkedin && (
              <IconLink href={links.linkedin} label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </IconLink>
            )}
            {links.github && (
              <IconLink href={links.github} label="GitHub">
                <Github className="w-5 h-5" />
              </IconLink>
            )}
            {links.resume && (
              <IconLink href={links.resume} label="Resume">
                <FileText className="w-5 h-5" />
              </IconLink>
            )}
          </div>
        </div>
      </Section>
      </div>
    </PageTransition>
  );
}
