import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ghulam Rabbani - Software Engineer | Full-Stack MERN Developer",
    template: "%s | Ghulam Rabbani - Software Engineer"
  },
  description: "Full-stack MERN engineer with 2.8+ years of experience, currently leading development and architecture planning at Klaimify. Specialized in React.js, Next.js, Node.js, NestJS, MongoDB, PostgreSQL, and cloud deployment solutions.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "MERN Stack",
    "React.js",
    "Next.js",
    "Node.js",
    "NestJS",
    "MongoDB",
    "PostgreSQL",
    "Express.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "React Native",
    "Redux Toolkit",
    "REST API",
    "Frappe",
    "Cloud Development",
    "VPS",
    "Vercel",
    "Netlify",
    "Cloudflare",
    "Git",
    "GitHub",
    "Postman",
    "Payment Integration",
    "Ghulam Rabbani",
    "Portfolio",
    "Web Developer",
    "Mobile App Developer"
  ],
  authors: [{ name: "Ghulam Rabbani", url: "https://github.com/ghulamrabbani" }],
  creator: "Ghulam Rabbani",
  publisher: "Ghulam Rabbani",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  alternates: {
    canonical: "https://ghulamrabbani-portfolio.vercel.app", // Replace with your actual domain
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ghulamrabbani-portfolio.vercel.app", // Replace with your actual domain
    title: "Ghulam Rabbani - Software Engineer | Full-Stack MERN Developer",
    description: "Full-stack MERN engineer with 2.8+ years of experience, currently leading development and architecture planning at Klaimify. Specialized in modern web technologies and cloud solutions.",
    siteName: "Ghulam Rabbani Portfolio",
    images: [
      {
        url: "/og-image.jpg", // We'll create this image
        width: 1200,
        height: 630,
        alt: "Ghulam Rabbani - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghulam Rabbani - Software Engineer | Full-Stack MERN Developer",
    description: "Full-stack MERN engineer with 2.8+ years of experience. Specialized in React.js, Next.js, Node.js, and modern web technologies.",
    creator: "@ghulamrabbani", // Replace with your actual Twitter handle
    images: ["/og-image.jpg"], // Same image as OpenGraph
  },
  category: "technology",
  applicationName: "Ghulam Rabbani Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="color-scheme" content="dark light" />
        <link rel="canonical" href="https://ghulamrabbani-portfolio.vercel.app" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Apply dark theme immediately to prevent flash
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <StructuredData />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
