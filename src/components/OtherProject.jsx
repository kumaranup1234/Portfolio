import SmallProjectCard from "./SmallProjectCard.jsx";

const OtherProject = () => {
    const techStack = ['WordPress', 'Bootstrap', 'Nginx']
    return (
        <div className="flex flex-col items-center justify-center h-full mt-40">
            <div className="mb-4">
                <p className="text-blue-900 text-2xl font-bold text-center">Some Noteworthy Projects</p>
            </div>
            <div className="flex space-x-3 mt-6">
                <SmallProjectCard techStack={techStack} />
                <SmallProjectCard techStack={techStack} />
                <SmallProjectCard techStack={techStack} />
            </div>
        </div>
    );
}
export default OtherProject;
