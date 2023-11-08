import { useState } from "react";
import { FaCode } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { TbSettingsCode } from "react-icons/tb";
import Modal from "../components/Modal";

type ModalContent = {
    header: string,
    content: string[]
};

type ServiceCardProps = {
    icon: React.ReactElement,
    l1: string,
    l2: string,
    content: ModalContent,
    setModalContent: React.Dispatch<React.SetStateAction<ModalContent | null>>
};

const Services = ({ servicesRef }: { servicesRef: React.RefObject<HTMLElement> }) => {

    const [modalContent, setModalContent] = useState<ModalContent | null>(null);

    return (
        <section ref={servicesRef}>
            <div className="section-heading">Services</div>
            <div className="flex flex-wrap justify-center gap-8">
                <ServiceCard
                    icon={<FaCode />}
                    l1="Web"
                    l2="Application"
                    setModalContent={setModalContent}
                    content={{
                        header: "Web Application",
                        content: [
                            "Create complete web applications and websites.",
                            "Ensure websites look great on all devices.",
                            "Develop custom e-commerce websites.",
                            "Handle website deployment and optimization."
                        ]
                    }}
                />
                <ServiceCard
                    icon={<TbSettingsCode />}
                    l1="Custom"
                    l2="Software"
                    setModalContent={setModalContent}
                    content={{
                        header: "Custom Software",
                        content: [
                            "Develop custom software for your specific needs.",
                            "Integrate custom software with existing systems.",
                            "Develop multi platform applications.",
                            "Deploy and maintain software applications."
                        ]
                    }}
                />
            </div>
            {modalContent && <Modal modalContent={modalContent} setModalContent={setModalContent} />}
        </section>
    );
}

const ServiceCard = ({ icon, l1, l2, content, setModalContent }: ServiceCardProps) => {
    return (
        <div className="w-full p-8 transition-shadow border-2 rounded-xl md:w-1/3 hover:shadow-lg">
            <div className="mt-12 mb-8 text-3xl text-neutral-500">{icon}</div>
            <div className="mb-6 text-xl font-medium">{l1} <br /> {l2}</div>
            <button className="flex items-center text-sm font-medium cursor-pointer text-neutral-500 group" onClick={() => { setModalContent(content) }}>
                <span className="mr-1 transition-all group-hover:mr-2">View More</span>
                <FiArrowRight />
            </button>
        </div>
    );
}

export default Services;
