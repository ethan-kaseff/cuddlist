// constants 
const UPDATE_USER = '/user/UPDATE_USER'

// action creators
const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user
})

// thunks 
export const updateUserDb = (user) => {

}

export const updateUserDb =
  (firstName, lastName, pronouns, location, sessionPrice, travelPrice, aboutMe, sessionInfo) =>
    async (dispatch) => {
      const response = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          location,
          pronouns,
          session_price: sessionPrice,
          travel_price: travelPrice,
          about_me: aboutMe,
          session_info: sessionInfo
        }),
      });

      const responseObject = await response.json();
      if (responseObject.errors) {
        return responseObject;
      }
      dispatch(updateUser(responseObject));

    };

    // reducer 
    const initialState = {}

    export default function reducer(state=initialState, action) {
      switch (action.type) {
        case UPDATE_USER:
          return {...state}
        default:
          return state
      }
    }