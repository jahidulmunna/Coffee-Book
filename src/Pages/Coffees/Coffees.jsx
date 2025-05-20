import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../Componants/Card/Card";

const Coffees = () => {
  const data = useLoaderData();
  return (
   <section>

        <div className="flex justify-between items-center my-12">
            <div> <h1 className="text-3xl font-thin"> 
               sort Coffees&apos;s by Popularity & Rating-&gt;
              </h1> </div>
            <div className=" space-x-4">
              <button className="btn btn-warning"> Sort By Popularity  </button>
              <button className="btn btn-warning"> Sort By Rating   </button>
            </div>

        </div>

     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-12">
      {data.map((coffee) => (
        <Card key={coffee.id} coffee={coffee}></Card>
      ))}
    </div>
   </section>
  );
};

export default Coffees;
