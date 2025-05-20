import React from 'react';
import {  NavLink } from 'react-router-dom';

const Categories = ({categories}) => {
     return (
         
      <div role="tablist" className="tabs w-full grid grid-cols-3 l">
       {categories.map(category => ( 
            <NavLink
             key={category.category}
             to={`/category/${category.category}`}
             role="tab" className={({isActive}) =>
              ` tab text-2xl font-thin  ${isActive ? 'tab-active': '' } `}>
          {category.category}
      </NavLink>  ))}
     
    </div>
     );
};

export default Categories;