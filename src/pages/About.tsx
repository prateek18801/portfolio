import { FaAward } from "react-icons/fa";
import { BiGitMerge } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";

const About = () => {
    return (
        <section>
            <div className="section-heading">About Me</div>
            <p className="mb-12 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque quasi doloribus. Modi in temporibus a nam sint magnam aliquid quam eum atque quos repellendus consectetur nulla, ducimus tenetur? Sapiente officiis est et molestias, totam minima, perferendis doloribus inventore aliquid laboriosam quibusdam accusamus sint rem, qui facere voluptates tempore atque.
            </p>
            <div className="flex justify-center gap-4">
                <div className="flex flex-col items-center w-1/5 h-40 py-6 font-medium text-center border rounded-xl">
                    <div className="text-3xl"><FaAward /></div>
                    Experience
                </div>
                <div className="w-1/5 h-40 py-2 font-medium text-center border rounded-xl">
                    <div className="text-3xl"><BiGitMerge /></div>
                    Projects
                </div>
            </div>
            <button className="btn-primary">
                <span className="mr-2">Resume</span>
                <CgFileDocument />
            </button>
        </section>
    );
}

export default About;
