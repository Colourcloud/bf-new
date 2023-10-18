import React from 'react';
import Image from 'next/image';

interface CardProps {
    id: number;
    title: string;
    description: string;
    link: string;
    icon: string;
}

const Card: React.FC<CardProps> = ({ title, description, link, icon }) => {
    return (
        <div className="card bg-white rounded-lg shadow-sm border flex flex-col gap-2 max-w-[450px] min-w-[450px] border-[#E5E5E5]">
            <div className="top-card flex flex-row justify-between items-center px-6 py-4">
                <div className="w-3/4 flex flex-col gap-2">
                    <h2 className='text-lg font-semibold'>{title}</h2>
                    <p className='text-sm text-gray-500 font-light'>{description}</p>
                </div>
                <Image src={icon} alt={`${title} icon`} className="card-icon rounded-full w-16 h-16" width="100" height="100" />
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" className='text-sm font-medium text-gray-500 border-t py-3 px-6'>Learn about {title}</a>
        </div>
    );
}

export default Card;
