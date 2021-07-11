import React from 'react';
import CuddlistSearch from '../CuddlistSearch';

const Home = () => {
  
  return (
    <div className='m-2 flex flex-col justify-center items-center h-screen rounded-3xl bg-main-splash bg-no-repeat bg-fixed bg-cover bg-opacity-25'>
      <h1 className='md:text-6xl text-4xl text-gray-100 font-black p-4 w-4/5'>Let's get you the touch you're looking for... </h1>
      <CuddlistSearch/>
    </div>
  )
}

export default Home