//"use client";
//This is a client component where we can use all the fancy react hooks

import Image from "next/image";
import NavbarWhite from "../common/NavbarWhite";
import Link from "next/link";
import Button from "../common/Button";

interface Service {
  name: string;
  link: string;
}

interface PortfolioUserComponentProps {
    portfolioProps: {
      id: number;
      title: string;
      logo?: string;
      brief?: string; // Make brief optional
      image: string;
      slug: string;
      images?: string[]; // Make images optional
      link?: string; // Already optional
      discovered?: string; // Make discovered optional
      mobile_statement?: string; // Make mobile_statement optional
      closing_statement?: string;
      servicesUsed?: Service[]; // New field for services
    }[];
  }
  

  const PortfolioUserComponent: React.FC<PortfolioUserComponentProps> = ({ portfolioProps }) => {
    const [data] = portfolioProps
    // Passed array is destructured
    return (
      <>
      <NavbarWhite />
      <section className=''>
          <div className="max-w-[1600px] m-auto pb-[100px] px-4 lg:px-0">
            <div className="header-content flex flex-col spaced-m spaced-p w-full text-center items-center mx-auto lg:max-w-[1600px] px-4">
              <div className="header-text flex flex-col lg:flex-row justify-between gap-6 md:gap-0">
                  <div className="flex flex-col gap-4">
                    {data.logo && <Image src={data.logo} alt={data.title} loading="lazy" width={125} height={200} className=""/>}
                    <h1 className="text-4xl text-[#1b1b1b] leading-tight font-bold text-left md:text-5xl">{data.title}</h1>
                  </div>
                  <div className="w-full md:w-2/4 flex flex-col justify-start gap-4">
                    <p className="text-xl font-light text-[#1b1b1b] text-left">{data.brief}</p>
                      {
                        data.link && 
                        <a href={data.link} target="_blank" className="text-left text-xl font-light text-[--primary-color]" rel="noopener noreferrer">Visit Website</a>
                      }
                  </div>
                </div>
              </div>
            <section className="content m-auto">
              <div className="content-photo w-full"> 
                { data.images?.[0] && <Image src={data.images[0]} alt={data.title} loading="lazy" width={1600} height={800} className="object-cover bg-slate-300"/> }
              </div>
              <div className="flex flex-col gap-4 w-full lg:w-2/4 m-auto spaced-m spaced-p">
                <h4 className="text-2xl font-bold">What we discovered</h4>
                <p className="text-xl font-light">{data.discovered}</p>
              </div>
              <div className="content-photo w-full"> 
                { data.images?.[0] && <Image src={data.images[1]} alt={data.title} loading="lazy" width={1600} height={800} className="object-cover"/> }
              </div>
              <div className="content-photo w-full mt-6"> 
                { data.images?.[0] && <Image src={data.images[2]} alt={data.title} loading="lazy" width={1600} height={800} className="object-cover"/> }
              </div>
              <div className="flex flex-col gap-4 w-full lg:w-2/4 m-auto spaced-m spaced-p">
                  {
                    data.mobile_statement && 
                    <h4 className="text-2xl font-bold">Designing a mobile experience</h4>
                  }
                  {
                    data.mobile_statement && 
                    <p className="text-xl font-light">{data.mobile_statement}</p>
                  }
              </div>
              <div className="content-photo w-full mt-6"> 
                { data.images?.[0] && <Image src={data.images[3]} alt={data.title} loading="lazy" width={1600} height={800} className="object-cover"/> }
              </div>
              <div className="content-photo w-full grid grid-cols-1 md:grid-cols-2"> 
                { data.images?.[0] && <Image src={data.images[4]} alt={data.title} loading="lazy" width={800} height={800} className="object-cover"/> }
                { data.images?.[0] && <Image src={data.images[5]} alt={data.title} loading="lazy" width={800} height={800} className="object-cover"/> }
              </div>

              <div className="flex flex-col gap-4 w-full lg:w-2/4 m-auto spaced-m spaced-p">
                  <h4 className="text-2xl font-bold">Wrapping it all together</h4>
                  <p className="text-xl font-light">{data.closing_statement}</p>
              </div>

              <div className="flex flex-col gap-4 w-full lg:w-2/4 m-auto spaced-m spaced-p">
                <h4 className="text-xl font-bold items-center">Services Used:</h4>
                {
                  data.servicesUsed && data.servicesUsed.length > 0 && (
                    <ul className="flex flex-col md:flex-row gap-6">
                      {data.servicesUsed.map((service, index) => (
                        <li key={index} className="services_used_link">
                          <a href={service.link} rel="noopener noreferrer" className="text-xl font-light">
                            {service.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )
                }
              </div>

              <div className="portfolio_get-started flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center py-16 px-10 w-full lg:w-2/3 m-auto rounded-md bg-[--dark-background-color]">
                <div className="w-full lg:w-2/4 flex flex-col gap-4 text-center lg:text-left">
                  <h4 className="text-4xl font-bold items-center text-white">Have a project you want completed?</h4>
                  <p className="text-lg font-light text-white">If you have a project you&apos;d like to develop, feel free to reach out to us. We&apos;re ready to look into it and see how we can help make it a reality.</p>
                </div>
                <Button backgroundColor="--primary-color" textColor="white"  className="background-purple" href="/contact">Let&apos;s have a chat</Button>
              </div>

            </section>
          </div>
      </section>
      </>
    );
  };
  
  export default PortfolioUserComponent;