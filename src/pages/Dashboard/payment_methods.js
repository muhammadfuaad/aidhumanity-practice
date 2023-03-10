import React from 'react';
import Sidebar from '../../components/sidebar';
import Appeal from '../../components/appeal';
import Dashboard_footer from '../../components/dashboard_footer';
import {isMobile} from 'react-device-detect';

function Payment_methods() {


  return (

    <div className='flex w-full h-full min-h-screen'>
    <Sidebar active="payment" />
    <section className='flex w-full relative pt-20 lg:pt-0'>
      <div className='w-dashboard bg-gray pb-20'>
        <div className='flex items-center py-5 lg:px-12 px-4 border-b-2 h-20'>
          <h1 className='text-xl font-bold'>Payment Methods</h1>
        </div>
        <div className='my-8 lg:px-12 px-4'>
          <div className='bg-white rounded-xl w-full'>
            <div className='lg:px-6 px-4 py-8'>
              <h2 className='text-lg text-black-50 font-bold'>Saved cards</h2>
              <div className='w-full h-96 flex items-center justify-center'>
                <div className='flex flex-col items-center h-auto'>
                  <div className='w-20 h-20 bg-gray rounded-full'>
                    <img className='w-12 mx-auto -mt-2' src="images/icons/dashboard/illustration_mother.png" alt="" />
                  </div>
                  <p className='text-sm text-gray-600 mt-2 w-40 text-center'>There doesn’t seem to be anything here</p> 
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <Dashboard_footer />
      </div>
      {!isMobile ? <Appeal /> : null}
    </section>
  </div>      

  );
}

export default Payment_methods;