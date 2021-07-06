// constants 
const SET_CUDDLIST = 'cuddlist/SET_CUDDLIST';
const SET_CUDDLIST_LOCATIONS = 'cuddlist/SET_CUDDLIST_LOCATIONS';
const SET_AVAILABLE_CUDDLISTS = 'cuddlist/SET_AVAILABLE_CUDDLISTS'


// action creators
const setCuddlist = (cuddlist) => ({
  type: SET_CUDDLIST, 
  payload: cuddlist,
})

const setCuddlistLocations = (locations) => ({
  type: SET_CUDDLIST_LOCATIONS, 
  payload: locations,
})

const setAvailableCuddlists = (cuddlists) => ({
  type: SET_AVAILABLE_CUDDLISTS,
  payload: cuddlists
})


// thunks 
export const getCuddlist = (id) => async (dispatch) => {
  const response = await fetch(`/api/users/${id}`)
  const data = await response.json()
  dispatch(setCuddlist(data))
}

export const getCuddlistLocations = () => async (dispatch) => {
  const response = await fetch('/api/users/cuddlist-locations')
  const data = await response.json()
  dispatch(setCuddlistLocations(data))
}

export const getAvailableCuddlists = (location) => async (dispatch) => {
  console.log('location', location)
  const response = await fetch(`/api/users/cuddlists/${location}`);
  const data = await response.json();
  dispatch(setAvailableCuddlists(data));
}


// reducer 
const initialState = {current:{}, locations: {}, availableCuddlists: {}}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case SET_CUDDLIST:
      return {...state, current: action.payload}
    case SET_CUDDLIST_LOCATIONS:
      return {...state, locations: action.payload}
    case SET_AVAILABLE_CUDDLISTS:
      // const newState = {...state}
      // const cuddlists = action.payload.cuddlists
      // for (const index in cuddlists) {
      //   newState.availableCuddlists[cuddlists[index].id] = cuddlists[index]
      // }
      // // newState.availableCuddlists = action.payload
      // return {...newState} // {...state , availableCuddlists: ...action.payload}
      const availableCuddlists = {}
      const cuddlists = action.payload.cuddlists
      for (const index in cuddlists) {
        availableCuddlists[cuddlists[index].id] = cuddlists[index]
      }
      // newState.availableCuddlists = action.payload
      return { ...state, availableCuddlists } // {...state , availableCuddlists: ...action.payload}

      // brand new try 
      // return {...state, availableCuddlists: action.payload}

    default:
      return state
  }
}