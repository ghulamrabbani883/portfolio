export default function ProjectsSection() {
    const projects = [
        {
            title: "Teleconsultation Website",
            description: "Multispecialty hospital platform for remote consultation via video conferencing, enabling seamless doctor-patient interactions.",
            tech: ["React.js", "Frappe", "Jitsi", "TailwindCSS"],
            colors: "from-blue-500 to-blue-600",
            link: "#",
            linkColor: "blue",
            icon: (
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "AgriTradeX Bidding System",
            description: "India's trusted marketplace for agri commodities connecting FPOs, millers, traders, exporters, and importers with integrated payment solutions.",
            tech: ["React Native", "React.js", "NestJS", "TailwindCSS"],
            colors: "from-green-500 to-green-600",
            link: "#",
            linkColor: "green",
            icon: (
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            title: "CG Minor Forest Marketplace",
            description: "Marketplace platform for forest produce products, connecting producers and buyers in the forestry sector.",
            tech: ["Next.js", "TailwindCSS", "Frappe"],
            colors: "from-emerald-500 to-emerald-600",
            link: "#",
            linkColor: "emerald",
            icon: (
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
        },
        {
            title: "Dentgist",
            description: "Comprehensive dental consultation website providing seamless appointment booking and patient management system.",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
            colors: "from-indigo-500 to-indigo-600",
            link: "https://dentgist.com/",
            linkColor: "indigo",
            icon: (
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            title: "Onewiththenature",
            description: "Portfolio website for a remote villa in Bangalore, showcasing luxury accommodation with stunning natural surroundings and modern amenities.",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
            colors: "from-teal-500 to-teal-600",
            link: "https://www.onewiththenature.com/",
            linkColor: "teal",
            fullWidth: true,
            icon: (
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        }
    ];

    const getTechBadgeColor = (tech: string) => {
        const colorMap: { [key: string]: string } = {
            "React.js": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
            "React Native": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
            "Next.js": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
            "Node.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
            "Express.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
            "MongoDB": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
            "NestJS": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
            "Frappe": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
            "TailwindCSS": "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200",
            "Jitsi": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
        };
        return colorMap[tech] || "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200";
    };

    return (
        <section id="projects" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group ${project.fullWidth ? 'lg:col-span-2' : ''}`}
                        >
                            <div className={`h-48 bg-gradient-to-r ${project.colors} flex items-center justify-center relative`}>
                                {project.icon}
                                {project.link && (
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-${project.linkColor}-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100`}
                                        >
                                            View Live Site
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-${project.linkColor}-600 dark:text-${project.linkColor}-400 hover:text-${project.linkColor}-700 dark:hover:text-${project.linkColor}-300 transition-colors`}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className={`px-3 py-1 text-sm rounded-full ${getTechBadgeColor(tech)}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}