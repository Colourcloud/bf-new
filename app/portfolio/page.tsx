import Header from '../components/portfolio/Header';
import PortfolioCard from '../components/portfolio/PortfolioCard';
import PotrfolioGrid from '../components/portfolio/PortfolioGrid';
import portfolioData from '../data/portfolioData.json';

const PortfolioPage = () => {
    return (
        <>
            <Header />
            <PotrfolioGrid />
        </>
    );
};

export default PortfolioPage;