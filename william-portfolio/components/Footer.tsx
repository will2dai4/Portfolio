import Link from 'next/link';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/experiences', label: 'Experiences' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="w-full max-w-content mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted">
            © {new Date().getFullYear()} William Dai
          </div>
          
          <nav className="flex items-center gap-6">
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
