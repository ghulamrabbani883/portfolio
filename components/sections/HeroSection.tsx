import Image from "next/image";

export default function HeroSection() {
    return (
        <section id="home" className="pt-20 pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between py-20">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ghulam Rabbani</span>
                        </h1>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
                            Software Engineer
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            Full-stack MERN engineer with 2.8+ years of experience, currently leading development and architecture planning at Klaimify. Skilled in designing scalable systems, optimizing performance, and mentoring team members. Strong focus on clean code, efficient state management, and high-quality user experience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center">
                                View Projects
                            </a>
                            <a href="#contact" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all text-center">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative">
                            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2">
                                <Image
                                    src="/myphoto.jpg"
                                    alt="Ghulam Rabbani"
                                    width={320}
                                    height={320}
                                    className="rounded-full object-cover w-full h-full"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}