import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto text-center">
                <p className="text-blue-900 text-xl font-bold mb-4">
                    Developed by Anup Kumar
                </p>
                <div className="flex justify-center space-x-8">
                    <a href="https://github.com/kumaranup1234" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-700 transition duration-300">
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6 transition transform hover:scale-105"/>
                    </a>
                    <a href="https://www.instagram.com/anup_2247" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-400 transition duration-300">
                        <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 transition transform hover:scale-105"/>
                    </a>
                    <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 transition duration-300">
                        <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 transition transform hover:scale-105"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
