import React from 'react';
import GithubImage from "../assets/github.svg";
import LinkImage from "../assets/link.svg";


const ProjectCard = ({ image, name, description, techStack = [], githubLink, liveLink }) => {
    return (
        <>
        <div className="relative flex items-center -ml-14">
            <div className="relative flex text-center items-end mt-8">
                <img src={image} alt="project image" className="w-96 h-52 ml-64"/>
                <div className="absolute inset-0 bg-blue-200 opacity-50 ml-64"></div>
                <div className="absolute grid -right-96 -mr-32">
                    <h3 className="text-blue-500 text-sm uppercase font-bold text-end">Featured Project</h3>
                    <h2 className="text-xl font-bold text-end">{name}</h2>
                    <div className="bg-white shadow-lg shadow-gray-400 rounded my-2 h-28 max-w-xl border">
                        <p className="text-gray-700 text-base mt-4">{description}</p>
                    </div>
                    <div className="flex items-end ml-44">
                        {techStack.map((tech, index) => (
                            <span key={index} className="px-3 py-1 text-sm text-blue-900">{tech}</span>
                        ))}
                        {liveLink && (
                            <a href={liveLink} target="_blank" rel="noopener noreferrer">
                                <img src={LinkImage} alt="Live Link" className="w-5 h-5 mr-4 mb-1 transition transform hover:scale-105"/>
                            </a>
                        )}
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <img src={GithubImage} alt="github" className={`w-6 h-6 mb-1 transition transform hover:scale-105 ${!liveLink ? 'ml-4' : ''}`}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProjectCard;
