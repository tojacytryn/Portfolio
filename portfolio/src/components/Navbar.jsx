import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <nav className="fixed w-full bg-[#001524] bg-opacity-90 backdrop-blur-sm z-50 border-b border-yellow-400/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <img
                            src="/lemon_slice.png"
                            alt="Logo"
                            className="h-8 w-8 text-yellow-400"
                        />
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                >
                                    <button
                                        className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group"
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                                    </button>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-[#001524] bg-opacity-95 backdrop-blur-sm">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {[
                            { name: 'Home', id: 'home' },
                            { name: 'About', id: 'about' },
                            { name: 'Projects', id: 'projects' },
                            { name: 'Contact', id: 'contact' }
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
