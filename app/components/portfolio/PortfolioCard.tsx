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
                <Image src={image} alt={title} objectFit='cover' placeholder='blur' blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="' className='portfolio-card-image' width={1200} height={560} />
             </div>
            </Link>
            <h4 className='text-white text-xl font-medium portfolio-title'>{title}</h4>
        </div>
    );
};

export default PortfolioCard;
