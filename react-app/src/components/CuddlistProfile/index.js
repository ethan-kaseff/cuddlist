import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getCuddlist } from "../../store/cuddlist";

const CuddlistProfile = () => {
  const dispatch = useDispatch();
  const {id} = useParams()
  const cuddlist = useSelector(state => state.cuddlist.current)

  useEffect(() => {
    dispatch(getCuddlist(id))
  }, [dispatch, id])

  // const aboutMeParagraphs = document.createElement('div')
  // if (cuddlist) {
  //   const paragraphs = cuddlist.aboutMe.split('/')
  // }

  return (
    <div>
      <div className='w-full h-12 bg-blue-300 text-white flex justify-center'>
        <div className='w-9/12 flex justify-start items-center font-extrabold'>
          {cuddlist.firstName}
        </div>
      </div>
      <div className='flex justify-center mt-4'>
        <div className='w-9/12 flex'>
          <div className="w-4/12">
            { cuddlist.images &&
              <div className="">
                <img 
                  src={cuddlist.images[0].imageUrl} 
                  alt='profile'
                  className='rounded-lg'></img>
              </div>
            }
            <div className="shadow-md mt-2 divide-y-2 p-2">
              <button className='bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg text-white font-bold w-full p-1 text-lg m-1'>
                Send Session Request
              </button>
              <p className='text-sm text-gray-600 font-hairline text-center p-2 m-3'>
                By submitting a request, you acknowledge and agree to our Code of Conduct and Terms of Use.
              </p>
            </div>
          </div>
          <div className="w-8/12 ml-6">
            <h2 
              className="text-blue-600 text-3xl font-light mb-3">
              {cuddlist.firstName}</h2>
            <p 
              className="text-md text-bold tracking-wide text-gray-600 mb-2"
              >Session Price: $<span>{cuddlist.sessionPrice}</span>/hr</p>
            <p
              className="text-md text-bold tracking-wide text-gray-600 mb-2"
              >Travel Price: $<span>{cuddlist.travelPrice}</span>/hr</p>
            <p
              className="text-lg text-extrabold tracking-wide text-gray-600 mb-2"
              >{cuddlist.location}</p>
            <h3
              className="text-blue-400 text-2xl font-light mb-3"
              >About {cuddlist.firstName}</h3>
            <p 
              className="text-md text-bold tracking-wide text-gray-800 mb-2 ml-2"
              >{cuddlist.aboutMe}</p>
            <h3
              className="text-blue-400 text-2xl font-light mb-3"
              >Session Information from {cuddlist.firstName}</h3>
            <p 
            className="text-md text-bold tracking-wide text-gray-800 mb-2 ml-2"
            >{cuddlist.sessionInfo}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CuddlistProfile