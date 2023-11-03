import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

type PortfolioCardProps = {
    title: string,
    description: string,
    github: string,
    demo: string
}

const projects: PortfolioCardProps[] = [
    {
        title: "Ajay Cafe",
        description: "Online food ordering system for college canteen",
        github: "",
        demo: ""
    },
    {
        title: "BlockTrackers",
        description: "Blockchain based food supply chain tracking system, for tracking farm produce from farmers to the end customer    ",
        github: "",
        demo: ""
    },
    {
        title: "Merchandise Portal",
        description: "Online protal for claiming official merch. of St. Louis University",
        github: "",
        demo: ""
    },
    {
        title: "Kisan Assist",
        description: "AI Voice Assistant for farmers",
        github: "",
        demo: ""
    },
    {
        title: "Attendance Portal",
        description: "Online attendance portal for the team members",
        github: "",
        demo: ""
    }
];

const Portfolio = ({ portfolioRef }: { portfolioRef: React.RefObject<HTMLElement> }) => {

    const [visibleCount, setVisibleCount] = useState<number>(3);

    return (
        <section ref={portfolioRef}>
            <div className="section-heading">Portfolio</div>
            <div className="flex flex-wrap justify-center gap-8">
                {projects.slice(0, visibleCount).map(project => {
                    return <PortfolioCard
                        title={project.title}
                        description={project.description}
                        demo={project.demo}
                        github={project.github}
                    />
                })}
            </div>
            <div className="flex justify-center mt-12">
                <button
                    className="text-sm hover:underline underline-offset-4"
                    onClick={() => {
                        setVisibleCount(prev => visibleCount < projects.length ? prev + 3 : 3);
                    }}
                >
                    {visibleCount < projects.length ? "View More" : "Collapse"}
                </button>
            </div>
        </section>
    );
}

const PortfolioCard = ({ title, description, github, demo }: PortfolioCardProps) => {
    return (
        <div className="w-full transition-shadow rounded shadow md:w-1/4 overflow-clip hover:shadow-lg">
            <div className="bg-gray-300 h-36">
                <img src="" alt="" />
            </div>
            <div className="p-4">
                <div className="mb-1 text-lg font-semibold">{title}</div>
                <p className="mb-4 text-xs">{description}</p>
                <div className="flex items-center cursor-pointer text-neutral-500 group">
                    <span className="mr-1 text-sm font-medium transition-all group-hover:mr-2">Demo</span>
                    <FiArrowRight />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
