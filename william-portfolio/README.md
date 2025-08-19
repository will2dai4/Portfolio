# William Dai - Portfolio

A minimalist, terminal-inspired portfolio website built with Next.js, showcasing software engineering projects and experience.

## Features

- 🌙 Dark-first design with soft yellow accents
- 💻 Terminal-inspired UI elements
- ⚡ Performance optimized with Next.js App Router
- 📱 Fully responsive design
- ♿ Accessibility-focused with WCAG compliance
- 🎨 Smooth animations with reduced-motion support
- 🔍 SEO optimized with structured data
- 📊 Vercel Analytics integration

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS + Typography plugin
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + JetBrains Mono
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## Content Management

Update content by editing the JSON files in the `/content` directory:

- `projects.json` - Project portfolio items
- `experiences.json` - Professional experience entries  
- `links.json` - Social links and contact information

## Project Structure

```
├── app/                    # Next.js App Router pages
├── components/             # Reusable React components
├── content/               # JSON content files
├── lib/                   # Utility functions and configs
├── public/                # Static assets
└── styles/                # Global styles
```

## Customization

### Colors & Theme

Update design tokens in `app/globals.css`:

```css
:root {
  --bg: #0B0D10;         /* Background */
  --fg: #E7E9EC;         /* Foreground text */
  --muted: #8A8F98;      /* Secondary text */
  --accent: #F4D06F;     /* Accent color */
  --border: #1A1D22;     /* Borders */
}
```

### SEO Configuration

Update site metadata in `lib/seo.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  description: "Your description",
  url: "https://yoursite.com",
  // ...
};
```

## Performance

- ✅ Lighthouse Score: 95+ across all metrics
- ✅ Core Web Vitals optimized
- ✅ Static generation for fast loading
- ✅ Optimized fonts and images

## License

MIT License - see LICENSE file for details.