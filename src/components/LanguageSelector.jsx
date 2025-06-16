import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, changeLanguage } = useLanguage();

    const languages = [
        { code: 'en', name: 'English', flag: 'https://flagcdn.com/gb.svg' },
        { code: 'pl', name: 'Polski', flag: 'https://flagcdn.com/pl.svg' },
        { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/de.svg' },
        { code: 'es', name: 'Español', flag: 'https://flagcdn.com/es.svg' },
        { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/fr.svg' },
        { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/ru.svg' },
    ];

    const currentLanguage = languages.find(lang => lang.code === language) || languages[1];

    const handleLanguageChange = (langCode) => {
        changeLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Language dropdown */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 bg-[#001524] border border-yellow-400/30 rounded-xl shadow-2xl backdrop-blur-md overflow-hidden mb-2">
                    <div className="max-h-80 overflow-y-auto">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={`w-full px-4 py-3 text-left hover:bg-yellow-400/10 transition-colors duration-200 flex items-center gap-3 ${language === lang.code ? 'bg-yellow-400/20 text-yellow-400' : 'text-white'
                                    }`}
                            >
                                <span className="text-xl"><img src={lang.flag} className='w-6' alt="flag" /></span>
                                <span className="font-medium whitespace-nowrap">{lang.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Language selector button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#001524] border border-yellow-400/30 text-white p-3 pl-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:border-yellow-400/50 backdrop-blur-md flex items-center gap-2"
            >
                <span className="text-xl"><img src={currentLanguage.flag} className='w-6' alt="flag" /></span>
                <span className="font-medium">{currentLanguage.name}</span>
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>
    );
};

export default LanguageSelector;
