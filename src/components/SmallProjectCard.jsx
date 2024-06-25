import linkImage from "../assets/icons8-link.svg";
import folderImage from "../assets/icons8-folder.svg";

const SmallProjectCard = ({techStack}) => {
    return (
        <div className="bg-gray-100 w-72 h-56 p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <a href="https://github.com/">
                    <img src={folderImage} alt="Folder" className="w-6 h-6 transition transform hover:scale-105" />
                </a>
                <a href="https://github.com/">
                    <img src={linkImage} alt="Link" className="w-6 h-6 transition transform hover:scale-105" />
                </a>
            </div>
            <div>
                <p className="text-lg font-bold text-gray-800 mb-2">
                    Al Asala with WooCommerce
                </p>
                <p className="text-sm text-gray-600 mb-4">
                    Building a website for family bike business with WordPress WooCommerce in Saudi Arab
                </p>
                <ul className="flex space-x-4 text-sm text-blue-900 mt-8">
                    {techStack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SmallProjectCard;
