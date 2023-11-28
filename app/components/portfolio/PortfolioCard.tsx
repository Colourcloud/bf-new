import Image from 'next/image';
import Link from 'next/link';

// Define the interface directly in this file
interface PortfolioItem {
    id: number;
    title: string;
    image: string;
    slug: string;
}

const PortfolioCard: React.FC<PortfolioItem> = ({ title, image, slug }) => {
    return (
        <div className='flex flex-col gap-4 portfolio-card-container'>
            <Link href={`/portfolio/${slug}`}>
            <div className="portfolio-card rounded-sm relative overflow-hidden">
                <Image src={image} alt={title} objectFit='cover' className='portfolio-card-image' width={1200} height={80} />
            </div>
            </Link>
            <h4 className='text-white text-xl font-medium portfolio-title'>{title}</h4>
        </div>
    );
};

export default PortfolioCard;
