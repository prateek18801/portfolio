const Portfolio = ({ portfolioRef }: { portfolioRef: React.RefObject<HTMLElement> }) => {
    return (
        <section ref={portfolioRef}>
            <div className="section-heading">Portfolio</div>
            <div className="flex flex-wrap justify-center gap-8">
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
            </div>
        </section>
    );
}

const PortfolioCard = () => {
    return (
        <div className="w-1/4 p-8 transition-shadow rounded shadow hover:shadow-lg">
            <div className="flex items-center text-sm font-medium cursor-pointer text-neutral-500 group">
                <span className="mr-1 transition-all group-hover:mr-2">Demo</span>
            </div>
        </div>
    );
}

export default Portfolio;
