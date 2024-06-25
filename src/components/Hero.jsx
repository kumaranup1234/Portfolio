import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import character from '../assets/coderimage2.svg';
import Description from "./Description.jsx";
import Projects from "./Projects.jsx";


const Hero = () => {
    return (
        <>
        <div className="flex justify-between items-center mt-40"> {/* Adjusted margin-top */}
            {/* Left side icons and HR */}
            <div className="flex flex-col space-y-4 ml-[5rem]">
                <a href="https://github.com/kumaranup1234" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="w-6 h-6 text-blue-900 transition transform hover:scale-105"/>
                </a>
                <a href="https://www.instagram.com/anup_2247" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-blue-900 transition transform hover:scale-105"/>
                </a>
                <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 text-blue-900 transition transform hover:scale-105"/>
                </a>
                <hr className="w-1 h-32 bg-blue-900 border-none ml-2"/>
            </div>

            {/* Middle content */}
            <div className="flex flex-grow items-center">
                <div className="flex flex-col ml-16 mb-36">
                    <p className="text-blue-500 text-xl ml-3">Hi, my name is</p>
                    <p className="text-6xl font-bold text-blue-900">Anup Kumar</p>
                    <p className="text-3xl font-bold text-gray-700 mt-4">I build things for the web.</p>
                    <p className="text-sm mt-4 leading-7">I’m a software engineer specializing in building (and
                        occasionally designing) exceptional digital experiences. Currently, I'm focused on building
                        accessible, human-centered products at PegaLogics.</p>
                </div>
                <img src={character} alt="Character" className="w-80 h-80 mb-36 ml-28 transition transform hover:scale-105"/> {/* Added margin-left */}
            </div>

            {/* Right side email and HR */}
            <div className="flex flex-col items-center ml-16">
                <div className="flex flex-col items-center">
                    <p className="transform rotate-90 mb-5 text-blue-900">anupg2551@gmail.com</p>
                    <hr className="w-1 h-32 bg-blue-900 border-none mr-2 mt-20"/>
                </div>
            </div>
        </div>
                <Description />
                <Projects />
        </>
    );
}

export default Hero;
