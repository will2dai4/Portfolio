import type { Metadata } from 'next';
import Section from '@/components/Section';
import ExperienceItem from '@/components/ExperienceItem';
import PageTransition from '@/components/PageTransition';
import { getMetadata } from '@/lib/seo';
import experiences from '@/content/experiences.json';

export const metadata: Metadata = getMetadata(
  'Experience',
  'Professional experience and internships of William Dai in software engineering.'
);

export default function ExperiencesPage() {
  return (
    <PageTransition>
      <Section className="py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground">Experience</h1>
            <p className="text-muted leading-relaxed max-w-2xl">
              Professional experience across high-performance trading systems, payment infrastructure, 
              and scalable web platforms. Focused on building reliable systems that operate at scale.
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="pb-12 border-b border-border last:border-b-0 last:pb-0">
                <ExperienceItem {...experience} />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </PageTransition>
  );
}
