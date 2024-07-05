
import Results from "@/components/Result";
import request from "@/utils/request";
import axios from "axios";

const page = async({ params }) => {
    let results=[]
   
  const para = params.type;
  try {
      const response = await axios.get(
        `https://api.themoviedb.org/3${
          request[para]?.url || request?.Trending.url
        }`
      );

     results = response.data.results;
    
  } catch (err) {
   console.log(err);
  }
  return  <Results results={results}/>
 
};

export default page;
