import portfolioData from '../data/portfolioData.json';

const getPortfolioData = async () => {
    //When fetching data in a server component we usually fetch data from an API or database
    //In our case we are fetching data from a local json file 
    //In order to get data of a single portfolio project we should make an API call to database using project id so that we can get only 1 project back
    //Our method right now is very redundant and should not be used in production
    //Please make two separate API endpoints first - to get all portfolio projects and second - to get only 1 based on id 
    //I have written some dummy code below which can be used in future to implement right API calls

    //const res = await fetch("url/to/your/api/or/database")
    // if (!res.ok) throw new Error('Failed to fetch data')
    // return res.json()
    return portfolioData
}

export default getPortfolioData