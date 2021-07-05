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
  paylaod: cuddlists
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
  console.log('data', data);
  dispatch(setAvailableCuddlists);
}


// reducer 
const initialState = {current:{}, locations: {}, availableCuddlits: {}}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case SET_CUDDLIST:
      return {...state, current: action.payload}
    case SET_CUDDLIST_LOCATIONS:
      return {...state, locations: action.payload}
    case SET_AVAILABLE_CUDDLISTS:
      return {...state , availableCuddlits: action.payload}
    default:
      return state
  }
}