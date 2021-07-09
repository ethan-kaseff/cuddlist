import React from 'react';
import CuddlistSearch from '../CuddlistSearch';

const Home = () => {
  
  return (
    <div className='flex flex-col h-full bg-gradient-to-b from-purple-200 to-purple-600 justify-center items-center rounded-3xl'>
      <h1 className='md:text-5xl text-3xl text-gray-100 p-16 w-4/5'>Welcome to the Cuddlist Home Page</h1>
      <CuddlistSearch/>
    </div>
  )
}

export default Home