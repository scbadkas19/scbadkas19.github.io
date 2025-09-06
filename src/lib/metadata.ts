import type { Metadata } from 'next';

export const siteMetadata = {
  title: 'Your Name - Data Engineer Portfolio',
  description: 'Professional portfolio showcasing data engineering projects and skills',
  author: 'Your Name',
  siteUrl: 'https://yourportfolio.com',
  twitterHandle: '@yourhandle',
};

export const generateMetadata = (path: string): Metadata => {
  const currentUrl = `${siteMetadata.siteUrl}${path}`;
  
  return {
    title: siteMetadata.title,
    description: siteMetadata.description,
    authors: [{ name: siteMetadata.author }],
    openGraph: {
      title: siteMetadata.title,
      description: siteMetadata.description,
      url: currentUrl,
      siteName: siteMetadata.title,
      type: 'website',
      images: [
        {
          url: `${siteMetadata.siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: siteMetadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteMetadata.title,
      description: siteMetadata.description,
      creator: siteMetadata.twitterHandle,
      images: [`${siteMetadata.siteUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL(siteMetadata.siteUrl),
  };
}; 