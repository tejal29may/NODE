//  web scrapping 
// Use the following URL for scraping tech job postings: https://www.naukri.com/it-jobs?src=gnbjobs_homepage_srch 

// Data to Extract:

// Job Title
// Company Name
// Location
// Job Type (Full-time, Part-time, Contract, etc.)
// Posted Date
// Job Description




const axios=require('axios');
const cheerio = require('cheerio');

axios.get("https://www.naukri.com/it-jobs?src=gnbjobs_homepage_srch").then((Response)=>{
    console.log("data is ",Response.data);
}).catch((error) => {
    console.error('Error:', error.message);
})

const html = '<div><p>Hello, World!</p></div>';
const $ = cheerio.load(html);


