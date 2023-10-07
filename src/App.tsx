import { useState, useRef, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

const App = () => {
    const [activeSection, setActiveSection] = useState<number>(0);

    const homeRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const servicesRef = useRef<HTMLElement>(null);
    const portfolioRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    const sectionRefs = [homeRef, aboutRef, servicesRef, portfolioRef, contactRef];

    const scrollToSection = (s: number) => {
        sectionRefs[s].current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setActiveSection(sectionRefs.findIndex((ref) => ref.current === entry.target));
            }
        }, { rootMargin: "-100px", threshold: 0.5 });

        sectionRefs.forEach((ref) => {
            observer.observe(ref.current as HTMLElement);
        });

        return () => {
            sectionRefs.forEach((ref) => {
                observer.unobserve(ref.current as HTMLElement);
            });
        };
    }, [sectionRefs]);

    return (
        <>
            <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
            <div className="w-full max-w-5xl">
                <Home homeRef={homeRef} />
                <About aboutRef={aboutRef} />
                <Services servicesRef={servicesRef} />
                <Portfolio portfolioRef={portfolioRef} />
                <Contact contactRef={contactRef} />
            </div>
            <Footer />
        </>
    );
};

export default App;
