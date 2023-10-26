import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { BsLinkedin, BsInstagram, BsGithub, BsWhatsapp, BsMouse } from "react-icons/bs";

const Home = ({ homeRef, scrollToSection }: { homeRef: React.RefObject<HTMLElement>, scrollToSection: (s: number) => void }) => {
    return (
        <section className="flex flex-col justify-center h-screen p-0" ref={homeRef}>
            <div className="flex mt-28">
                <div className="flex flex-col w-2/12 gap-8 my-auto">
                    <a href="https://www.linkedin.com/in/prateekchaurasia/"><BsLinkedin /></a>
                    <a href="https://github.com/prateek18801/"><BsGithub /></a>
                    <a href="https://www.instagram.com/pc.incognito/"><BsInstagram /></a>
                    <a href="https://wa.me/+918726127335/"><BsWhatsapp /></a>
                </div>
                <div className="w-5/12 text-zinc-800">
                    <div className="mb-4 text-xl font-medium text-neutral-500">Hello</div>
                    <div className="mb-4 text-6xl font-semibold">I'm Prateek</div>
                    <div className="flex items-center mb-4 text-xl">
                        <div className="h-[1px] w-24 bg-zinc-800 mr-4"></div>
                        Web Developer 🕷🕸
                    </div>
                    <p className="mb-8 text-neutral-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, et? Ipsam quod quidem est eaque!
                    </p>
                    <button className="btn-primary" onClick={() => { scrollToSection(4) }}>
                        <span className="mr-2">Say Hello</span>
                        <PiPaperPlaneTiltBold />
                    </button>
                </div>
                <div className="flex items-center justify-center w-5/12">
                    <div className="w-4/6 bg-purple-800 aspect-square home-image"></div>
                </div>
            </div>
            <div className="flex justify-center mt-32 text-3xl">
                <button className="transition-transform duration-300 outline-none select-none hover:translate-y-1" onClick={() => { scrollToSection(1) }}>
                    <BsMouse />
                </button>
            </div>
        </section>
    );
};

export default Home;
