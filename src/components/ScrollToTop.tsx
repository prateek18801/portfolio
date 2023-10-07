import { MdKeyboardArrowUp } from "react-icons/md";

type ScrollToTopProps = {
    activeSection: number,
    scrollToSection: (s: number) => void
};

const ScrollToTop = ({ activeSection, scrollToSection }: ScrollToTopProps) => {
    return (
        <button className={`fixed p-1 text-3xl text-white transition-all bg-black rounded-full opacity-80 hover:opacity-100 right-12 bottom-12 ${activeSection > 0 ? "scale-100" : "scale-0"}`} onClick={() => { scrollToSection(0) }}>
            <MdKeyboardArrowUp />
        </button>
    );
}

export default ScrollToTop;
