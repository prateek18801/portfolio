import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { BsLinkedin, BsInstagram, BsGithub, BsWhatsapp, BsMouse } from "react-icons/bs";
import HomeImg from "../assets/home.webp";

const Home = ({ homeRef, scrollToSection }: { homeRef: React.RefObject<HTMLElement>, scrollToSection: (s: number) => void }) => {
    return (
        <section className="flex flex-col justify-center h-screen p-0" ref={homeRef}>
            <div className="flex mt-28">
                <div className="flex-col hidden w-2/12 gap-8 my-auto md:flex">
                    <a href="https://www.linkedin.com/in/prateekchaurasia/" aria-label="visit my linkedin profile"><BsLinkedin /></a>
                    <a href="https://github.com/prateek18801/" aria-label="visit my github profile"><BsGithub /></a>
                    <a href="https://wa.me/+918726127335/" aria-label="text me on whatsapp"><BsWhatsapp /></a>
                    <a href="https://www.instagram.com/pc.incognito/" aria-label="visit my instagram profile"><BsInstagram /></a>
                </div>
                <div className="md:w-5/12 text-zinc-800">
                    <div className="mb-1 text-lg font-medium md:mb-4 md:text-xl text-neutral-500">Hello</div>
                    <div className="mb-1 text-5xl font-semibold md:mb-4 md:text-6xl">I'm Prateek</div>
                    <div className="flex items-center mb-4 text-lg md:text-xl">
                        <div className="h-[1px] w-16 md:w-24 bg-zinc-800 mr-4"></div>
                        Web Developer 🕷🕸
                    </div>
                    <p className="mb-8 text-base text-neutral-500">
                        I can build you a website or software from the ground up, and maybe fix your computer too.
                    </p>
                    <button type="button" className="btn-primary" onClick={() => { scrollToSection(4) }} aria-label="scroll to contact">
                        <span className="mr-2">Say Hello</span>
                        <PiPaperPlaneTiltBold />
                    </button>
                </div>
                <div className="items-center justify-center hidden w-5/12 md:flex">
                    <img src={HomeImg} alt="no alt" className="w-4/6 rounded-full" />
                </div>
            </div>
            <div className="flex justify-center mt-32 text-3xl">
                <button type="button" className="transition-transform duration-300 outline-none select-none hover:translate-y-1" onClick={() => { scrollToSection(1) }} aria-label="scroll down">
                    <BsMouse />
                </button>
            </div>
        </section>
    );
};

export default Home;
