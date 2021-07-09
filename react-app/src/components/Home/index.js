import React from 'react';
import CuddlistSearch from '../CuddlistSearch';

const Home = () => {
  
  return (
    <div className='flex flex-col h-screen bg-gradient-to-b from-purple-50 to-purple-400 justify-center items-center'>
      <h1>Welcome to the Cuddlist Home Page</h1>
      <CuddlistSearch />
    </div>
  )
}

export default Home