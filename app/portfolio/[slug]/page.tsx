import getPortfolioData from "@/app/lib/getPortfolioData";
import PortfolioUserComponent from "@/app/components/portfolio/PortfolioUserComponent";

//This is a server component which performs two tasks-
// 1. fetch data 
// 2. Send the data to a client component i.e. PortfolioUserComponent 
// Please note from Next 13 onwards this is the only way to fetch data in the server component and populate it in the client component

type Params = {
  params: {
    slug: string;
  };
};



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
