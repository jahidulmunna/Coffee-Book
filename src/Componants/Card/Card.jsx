import { Link } from "react-router-dom";

const Card = ({ coffee }) => {
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};

  return (
    <div className="flex relative ">
      <Link to={`coffees/${id}`}
       className=" transition hover:scale-105 shadow-xl rounded-xl overflow-hidden ">
        <figure className="w-full h-48 overflow-hidden">
          <img src={image} alt="" className="" />
        </figure>
        <div className="p-4 font-mono">
          <h1 className=" text-xl ">Name: {name} </h1>
          <p className="text-gray-700"> Category: {category}</p>
          <p className="text-gray-700"> Type: {type}</p>
          <p className="text-gray-700"> Origin: {origin}</p>
          <p className="text-gray-700"> Rating: {rating}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
