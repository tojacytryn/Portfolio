import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
    const { getTranslation } = useLanguage();

    const projects = [
        {
            id: 1,
            title: 'Portfolio',
            descriptionKey: 'projects.portfolio.description',
            image: 'https://i.imgur.com/yfzJShq.png',
            technologies: ['React', 'Tailwind CSS', 'JavaScript'],
            demoUrl: '#',
            codeUrl: 'https://github.com/tojacytryn/Portfolio'
        },
        {
            id: 2,
            title: 'TwitchTTS "Iᴠᴏɴᴋᴀ"',
            descriptionKey: 'projects.twitchtts.description',
            image: 'https://i.imgur.com/FIx1vu8.png',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
            demoUrl: 'https://cytryn.ovh/ivonka/',
            codeUrl: 'https://cytryn.ovh/ivonka/'
        },
        {
            id: 3,
            title: 'Flagmask',
            descriptionKey: 'projects.flagmask.description',
            image: 'https://media.istockphoto.com/id/1190901810/vector/flags-of-the-world.jpg?s=612x612&w=0&k=20&c=Kmi90OlDY9BexGE4Hvkqcz1Eg6tD6q9nwiuxLwwcWFY=',
            technologies: ['CSS', 'npm'],
            demoUrl: 'https://github.com/tojacytryn/flagmask',
            codeUrl: 'https://github.com/tojacytryn/flagmask'
        },
        {
            id: 4,
            title: 'Snake',
            descriptionKey: 'projects.snake.description',
            image: 'https://i.imgur.com/fGh1We9.png',
            technologies: ['C++', 'Raylib'],
            demoUrl: 'https://github.com/tojacytryn/CppSnake',
            codeUrl: 'https://github.com/tojacytryn/CppSnake'
        }
    ];

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 left-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        <span className="text-yellow-400">{getTranslation('projects.title').split(' ')[0]}</span> <span className="text-white">{getTranslation('projects.title').split(' ').slice(1).join(' ')}</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group bg-[#00152480] backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-yellow-400/30 transition-all duration-500 hover:scale-105"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <a
                                            href={project.demoUrl}
                                            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105"
                                        >
                                            {getTranslation('projects.liveDemo')}
                                        </a>
                                        <a
                                            href={project.codeUrl}
                                            className="bg-white/20 text-white px-4 py-2 rounded-full font-medium hover:bg-white/30 transition-colors duration-300 transform hover:scale-105 backdrop-blur-sm"
                                        >
                                            {getTranslation('projects.viewCode')}
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        {getTranslation(project.descriptionKey)}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-gray-800/50 text-yellow-400 text-sm rounded-full border border-yellow-400/20 hover:border-yellow-400/50 transition-colors duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <p className="text-gray-300 text-lg mb-6">
                            {getTranslation('projects.collaborate')}
                        </p>
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-400/25"
                        >
                            {getTranslation('projects.workTogether')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
