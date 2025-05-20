import React from 'react';
import NavBar from '../Componants/NavBar/NavBar';
import Footer from '../Componants/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
     return (
          <div>
               {/* NavBar */}
               <div className=" h-16">
                    <NavBar  > </NavBar>
               </div>
               <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto px-12">
                    {/* Dynamic Section */}
                    <Outlet> 

                    </Outlet>
               </div>
               {/* Footer */}
               <Footer> </Footer>
          </div> 
     );
};

export default MainLayout;