import type { Metadata } from 'next';
import { Github, Linkedin } from 'lucide-react';
import Section from '@/components/Section';
import IconLink from '@/components/IconLink';
import PageTransition from '@/components/PageTransition';
import { getMetadata } from '@/lib/seo';
import links from '@/content/links.json';

export const metadata: Metadata = getMetadata(
  'Contact',
  'Get in touch with William Dai for opportunities in software engineering.'
);

export default function ContactPage() {
  return (
    <PageTransition>
      <Section className="py-16">
        <div className="space-y-8 max-w-2xl">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground">Contact</h1>
            <p className="text-muted leading-relaxed">
              Interested in discussing opportunities in systems engineering, infrastructure, 
              or quantitative development? Feel free to reach out.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email - Plain text only as specified */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Email</h2>
              <p className="font-mono text-accent bg-border/30 px-4 py-3 rounded-lg border border-border">
                {links.email}
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Connect</h2>
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
              </div>
            </div>

            {/* Response time note */}
            <div className="text-sm text-muted border-l-2 border-accent/30 pl-4 py-2">
              <p>
                I typically respond within 24-48 hours. For urgent inquiries, 
                LinkedIn might be faster than email.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </PageTransition>
  );
}
