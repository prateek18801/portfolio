import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type ContactChipProps = {
    icon: React.ReactNode,
    field: string,
    value: string,
    href: string
}

type FormDataType = {
    name: string,
    email: string,
    message: string,
    access_key: string
}

const Contact = ({ contactRef }: { contactRef: React.RefObject<HTMLElement> }) => {

    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        email: "",
        message: "",
        access_key: import.meta.env.VITE_FORM_SUBMIT_KEY
    });

    const [loading, setLoading] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const json = await response.json();
            if (json.success) {
                alert("Message was sent!");
                setFormData(prev => {
                    return { ...prev, message: "" };
                });
            }
            else {
                alert("Failed to send message!");
            }
            console.log(json);
        } catch (err) {
            alert("Failed to send message!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section ref={contactRef}>
            <div className="section-heading">Get in touch</div>
            <div className="flex flex-wrap justify-between">
                <div className="flex flex-col justify-center mb-10 md:w-1/2">
                    <div className="mb-10 text-xl font-medium text-center md:text-left">Tell me about your project. Let's create something together.</div>
                    <ContactChip icon={<BsFillEnvelopeAtFill />} field="Email" value="prateek18801@gmail.com" href="mailto:prateek18801@gmail.com" />
                    <ContactChip icon={<FaLocationDot />} field="Location" value="Delhi, India" href="https://maps.app.goo.gl/tAa3Hyt2mcm7aohk6" />
                </div>
                <form className="w-full md:w-1/2" onSubmit={handleFormSubmit}>
                    <div className="mb-4 text-lg font-medium text-center text-zinc-800">Send me a message</div>
                    <div className="relative h-16 mb-4 border border-neutral-400 rounded-xl">
                        <input type="text" name="name" className="w-full h-full px-4 bg-transparent outline-none peer" value={formData.name} onChange={handleInputChange} placeholder=" " required />
                        <label htmlFor="name" className="absolute px-2 left-2 -top-[13px] pointer-events-none transition-all duration-300 scale-75 origin-left bg-white text-neutral-500 peer-placeholder-shown:top-[18.5px] peer-placeholder-shown:scale-100 peer-focus:-top-[13px] peer-focus:scale-75">Name</label>
                    </div>
                    <div className="relative h-16 mb-4 border border-neutral-400 rounded-xl">
                        <input type="email" name="email" className="w-full h-full px-4 bg-transparent outline-none peer" value={formData.email} onChange={handleInputChange} placeholder=" " required />
                        <label htmlFor="name" className="absolute px-2 left-2 -top-[13px] pointer-events-none transition-all duration-300 scale-75 origin-left bg-white text-neutral-500 peer-placeholder-shown:top-[18.5px] peer-placeholder-shown:scale-100 peer-focus:-top-[13px] peer-focus:scale-75">Email</label>
                    </div>
                    <div className="relative mb-4 border h-36 border-neutral-400 rounded-xl">
                        <textarea name="message" className="w-full h-full px-4 py-4 bg-transparent outline-none resize-none peer" value={formData.message} onChange={handleInputChange} placeholder=" " required />
                        <label htmlFor="name" className="absolute px-2 left-2 -top-[13px] pointer-events-none transition-all duration-300 scale-75 origin-left bg-white text-neutral-500 peer-placeholder-shown:top-[18.5px] peer-placeholder-shown:scale-100 peer-focus:-top-[13px] peer-focus:scale-75">Message</label>
                    </div>
                    <button className="btn-primary" type="submit" disabled={loading}>
                        <span className="mr-2">Send Message</span>
                        {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : <PiPaperPlaneTiltBold />}
                    </button>
                </form>
            </div>
        </section>
    );
}

const ContactChip = ({ icon, field, value, href }: ContactChipProps) => {
    return (
        <div className="flex items-center mb-6">
            <a href={href} target="_blank">
                <div className="flex items-center justify-center p-4 mr-3 text-2xl text-white rounded-full cursor-pointer bg-zinc-800 hover:bg-black">{icon}</div>
            </a>
            <div>
                <div className="text-lg font-medium">{field}</div>
                <div className="text-sm">{value}</div>
            </div>
        </div>
    );
}

export default Contact;
