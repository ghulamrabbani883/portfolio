export default function EducationSection() {
    const education = [
        {
            degree: "B.Tech in Computer Science",
            institution: "Chouksey Engineering College",
            period: "2019-2023"
        },
        {
            degree: "Secondary School (PCM)",
            institution: "Railway School Bilaspur, Chhattisgarh",
            period: "2017-2019"
        },
        {
            degree: "Matriculation",
            institution: "Holy Nursery English Medium School",
            period: "2016-2017"
        }
    ];

    const certifications = [
        {
            title: "Full-stack Open Source Cohort",
            provider: "100xDevs",
            color: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
            borderColor: "border-blue-200 dark:border-blue-800",
            iconBg: "bg-blue-500",
            textColor: "text-blue-600 dark:text-blue-400"
        },
        {
            title: "Full-stack Development",
            provider: "Garudadezin",
            color: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
            borderColor: "border-green-200 dark:border-green-800",
            iconBg: "bg-green-500",
            textColor: "text-green-600 dark:text-green-400"
        }
    ];

    return (
        <section id="education" className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
                    Education & Certifications
                </h2>

                {/* Education */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Education</h3>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                <div>
                                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{edu.degree}</h4>
                                    <p className="text-slate-600 dark:text-slate-400">{edu.institution}</p>
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{edu.period}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <div key={index} className={`p-6 bg-gradient-to-r ${cert.color} rounded-lg border ${cert.borderColor}`}>
                                <div className="flex items-center mb-4">
                                    <div className={`w-12 h-12 ${cert.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{cert.title}</h4>
                                        <p className={cert.textColor}>{cert.provider}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}