const redux = require('redux');
const thunkMiddleware  = require('redux-thunk').default;
const axios = require('axios');

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;




const initialState = {
    loading: false,
    users: [],
    error:''
};

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUsersRequested = () => {
    return {
        type: FETCH_USERS_REQUESTED
    };

}

const fetchUsersSucceeded = users => {
    return { 
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    }
}

const fetchUsersRequestedFailed = error => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    }

}
const fetchUsers = () => {

    return function(dispatch) {
        dispatch(fetchUsersRequested());

        axios.get('https://jsonplaceholder.typicode.com/users', { 
            headers: { "Accept-Encoding": "gzip,deflate,compress" } 
        })
           .then((response) => {
                const users = response.data.map((user)=> user.id);
                console.log(users);
                
                dispatch(fetchUsersSucceeded(users));
            })
           .catch((error) => {
                dispatch(fetchUsersRequestedFailed(error.message));
            });
    }
}

const reducer = (state = initialState, action) => {
    console.log(action);
    
    switch (action.type) {
            case FETCH_USERS_REQUESTED:
                return {
                   ...state,
                    loading: true,
                };
            case FETCH_USERS_SUCCEEDED:
                return {
                    loading: false,
                    users: action.payload,
                    error: '',

                }
            case FETCH_USERS_FAILED:
                return {
                     loading: false,
                     users: [],
                     error: action.payload,
                 }
        }
}




//thunk has ability to return a function intead of aobject

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());

})
store.dispatch(fetchUsers());

unsubscribe();
