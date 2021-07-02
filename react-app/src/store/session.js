// constants 
const SET_USER = 'session/SET_USER'
const UPDATE_USER = '/user/UPDATE_USER'
const REMOVE_USER = 'session/REMOVE_USER'

// action creators 
const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

const removeUser = () => ({
    type: REMOVE_USER
})


// thunks 
export const authenticate = () => async (dispatch) => {
    const response = await fetch ('/api/auth/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    if (data.errors) {
        return;
    }
    dispatch(setUser(data))
}

export const login = (email, password) => async (dispatch) => {
    const response  = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    const data = await response.json()
    if (data.errors) {
        return data
    }
    dispatch(setUser(data))
    return {}
}

export const logout = () => async (dispatch) => {
    const response = await fetch('/api/auth/logout', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();
    dispatch(removeUser())
}

export const signUp = (email, password, firstName, lastName, cuddlist) => async (dispatch) => {
    const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
            first_name: firstName,
            last_name: lastName,
            cuddlist
        }),
    });
    const data = await response.json()
    dispatch(setUser(data))
}

export const updateUserDb =(id,
                            firstName, 
                            lastName, 
                            pronouns, 
                            location, 
                            sessionPrice, 
                            travelPrice, 
                            aboutMe, 
                            sessionInfo) =>async (dispatch) => {
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

    const data = await response.json();
    if (data.errors) {
        return data;
    }
    dispatch(setUser(data));

};



// reducer
const initialState = {}

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {user: action.payload, updateUser: action.payload}
        case REMOVE_USER:
            return {user: null}
        default:
            return state
    }
}