// constants 
const SET_CUDDLIST = 'cuddlist/SET_CUDDLIST';

// action creators
const setCuddlist = (cuddlist) => ({
  type: SET_CUDDLIST, 
  payload: cuddlist,
})

// thunks 
export const getCuddlist = (id) => async (dispatch) => {

  console.log("-------------I'm in the thunk----------------")

  const response = await fetch(`/api/users/${id}`)

  console.log(response)

  const data = await response.json()

  console.log('after awaiting the response', data)

  dispatch(setCuddlist(data))
}

// reducer 
const initialState = {current:{}}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case SET_CUDDLIST:
      return {current: action.payload}
    default:
      return state
  }
}