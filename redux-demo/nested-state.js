const produce = require('immer').produce;
const redux = require('redux');



const initialState = {
    name: 'Sumana',
    address:{
        street: 'Trax Street',
        city: 'New York',
        state: 'New York',
    }
}

const STREET_UPDTED = 'STREET_UPDTED';

const updatedStreet = (street)=>{
    return{
        type: STREET_UPDTED,
        payload: street

    }
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case STREET_UPDTED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload,
            //     },
            // }
            return produce(state,(draft)=>{
                draft.address.street = action.payload;
            })
            
        default:
            return state;
    }

}

const store = redux.createStore(reducer);
console.log('Initial State',store.getState());
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(updatedStreet('456 Main Street'));
unsubscribe();
//log initial state
//subcribe an store
//dispatch an action to update the street
//unsubscribe


//use immer to ease the process of updating the state
//redux with custom functinality
