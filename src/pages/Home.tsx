import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { BsInstagram, BsTwitter, BsWhatsapp, BsMouse } from "react-icons/bs";

const Home = () => {
    return (
        <section>
            <div className="flex">
                <div className="w-2/12 my-auto">
                    <BsInstagram />
                    <BsTwitter className="my-8" />
                    <BsWhatsapp />
                </div>
                <div className="w-5/12 text-zinc-800">
                    <div className="mb-4 text-xl font-medium text-neutral-500">Hello</div>
                    <div className="mb-4 text-6xl font-semibold">I'm Prateek</div>
                    <div className="flex items-center mb-4 text-xl">
                        <div className="h-[1px] w-24 bg-zinc-800 mr-4"></div>
                        Web Developer
                    </div>
                    <p className="mb-8 text-neutral-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, et? Ipsam quod quidem est eaque!
                    </p>
                    <button className="btn-primary">
                        <span className="mr-2">Say Hello</span>
                        <PiPaperPlaneTiltBold />
                    </button>
                </div>
                <div className="w-5/12"></div>
            </div>
            <div className="flex justify-center mt-32 text-3xl">
                <BsMouse />
            </div>
        </section>
    );
};

export default Home;
