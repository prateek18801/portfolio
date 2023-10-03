import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="w-full max-w-5xl">
                <Home />
                <About />
                <Services />
                <Portfolio />
                <Contact />
            </div>
            <Footer />
        </>
    );
};

export default App;
