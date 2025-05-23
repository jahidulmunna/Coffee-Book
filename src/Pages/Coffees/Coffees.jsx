import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../Componants/Card/Card";

const Coffees = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data)
  console.log(coffees)
  const handleSort = (sortBy) => {
    if(sortBy==='popularity') {
      // Sort By Popularity
      const sorted = [...data].sort((a, b)=> b.popularity - a.popularity )
      setCoffees(sorted)

    }else if (sortBy === 'rating') {
      // Sort By Rating 
       const sorted = [...data].sort((a, b)=> b.rating - a.rating )
      setCoffees(sorted)

    }
  }
  return (
   <section>

        <div className="flex justify-between items-center my-12">
            <div> <h1 className="text-3xl font-thin"> 
               sort Coffees&apos;s by Popularity & Rating-&gt;
              </h1> </div>
            <div className=" space-x-4">
              <button onClick={() => handleSort ('popularity') } className="btn btn-warning"> Sort By Popularity  </button>
              <button onClick={() => handleSort ('rating') } className="btn btn-warning"> Sort By Rating   </button>
            </div>

        </div>

     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-12">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee}></Card>
      ))}
    </div>
   </section>
  );
}; 

export default Coffees;
