import getPortfolioData from "@/app/lib/getPortfolioData";
import PortfolioUserComponent from "@/app/components/portfolio/PortfolioUserComponent";
import { Metadata } from 'next';

//This is a server component which performs two tasks-
// 1. fetch data 
// 2. Send the data to a client component i.e. PortfolioUserComponent 
// Please note from Next 13 onwards this is the only way to fetch data in the server component and populate it in the client component

type Params = {
  params: {
    slug: string;
  };
};

// This function generates dynamic metadata for each portfolio page
export async function generateMetadata({ params: { slug } }: Params): Promise<Metadata> {
  const portfolioData = await getPortfolioData();
  const selectedData = portfolioData.find((e) => e.slug === slug);

  if (selectedData) {
    return {
      title: selectedData.title, // Set the title from the selected project's title
      description: selectedData.brief, // Set the description from the brief field
      openGraph: {
        title: selectedData.title,
        description: selectedData.brief,
        url: selectedData.link,
        images: [
          {
            url: selectedData.image,
            alt: `${selectedData.title} Banner`,
          },
        ],
      },
    };
  }

  return {
    title: 'Portfolio Project',
    description: 'Check out this portfolio project.',
  };
}



const portfolioPage = async ({ params: { slug } }: Params) => {
  const portfolioData = await getPortfolioData();
  const selectedData = portfolioData.filter((e) => {  //filtering to get project based on slug value. Please note, this will return an array containing 1 object
    return e.slug === slug;                           // Ideally, we should be having an API endpoint to GET a project based on its id 
  });                                                 // This method works but it is redundant and if there are a lot of data then this will take extra useless bandwidth
  
  return (
    <>
      <PortfolioUserComponent portfolioProps={selectedData}/> 
      {/* Passing the array of containing only 1 object that is selectedData to the client component */}
    </>
  );
};

export default portfolioPage;
