import React from 'react';

const Heading = ({title, subtitle}) => {
     return (
          <div className=' flex flex-col w-full justify-center  items-center my-12 '>
               <h1 className='lg:text-4xl md:text-2xl text-gray-600 font-mono mb-4 '>
                      {title}
               </h1>
               <p className='text-base  text-gray-500 text-center font-mono'>
                    {subtitle}

               </p>
          </div>
     );
};

export default Heading;