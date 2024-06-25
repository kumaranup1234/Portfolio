import ProjectCard from './ProjectCard';
import ProjectCardReversed from "./ProjectCardReversed.jsx";
import image from "../assets/projectImage.png";
import OtherProject from "./OtherProject.jsx";

const Projects = () => {
    const project1 = {
            image: image,
            title: 'Featured Project',
            name: 'Vanghee',
            description: 'Vanghee is a B2B fintech start-up that facilitates Connected Banking for businesses & institutions of all sizes and at the same time helps Banks in acquiring and deepening customer relationships.',
            techStack: ['Visual Code', 'HTML/CSS', 'Bootstrap', 'Angular'],
            githubLink: '',
            liveLink: ''
        }
    return (
        <>
        <div>
            <div className="grid grid-cols-1 gap-y-0 mb-60 ml-60">
                <div className="flex flex-col mt-40">
                    <section id="projects">
                        <div className="relative -ml-14">
                            <p className="text-[6rem] font-bold text-gray-300 opacity-75 transform translate-x-1 translate-y-1">
                                Something
                            </p>
                            <p className="text-[6rem] font-bold text-outline-black absolute top-2 left-2">
                                Something
                            </p>
                        </div>
                        <div className="flex relative mt-[-4rem] -ml-14">
                            <p className="text-[6rem] font-bold text-gray-300 opacity-75 transform translate-x-1 translate-y-1">
                                I've
                            </p>
                            <p className="text-[6rem] font-bold text-outline-black absolute top-2 left-2">
                                I've
                            </p>
                            <div className="relative ml-3">
                                <p className="text-[6rem] font-bold text-gray-300 opacity-75 transform translate-x-1 translate-y-1">
                                    build
                                </p>
                                <p className="text-[6rem] font-bold text-outline-black absolute top-2 left-2">
                                    build
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="-mt-60">
                <ProjectCard image={project1.image}
                             title={project1.title}
                             name={project1.name}
                             description={project1.description}
                             techStack={project1.techStack}
                             githubLink={project1.githubLink}
                             liveLink={project1.liveLink}
                />

                <ProjectCardReversed image={project1.image}
                                     title={project1.title}
                                     name={project1.name}
                                     description={project1.description}
                                     techStack={project1.techStack}
                                     githubLink={project1.githubLink}
                                     liveLink={project1.liveLink}
                />
                <ProjectCard image={project1.image}
                             title={project1.title}
                             name={project1.name}
                             description={project1.description}
                             techStack={project1.techStack}
                             githubLink={project1.githubLink}
                             liveLink={project1.liveLink}
                />
            </div>
        </div>
            <OtherProject />
        </>
    );
}

export default Projects;