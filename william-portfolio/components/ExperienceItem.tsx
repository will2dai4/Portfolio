import TechTag from './TechTag';

interface ExperienceItemProps {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
  tech: string[];
}

export default function ExperienceItem({ role, company, dates, bullets, tech }: ExperienceItemProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{role}</h3>
          <p className="text-accent">{company}</p>
        </div>
        <span className="text-sm text-muted font-mono">{dates}</span>
      </div>
      
      <ul className="space-y-2">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-muted leading-relaxed">
            <span className="text-accent mr-2">•</span>
            {bullet}
          </li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <TechTag key={item}>{item}</TechTag>
        ))}
      </div>
    </div>
  );
}
