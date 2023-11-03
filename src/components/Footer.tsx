import { BsLinkedin, BsInstagram, BsGithub, BsWhatsapp } from "react-icons/bs";

const Footer = ({ scrollToSection }: { scrollToSection: (s: number) => void }) => {
    return (
        <footer className="flex flex-col items-center w-full py-8 mt-16 text-white bg-zinc-900">
            <div className="flex flex-wrap justify-center w-full max-w-5xl px-8 mb-16 md:mb-0 md:justify-between">
                <div className="flex flex-col items-center mb-8 text-2xl font-semibold md:items-start">
                    Prateek Chaurasia
                    <div className="text-sm font-normal">Web Developer</div>
                </div>
                <ul className="flex gap-6 text-sm">
                    <li className="cursor-pointer" onClick={() => { scrollToSection(2) }}>Services</li>
                    <li className="cursor-pointer" onClick={() => { scrollToSection(3) }}>Portfolio</li>
                    <li className="cursor-pointer" onClick={() => { scrollToSection(4) }}>Contact</li>
                </ul>
            </div>
            <div className="flex gap-4 mb-6 text-lg">
                <a href="https://www.linkedin.com/in/prateekchaurasia/"><BsLinkedin /></a>
                <a href="https://github.com/prateek18801/"><BsGithub /></a>
                <a href="https://wa.me/+918726127335/"><BsWhatsapp /></a>
                <a href="https://www.instagram.com/pc.incognito/"><BsInstagram /></a>
            </div>
            <div className="text-xs">&copy; Prateek Chaurasia. All rights reserved.</div>
        </footer>
    );
}

export default Footer;
