import { BsStars } from "react-icons/bs";
import { BiGitMerge, BiSupport } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";

const About = ({ aboutRef }: { aboutRef: React.RefObject<HTMLElement> }) => {
    return (
        <section ref={aboutRef}>
            <div className="section-heading">About Me</div>
            <p className="mb-12 text-justify">
                I'm a full stack web developer with a deep understanding of web technologies and a keen eye for detail. I love planning projects from scratch and executing them till deployment. I'm passionate about building beautiful and functional websites that meet the needs of my clients.
            </p>
            <div className="flex justify-center gap-2 mb-8 md:gap-4">
                <div className="flex flex-col items-center w-1/3 py-4 font-medium text-center border-2 md:py-6 md:w-1/6 rounded-xl">
                    <div className="mb-4 text-2xl"><BsStars /></div>
                    <div className="mb-1 text-sm">Experience</div>
                    <div className="text-xs text-neutral-500">2+ Years</div>
                </div>
                <div className="flex flex-col items-center w-1/3 py-4 font-medium text-center border-2 md:py-6 md:w-1/6 rounded-xl">
                    <div className="mb-4 text-2xl"><BiGitMerge /></div>
                    <div className="mb-1 text-sm">Work</div>
                    <div className="text-xs text-neutral-500">10+ Projects</div>
                </div>
                <div className="flex flex-col items-center w-1/3 py-4 font-medium text-center border-2 md:py-6 md:w-1/6 rounded-xl">
                    <div className="mb-4 text-2xl"><BiSupport /></div>
                    <div className="mb-1 text-sm">Support</div>
                    <div className="text-xs text-neutral-500">Remote</div>
                </div>
            </div>
            <div className="flex justify-center">
                <a className="btn-primary" href="https://prateek18801.github.io/resume/" target="_blank">
                    <span className="mr-2">Resume</span>
                    <CgFileDocument />
                </a>
            </div>
        </section>
    );
}

export default About;
