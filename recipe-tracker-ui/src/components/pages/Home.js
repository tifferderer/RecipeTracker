import React ,{useEffect, useState} from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import axios from 'axios';


function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
      
var config = {
    method: 'get',
    url: 'https://test-digichef-api.fiddlingphotographer.com/recipetracker/recipes/',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    setData(response.data);

  })
  .catch(function (error) {
    console.log(error);
  });
  
      });
      
    return(
    <>
    <HeroSection />
    <div className='cards'>
        <h1>Top Recipes</h1>
        <Cards recipes = {data} hidefilter= {true}/>
    </div>
    </>
);
}

export default Home;