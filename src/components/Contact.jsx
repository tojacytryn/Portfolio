import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
    const { getTranslation } = useLanguage();

    return (
        <section id="contact" className="py-20 bg-[#00152480] backdrop-blur-md relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-80 h-80 bg-yellow-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-600 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                        <span className="text-yellow-400">{getTranslation('contact.title')}</span> {getTranslation('contact.connector')} <span className="text-white">{getTranslation('contact.title2')}</span>
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    {getTranslation('contact.getInTouch')}
                                </h3>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    {getTranslation('contact.description')}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-colors duration-300">
                                    <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">Email</p>
                                        <a href="mailto:tojacytryn@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                                            tojacytryn@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-colors duration-300">
                                    <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">{getTranslation('contact.location')}</p>
                                        <p className="text-yellow-400">{getTranslation('contact.locationValue')}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-colors duration-300">
                                    <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">GitHub</p>
                                        <a href="https://github.com/tojacytryn" target="_blank" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                                            github.com/tojacytryn
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center lg:justify-start gap-4 pt-6">
                                <a href="https://x.com/tojacytryn" target="_blank" className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-yellow-400/20 hover:text-yellow-400 transition-all duration-300 border border-white/10 hover:border-yellow-400/30">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </a>
                                <a href="https://youtube.com/@tojacytryn" target="_blank" className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-yellow-400/20 hover:text-yellow-400 transition-all duration-300 border border-white/10 hover:border-yellow-400/30">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    </svg>
                                </a>
                                <a href="https://twitch.tv/tojacytryn" target="_blank" className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-yellow-400/20 hover:text-yellow-400 transition-all duration-300 border border-white/10 hover:border-yellow-400/30">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <form action="https://formspree.io/f/xovebegj" method="POST" className="space-y-6">
                                <div>
                                    <label for="name" className="block text-white text-sm font-medium mb-2">
                                        {getTranslation('contact.name')} *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300"
                                        placeholder={getTranslation('contact.namePlaceholder')}
                                    />
                                </div>
                                <div>
                                    <label for="email" className="block text-white text-sm font-medium mb-2">
                                        {getTranslation('contact.email')} *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300"
                                        placeholder={getTranslation('contact.emailPlaceholder')}
                                    />
                                </div>
                                <div>
                                    <label for="message" className="block text-white text-sm font-medium mb-2">
                                        {getTranslation('contact.message')} *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300 resize-vertical"
                                        placeholder={getTranslation('contact.messagePlaceholder')}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className='w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 bg-yellow-400 hover:bg-yellow-500 text-gray-900 hover:scale-105'
                                >
                                    {getTranslation('contact.sendMessage')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
