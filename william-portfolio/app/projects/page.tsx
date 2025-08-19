import type { Metadata } from 'next';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import PageTransition from '@/components/PageTransition';
import { getMetadata } from '@/lib/seo';
import projects from '@/content/projects.json';

export const metadata: Metadata = getMetadata(
  'Projects',
  'Software projects and technical work by William Dai, focused on infrastructure and systems.'
);

export default function ProjectsPage() {
  return (
    <PageTransition>
      <Section className="py-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted leading-relaxed max-w-2xl">
            A collection of technical projects spanning distributed systems, infrastructure, 
            and quantitative development. Each project represents a focus on performance, 
            scalability, and clean system design.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      </Section>
    </PageTransition>
  );
}
