import { siteConfig } from '@/lib/seo';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "William Dai",
    "url": siteConfig.url,
    "jobTitle": "Software Engineer",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of Waterloo"
    },
    "knowsAbout": [
      "Software Engineering",
      "Computer Science",
      "Infrastructure",
      "Distributed Systems",
      "Quantitative Development",
      "Backend Development"
    ],
    "sameAs": [
      "https://linkedin.com/in/williamdai",
      "https://github.com/williamdai"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
