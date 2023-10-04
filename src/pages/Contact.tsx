import { FaLocationDot } from "react-icons/fa6";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { BsFillEnvelopeAtFill } from "react-icons/bs";

const Contact = () => {
    return (
        <section>
            <div className="section-heading">Get in touch</div>
            <div className="flex gap-16 mx-24">
                <div className="flex flex-col justify-center w-1/2 mb-20">
                    <div className="mb-10 text-xl font-medium">Tell me about your project. Let's create something together.</div>
                    <div className="flex mb-6">
                        <div className="flex items-center justify-center p-4 mr-3 text-2xl text-white rounded-full bg-zinc-800"><BsFillEnvelopeAtFill /></div>
                        <div>
                            <div className="text-xl font-medium">Email</div>
                            <div>prateek18801@gmail.com</div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex items-center justify-center p-4 mr-3 text-2xl text-white rounded-full bg-zinc-800"><FaLocationDot /></div>
                        <div>
                            <div className="text-xl font-medium">Location</div>
                            <div>Delhi, India</div>
                        </div>
                    </div>
                </div>
                <form className="w-1/2">
                    {/* <div className="mb-4 text-lg font-medium text-center text-zinc-800">Send me a message</div> */}
                    <div className="relative h-16 mb-4 border-2 border-neutral-400 rounded-xl">
                        <input type="text" className="w-full h-full px-4 bg-transparent outline-none peer" placeholder=" " required />
                        <label htmlFor="name" className="absolute px-2 left-2 -top-[13px] pointer-events-none transition-all duration-300 scale-75 origin-left bg-white text-neutral-500 peer-placeholder-shown:top-[18.5px] peer-placeholder-shown:scale-100 peer-focus:-top-[13px] peer-focus:scale-75">Name</label>
                    </div>
                    <div className="relative h-16 mb-4 border-2 border-neutral-400 rounded-xl">
                        <input type="email" className="w-full h-full px-4 bg-transparent outline-none peer" placeholder=" " required />
                        <label htmlFor="name" className="absolute px-2 left-2 -top-[13px] pointer-events-none transition-all duration-300 scale-75 origin-left bg-white text-neutral-500 peer-placeholder-shown:top-[18.5px] peer-placeholder-shown:scale-100 peer-focus:-top-[13px] peer-focus:scale-75">Email</label>
                    </div>
                    <div className="relative mb-4 border-2 h-36 border-neutral-400 rounded-xl">
                        <textarea className="w-full h-full px-4 py-4 bg-transparent outline-none resize-none peer" placeholder=" " required />
                        <label htmlFor="name" className="absolute px-2 left-2 -top-[13px] pointer-events-none transition-all duration-300 scale-75 origin-left bg-white text-neutral-500 peer-placeholder-shown:top-[18.5px] peer-placeholder-shown:scale-100 peer-focus:-top-[13px] peer-focus:scale-75">Message</label>
                    </div>
                    <button className="btn-primary">
                        <span className="mr-2">Send Message</span>
                        <PiPaperPlaneTiltBold />
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
