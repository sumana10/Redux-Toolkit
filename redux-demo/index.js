const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const createLogger = require('redux-logger').createLogger();
// const createLogger = reduxLogger.createLogger();

const bindActionCreators = redux.bindActionCreators;
const combinedReducers = redux.combineReducers

const CAKE_OREDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'


function orderCake(){
    return{
        type: CAKE_OREDERED,
        quantity: 1,
    }
}
function restockCake(qty = 1){
    return{
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}
function orderIcecream(qty = 1){
    return{
        type: ICECREAM_ORDERED,
        payload: qty,
    }
}
function restockIceCream(qty = 1){
    return{
        type: ICECREAM_RESTOCKED,
        payload: qty,
    }
}
//Action is an object with type property
//Action Creator is an function which return an action/object
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCream: 20
// }
const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCream: 20
}

const cakeReducer = (state = initialCakeState, action)=>{

    switch(action.type){
        case CAKE_OREDERED:
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state
    }

}
const iceCreamReducer = (state = initialIceCreamState, action)=>{

    switch(action.type){
            case ICECREAM_ORDERED:
                return{
                    ...state,
                    numOfIceCream: state.numOfIceCream - 1
                }
            case ICECREAM_RESTOCKED:
                return{
                    ...state,
                    numOfIceCream: state.numOfIceCream + action.payload
                }
            case CAKE_OREDERED:
                    return{
                        ...state,
                        numOfIceCream: state.numOfIceCream - 1
                    }
                
        default:
            return state
    }

}
const rootReducer = combinedReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer);
//get current state
console.log('initial state', store.getState());
//log updated state
const unsubscribe = store.subscribe(()=>{
    console.log('updated state', store.getState())
});
// console.log('updated state', store.getState())

//

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(5));

const actions = bindActionCreators({orderCake, restockCake, orderIcecream, restockIceCream}, store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.orderIcecream()
actions.restockIceCream()

unsubscribe()
