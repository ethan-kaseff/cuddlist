import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import ProfileInformation from './ProfileInformation'
import SessionRequestCard from '../SessionRequestCard'


function MyDashboard() {
  const user = useSelector(state => state.session.user)
  const requests = Object.values(user.sessionRequests)

  requests.forEach(request => {
    console.log(request)
  })

  const [openTab, setOpenTab] = React.useState(1);
  const color = 'blue'

  // tabulation is using open source project Tailwind Starter Kit
  return (
    <div className='flex flex-col items-center'>
        <h1
        className='text-blue-300 font-bold text-3xl'
        >Hi {user.firstName + ','}</h1>
        <div className="flex justify-center m-8">
          <div className="w-full flex">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row h-32"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Profile
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Session Requests
                </a>
              </li>
              {/* <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Options
                </a>
              </li> */}
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <ProfileInformation />
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <div>
                      <h1>Session Requests</h1>
                      {
                        requests.map(request => {
                          return (
                            <>
                              <SessionRequestCard request={request} />
                            </>
                          )
                        })
                      }
                    </div>
                  </div>
                  {/* <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <p>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables for
                      real-time schemas.
                      <br />
                      <br /> Dramatically maintain clicks-and-mortar solutions
                      without functional solutions.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MyDashboard
