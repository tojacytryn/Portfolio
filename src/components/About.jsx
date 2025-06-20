import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
    const { getTranslation } = useLanguage();

    const technologies = [
        { name: 'HTML', img: 'https://skillicons.dev/icons?i=html' },
        { name: 'CSS', img: 'https://skillicons.dev/icons?i=css' },
        { name: 'Tailwind', img: 'https://skillicons.dev/icons?i=tailwindcss' },
        { name: 'JavaScript', img: 'https://skillicons.dev/icons?i=javascript' },
        { name: 'React', img: 'https://skillicons.dev/icons?i=react' },
        { name: 'Node.js', img: 'https://skillicons.dev/icons?i=nodejs' },
        { name: 'DiscordJS', img: 'https://skillicons.dev/icons?i=discordjs' },
        { name: 'Python', img: 'https://skillicons.dev/icons?i=python' },
        { name: 'PHP', img: 'https://skillicons.dev/icons?i=php' },
        { name: 'SQL', img: 'https://skillicons.dev/icons?i=mysql' },
        { name: 'Git', img: 'https://skillicons.dev/icons?i=git' },
        { name: 'GitHub', img: 'https://skillicons.dev/icons?i=github' },
        { name: 'VS Code', img: 'https://skillicons.dev/icons?i=vscode' },
        { name: 'Figma', img: 'https://skillicons.dev/icons?i=figma' },
    ];

    return (
        <section id="about" className="py-20 bg-[#00152480] backdrop-blur-md relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        <span className="text-yellow-400">{getTranslation('about.title').split(' ')[0]}</span> <span className="text-white">{getTranslation('about.title').split(' ')[1]}</span>
                    </h2>

                    <div className="bg-[#00152480] backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10">
                        <div className="text-center mb-12">
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                                {getTranslation('about.description')}
                            </p>
                        </div>

                        <div className="mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-8 text-center">
                                {getTranslation('about.technologies')}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                                {technologies.map((tech, index) => (
                                    <div
                                        key={tech.name}
                                        className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/10 hover:border-yellow-400/30"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                            <img src={tech.img} alt={tech.name} className="w-16 h-16 mx-auto" />
                                        </div>
                                        <h4 className="">
                                            {tech.name}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center p-6 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-xl border border-yellow-400/20">
                                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">16</div>
                                <div className="text-gray-300">{getTranslation('about.yearsOld')}</div>
                            </div>
                            <div className="text-center p-6 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-xl border border-yellow-400/20">
                                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">10+</div>
                                <div className="text-gray-300">{getTranslation('about.projects')}</div>
                            </div>
                            <div className="text-center p-6 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-xl border border-yellow-400/20">
                                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">∞</div>
                                <div className="text-gray-300">{getTranslation('about.passion')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
