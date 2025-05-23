import { Link, useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Card = ({ coffee, handleRemove }) => {
  const {pathname} = useLocation() // showing remove icon in dashboard

  const { name, image, category, origin, type, id, rating, popularity } =
  coffee || {};

  
  return (
    <div className="flex relative ">
      <Link to={`/coffees/${id}`}
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
          <p className="text-gray-700"> Popularity: {popularity}</p>
        </div>
      </Link>

      {/* remove icon */}

      {   
        pathname === '/dashboard' && 
        <div onClick={() => handleRemove(id)} 
        className="absolute p-3 bg-warning rounded-full cursor-pointer -top-5 -right-5"><FaTrash size={15}  /></div>
         
      }

    </div>
  );
};

export default Card;
