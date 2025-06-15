const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-yellow-600/20"></div>
                <div className="absolute inset-0" style={{
                    backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(251, 191, 36, 0.1) 35px,
              rgba(251, 191, 36, 0.1) 70px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 35px,
              rgba(251, 191, 36, 0.05) 35px,
              rgba(251, 191, 36, 0.05) 70px
            )
          `
                }}></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-col md:flex-row items-center gap-4 text-4xl md:text-6xl font-bold">
                            <span className="hand text-5xl md:text-7xl">👋</span>
                            <div className="text-white">
                                Hi, I'm <span className="text-yellow-400">Dawid</span>
                            </div>
                        </div>

                        <div className="text-white text-2xl md:text-4xl font-bold">
                            A young developer from <span className="poland font-extrabold">Poland</span>
                        </div>

                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mt-4">
                            Passionate about creating modern web applications and learning new technologies.
                            I love turning ideas into beautiful, functional digital experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <a href="#projects">
                                <button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105">
                                    View My Work
                                </button>
                            </a>
                            <a href="#contact">
                                <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105">
                                    Get In Touch
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
