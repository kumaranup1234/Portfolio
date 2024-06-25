import React from 'react';
import GithubImage from "../assets/github.svg";
import LinkImage from "../assets/link.svg";

const ProjectCardReversed = ({ image, name, description, techStack = [], githubLink, liveLink }) => {
    return (
        <div className="relative flex items-center -ml-14">
            <div className="relative flex text-center items-end mt-8">
                {/* Image on the right */}
                <img src={image} alt="project image" className="w-96 h-52 absolute top-0 -right-80 z-10"/>
                <div className="absolute top-0 -right-80 w-96 h-52 bg-blue-200 opacity-50 z-20"></div>

                {/* Content on the left with adjusted margin */}
                <div className="grid ml-64 z-20">  {/* Increased left margin for overlap, z-index for positioning */}
                    <h3 className="text-blue-500 text-sm uppercase font-bold text-left">
                        Featured Project
                    </h3>
                    <h2 className="text-xl font-bold text-left">{name}</h2>
                    <div className="bg-white shadow-lg shadow-gray-400 rounded my-2 h-28 max-w-xl border">
                        <p className="text-gray-700 text-base mt-4">{description}</p>
                    </div>
                    <div className="flex items-end">
                        {techStack.map((tech, index) => (
                            <span key={index} className="px-3 py-1 text-sm text-blue-900">
                {tech}
              </span>
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
    );
};

export default ProjectCardReversed;
