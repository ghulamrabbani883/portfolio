"use client";

export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ghulam Rabbani",
        "jobTitle": "Software Engineer",
        "description": "Full-stack MERN engineer with 2.8+ years of experience, currently leading development and architecture planning at Klaimify.",
        "url": "https://ghulamrabbani-portfolio.vercel.app", // Replace with your actual domain
        "sameAs": [
            "https://github.com/ghulamrabbani", // Replace with your actual GitHub
            "https://linkedin.com/in/ghulamrabbani", // Replace with your actual LinkedIn
            // Add other social profiles
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "Klaimify"
        },
        "knowsAbout": [
            "JavaScript",
            "TypeScript",
            "React.js",
            "Next.js",
            "Node.js",
            "NestJS",
            "MongoDB",
            "PostgreSQL",
            "Express.js",
            "React Native",
            "Redux Toolkit",
            "REST API",
            "Frappe",
            "Python",
            "Java",
            "Cloud Development",
            "Full-Stack Development"
        ],
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Maulana Abul Kalam Azad University of Technology"
        },
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
            }}
        />
    );
}