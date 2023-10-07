import { FaCode } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { TbSettingsCode } from "react-icons/tb";

type ServiceCardProps = {
    icon: React.ReactElement,
    l1: string,
    l2: string
};

const Services = ({ servicesRef }: { servicesRef: React.RefObject<HTMLElement> }) => {
    return (
        <section ref={servicesRef}>
            <div className="section-heading">Services</div>
            <div className="flex justify-center gap-8">
                <ServiceCard icon={<FaCode />} l1="Web" l2="Application" />
                <ServiceCard icon={<TbSettingsCode />} l1="Custom" l2="Software" />
            </div>
        </section>
    );
}

const ServiceCard = ({ icon, l1, l2 }: ServiceCardProps) => {
    return (
        <div className="w-1/3 p-8 transition-shadow rounded shadow hover:shadow-lg">
            <div className="mt-12 mb-8 text-3xl text-neutral-500">{icon}</div>
            <div className="mb-6 text-xl font-medium">{l1} <br /> {l2}</div>
            <div className="flex items-center text-sm font-medium cursor-pointer text-neutral-500 group">
                <span className="mr-1 transition-all group-hover:mr-2">View More</span>
                <FiArrowRight />
            </div>
        </div>
    );
}

export default Services;
