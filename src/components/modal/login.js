import React from 'react';
import Switch from '../components/switch/switch';


function Login() {

  

  return (
      
    <>
      <section className='w-full bg-blue-400 h-screen flex justify-center items-center'>
        <div className='login-modal lg:w-1/3 w-4/5 bg-white rounded-2xl shadow-2xl relative overflow-hidden'>
            <div className='w-full lg:py-6 py-4 lg:px-10 px-6 flex justify-between items-center border-b-2 border-gray-400'>
              <h1 className='font-bold lg:text-3xl text-2xl text-black-50'>Log In</h1>
              <button className='z-10'><img src="images/icons/icon_times-circle.svg" alt="Close Icon" /></button>
            </div>
            <div className='lg:px-10 px-6 lg:py-8 py-6'>
              <p className='text-xs text-gray-400'>To continue, log in to Aid Humanity.</p>
              <div className='w-full flex flex-col gap-2 mt-8'>
                <button className='w-full h-12 flex justify-center items-center gap-2 bg-blue-20 text-white rounded-md z-10'>
                  <i className='fa-brands fa-facebook-f mb-1 text-lg'></i>
                  <p className='font-medium text-xs'>Continue with Facebook</p>
                </button>
                <button className='w-full h-12 flex justify-center items-center gap-2 bg-black text-white rounded-md z-10'>
                <i className='fa-brands fa-apple mb-1 text-xl'></i>
                <p className='font-medium text-xs'>Continue with Apple</p>
                </button>
                <button className='w-full h-12 flex justify-center items-center gap-2 bg-transparent border border-gray-400 text-black-50 rounded-md z-10'>
                  <i className='fa-brands fa-google mb-1 text-xl'></i>
                  <p className='font-medium text-xs'>Continue with Google</p>
                </button>
              </div>
              <p className='text-xs text-gray-400 my-4 text-center'>OR</p>
              <form>
                <input className='w-full p-2 h-12 rounded-md text-black-50 border border-gray-400 border-blue focus:outline-none focus:border-4 text-xs z-10' placeholder='Email Address or Username' type="email" />
                <input className='w-full p-2 h-12 rounded-md text-black-50 border border-gray-400 border-blue focus:outline-none focus:border-4 text-xs z-10 mt-2' placeholder='Password' type="password" />
                <p className='text-blue text-xs font-bold mt-2'>Forgot Password?</p>
                <div className='flex justify-between items-center mt-2'>
                  <div className='flex gap-2 items-center'>
                    <Switch />
                    <p className='lg:text-sm text-xs text-black-50 font-medium'>Remember me</p>
                  </div>
                  <button className='w-2/5 py-3 text-xs text-white bg-blue rounded-md font-medium z-10'>LOG IN</button>

                </div>
              </form> 
            </div>
            <div className='rounded-b-2xl h-20 bg-blue-10 w-full flex justify-center items-center z-10'>
              <p className='font-bold text-black-50 lg:text-base text-xs'>Don’t have an account? <a href='#' className='text-blue'>Sign up</a>.</p>
            </div>
            <img className='absolute w-4/5 -right-1/3 lg:top-1 top-10 z-0' src="images/vectors/logo_aid-humanity-icon.svg" alt="Aid-humanity background logo" />
        </div>
      </section>
    </>

  );

}
  
export default Login;
