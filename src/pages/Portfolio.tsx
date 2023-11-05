import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

type PortfolioCardProps = {
    title: string,
    description: string,
    demo: string
}

const projects: PortfolioCardProps[] = [
    {
        title: "Ajay Cafe",
        description: "Online food ordering system for college canteen",
        demo: ""
    },
    {
        title: "BlockTrackers",
        description: "Blockchain based food supply chain tracking system, for tracking farm produce from farmers to the end customer    ",
        demo: ""
    },
    {
        title: "Merchandise Portal",
        description: "Online protal for claiming official merch. of St. Louis University",
        demo: ""
    },
    {
        title: "Kisan Assist",
        description: "AI Voice Assistant for farmers",
        demo: ""
    },
    {
        title: "Attendance Portal",
        description: "Online attendance portal for the team members",
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
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        demo={project.demo}
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

const PortfolioCard = ({ title, description, demo }: PortfolioCardProps) => {
    return (
        <div className="w-full transition-shadow rounded shadow md:w-1/4 overflow-clip hover:shadow-lg">
            <div className="bg-gray-300 h-36">
                <img src="" alt="" />
            </div>
            <div className="p-4">
                <div className="mb-1 text-lg font-semibold">{title}</div>
                <p className="mb-4 text-xs">{description}</p>
                <a href={demo} target="_blank" className="flex items-center cursor-pointer text-neutral-500 group">
                    <span className="mr-1 text-sm font-medium transition-all group-hover:mr-2">Demo</span>
                    <FiArrowRight />
                </a>
            </div>
        </div>
    );
}

export default Portfolio;
