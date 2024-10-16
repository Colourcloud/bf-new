// Work.tsx
import PortfolioCard from './PortfolioCard';
import portfolioData from '../../data/portfolioData.json';
const PotrfolioGrid: React.FC = () => {
    return (
        <section className='portfolio-page bg-[--dark-background-color] spaced-p'>
            <div className="max-w-[1600px] m-auto px-4">
                <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioData.slice().reverse().map((item) => (
                        <PortfolioCard key={item.id} id={item.id} title={item.title} image={item.image} slug={item.slug} />
                ))}
                </div>
            </div>
        </section>
    );
};

export default PotrfolioGrid;
