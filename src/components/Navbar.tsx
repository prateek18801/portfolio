import { useState } from "react";
import { LiaHamburgerSolid } from "react-icons/lia";

type NavbarProps = {
    activeSection: number,
    scrollToSection: (s: number) => void
}

const Navbar = ({ activeSection, scrollToSection }: NavbarProps) => {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <nav className="fixed z-50 flex justify-center w-full bg-white shadow">
            <div className="flex items-center justify-between w-full max-w-5xl px-8 py-4 text-sm">
                <div className="text-2xl font-semibold select-none">PC</div>
                <ul className="hidden md:flex">
                    <li className={`cursor-pointer ml-9 ${activeSection === 0 ? "underline underline-offset-8" : ""}`} onClick={() => { scrollToSection(0) }}>
                        Home
                    </li>
                    <li className={`cursor-pointer ml-9 ${activeSection === 1 ? "underline underline-offset-8" : ""}`} onClick={() => { scrollToSection(1) }}>
                        About
                    </li>
                    <li className={`cursor-pointer ml-9 ${activeSection === 2 ? "underline underline-offset-8" : ""}`} onClick={() => { scrollToSection(2) }}>
                        Services
                    </li>
                    <li className={`cursor-pointer ml-9 ${activeSection === 3 ? "underline underline-offset-8" : ""}`} onClick={() => { scrollToSection(3) }}>
                        Portfolio
                    </li>
                    <li className={`cursor-pointer ml-9 ${activeSection === 4 ? "underline underline-offset-8" : ""}`} onClick={() => { scrollToSection(4) }}>
                        Contact
                    </li>
                </ul>
                <button className="text-2xl md:hidden" onClick={() => { setIsExpanded(prev => !prev) }}><LiaHamburgerSolid /></button>
            </div>
            <div className={`absolute w-full px-8 text-sm transition-all bg-white origin-top shadow top-16 ${isExpanded ? "scale-y-100" : "scale-y-0"}`}>
                <ul>
                    <li className={`cursor-pointer my-4 ${activeSection === 0 ? "underline underline-offset-8" : ""}`} onClick={() => { scrollToSection(0) }}>
                        Home
                    </li>
                    <li className={`cursor-pointer my-4 ${activeSection === 1 ? "underline underline-offset-8" : ""}`} onClick={() => { scrollToSection(1) }}>
                        About
                    </li>
                    <li className={`cursor-pointer my-4 ${activeSection === 2 ? "underline underline-offset-8" : ""}`} onClick={() => { scrollToSection(2) }}>
                        Services
                    </li>
                    <li className={`cursor-pointer my-4 ${activeSection === 3 ? "underline underline-offset-8" : ""}`} onClick={() => { scrollToSection(3) }}>
                        Portfolio
                    </li>
                    <li className={`cursor-pointer my-4 ${activeSection === 4 ? "underline underline-offset-8" : ""}`} onClick={() => { scrollToSection(4) }}>
                        Contact
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
