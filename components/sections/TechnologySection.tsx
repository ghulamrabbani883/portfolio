export default function TechnologySection() {
    const technologies = {
        "Frontend": {
            icon: "M12 2L2 7v10l10 5 10-5V7L12 2zM12 4.2L20.3 8 12 11.8 3.7 8 12 4.2zM4 9.5l7 3.5v7l-7-3.5v-7zm16 0v7l-7 3.5v-7l7-3.5z",
            items: ["JavaScript", "TypeScript", "React.js", "Next.js", "React Native", "Redux Toolkit"]
        },
        "Backend & Database": {
            icon: "M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z",
            items: ["Node.js", "Nest.js", "MongoDB", "PostgreSQL", "REST API", "Frappe"]
        },
        "Cloud & Hosting": {
            icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
            items: ["VPS", "Cloudflare", "Vercel", "Netlify"]
        },
        "Programming Languages": {
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            items: ["JavaScript", "TypeScript", "Python", "Java"]
        },
        "Development Tools": {
            icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
            items: ["Git", "GitHub", "Postman", "Payment Integration"]
        }
    };

    return (
        <section id="technologies" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Technologies & Skills
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        A comprehensive overview of the technologies, frameworks, and tools I work with to build modern applications
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(technologies).map(([category, { icon, items }]) => (
                        <div
                            key={category}
                            className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                                    <svg
                                        className="w-6 h-6 text-blue-600 dark:text-blue-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d={icon}
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                    {category}
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                {items.map((item) => (
                                    <div
                                        key={item}
                                        className="bg-slate-50 dark:bg-slate-800 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200 text-center"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Section */}
                <div className="mt-16 text-center">
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                            Core Competencies
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "Full-Stack Development",
                                "API Design & Integration",
                                "Database Architecture",
                                "Cloud Deployment",
                                "Version Control",
                                "Agile Development",
                                "Performance Optimization",
                                "Mobile Development",
                                "DevOps Practices"
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}