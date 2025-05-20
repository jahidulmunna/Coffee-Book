import React from "react";
import Banner from "../../Componants/Banner/Banner";
import Heading from "../../Componants/Heading/Heading";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../../Componants/Categories/Categories";


const Home = () => {

     const categories = useLoaderData()
     console.log(categories);
     

  return (
    <div>
      {/* Banner  */}
      <Banner> </Banner>

      {/* Heading  */}

      <Heading
        title={"Browse Coffees by category"}
        subtitle={
          "Choose your desired coffee category to browse through specific coffees that fit in your taste"
        }
      ></Heading>

      {/* Category tab Section  */}
        <Categories categories={categories}></Categories>
      {/* Dynamic Nested Componants */}
        <Outlet> 
          
        </Outlet>

    </div>
  );
};

export default Home;
