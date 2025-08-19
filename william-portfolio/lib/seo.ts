export const siteConfig = {
  name: "William Dai",
  description: "Software engineer and computer science student at the University of Waterloo. Focused on infrastructure and quantitative development.",
  url: "https://williamdai.dev", // Update with actual domain
  ogImage: "/og.png",
  creator: "@williamdai",
  keywords: [
    "William Dai",
    "software engineer",
    "developer",
    "University of Waterloo",
    "computer science",
    "infrastructure",
    "systems",
    "quantitative development",
    "full stack",
    "backend",
    "distributed systems"
  ],
};

export const getMetadata = (title?: string, description?: string) => ({
  title: title ? `${title} - ${siteConfig.name}` : `${siteConfig.name} - Software Engineer`,
  description: description || siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: title ? `${title} - ${siteConfig.name}` : `${siteConfig.name} - Software Engineer`,
    description: description || siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title ? `${title} - ${siteConfig.name}` : `${siteConfig.name} - Software Engineer`,
    description: description || siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
  },
  robots: {
    index: true,
    follow: true,
  },
});
