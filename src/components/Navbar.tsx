type NavbarProps = {
    activeSection: number,
    scrollToSection: (s: number) => void
}

const Navbar = ({ activeSection, scrollToSection }: NavbarProps) => {
    return (
        <nav className="fixed z-50 flex justify-center w-full bg-white shadow">
            <div className="flex items-center justify-between w-full max-w-5xl py-4 text-sm ">
                <div className="text-2xl font-semibold select-none">PC</div>
                <ul className="flex">
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
            </div>
        </nav>
    );
}

export default Navbar;
