import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutritionImg from "../../assets/nutrition.png";
import { addFavourite, getAllFavourites } from "../../utils";

const CoffeeDetails = () => {
  const allCoffeesData = useLoaderData();
  const { id } = useParams();
  const [coffee, setCoffee] = useState({});
  // Favourite button hide
  const [isFavourite, setIsFavourite] = useState(false)

  useEffect(() => {
    const singleData = allCoffeesData.find((coffee) => coffee.id == id);
    setCoffee(singleData);
    // Favourite button hide
    const favourite = getAllFavourites()
    const isExist = favourite.find( item => item .id == singleData.id)
    if (isExist) {
      setIsFavourite(true)
    }

  }, [allCoffeesData, id]);

  const {
    name,
    image,
    ingredients,
    nutrition_info,
    description,
    making_process,
    rating,
    popularity,
  } = coffee;


//   Handle Favourite Button Click 
    const handleFavourite = (coffee) => {
     addFavourite(coffee)
     setIsFavourite(true); 
    }

  return (
    <div className="my-12">
      {/* Description */}
      <h1 className="text-2xl md:text-4xl font-thin mb-6"> {description} </h1>
      {/* Image */}
      <div className=" w-full h-full md:[500px] object-cover overflow-hidden rounded-xl shadow-xl">
        <img src={image} alt="" className="w-full h-full" />
      </div>

      {/* Title and Favourite Button*/}
      <div className=" flex justify-between items-center my-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-thin"> {name} </h1>
          <p className="text-base">Popularity: {popularity} </p>
          <p className="text-base">Rating: {rating} </p>
        </div>
        <div>
         
          <button   disabled = {isFavourite}
          onClick={ () => handleFavourite(coffee)} className="btn btn-warning"> Add Favourite </button>
        </div>
      </div>

      {/* Making Process */}
      <div className="my-6">
        <h2 className="text-2xl font-thin"> Making Process: </h2>
        <p className="text-base"> {making_process} </p>
      </div>

      <div className="my-6 flex justify-between items-center ">
        <div className="flex-1 ">
          <div className=" flex flex-col justify-center gap-6">
            <h1 className="text-2xl font-thin"> Ingredients:</h1>
            <ul className="text-xl ml-12">
              {ingredients &&
                ingredients.map((i) => (
                  <li className="list-disc" key={i}>
                    {i}
                  </li>
                ))}
            </ul>
           
          </div>
        </div>
        <div className="flex-1">
          <img src={nutritionImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
