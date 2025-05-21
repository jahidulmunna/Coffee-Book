import React, { useEffect, useState } from 'react';
import Heading from './../../Componants/Heading/Heading';
import { getAllFavourites, removeFavourite } from '../../utils';
import Card from '../../Componants/Card/Card';


const Dashboard = () => {
     const [coffees, setCoffees] = useState([])
     useEffect ( () => {
          const favourites = getAllFavourites() 
          setCoffees(favourites)
     } ,[])


     const handleRemove = (id) => {
          removeFavourite(id)
      }

     return (
          <section>
               <Heading
                title="Welcome to Dashboard"
                 subtitle="Manage coffees that you have previously added as favourite. You can view or remove from here."
                 >
               </Heading>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-12">
              {
               coffees.map(coffee =>
                     <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee}> 
                     </Card>)
              }
          </div>
          </section>
     );
};

export default Dashboard;