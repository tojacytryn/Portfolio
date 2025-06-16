import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
    const { getTranslation } = useLanguage();

    return (
        <footer className="bg-[#001524] border-t border-yellow-400/20 py-8">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <p className="text-gray-400 text-sm">
                        {getTranslation('footer.text')}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                        {getTranslation('footer.text2')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
