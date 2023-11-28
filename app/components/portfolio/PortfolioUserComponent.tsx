"use client";
//This is a client component where we can use all the fancy react hooks

import Image from "next/image";
interface PortfolioUserComponentProps {
    portfolioProps: {
      id: number;
      title: string;
      image: string;
      slug: string;
    }[];
  }

  const PortfolioUserComponent: React.FC<PortfolioUserComponentProps> = ({ portfolioProps }) => {
    const [data] = portfolioProps
    // Passed array is destructured
    return (
      <div className="flex h-screen bg-blue-300 justify-center items-center flex-col text-5xl gap-10">
        <div className="relative h-96 w-full">
            <Image src={data.image} alt={data.title} fill={true} className="object-cover"/>
        </div>
        <p>title: {data.title}</p>
        <p>slug: {data.slug}</p>
      </div>
    );
  };
  
  export default PortfolioUserComponent;