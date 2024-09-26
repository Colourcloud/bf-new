import Header from '../components/portfolio/Header';
import PortfolioCard from '../components/portfolio/PortfolioCard';
import PotrfolioGrid from '../components/portfolio/PortfolioGrid';
import portfolioData from '../data/portfolioData.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Builtflat - Our Case Studies',
    description: "We work closely with other design & development agencies, to help them meet their client deadlines. Leveraging workloads can greatly increase the productivity of a team, to deliver a more polished project.",
};

const PortfolioPage = () => {
    return (
        <>
            <Header />
            <PotrfolioGrid />
        </>
    );
};

export default PortfolioPage;