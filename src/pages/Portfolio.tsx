import { useState } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import ImgBigDataCoE from "../assets/bigdatacoe.webp";
import ImgBlockTrackers from "../assets/blocktrackers.webp";
import ImgECanteenAdmin from "../assets/ecanteen-admin.webp";
import ImgKisanAssist from "../assets/kisan-assist.webp";
import ImgSluMerchPortal from "../assets/slu-merch-portal.webp";
import ImgTrackPatrol from "../assets/trackpatrol.webp";

type PortfolioCardProps = {
    title: string,
    description: string,
    link: string,
    image: string
}

const projects: PortfolioCardProps[] = [
    {
        title: "BlockTrackers",
        description: "Blockchain based food supply chain tracking system, for tracking farm produce from farmers to the end customer.",
        link: "https://blocktrackers.shahbaz.tech/",
        image: ImgBlockTrackers
    },
    {
        title: "TrackPatrol",
        description: "Tool for monitoring ground personnel using GPS, RFID etc. Also caters management and duty assignment.",
        link: "https://trackpatrol.shahbaz.tech/",
        image: ImgTrackPatrol
    },
    {
        title: "Big Data CoE",
        description: "Website for Big Data Centre of Excellence with an admin panel to update and manage the website.",
        link: "https://bdcoe.co.in/",
        image: ImgBigDataCoE
    },
    {
        title: "Merchandise Portal",
        description: "Online protal for claiming official merchandise of St. Louis University, with an admin portal to view and download orders.",
        link: "https://slu-merch.onrender.com/",
        image: ImgSluMerchPortal
    },
    {
        title: "E-Canteen Admin",
        description: "Online food ordering system for college canteen, used to view orders and update products.",
        link: "https://canteen-food-ordering-admin.netlify.app/products",
        image: ImgECanteenAdmin
    },
    {
        title: "Kisan Assist",
        description: "AI Voice Assistant for farmers, with integrations of text-to-speech, speech-to-text, google translate and twilio APIs.",
        link: "https://prateek18801.github.io/kisan-assist/",
        image: ImgKisanAssist
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
                        link={project.link}
                        image={project.image}
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

const PortfolioCard = ({ title, description, link, image }: PortfolioCardProps) => {
    return (
        <div className="w-full transition-shadow border-2 rounded-lg md:w-[27%] overflow-clip hover:shadow-lg">
            <div className="overflow-hidden bg-gray-300 h-36">
                <img src={image} alt={title} />
            </div>
            <div className="flex flex-col p-4">
                <div className="mb-1 text-lg font-semibold">{title}</div>
                <p className="h-16 mb-4 overflow-hidden text-xs text-ellipsis">{description}</p>
                <a href={link} target="_blank" className="flex items-center text-sm font-medium text-neutral-700 hover:text-black hover:underline">
                    View <HiOutlineExternalLink className="ml-1" />
                </a>
            </div>
        </div>
    );
}

export default Portfolio;
