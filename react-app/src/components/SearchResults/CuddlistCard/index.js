import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

function CuddlistCard({cuddlist}) {

  // https://tailwindtemplates.io/cards/
  return (
    <div className="bg-white shadow p-3 rounded sm:flex m-4 w-full">
      <div className='w-full sm:w-1/4'>
        {cuddlist.images[0] &&
          // <div background-image={`url(${cuddlist.images[0].imageUrl})`}
          //   className="bg-cover bg-center bg-gray-300 h-32 rounded">
          // </div>
          <img src={cuddlist.images[0].imageUrl}
          className='rounded shadow-lg'
          alt='profile name'
          ></img>
        }
      </div>
      <div className="m-6 w-full">
        <p className="text-2xl text-bold tracking-wide text-gray-600 mb-2">
          {cuddlist.firstName}
        </p>
        <p className="text-md text-bold tracking-wide text-gray-600 mb-2">
          Location: {cuddlist.location}
        </p>
        {cuddlist.pronouns &&
        <p className="text-md text-bold tracking-wide text-gray-600 mb-2">
          Pronouns: {cuddlist.pronouns}
        </p>
        }
        <p className="text-sm text-gray-600 font-hairline w-10/12 text-center">
          {cuddlist.aboutMe.slice(0,100)+ ' ....'}
        </p>
        <div className="mt-6 flex justify-end items-center">
          <Link 
            to={`/cuddlists/${cuddlist.id}`}
            className="rounded shadow-md flex items-center bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 w-max">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  )
}
export default CuddlistCard
